import Link from "next/link";
import { getCMSData } from "@/lib/cms";

export default async function Home() {
  const data = await getCMSData();
  const home = data.sections.home;

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 px-4 md:px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 md:bg-size-[130vw] bg-cover md:bg-position-[left_top_-30vh] bg-no-repeat"
          style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/007/008/741/large_2x/close-up-golf-club-and-golf-ball-on-green-grass-with-sunrise-background-free-photo.jpg)' }}
        >
          <div className="absolute inset-0 bg-white/60 dark:bg-zinc-900/80"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-4 md:mb-6">
              {home.hero.home_hero.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-6 md:mb-8 leading-relaxed">
              {home.hero.home_hero.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/experience"
                className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-center"
              >
                View Experience
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-zinc-300 bg-zinc-50/80 dark:bg-zinc-800/80 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-center"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-zinc-50 dark:bg-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-8 md:mb-12">
            {home.highlights.home_highlights.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Expertise Card 1 */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Golf Instruction
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Personalized coaching for players of all skill levels, from beginners to competitive golfers.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-full">
                  PGA Member
                </span>
              </div>
            </div>

            {/* Expertise Card 2 */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Club Operations
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Expert management of golf shop operations, merchandising, and member services.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-full">
                  Leadership
                </span>
              </div>
            </div>

            {/* Expertise Card 3 */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Player Development
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Comprehensive programs focused on improving technique, strategy, and mental game.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-full">
                  Coaching
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
