// import Link from 'next/link';
// import styles from './about-us.module.css';

// export default function AboutUs() {
//   return (
//     <div className={styles.heroBg}>
//       <div className={styles.card}>
//         <Link href="/">
//           <div className={styles.logoCircle} tabIndex={0}>
//             <img src="/logo.svg" alt="AI Trip Planner" className={styles.logo} />
//           </div>
//         </Link>
//         <h1 className={styles.title}>Meet AI Trip Planner</h1>
//         <p className={styles.intro}>
//           <span role="img" aria-label="sparkle">✨</span>
//           Your smart travel companion powered by AI! <span role="img" aria-label="plane">🛫</span>
//         </p>
//         <div className={styles.grid}>
//           <div className={styles.feature}>
//             <span className={styles.featureIcon} role="img" aria-label="magic wand">🪄</span>
//             <h2>Effortless Itineraries</h2>
//             <p>Get personalized plans with a single click—no stress, just destinations.</p>
//           </div>
//           <div className={styles.feature}>
//             <span className={styles.featureIcon} role="img" aria-label="location">📍</span>
//             <h2>Local Insights</h2>
//             <p>Discover hidden gems curated by AI and fellow travelers.</p>
//           </div>
//           <div className={styles.feature}>
//             <span className={styles.featureIcon} role="img" aria-label="handshake">🤝</span>
//             <h2>Human Touch</h2>
//             <p>Built by wanderers for wanderers, we care about your journey!</p>
//           </div>
//         </div>
//         <p className={styles.footer}>
//           Adventure awaits. Thank you for choosing us! <span role="img" aria-label="mountain">🏔️</span>
//         </p>
//       </div>
//     </div>
//   );
// }



"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-orange-100 px-4 py-10">

      {/* Card */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 max-w-2xl w-full text-center animate-fadeIn">

        {/* Logo */}
        <Link href="/">
          <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-primary to-blue-400 hover:scale-110 transition cursor-pointer shadow-lg">
            <Image src="/logo.svg" alt="logo" width={36} height={36} />
          </div>
        </Link>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
          Meet AI Trip Planner
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          ✨ Your smart travel companion powered by AI! 🛫
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">

          <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">🪄</div>
            <h2 className="font-semibold text-primary text-sm sm:text-base">
              Effortless Itineraries
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Get personalized plans with a single click.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">📍</div>
            <h2 className="font-semibold text-primary text-sm sm:text-base">
              Local Insights
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Discover hidden gems curated by AI.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">🤝</div>
            <h2 className="font-semibold text-primary text-sm sm:text-base">
              Human Touch
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Built by travelers for travelers.
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="text-green-600 text-sm sm:text-base font-medium">
          Adventure awaits. Thank you for choosing us! 🏔️
        </p>

      </div>

    </div>
  );
}
