const config = {
  title: "Tingen Chen | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Tingen Chen, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work and let's build something amazing together!",
    short:
      "Discover the portfolio of Tingen Chen, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Tingen Chen",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Tingen Chen",
  email: "codeblossom99@gmail.com",
  site: "https://3d-profile.vercel.app",

  // for github stars button
  githubUsername: "codeblossom99",
  githubRepo: "3d-profile",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/codeblossom99",
    linkedin: "https://www.linkedin.com/in/tingenchen/",
    instagram: "https://www.instagram.com/codeblossom99",
    facebook: "https://www.facebook.com/codeblossom99",
    github: "https://github.com/codeblossom99",
  },
};
export { config };
