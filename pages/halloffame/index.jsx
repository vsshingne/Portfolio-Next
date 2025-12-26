import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Import static data at build time
import statsData from "../../data/hallOfFameData.json";

const HallOfFame = () => {
  const { leetcode, codechef, lastUpdated } = statsData;

  return (
    <div className="min-h-screen bg-primary/30 py-32 !overflow-y-auto absolute inset-0">
      <div className="container mx-auto flex flex-col justify-start pb-16">
        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-4"
        >
          Hall of <span className="text-accent">Fame</span>
        </motion.h2>

        {/* Last Updated */}
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center text-white/60 mb-12"
        >
          Last updated: {lastUpdated}
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* LeetCode Stats */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-[rgba(65,47,123,0.15)] rounded-lg p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">LeetCode</h3>
              <span className="text-accent text-xl">@{leetcode.username}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-black/20 rounded">
                <div className="text-3xl font-bold text-accent">{leetcode.solved}</div>
                <div className="text-sm text-white/70">Problems Solved</div>
              </div>

              <div className="text-center p-4 bg-black/20 rounded">
                <div className="text-3xl font-bold text-accent">{leetcode.rating}</div>
                <div className="text-sm text-white/70">Contest Rating</div>
              </div>

              <div className="text-center p-4 bg-black/20 rounded">
                <div className="text-xl font-bold text-green-400">{leetcode.easySolved}</div>
                <div className="text-xs text-white/70">Easy</div>
              </div>

              <div className="text-center p-4 bg-black/20 rounded">
                <div className="text-xl font-bold text-yellow-400">{leetcode.mediumSolved}</div>
                <div className="text-xs text-white/70">Medium</div>
              </div>

              <div className="text-center p-4 bg-black/20 rounded">
                <div className="text-xl font-bold text-red-400">{leetcode.hardSolved}</div>
                <div className="text-xs text-white/70">Hard</div>
              </div>

              <div className="text-center p-4 bg-black/20 rounded">
                <div className="text-xl font-bold text-purple-400">{leetcode.percentile}</div>
                <div className="text-xs text-white/70">Percentile</div>
              </div>
            </div>
          </motion.div>

          {/* CodeChef Stats */}
          {codechef && (
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-[rgba(65,47,123,0.15)] rounded-lg p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">CodeChef</h3>
                <span className="text-accent text-xl">@{codechef.username}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-black/20 rounded">
                  <div className="text-3xl font-bold text-accent">{codechef.stars}★</div>
                  <div className="text-sm text-white/70">Stars</div>
                </div>

                <div className="text-center p-4 bg-black/20 rounded">
                  <div className="text-3xl font-bold text-accent">{codechef.rating}</div>
                  <div className="text-sm text-white/70">Current Rating</div>
                </div>

                <div className="text-center p-4 bg-black/20 rounded">
                  <div className="text-xl font-bold text-purple-400">{codechef.maxRating}</div>
                  <div className="text-xs text-white/70">Max Rating</div>
                </div>

                <div className="text-center p-4 bg-black/20 rounded">
                  <div className="text-xl font-bold text-blue-400">{codechef.globalRank || 'N/A'}</div>
                  <div className="text-xs text-white/70">Global Rank</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* LeetCode Badges Section */}
        {leetcode.badges && leetcode.badges.length > 0 && (
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-[rgba(65,47,123,0.15)] rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              LeetCode <span className="text-accent">Badges</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {leetcode.badges.map((badge) => (
                <div
                  key={badge.id}
                  className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-all duration-300 group"
                  title={badge.name}
                >
                  {/* Badge Icon */}
                  {badge.icon ? (
                    <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center relative">
                      <img
                        src={badge.icon.startsWith('http') ? badge.icon : `https://leetcode.com${badge.icon}`}
                        alt={badge.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-accent to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-3xl">🏆</span>
                    </div>
                  )}

                  <div className="text-sm font-semibold text-white mb-1 line-clamp-2">
                    {badge.name}
                  </div>
                  {badge.category && (
                    <div className="text-xs text-white/60 capitalize">{badge.category}</div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HallOfFame;
