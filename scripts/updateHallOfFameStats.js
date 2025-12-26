const fs = require('fs').promises;
const path = require('path');

// Configuration
const CONFIG = {
    leetcodeUsername: 'VSPRIME',
    codechefUsername: 'vsprime',
    dataFilePath: path.join(__dirname, '../data/hallOfFameData.json'),
    timeout: 15000, // 15 seconds
};

/**
 * Fetch LeetCode stats and badges using their GraphQL API
 */
async function fetchLeetCodeStats() {
    try {
        console.log(`Fetching LeetCode stats for ${CONFIG.leetcodeUsername}...`);

        const query = `
      query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile {
            ranking
          }
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
          badges {
            id
            name
            shortName
            displayName
            icon
            hoverText
            creationDate
            category
          }
        }
        userContestRanking(username: $username) {
          rating
          topPercentage
        }
      }
    `;

        const response = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Referer': 'https://leetcode.com',
                'User-Agent': 'Mozilla/5.0'
            },
            body: JSON.stringify({
                query,
                variables: { username: CONFIG.leetcodeUsername }
            }),
            signal: AbortSignal.timeout(CONFIG.timeout)
        });

        if (!response.ok) {
            throw new Error(`LeetCode API returned ${response.status}`);
        }

        const data = await response.json();

        if (data.errors) {
            throw new Error(`LeetCode GraphQL errors: ${JSON.stringify(data.errors)}`);
        }

        const matchedUser = data.data?.matchedUser;
        const contestRanking = data.data?.userContestRanking;

        if (!matchedUser) {
            throw new Error('LeetCode user not found');
        }

        // Parse submission stats
        const acSubmissions = matchedUser.submitStats?.acSubmissionNum || [];
        const totalSolved = acSubmissions.find(s => s.difficulty === 'All')?.count || 0;
        const easySolved = acSubmissions.find(s => s.difficulty === 'Easy')?.count || 0;
        const mediumSolved = acSubmissions.find(s => s.difficulty === 'Medium')?.count || 0;
        const hardSolved = acSubmissions.find(s => s.difficulty === 'Hard')?.count || 0;

        // Parse badges
        const badges = (matchedUser.badges || []).map(badge => ({
            id: badge.id,
            name: badge.displayName || badge.name,
            shortName: badge.shortName,
            icon: badge.icon,
            category: badge.category || 'achievement',
            creationDate: badge.creationDate
        }));

        const stats = {
            username: CONFIG.leetcodeUsername,
            rating: Math.round(contestRanking?.rating || 0),
            maxRating: Math.round(contestRanking?.rating || 0),
            solved: totalSolved,
            easySolved,
            mediumSolved,
            hardSolved,
            percentile: contestRanking?.topPercentage
                ? `Top ${contestRanking.topPercentage.toFixed(1)}%`
                : 'N/A',
            ranking: matchedUser.profile?.ranking || 0,
            badges
        };

        console.log('✓ LeetCode stats fetched successfully');
        console.log(`  Found ${badges.length} badges`);
        return stats;
    } catch (error) {
        console.error('✗ Failed to fetch LeetCode stats:', error.message);
        return null;
    }
}

/**
 * Fetch CodeChef stats using web scraping
 */
async function fetchCodeChefStats() {
    try {
        console.log(`Fetching CodeChef stats for ${CONFIG.codechefUsername}...`);

        const response = await fetch(
            `https://www.codechef.com/users/${CONFIG.codechefUsername}`,
            {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                },
                signal: AbortSignal.timeout(CONFIG.timeout)
            }
        );

        if (!response.ok) {
            throw new Error(`CodeChef returned ${response.status}`);
        }

        const html = await response.text();

        // Extract rating from <div class="rating-number">1763</div>
        const ratingMatch = html.match(/<div\s+class=["']rating-number["']>(\d+)<\/div>/i);
        const rating = ratingMatch ? parseInt(ratingMatch[1]) : 0;

        // Extract global rank from <strong>6499</strong></a> followed by Global Rank
        const globalRankMatch = html.match(/<strong>(\d+)<\/strong><\/a>\s*Global\s+Rank/i);
        const globalRank = globalRankMatch ? parseInt(globalRankMatch[1]) : 0;

        // Extract country rank from <strong><strong>5555</strong></strong></a> followed by Country Rank
        const countryRankMatch = html.match(/<strong>(\d+)<\/strong>(?:<\/strong>)?<\/a>\s*[^<]*Country\s+Rank/i);
        const countryRank = countryRankMatch ? parseInt(countryRankMatch[1]) : 0;

        // Calculate stars based on rating (based on actual CodeChef rating system)
        // CodeChef star system: 1★ (1400-1599), 2★ (1600-1799), 3★ (1800-1999), 4★ (2000-2199), 5★ (2200-2499), 6★ (2500-2699), 7★ (2700+)
        // However, the actual system uses: 3★ (1600-1800), 4★ (1800-2000), etc.
        let stars = 0;
        if (rating >= 2700) stars = 7;
        else if (rating >= 2500) stars = 6;
        else if (rating >= 2200) stars = 5;
        else if (rating >= 2000) stars = 4;
        else if (rating >= 1600) stars = 3;
        else if (rating >= 1400) stars = 2;
        else if (rating >= 1200) stars = 1;

        const stats = {
            username: CONFIG.codechefUsername,
            stars,
            rating,
            maxRating: rating, // We can't easily get historical max from the page
            globalRank,
            countryRank
        };

        console.log('✓ CodeChef stats fetched successfully');
        console.log(`  Rating: ${rating} (${stars}★)`);
        console.log(`  Global Rank: ${globalRank}`);
        console.log(`  Country Rank: ${countryRank}`);
        return stats;
    } catch (error) {
        console.error('✗ Failed to fetch CodeChef stats:', error.message);
        return null;
    }
}

/**
 * Read existing data file
 */
async function readExistingData() {
    try {
        const content = await fs.readFile(CONFIG.dataFilePath, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.warn('⚠ Could not read existing data, using defaults');
        return {
            leetcode: {
                username: CONFIG.leetcodeUsername,
                rating: 0,
                maxRating: 0,
                solved: 0,
                easySolved: 0,
                mediumSolved: 0,
                hardSolved: 0,
                percentile: 'N/A',
                ranking: 0,
                badges: []
            },
            codechef: {
                username: CONFIG.codechefUsername,
                stars: 0,
                rating: 0,
                maxRating: 0,
                globalRank: 0,
                countryRank: 0
            },
            lastUpdated: new Date().toISOString().split('T')[0]
        };
    }
}

/**
 * Write data to file atomically
 */
async function writeData(data) {
    const tempFile = CONFIG.dataFilePath + '.tmp';

    try {
        // Write to temp file first
        await fs.writeFile(tempFile, JSON.stringify(data, null, 2), 'utf-8');

        // Atomic rename
        await fs.rename(tempFile, CONFIG.dataFilePath);

        console.log('✓ Data written successfully');
    } catch (error) {
        console.error('✗ Failed to write data:', error.message);

        // Clean up temp file if exists
        try {
            await fs.unlink(tempFile);
        } catch { }

        throw error;
    }
}

/**
 * Main update function
 */
async function updateStats() {
    console.log('='.repeat(50));
    console.log('Hall of Fame Stats Update');
    console.log('='.repeat(50));
    console.log(`Started at: ${new Date().toISOString()}`);
    console.log('');

    // Read existing data
    const existingData = await readExistingData();

    // Fetch new stats in parallel
    const [leetcodeStats, codechefStats] = await Promise.all([
        fetchLeetCodeStats(),
        fetchCodeChefStats()
    ]);

    // Prepare updated data (preserve old data on fetch failure)
    const updatedData = {
        leetcode: leetcodeStats || existingData.leetcode,
        codechef: codechefStats || existingData.codechef,
        lastUpdated: new Date().toISOString().split('T')[0]
    };

    // Write to file
    await writeData(updatedData);

    console.log('');
    console.log('='.repeat(50));
    console.log('Update Summary:');
    console.log('='.repeat(50));
    console.log(`LeetCode: ${leetcodeStats ? '✓ Updated' : '✗ Failed (kept old data)'}`);
    console.log(`CodeChef: ${codechefStats ? '✓ Updated' : '✗ Failed (kept old data)'}`);
    console.log('');
    console.log('Current Stats:');
    console.log(`  LeetCode: ${updatedData.leetcode.solved} problems solved`);
    console.log(`  LeetCode Badges: ${(updatedData.leetcode.badges || []).length}`);
    console.log(`  CodeChef: ${updatedData.codechef.rating} rating (${updatedData.codechef.stars}★)`);
    console.log('');
    console.log(`Completed at: ${new Date().toISOString()}`);
    console.log('='.repeat(50));
}

// Run if called directly
if (require.main === module) {
    updateStats()
        .then(() => {
            process.exit(0);
        })
        .catch((error) => {
            console.error('');
            console.error('Fatal error:', error);
            process.exit(1);
        });
}

module.exports = { updateStats };
