import Link from "next/link";
import { getCMSData } from "@/lib/cms";

export default async function Footer() {
  const data = await getCMSData();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-3">
              {data.site.footer_title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              {data.site.footer_description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm transition-colors"
                >
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">
              Contact
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  href={data.contact[0].url}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm transition-colors"
                >
                  {data.contact[0].value}
                </a>
              </li>
              <li>
                <a
                  href={data.contact[1].url}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm transition-colors"
                >
                  {data.contact[1].value}
                </a>
              </li>
              <li>
                <span className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {data.contact[2].value}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-center text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
            © {currentYear} Noah Hennig. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
