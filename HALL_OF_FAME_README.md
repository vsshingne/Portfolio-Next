# Hall of Fame Auto-Update System

> **Codolio-style build-time competitive programming stats system**

This system automatically updates LeetCode and CodeChef statistics using GitHub Actions without runtime API calls.

## 🏗️ Architecture

```
GitHub Action (Daily Cron)
  ↓
Node.js Script Fetches Stats
  ↓
Updates hallOfFameData.json
  ↓
Auto-Commit Changes
  ↓
Vercel Auto-Deploy
  ↓
Static Site Updated ✨
```

## 📁 File Structure

```
modern-portfolio/
├── .github/workflows/
│   └── update-hall-of-fame.yml    # Daily auto-update workflow
├── data/
│   ├── hallOfFameData.json        # Stats data (auto-updated)
│   └── badges.json                # Manual badges list
├── scripts/
│   └── updateHallOfFameStats.js   # Stats fetching script
├── public/badges/                  # Badge images (manual)
└── pages/testimonials/index.jsx   # Hall of Fame page
```

## 🚀 How It Works

### 1. **Automatic Updates**
- GitHub Action runs **daily at 00:00 UTC**
- Fetches latest stats from LeetCode & CodeChef
- Updates `hallOfFameData.json` if data changed
- Commits and pushes changes
- Vercel automatically redeploys

### 2. **Manual Updates**
You can trigger updates manually:
```bash
node scripts/updateHallOfFameStats.js
```

Or via GitHub Actions:
- Go to Actions → "Update Hall of Fame Stats" → Run workflow

### 3. **Build-Time Loading**
The Hall of Fame page imports stats at build time:
```javascript
import statsData from "../../data/hallOfFameData.json";
```
**No runtime API calls = Fast, reliable, SEO-friendly**

## 📊 Current Stats

**LeetCode (@VSPRIME)**
- ✅ 683 problems solved
- ✅ 1819 contest rating
- ✅ Top 6.9% percentile

**CodeChef (@vsprime)**  
- ⚠️ API currently returning 402 (payment required)
- Using fallback data preservation

## 🔧 Configuration

### Update Usernames
Edit `/scripts/updateHallOfFameStats.js`:
```javascript
const CONFIG = {
  leetcodeUsername: 'VSPRIME',
  codechefUsername: 'vsprime',
  // ...
};
```

### Change Update Frequency
Edit `/.github/workflows/update-hall-of-fame.yml`:
```yaml
schedule:
  - cron: '0 0 * * *'  # Daily at midnight UTC
  # Examples:
  # '0 */6 * * *'      # Every 6 hours
  # '0 0 * * 0'        # Weekly on Sunday
```

### Add More Badges
Edit `/data/badges.json`:
```json
{
  "id": "unique-id",
  "name": "Badge Name",
  "description": "Achievement description",
  "platform": "Platform",
  "imagePath": "/badges/filename.png",
  "dateEarned": "YYYY-MM-DD"
}
```

## 🎯 Benefits vs Client-Side Fetching

| Feature | Build-Time (This) | Runtime Client-Side |
|---------|-------------------|---------------------|
| **Speed** | ⚡ Instant | 🐌 Wait for API |
| **Reliability** | ✅ Always works | ❌ Breaks if API down |
| **SEO** | ✅ Crawlable | ❌ Hidden from bots |
| **Rate Limits** | ✅ 1 req/day | ❌ Every visitor |
| **Privacy** | ✅ No tracking | ❌ Exposes user IPs |

## 🔒 Security & Reliability

- **No credentials in repo** - Uses public APIs only
- **Graceful degradation** - Preserves old data on fetch failure
- **Atomic writes** - No file corruption
- **Skip empty commits** - Only commits when data changes
- **Timeout protection** - 10-second max per API call

## 🐛 Troubleshooting

### Script fails to fetch data
Check the logs:
```bash
node scripts/updateHallOfFameStats.js
```

### GitHub Action not committing
- Ensure repository has Actions write permissions
- Check workflow logs in GitHub Actions tab

### CodeChef API issues
The free CodeChef API sometimes requires payment. The script will:
1. Try to fetch new data
2. On failure, keep old data
3. Still updates `lastUpdated` timestamp

### Page not updating after deployment
- Clear browser cache
- Verify JSON file updated in repo
- Check Vercel deployment logs

## 🎨 Customization

### Styling
Hall of Fame page uses Tailwind CSS. Edit:
`/pages/testimonials/index.jsx`

### Add More Platforms
Edit `/scripts/updateHallOfFameStats.js`:
```javascript
async function fetchCodeforces() {
  // Add implementation
}

// Update main function
const [leetcode, codechef, codeforces] = await Promise.all([
  fetchLeetCodeStats(),
  fetchCodeChefStats(),
  fetchCodeforces()
]);
```

## 📝 License

Same as main project (MIT)

## 🙏 Acknowledgments

Inspired by [Codolio](https://codolio.com) - Professional competitive programming portfolio platform
