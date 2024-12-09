import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-6">Using Find a Solicitor</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Search Column */}
        <div>
          <img
            src="/placeholder.svg"
            alt="Person typing on keyboard"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Search</h3>
          <p className="text-sm">
            Use 'quick search' to find the nearest legal adviser who can help
            you with your legal issue. Just choose a legal issue from the list
            and enter your location (postcode, town or city).
          </p>
        </div>
        {/* Need help? Column */}
        <div>
          <img
            src="/placeholder.svg"
            alt="People in discussion"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Need help?</h3>
          <p className="text-sm">
            If you need more help using this website,{" "}
            <Link to="#" className="text-[#005177] hover:underline">
              check our online help section
            </Link>
            ,{" "}
            <Link to="#" className="text-[#005177] hover:underline">
              complete our enquiry form
            </Link>{" "}
            or call 020 7320 5650. Our Support Centre is open from 9am to 5pm on
            Monday to Friday. Calls are charged at local call rates.
          </p>
        </div>
        {/* Legal advice Column */}
        <div>
          <img
            src="/placeholder.svg"
            alt="Group in discussion"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Legal advice</h3>
          <p className="text-sm">
            The Law Society does not provide legal advice. Please{" "}
            <Link to="#" className="text-[#005177] hover:underline">
              read our guides to common legal issues
            </Link>{" "}
            for information about getting advice from a solicitor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
