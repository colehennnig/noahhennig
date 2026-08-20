import { HiExternalLink } from "react-icons/hi";
import { getCMSData } from "@/lib/cms";

export default async function Experience() {
  const data = await getCMSData();
  const experience = data.sections.experience

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 pt-28 md:pt-36 pb-16 md:pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-3 md:mb-4">
            {experience.intro.experience_intro.title}
          </h1>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
            {experience.intro.experience_intro.body}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {data.experience.map((club, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-zinc-800 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-all hover:-translate-y-1 md:first:col-span-2"
            >
              {/* Club Image */}
              <div className="relative w-full h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={club.image_url}
                  alt={club.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Club Details */}
              <div className="p-6 flex flex-col h-full">
                <div className="mb-3">
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-1">
                    {club.name}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {club.location}
                  </p>
                </div>

                <div className="mb-3">
                  <p className="text-lg font-medium text-zinc-900 dark:text-white">
                    {club.role}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {club.start_date + (club.end_date ? ' - ' + club.end_date : '')}
                  </p>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  {club.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {club.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={highlightIndex}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="absolute right-2 bottom-2">
                  <a
                    href={club.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
                  >
                    Visit Club
                    <HiExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
