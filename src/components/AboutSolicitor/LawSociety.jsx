import { FaPhone } from "react-icons/fa";

export default function LawSociety() {
  return (
    <div className="py-12 space-y-16">
      {/* Quality Marks Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="w-full aspect-square bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Image Placeholder</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
            Look for Law Society quality marks
          </h1>
          <p className="text-gray-600 text-lg">
            Organisations and individuals can be awarded a voluntary
            accreditation (quality mark) by the Law Society for different areas
            of law.
          </p>
        </div>
      </div>

      {/* Member Support Section */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">Law Society member support</h2>
        <p className="text-gray-600">
          If you need to amend any information about you on Find a Solicitor or
          wish to give other feedback about the website, please call{" "}
          <a
            href="tel:02073205757"
            className="text-blue-600 hover:underline inline-flex items-center"
          >
            <FaPhone className="mr-1" />
            020 7320 5757
          </a>{" "}
          from 9am to 5pm, Monday to Friday (charged at local call rates) or{" "}
          <a href="#" className="text-blue-600 hover:underline">
            contact us using this form
          </a>{" "}
          by selecting 'Find a Solicitor' under 'Question'
        </p>
      </div>
    </div>
  );
}
