import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState, useEffect } from "react";

// Import static data at build time
import statsData from "../../data/hallOfFameData.json";

const HallOfFame = () => {
  const { leetcode, codechef, lastUpdated } = statsData;


  return (
    <div className="min-h-screen overflow-y-auto relative">
      <div className="container mx-auto flex flex-col justify-start pt-32 pb-16 relative z-10">
        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-6xl md:text-7xl font-extrabold text-center mb-4 relative"
        >
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
            Hall of Fame
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn("up", 0.25)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center text-amber-200/80 text-lg mb-2 font-semibold tracking-wide"
        >
          ✨ Legendary Achievements ✨
        </motion.p>

        {/* Last Updated */}
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center text-slate-300/60 mb-12 text-sm"
        >
          🕐 Last updated: <span className="text-amber-400">{lastUpdated}</span>
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* LeetCode Stats */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="group relative"
          >
            {/* Glowing border effect */}

            <div className="relative backdrop-blur-xl rounded-2xl p-8 border border-amber-500/30 shadow-2xl shadow-amber-500/20">
              {/* Corner decorations */}

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">
                    LeetCode
                  </h3>
                </div>
                <span className="text-amber-400 text-xl font-semibold px-4 py-1 bg-amber-500/10 rounded-full border border-amber-400/30">
                  @{leetcode.username}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-5 bg-gradient-to-br from-amber-500/12 to-yellow-600/6 rounded-xl border border-amber-400/30 shadow-lg shadow-amber-500/10 backdrop-blur-sm group/stat"
                >
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
                    {leetcode.solved}
                  </div>
                  <div className="text-sm text-amber-200/80 font-semibold mt-1">Problems Solved</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-5 bg-gradient-to-br from-purple-500/12 to-pink-600/6 rounded-xl border border-purple-400/30 shadow-lg shadow-purple-500/10 backdrop-blur-sm"
                >
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                    {leetcode.rating}
                  </div>
                  <div className="text-sm text-purple-200/80 font-semibold mt-1">Contest Rating</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-gradient-to-br from-emerald-500/12 to-green-600/6 rounded-xl border border-emerald-400/30 shadow-lg"
                >
                  <div className="text-2xl font-bold text-emerald-400 drop-shadow-lg">
                    {leetcode.easySolved}
                  </div>
                  <div className="text-xs text-emerald-200/70 font-semibold">Easy</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-gradient-to-br from-yellow-500/12 to-orange-600/6 rounded-xl border border-yellow-400/30 shadow-lg"
                >
                  <div className="text-2xl font-bold text-yellow-400 drop-shadow-lg">
                    {leetcode.mediumSolved}
                  </div>
                  <div className="text-xs text-yellow-200/70 font-semibold">Medium</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-gradient-to-br from-red-500/12 to-rose-600/6 rounded-xl border border-red-400/30 shadow-lg"
                >
                  <div className="text-2xl font-bold text-red-400 drop-shadow-lg">
                    {leetcode.hardSolved}
                  </div>
                  <div className="text-xs text-red-200/70 font-semibold">Hard</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-gradient-to-br from-violet-500/12 to-purple-600/6 rounded-xl border border-violet-400/30 shadow-lg"
                >
                  <div className="text-2xl font-bold text-violet-400 drop-shadow-lg">
                    {leetcode.percentile}
                  </div>
                  <div className="text-xs text-violet-200/70 font-semibold">Percentile</div>
                </motion.div>
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
              className="group relative"
            >
              {/* Glowing border effect */}

              <div className="relative backdrop-blur-xl rounded-2xl p-8 border border-orange-500/30 shadow-2xl shadow-orange-500/20">
                {/* Corner decorations */}

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-200 to-red-400 bg-clip-text text-transparent">
                      CodeChef
                    </h3>
                  </div>
                  <span className="text-orange-400 text-xl font-semibold px-4 py-1 bg-orange-500/10 rounded-full border border-orange-400/30">
                    @{codechef.username}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-5 bg-gradient-to-br from-orange-500/12 to-red-600/6 rounded-xl border border-orange-400/30 shadow-lg shadow-orange-500/10"
                  >
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-orange-300 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                      {codechef.stars}★
                    </div>
                    <div className="text-sm text-orange-200/80 font-semibold mt-1">Stars</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-5 bg-gradient-to-br from-amber-500/12 to-orange-600/6 rounded-xl border border-amber-400/30 shadow-lg shadow-amber-500/10"
                  >
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
                      {codechef.rating}
                    </div>
                    <div className="text-sm text-amber-200/80 font-semibold mt-1">Current Rating</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 bg-gradient-to-br from-purple-500/12 to-violet-600/6 rounded-xl border border-purple-400/30 shadow-lg"
                  >
                    <div className="text-2xl font-bold text-purple-400 drop-shadow-lg">
                      {codechef.maxRating}
                    </div>
                    <div className="text-xs text-purple-200/70 font-semibold">Max Rating</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 bg-gradient-to-br from-cyan-500/12 to-blue-600/6 rounded-xl border border-cyan-400/30 shadow-lg"
                  >
                    <div className="text-2xl font-bold text-cyan-400 drop-shadow-lg">
                      {codechef.globalRank || 'N/A'}
                    </div>
                    <div className="text-xs text-cyan-200/70 font-semibold">Global Rank</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 bg-gradient-to-br from-pink-500/12 to-rose-600/6 rounded-xl border border-pink-400/30 shadow-lg"
                  >
                    <div className="text-2xl font-bold text-pink-400 drop-shadow-lg">
                      {codechef.countryRank || 'N/A'}
                    </div>
                    <div className="text-xs text-pink-200/70 font-semibold">Country Rank</div>
                  </motion.div>
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
            className="group relative"
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 backdrop-blur-xl rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
              <h3 className="text-4xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-purple-200 via-pink-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                  Badges
                </span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {leetcode.badges.map((badge, index) => (
                  <motion.div
                    key={badge.id}
                    variants={fadeIn("up", 0.6 + index * 0.05)}
                    initial="hidden"
                    animate="show"
                    whileHover={{ scale: 1.1, y: -10 }}
                    className="relative group/badge"
                    title={badge.name}
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-xl blur opacity-0 group-hover/badge:opacity-40 transition duration-300"></div>

                    <div className="relative bg-gradient-to-br from-slate-700/60 to-slate-800/60 backdrop-blur-sm rounded-xl p-5 text-center border border-purple-400/20 shadow-xl hover:border-yellow-400/50 transition-all duration-300">
                      {/* Badge Icon */}
                      {badge.icon ? (
                        <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-500/20 rounded-full blur-md group-hover/badge:blur-lg transition-all"></div>
                          <img
                            src={badge.icon.startsWith('http') ? badge.icon : `https://leetcode.com${badge.icon}`}
                            alt={badge.name}
                            className="relative w-full h-full object-contain group-hover/badge:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 rounded-full flex items-center justify-center group-hover/badge:scale-110 transition-transform shadow-lg shadow-yellow-500/50">
                          <span className="text-4xl drop-shadow-lg">🏆</span>
                        </div>
                      )}

                      <div className="text-sm font-bold text-amber-100 mb-1 line-clamp-2 drop-shadow-md">
                        {badge.name}
                      </div>
                      {badge.category && (
                        <div className="text-xs text-purple-300/70 capitalize font-semibold">
                          {badge.category}
                        </div>
                      )}

                      {/* Sparkle effect on hover */}
                      <div className="absolute top-2 right-2 text-yellow-400 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300">
                        ✨
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HallOfFame;
