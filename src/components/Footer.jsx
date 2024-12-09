import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-[1200px] container mx-auto px-4 md:px-[28px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Find a Solicitor Column */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Find a Solicitor</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:underline">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/shortlist" className="hover:underline">
                  Shortlist
                </Link>
              </li>
            </ul>
          </div>

          {/* More from Law Society Column */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              More from the Law Society
            </h2>
            <ul className="space-y-3">
              <li>
                <Link href="/law-society" className="hover:underline">
                  The Law Society
                </Link>
              </li>
              <li>
                <Link href="/gazette-jobs" className="hover:underline">
                  Gazette Jobs
                </Link>
              </li>
              <li>
                <Link href="/gazette" className="hover:underline">
                  The Gazette
                </Link>
              </li>
              <li>
                <Link href="/learning" className="hover:underline">
                  Law Society Learning
                </Link>
              </li>
              <li>
                <Link href="/sections" className="hover:underline">
                  Law Society Sections
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links Column */}
          <div>
            <h2 className="text-2xl font-bold mb-6">&nbsp;</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/bookshop" className="hover:underline">
                  Bookshop
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/library" className="hover:underline">
                  Library search
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:underline">
                  Insights
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1200px] container mx-auto px-4 md:px-[28px] py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            ©{currentYear} Law Society. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/cookies" className="hover:underline">
              Cookies
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy policy
            </Link>
            <Link href="/accessibility" className="hover:underline">
              Accessibility
            </Link>
            <Link href="/legal" className="hover:underline">
              Legal notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
