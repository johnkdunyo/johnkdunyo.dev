interface WorkExperience {
    title: string,
    company: string,
    location: string,
    duration: string,
    companyUrl?: string
    description: string[]
}

const workExperienceData : WorkExperience[] =  [
     {
       title: "Software Developer",
        company: "Kurz.ai",
         location: "Accra, Ghana",
       description: 
       [
        "Collaborated with a team of two developers to build a scalable and progressive web application for practical CNC programming learning according to the client’s requirements using T3-Stack (Nextjs, NextAuth, Prisma, Typescript, Tailwindcss & tRPC) ",
        "Implemented best practices for software development, including unit testing and code review, to improve code quality and maintainability. "],
       duration: "January 2023 - Present",
        companyUrl: "http://kurz.ai/"
      },

      {
       title: "Software Developer",
        company: "Broadspectrum Ghana Ltd",
        location: "Accra, Ghana",
       description: 
       [
        "Built a highly scalable admin portal for NEDCo Pay using Next.js, NextAuthjs, (Typescript) and Tailwind CSS, allowing for efficient management of meters, transactions, customer complaints, and ticketing. ",
        "Built a revamped and responsive web portal for NEDCo Pay to facilitate purchasing of power, management of meters and complaints, and improving overall customer experience using Nextjs, NextAuthjs, (Typescript) and Tailwindcss. ",
    "Collaborated effectively with cross-functional teams, including designers, QAs, and product managers, to ensure successful deployment of NEDCo Pay, serving over 2 million customers in Ghana.",
"Built a restful API, developed the server-logic, and maintained the central database for the company’s lunch ordering application using Nodejs (Expressjs) to ensure low latency responsiveness to requests from the front-end.",
"Built a Laravel (PHP) application to automate NEDCo power purchase reconciliations by retrying failed transactions, crediting, or debiting customers based on transaction status while saving cost by 20% and improving customer experience."],
       duration: "November 2021 - Present",
        companyUrl: "http://broadspectrumltd.com/"
      },
     
      {
       title: "Software Lead",
        company: "Moreplex Company Ltd",
          location: "Accra, Ghana",
        description: 
       [
        "Designed, built, and shipped MESA, an eSkill learning platform for Moreplex Company Ltd, using Reactjs, Tailwindcss, TypeORM (Expressjs) and PostgreSQL. ",
        " Led team to develop a MEST-funded AI product recommender system using AWS Lex that gathers and analyses customer data and provides customer-problem-specific product recommendations.",
    " Designed an optimized systems architecture using AWS cloud services for the company’s general website, eCommerce and eSkills sites and implemented them with a team of 2 developers to boost performance and improve customer service."],
        duration: "June 2021 - Present",
        companyUrl: "https://www.moreplexgh.com"
      },
      {
       title: "Software Developer",
        company: "Magmarkd Private Ltd.",
         location: "Pune, India",
  description: 
       [
        "Designed and implemented data modeling processes and predictive models to extract data from existing business database using Python pandas and NumPy libraries and then visualized it with insights using PowerBI on a newly developed web application.",
        "Proposed standard coding structures and optimized system architecture to improve code efficiencies and reduce overall project lifespan by 25%."
    ],
        duration: "April 2020 - November 2020",
      }
    ]


    export default workExperienceData