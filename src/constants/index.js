import project1 from "../assets/projects/todo.png";
import project2 from "../assets/projects/pacman.png";
import project3 from "../assets/projects/porfolio.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "April - September 2024",
    role: "Software Developer Intern",
    company: "Go Innovior",
    description: `Focused on software and web development, utilizing tools like React, JavaScript, and Tailwind CSS. Worked on real-world projects, gaining experience in front-end and back-end development with a focus on responsive design and user experience.`,
    technologies: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    year: "August - December 2023",
    role: "Web Developer Intern",
    company: "Weaber",
    description: `Gained foundational skills in web development, specializing in HTML, CSS, and JavaScript. Worked on developing static and dynamic websites, improving coding skills and understanding of web design principles.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
export const PROJECTS = [
  {
    title: "To-Do List",
    image: project1, 
    description:
      "A fully functional To-Do List application that allows users to add, remove, and mark tasks as complete. Built with React and styled with Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/primon311/To-do-list" 
  },
  {
    title: "Pacman",
    image: project2,
    description:
      "A game called pacman build with C++ have some feature and levels to enjoy",
    technologies: ["C++", "CodeBlocs"],
    link: "https://github.com/primon311/Pacman" 
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://html-portfolio-liart.vercel.app/" 
  }
];

export const CONTACT = {
  address: "#21 Road no.2 shantidhara, signbroad, Narayanganj ",
  phoneNo: "+8801686910298 ",
  email: "saifulislam.pimon@gmail.com",
};
