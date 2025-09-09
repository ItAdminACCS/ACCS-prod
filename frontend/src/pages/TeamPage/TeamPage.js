import React from 'react';
import Slider from 'react-slick';
import './TeamPage.css';
import Lindsey from '../../assets/images/team/Lindsey_Gaunt.jpg';
import Donna from '../../assets/images/team/Donna.jpg';
import PeterEllerton from '../../assets/images/team/Peter Ellerton.png';
import Stephen from '../../assets/images/team/Stephen Raikes.png';
import cat from '../../assets/images/kitty.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Donna Franceschild',
    description: 'Collaborating closely with you, my aim is to build a way of working together that makes sense to you and enables you to move forward.',
    bio: 'I earned a BA in Sociology at the University of California, Los Angeles and completed a Post-graduate Diploma in Counselling with Distinction at Abertay University in 2018. Since then, I have worked for both the NHS and charities, including Stirling & District Women\’s Aid and Wellbeing Scotland where I worked with adult survivors of child physical, emotional and sexual abuse. I am an Accredited Member of the BACP and specialise in Trauma and Complex-PTSD.',
    image: Donna,
  },
  {
    id: 2,
    name: 'Lindsey Gaunt',
    description: 'Lindsey is a qualified pluralistic counsellor, with a Professional Diploma in Psychotherapeutic counselling Practice (Level 5) and a Diploma in Hypnotherapy.',
    bio: 'Lindsey is registered with the National Counselling and Psychotherapy society, and also has a teaching qualification in Mindfulness meditation. Lindsey has been living in Argyll and Bute for 4 years, and also works as a Community Link Worker in various GP practices. Before that, she lived and worked all over the UK and internationally, spending time travelling and working for charities. Lindsey is a compassion focused, person centred counsellor. Lindsey can  provide face to face counselling in Lochgilphead and Ardrishaig, and also works online. ',
    image: Lindsey,
  },
  {
    id: 3,
    name: 'Peter Konopka',
    description:'My approach is flexible and collaborative, drawing from a variety of therapeutic methods to meet each client\'s unique needs.',
    bio: 'I am a qualified pluralistic counsellor, holding a Level 8 Diploma in Counselling. I have experience supporting individuals through challenges such as anxiety, addiction, depression, loss, and bereavement. My professional background includes work with Dochas Care Centre and crisis counselling services. I am passionate about creating a safe, non-judgmental space where clients feel heard and empowered. I chose this path because I believe in the healing power of connection and the potential for growth in every individual..',
    image: cat,
  },

  {
    id: 4,
    name: 'Peter Ellerton',
    description:'I\'m moving towards a better knowledge of somatic approaches to therapy, and how they can be used to treat trauma and anxiety.',
    bio: 'I have been practising as a person-centred counsellor since graduating from Strathclyde University Counselling Unit with a Postgraduate Diploma in 2009. I spent 20 years working in drug and alcohol addiction counselling, using cognitive behavioural approaches, brief solution-focused therapy and behaviour change models such as motivational interviewing.  I spent 10 years tutoring with Argyll College, on their Intro to Counselling, Cert in Counselling Skills and  Working with Addiction courses.',
    image: PeterEllerton,
  },
  {
    id: 5,
    name: 'Stephen Raikes',
    description:'I will work inclusively and nonjudgmentally with you to create a safe place where you can speak and explore freely.',
    bio: 'I have a level 11 Diploma in Cognitive Behaviour Therapy (CBT). I am accredited by the British Association of Counselling and Psychotherapy (BACP). I am also a counselling trainer and supervisor. I have worked as a counsellor with adults and young people for 5 years, including with people who are neurodiverse. I can support you with feelings of anxiety and depression, including general anxiety, social anxiety, phobias and low self-esteem. I work online (Zoom or Teams). ',
    image: Stephen,
  },
];

const TeamPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // tablet
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024, // small laptop
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="team-container">
      <Slider {...settings}>
  {teamMembers.map((member) => (
    <div key={member.id} className="team-flip-card">
      <div className="team-flip-card-inner">
        <div className="team-flip-card-front">
          <img src={member.image} alt={member.name} className="team-image" />
          <h3 className="team-name">{member.name}</h3>
          <span>{member.description}</span>
        </div>
        <div className="team-flip-card-back">
          <h2 className="team-name">{member.name}</h2>
          <p className="team-bio">{member.bio}</p>
        </div>
      </div>
    </div>
  ))}
</Slider>
    </div>
  );
};

export default TeamPage;
