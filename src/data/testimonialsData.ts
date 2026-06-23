export interface Testimonial {
  id: number;
  name: string;
  position: string;
  date: string;
  relation: string;
  text: string;
  avatar?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Ruben Baghajyan",
    position: "Engineering Leader at Picsart | Cloud Platforms, Storage & Collaboration | Scaling Teams & Systems",
    date: "March 4, 2026",
    relation: "Directly managed Sevak",
    text: "I worked closely with Sevak in my role as Engineering Manager, where he was a Software Engineer (Web), contributing to our cloud storage and asset management web platform.\n\nSevak played an important role in building and improving core user-facing functionality, helping deliver a reliable and scalable cloud storage experience. He consistently translated product and design requirements into clean, maintainable, and well-structured frontend code.\n\nHe also contributed to the integration of external cloud storage providers, including Google Drive, ensuring a smooth and consistent user experience across platforms. His attention to detail and focus on stability strengthened the overall quality of the product.\n\nSevak is a strong team player who collaborates effectively with engineers, product managers, designers, and QA. He communicates clearly, is open to feedback, and approaches his work with ownership and professionalism.\n\nI appreciate his contributions to the team and am confident he will continue to grow and deliver solid results in his future roles."
  },
  {
    id: 2,
    name: "Gegham Arevshatyan",
    position: "Sr. Software Engineer and Team Leader in Front-end | Building Scalable Web Products & Developer Tools | Product-Focused Engineer",
    date: "March 3, 2026",
    relation: "Worked with Sevak in the same team",
    text: "During that long time, we worked together with Sevak, I consistently saw his growth, dedication, and technical strength in action.\n\nSevak is an exceptionally strong problem solver. He has the ability to break down complex requirements into clean, well-structured solutions and execute them with confidence.\n\nHe has deep expertise in Google services integrations - from authentication and APIs to analytics-related tooling and even Drive. He fully understands how to connect systems in a scalable and reliable way. On top of that, his knowledge of Tech SEO and UI best practices adds real product value. He thinks about performance, discoverability, and user experience as part of the whole picture.\n\nWe primarily worked in a React + TypeScript stack, where Sevak consistently delivered high-quality feature development. His implementations were clean, maintainable, and aligned with product requirements. He’s someone you can trust to take a task from idea to production.\n\nBeyond his technical skills, he’s a reliable teammate, open to feedback, always focused, but also with a big soul and a great taste of humor. I’d gladly work with Sevak again and confidently recommend him to any team."
  },
  {
    id: 3,
    name: "Shushan Paremuzyan",
    position: "Chief of Staff to COO @ Picsart",
    date: "March 3, 2026",
    relation: "Worked with Sevak, but in different teams",
    text: "I had the pleasure of working alongside Sevak during his time at Picsart. As a Chief of Staff, I look for individuals who bring more than just technical skills to the table, and Sevak stood out for his respectful work ethic and positive influence on our team culture. He is a good colleague, a professional—reliable, collaborative, committed to the success of the organization. Any team would be lucky to have his character."
  },
  {
    id: 4,
    name: "Razmik Melqonyan",
    position: "Senior Technical Product Manager at Picsart Inc.",
    date: "March 2, 2026",
    relation: "Worked with Sevak, but in different teams",
    text: "I highly recommend Sevak as a skilled and reliable Front-End Engineer.\n\nOver the five years we’ve worked together, he has consistently demonstrated expertise in HTML, CSS, JSS, React.js, TypeScript. He also has knowledge of CI/CD processes and a background in .NET Unity.\n\nSevak is patient, calm and responsible, bringing a great sense of humor and positive energy to any team.\nA true team player, he makes every project smoother, more enjoyable, and successful.\n\nThank you Sevak for these years of collaboration and friendship"
  }
];
