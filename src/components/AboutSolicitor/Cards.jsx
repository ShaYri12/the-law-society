import React from "react";
import { Link } from "react-router-dom";

const cardsData = [
  {
    image: "/assets/search.jpg",
    alt: "Person typing on keyboard",
    title: "Search",
    description:
      "Use 'quick search' to find the nearest legal adviser who can help you with your legal issue. Just choose a legal issue from the list and enter your location (postcode, town or city).",
  },
  {
    image: "/assets/need-help.jpg",
    alt: "Person typing on keyboard",
    title: "Need help?",
    description: (
      <>
        If you need more help using this website,{" "}
        <Link to="#" className="text-[#574840] underline">
          check our online help section
        </Link>
        ,{" "}
        <Link to="#" className="text-[#574840] underline">
          complete our enquiry form
        </Link>{" "}
        or call 020 7320 5650. Our Support Centre is open from 9am to 5pm on
        Monday to Friday. Calls are charged at local call rates.
      </>
    ),
  },
  {
    image: "/assets/search.jpg",
    alt: "Person typing on keyboard",
    title: "Legal advice",
    description: (
      <>
        The Law Society does not provide legal advice. Please{" "}
        <Link to="#" className="text-[#574840] underline">
          read our guides to common legal issues
        </Link>{" "}
        for information about getting advice from a solicitor.
      </>
    ),
  },
];

const Cards = () => {
  return (
    <div className="mb-[60px]">
      <h2 className="text-[31px] font-tinos leading-[1em] my-[0.5em] font-bold">
        <span>Using Find a Solicitor</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-[30px] md:gap-[20px] lg:gap-[30px]">
        {cardsData.map((card, index) => (
          <div key={index}>
            <div className="h-[200px]">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-[24px] my-[0.2em] font-tinos font-bold leading-[1.5em]">
              {card.title}
            </h4>
            <p className="mb-[20px]">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
