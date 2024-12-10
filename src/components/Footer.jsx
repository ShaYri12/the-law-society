import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-[#FCFAF4] px-[20px] py-[56px] border-t border-[#D6C679] mt-[30px]">
        <div className="flex md:flex-row flex-col gap-[30px] sm:gap-[60px] lg:gap-[170px] max-w-[1200px] mx-auto px-[10px] md:px-[28px]">
          {/* Find a Solicitor Column */}
          <div>
            <h2 className="text-[27px] font-tinos font-bold leading-[1em] mt-[0.5em] mb-[20px]">
              Find a Solicitor
            </h2>
            <ul className="space-y-[20px] text-[18px] text-[#574840] leading-[1.5em]">
              <li>
                <Link href="/" className="underline hover:no-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="underline hover:no-underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/help" className="underline hover:no-underline">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/contact" className="underline hover:no-underline">
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/shortlist"
                  className="underline hover:no-underline"
                >
                  Shortlist
                </Link>
              </li>
            </ul>
          </div>

          {/* More from Law Society Column */}
          <div>
            <h2 className="text-[27px] font-tinos font-bold leading-[1em] mt-[0.5em] mb-[20px]">
              More from the Law Society
            </h2>
            <div className="flex sm:flex-row flex-col gap-[20px] sm:gap-[30px] sm:gap-[60px] lg:gap-[170px]">
              <ul className="space-y-[20px] text-[18px] text-[#574840] leading-[1.5em]">
                <li>
                  <Link
                    href="/law-society"
                    className="underline hover:no-underline"
                  >
                    The Law Society
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gazette-jobs"
                    className="underline hover:no-underline"
                  >
                    Gazette Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gazette"
                    className="underline hover:no-underline"
                  >
                    The Gazette
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learning"
                    className="underline hover:no-underline"
                  >
                    Law Society Learning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sections"
                    className="underline hover:no-underline"
                  >
                    Law Society Sections
                  </Link>
                </li>
              </ul>
              <ul className="space-y-[20px] text-[18px] text-[#574840] leading-[1.5em]">
                <li>
                  <Link
                    href="/bookshop"
                    className="underline hover:no-underline"
                  >
                    Bookshop
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="underline hover:no-underline">
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/library"
                    className="underline hover:no-underline"
                  >
                    Library search
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="underline hover:no-underline"
                  >
                    Insights
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white px-5 md:px-[28px] py-[10px]">
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-[12px]">
          <p className="text-[15px] leading-[1.5em] rights-reserved-text">
            ©{currentYear} Law Society. All rights reserved.
          </p>
          <div className="flex gap-[30px] text-[15px] leading-[1.5em] footer-rights-links">
            <Link href="/cookies" className="underline hover:no-underline">
              Cookies
            </Link>
            <Link href="/privacy" className="underline hover:no-underline">
              Privacy policy
            </Link>
            <Link
              href="/accessibility"
              className="underline hover:no-underline"
            >
              Accessibility
            </Link>
            <Link href="/legal" className="underline hover:no-underline">
              Legal notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
