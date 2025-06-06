const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
   
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Qualifications",
      link: "#qualifications",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "images/ideas.svg" },
    { text: "Concepts", imgPath: "images/concepts.svg" },
    { text: "Designs", imgPath: "images/designs.svg" },
    { text: "Code", imgPath: "images/code.svg" },
    { text: "Ideas", imgPath: "images/ideas.svg" },
    { text: "Concepts", imgPath: "images/concepts.svg" },
    { text: "Designs", imgPath: "images/designs.svg" },
    { text: "Code", imgPath: "images/code.svg" },
  ];
  
  const counterItems = [
    { value: 3, suffix: "", label: "Years of Experience" },
    { value: 5, suffix: "+", label: "Satisfied Clients" },
    { value: 20, suffix: "+", label: "Completed Projects" },
    { value: 100, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "images/logos/company-logo-1.png",
    },
    {
      imgPath: "images/logos/company-logo-2.png",
    },
    {
      imgPath: "images/logos/company-logo-3.png",
    },
    {
      imgPath: "images/logos/company-logo-4.png",
    },
    {
      imgPath: "images/logos/company-logo-5.png",
    },
    {
      imgPath: "images/logos/company-logo-6.png",
    },
    {
      imgPath: "images/logos/company-logo-7.png",
    },
    {
      imgPath: "images/logos/company-logo-8.png",
    },
    {
      imgPath: "images/logos/company-logo-9.png",
    },
    {
      imgPath: "images/logos/company-logo-10.png",
    },
    {
      imgPath: "images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review:
        "Matthieu brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "images/exp1.png",
      logoPath: "images/logo1.png",
      title: "Frontend Developer",
      date: "January 2023 - Present",
      responsibilities: [
        "Developed and maintained user-facing features for the Hostinger website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      review:
        "Matthieu's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
      imgPath: "images/exp2.png",
      logoPath: "images/logo2.png",
      title: "Full Stack Developer",
      date: "June 2020 - December 2023",
      responsibilities: [
        "Led the development of Docker's web applications, focusing on scalability.",
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
        "Contributed to open-source projects that were used with the Docker ecosystem.",
      ],
    },
    {
      review:
        "Matthieu's work on Appwrite's mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
      imgPath: "images/exp3.png",
      logoPath: "images/logo3.png",
      title: "React Native Developer",
      date: "March 2019 - May 2020",
      responsibilities: [
        "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
        "Improved app performance and user experience through code optimization and testing.",
        "Coordinated with the product team to implement features based on feedback.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Natasha Ngobeni",
      mentions: "@EvolutionExtremeMobileBar",
      review:
        "Matthieu was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "images/bannerBlack.png",
    },
    {
      name: "Seth Kapanda",
      mentions: "@seth",
      review:
        "Collaborating with Matthieu was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Matthieu enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Matthieu is the ideal partner.",
      imgPath: "images/personPP.png",
    },
    {
      name: "Keletso Senyolo",
      mentions: "@Ghamments",
      review:
        "Matthieu was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
      imgPath: "images/ghamments.png",
    },
    
  ];
  
  const socialImgs = [
    {
      name: "insta",
      url: "https://www.instagram.com/",
      imgPath: "images/insta.png",
    },
    {
      name: "github",
      url: "https://github.com/matthieukapanga",
      imgPath: "images/git.png",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/matthieukapanga/",
      imgPath: "images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };