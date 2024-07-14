// --------------------------------------- Project List
import eCommImage from "../Assets/projects/e-comm.PNG";
import spotify from "../Assets/projects/spotify.PNG";
import trip from "../Assets/projects/trip.PNG";
import law_firm from "../Assets/projects/law_firm.PNG";
import postAi from "../Assets/projects/postAi.PNG";

import html from "../Assets/skills/html.png";
import css from "../Assets/skills/css.png";
import js from "../Assets/skills/JS.png";
import react from "../Assets/skills/react.png";
import redux from "../Assets/skills/redux.png";
import Bootstrap from "../Assets/skills/bootstrap.png";
import python from "../Assets/skills/python.png";
import git from "../Assets/skills/git.png";
import nextjs from "../Assets/skills/nextjs.png";
import tailwind from "../Assets/skills/tailwind.png";
import ts from "../Assets/skills/ts.png";
//import html from "../Assets/skills/html.png";

export const ProjectList = [
  {
    img: `${postAi}`,
    title: "Post.Ai",
    description:
      "Created a micro-saas with Nextjs helping out creators with their social media posts.",
    tech_stack: "Nextjs, TailwindCss, Shadcn,Material Ui",
    github_url: "https://github.com/subhayand10/Post.Ai",
    demo_url: "https://post-ai-omega.vercel.app/",
  },
  {
    img: `${eCommImage}`,
    title: "Shop-Sub",
    description:
      "Created an E-commerce website with add to cart features,checkout and lot more",
    tech_stack: "Html, Css, Javascript,React,Material UI",
    github_url: "https://github.com/subhayand10/E-commerce",
    demo_url: "https://e-commerce-subhayan.vercel.app/",
  },
  {
    img: `${spotify}`,
    title: "Music-Sub",
    description: "Created a a spotify clone using React and Material UI",
    tech_stack: "Html, Css, Javascript,React,Material UI",
    github_url: "https://github.com/subhayand10/Spotify-clone",
    demo_url: "https://spotify-clone-subhayan.vercel.app/",
  },
  {
    img: `${trip}`,
    title: "Trip-Sub",
    description:
      "Created a a trip booking website where users can browse thorugh many adventures/destinations",
    tech_stack: "Html, Css, Vanilla Javascript,Bootstrap",
    github_url: "https://github.com/subhayand10/Travel-Booking",
    demo_url: "https://travel-booking-subhayan.vercel.app/",
  },
  // {
  //   img: `${law_firm}`,
  //   title: "Law Firm Landing Page",
  //   description: "Created simple law firm landing page using React",
  //   tech_stack: "Html, Css, Javascript,React",
  //   github_url: "https://github.com/subhayand10/Law-Firm-landing-page",
  //   demo_url: "https://law-firm-landing-page-six.vercel.app/",
  // },
];

// --------------------------------------- Skills
export const stackList = [
  {
    img: `${html}`,
    name: "HTML",
  },
  {
    img: `${js}`,
    name: "CSS",
  },
  {
    img: `${js}`,
    name: "JavaScript",
  },
  {
    img: `${ts}`,
    name: "TypeScript",
  },
  {
    img: `${react}`,
    name: "ReactJS",
  },
  {
    img: `${nextjs}`,
    name: "NextJs",
  },
  {
    img: `${tailwind}`,
    name: "TailwindCss",
  },
  {
    img: `${redux}`,
    name: "Redux",
  },
  {
    img: `${Bootstrap}`,
    name: "Bootstrap",
  },
  {
    img: `${python}`,
    name: "Python",
  },
  {
    img: `${git}`,
    name: "Git",
  },
];
