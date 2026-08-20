import { HiMail, HiPhone } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { getCMSData } from "@/lib/cms";

export default async function About() {
  const data = await getCMSData();
  const about = data.sections.about;

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 pt-28 md:pt-36 pb-16 md:pb-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* About Section */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 md:mb-6">
            {about.intro.about_intro.title}
          </h1>
          <div className="prose prose-lg dark:prose-invert">
            {about.intro.about_intro.body.split("\\n").map((p: string, index: number) => (
              <p key={index} className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6 md:mb-8">
            {about.expertise.about_expertise.title}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {data.expertise.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6 border border-zinc-200 dark:border-zinc-700"
              >
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-zinc-600 dark:text-zinc-400 flex items-center"
                    >
                      <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-8 border border-zinc-200 dark:border-zinc-700">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            {about.contact.about_contact.title}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            {about.contact.about_contact.body}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:noah.hennig@pga.com"
              className="flex items-center gap-2 px-5 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              <HiMail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="tel:909-519-6132"
              className="flex items-center gap-2 px-5 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            >
              <HiPhone className="w-5 h-5" />
              (909) 519-6132
            </a>
            <a
              // href="https://www.linkedin.com/in/noah-hennig-pga-9ba814137/"
              href={data.socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
