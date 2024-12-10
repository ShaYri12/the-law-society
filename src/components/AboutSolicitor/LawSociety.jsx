import { FaPhone } from "react-icons/fa";

export default function LawSociety() {
  return (
    <section className="space-y-[60px]">
      {/* Quality Marks Section */}
      <div className="grid md:grid-cols-2 gap-[40px] items-center bg-[#F2F6F8] py-[30px] md:px-[30px] px-5">
        <div className="md:order-1 order-2 accredited w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6 items-center justify-center gap-[10px]">
          <span>
            <img src="/assets/accredited1.png" alt="accredited1" />
          </span>
          <span>
            <img src="/assets/accredited2.png" alt="accredited2" />
          </span>
          <span>
            <img src="/assets/accredited3.png" alt="accredited3" />
          </span>
          <span>
            <img src="/assets/accredited4.png" alt="accredited4" />
          </span>
          <span>
            <img src="/assets/accredited5.png" alt="accredited5" />
          </span>
          <span>
            <img src="/assets/accredited6.png" alt="accredited6" />
          </span>
          <span>
            <img src="/assets/accredited7.png" alt="accredited7" />
          </span>
          <span>
            <img src="/assets/accredited8.png" alt="accredited8" />
          </span>
          <span>
            <img src="/assets/accredited9.png" alt="accredited9" />
          </span>
          <span>
            <img src="/assets/accredited10.png" alt="accredited1" />
          </span>
          <span>
            <img src="/assets/accredited11.png" alt="accredited1" />
          </span>
          <span>
            <img src="/assets/accredited12.png" alt="accredited1" />
          </span>
        </div>
        <div className="space-y-4 md:order-2 order-1">
          <h1 className="heading">Look for Law Society quality marks</h1>
          <p className="para">
            Organisations and individuals can be awarded a voluntary
            accreditation (quality mark) by the Law Society for different areas
            of law.
          </p>
        </div>
      </div>

      {/* Member Support Section */}
      <div className="">
        <h2 className="heading">Law Society member support</h2>
        <p className="para">
          If you need to amend any information about you on Find a Solicitor or
          wish to give other feedback about the website, please call{" "}
          <a href="tel:02073205757" className="text-[#574840] underline">
            020 7320 5757
          </a>{" "}
          from 9am to 5pm, Monday to Friday (charged at local call rates) or{" "}
          <a href="#" className="text-[#574840] underline ">
            contact us using this form
          </a>{" "}
          by selecting 'Find a Solicitor' under 'Question'
        </p>
      </div>
    </section>
  );
}
