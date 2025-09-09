import React from "react";
import "./Home.css";
import logo from "../../assets/images/logo.png";
import foundation from "../../assets/images/Foundation_Scotland.jpg";
import NHS from "../../assets/images/NHS.png";
import { useNavigate } from "react-router-dom";

const content = [
  {
    id: 1,
    title: "Argyll Community Counselling Service",
    description:
      "believes that counselling should be accessible and affordable to everyone who needs it.",
    backText: [
      "Good quality counselling can make a positive difference to peoples lives in the following way:",
      "Social connections",
      "Positive wellbeing",
      "Stronger families",
      "Stronger communities",
      "Ability to access opportunities.",
    ],
    image: foundation,
    link: "/about",
  },
  {
    id: 2,
    title: "Meet our Team",
    description: "Support for anyone facing challenges in life.",
    backText: " ",
    image: logo,
    link: "/team",
  },
  {
    id: 3,
    title: "Getting help from us",
    description:
      "We accept self referrals and referrals from NHS staff and other care agencies. ",
    backText: [
      "Follow the link to our referral form.",
      "Complete it and send to:",
      "admin@argyllcommunitycounselling.org.uk",
      "Or phone 07872387007",
      "and Julie will talk you through the referral form over the phone.",
      "Generally, 8 sessions of counselling will be provided to each person.",
    ],
    link: "/getting-help",
  },
  {
    id: 4,
    title: "Some useful article about mental health",
    description: "Focused sessions on specific topics.",
    backText: "",
    link: "/blog",
  },
  {
    id: 5,
    title: "Other help and support available",
    description: " NHS, MIND, Samaritans, Breathing Space",
    backText: "Link to NHS, Link to MIND, Link to Samaritans, Link to Breathing Space",
    image: NHS,
    link: "https://www.nhs.uk",
  },
  {
    id: 6,
    title: "Making a donation",
    description:
      "All donations we receive are used to provide more counselling to more people.",
    backText: [
      "There are a number of ways you can donate:",
      "Follow the link provided and donate on line",
      "Through contact with you counsellor",
      "Via emailing admin@argyllcommunitycounselling.org.uk",
      "Or phone 07872387007",
    ],
    link: "/donate",
  },
];

const Home = () => {

 const navigate = useNavigate();

  return (
    <div className="home-main-container">
      <div className="home-cards-grid">
        {content.map((item) => (
          <div className="home-flip-card" key={item.id}>
            <div className="home-flip-card-inner">
              <div className="home-flip-card-front">
                <h3 className="home-flip-card-header">{item.title}</h3>
                <p className="home-flip-card-text">{item.description}</p>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="home-card-image"
                  />
                )}
              </div>
              <div className="home-flip-card-back">
                <ul className="home-card-list">
                  {Array.isArray(item.backText) ? (
                    item.backText.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))
                  ) : (
                    <p>{item.backText}</p>
                  )}
                </ul>
                <button
                  className="home-learn-more-btn"
                  onClick={() => navigate(item.link)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
