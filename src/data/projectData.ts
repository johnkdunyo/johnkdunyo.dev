interface projectData {
    id: number
    projectTitle: string,
    shortDescription: string
    mainImageURL: string
    category: string
    industry: string
    projectURL: string
    projectSummary: string
    desktopImages?: string[]
    mobileImages?: string[]
    techStacks: string[]
}


const MyProjects : projectData[] = [
    {
        id: 0,
        projectTitle: "BSL Corporate Website",
        shortDescription: "BSL Corporate Website is a high-performing online platform that combines speed, responsiveness, and efficient SEO. This user-friendly website effectively presents the BSL brand, products, and services, captivating and engaging potential customers, partners, and investors.",
        mainImageURL: "/bsl-final.png",
        projectSummary: `
        Welcome to the BSL Corporate Website, an impressive online platform that embodies speed, responsiveness, and SEO efficiency. 
        This meticulously crafted website offers lightning-fast loading times and seamless adaptability across devices, ensuring an exceptional browsing experience for visitors. 
        Regardless of whether users access it from a desktop, laptop, tablet, or smartphone, they can expect a visually appealing interface that effectively showcases the BSL brand, products, and services. 
        <br/> 
        Beyond its sleek design and functionality, the BSL Corporate Website has been strategically optimized for search engines, maximizing its visibility and organic rankings. 
        Through meticulous SEO techniques, the website has been structured with a robust architecture, strategically placed keywords, and adherence to industry best practices. 
        This optimization ensures that the website's content is easily discoverable by individuals actively seeking the products, services, and information offered by BSL.
        <br/>  
        With its seamless blend of speed, responsiveness, and SEO efficiency, the BSL Corporate Website serves as a powerful digital gateway for engaging customers, attracting partners, and providing valuable insights to investors. 
        This user-centric platform invites visitors to explore the world of BSL and experience the exceptional technological prowess, responsiveness, and digital excellence it embodies
        `,
        category: "Corporate Website",
        industry: "Telecoms & Fintech",
        projectURL: "https://bsl.com.gh",
        techStacks: ["Next js", "React js"],
    },

    {
        id: 1,
        projectTitle: "NEDCo Payment Portal (web)",
        shortDescription: "BSL Corporate Website is a high-performing website that combines speed, responsiveness, and efficient SEO. This user-friendly website effectively presents the BSL brand, products, and services, captivating and engaging potential customers, partners, and investors.",
        mainImageURL: "/bsl-final.png",
        projectSummary: `
        Welcome to the BSL Corporate Website, an impressive online platform that embodies speed, responsiveness, and SEO efficiency. 
        This meticulously crafted website offers lightning-fast loading times and seamless adaptability across devices, ensuring an exceptional browsing experience for visitors. 
        Regardless of whether users access it from a desktop, laptop, tablet, or smartphone, they can expect a visually appealing interface that effectively showcases the BSL brand, products, and services. 
        <br/> 
        Beyond its sleek design and functionality, the BSL Corporate Website has been strategically optimized for search engines, maximizing its visibility and organic rankings. 
        Through meticulous SEO techniques, the website has been structured with a robust architecture, strategically placed keywords, and adherence to industry best practices. 
        This optimization ensures that the website's content is easily discoverable by individuals actively seeking the products, services, and information offered by BSL.
        <br/>  
        With its seamless blend of speed, responsiveness, and SEO efficiency, the BSL Corporate Website serves as a powerful digital gateway for engaging customers, attracting partners, and providing valuable insights to investors. 
        This user-centric platform invites visitors to explore the world of BSL and experience the exceptional technological prowess, responsiveness, and digital excellence it embodies
        `,
        category: "Custom Application",
        industry: "Fintech",
        projectURL: "https://nedco-web.bsl.com.gh",
        techStacks: ["Next js", "React js"],


    }
]



export default MyProjects