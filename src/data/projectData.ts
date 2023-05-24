import { ProjectData } from "@/lib/types"



const MyProjects : ProjectData[] = [
    {
        id: 0,
        projectTitle: "BSL Corporate Website",
        shortDescription: "BSL Corporate Website is a high-performing, SEO efficient, responsive, and user-friendly website that effectively presents the BSL brand, its subsidiaries, and services, captivating and engaging potential customers, partners, and investors.",
        mainImageURL: "/assets/bsl/bsl-final.png",
        projectSummary: `
        Welcome to the BSL Corporate Website, an impressive online platform that embodies speed, responsiveness, and SEO efficiency. 
        This meticulously crafted website offers lightning-fast loading times and seamless adaptability across devices, ensuring an 
        exceptional browsing experience for visitors. Whether users access it from a desktop, laptop, tablet, or smartphone, 
        they can expect a visually appealing interface that effectively showcases the BSL brand, its subsidiaries, products, and services.
        <br/> <br/>
        Beyond its sleek design and functionality, the BSL Corporate Website has been strategically optimized for search engines, 
        maximizing its visibility and organic rankings. Through meticulous SEO techniques, the website has been structured with a 
        robust architecture, strategically placed keywords, and adherence to industry best practices.
        <br/>  <br/>
        With its seamless blend of speed, responsiveness, and SEO efficiency, the BSL Corporate Website serves as a powerful digital 
        gateway for engaging customers, attracting partners, and providing valuable insights to investors. This user-centric platform 
        invites visitors to explore the world of BSL and its subsidiaries and experience the exceptional technological prowess, 
        responsiveness, and digital excellence it embodies.
        `,
        category: "Corporate Website",
        industry: "Telecoms & Fintech",
        projectURL: "https://bsl-web.netlify.app/",
        techStacks: ["Nextjs (TypeScript)", "TailwindCSS", "GSAP", "Plausible", "Swiperjs", "MobX", "Framer-Motion"],
        desktopImages: ["/assets/bsl/bsl_web2.png", ],
        mobileImages: ["/assets/bsl/bsl_mobile2.png", "/assets/bsl/bsl_mobile3.png"]
    },

    {
        id: 1,
        projectTitle: "NEDCo Payment Portal (web)",
        shortDescription: "NEDCo Pay is an electronic power purchase platform, which enables customers to pay electricity bills, buy power, manage meters, monitor usage histories, and submit complaints.",
        mainImageURL: "/assets/nedco-web/nedco-1.png",
        projectSummary: `
        NEDCo Pay is an electronic power management platform for NEDCo (Northern Electricity Distribution Company). 
        It seeks to provide a one-stop platform for its over 2 million customers to buy power (prepaid), 
        and pay electricity bills (postpaid) directly from their mobile money wallets. Customers are also able to 
        view and track their usage histories, manage electricity meters, and submit complaints. 
        <br/> <br/>
        NEDCo Pay offers a range of technical features that ensure a seamless and secure user experience. 
        It is designed for fast performance, allowing customers to complete transactions quickly and efficiently. 
        It prioritizes robust security measures, employing encryption protocols and industry best practices to 
        safeguard user data and ensure confidentiality. 
        It is scalable and capable of handling increasing user volumes without compromising performance. 
        <br/>  <br/>
       NEDCo Pay features an intuitive and user-friendly interface that simplifies the payment and power purchase processes. 
       Customers can easily navigate through the platform, complete transactions smoothly, and access necessary information effortlessly. 
       It is built on a reliable infrastructure that minimizes downtime and interruptions, ensuring high availability for users. It also has a realtime in and out browser notifications feature.
        `,
        category: "Custom Application",
        industry: "Fintech",
        projectURL: "https://nedco-web.bsl.com.gh",
        techStacks: ["Nextjs (TypeScript)", "TailwindCSS", "Daisy UI", "Swiperjs", "Firebase FCM", "NextAuthjs"],
        desktopImages: ["/assets/nedco-web/nedco-2.png", "/assets/nedco-web/nedco-3.png" , "/assets/nedco-web/nedco-4.png" , "/assets/nedco-web/nedco-5.png" , "/assets/nedco-web/nedco-6.png" , "/assets/nedco-web/nedco-7.png" ],

    },
    {
        id: 2,
        projectTitle: "NEDCo Admin Portal (web)",
        shortDescription: "NEDCo Pay Admin is a highly secured and advanced admin platform designed specifically for administrators to manage and oversee the whole system. They are able to monitor transactions, perform refunds and reconciliations, and manage complaints.",
        mainImageURL: "/assets/nedco-admin/nedco-1.png",
        projectSummary: `
        NEDCo Pay Admin is a secure and advanced admin platform tailored for administrators to effectively manage and oversee the entire system. 
        With its permission-based access control, administrators have granular control over functionalities such as transaction monitoring, refund processing, reconciliation, and complaint management. 
        The platform also includes an internal ticketing system for efficient handling of customer complaints and inquiries. 
        <br/> <br/>
       The admin platform also provides detailed analytics and reporting features, allowing administrators to gain insights into system performance, transaction data, and user behavior. 
       This information enables administrators to make informed decisions, identify potential issues, and optimize system operations.
        <br/>  <br/>
   The NEDCo Pay Admin platform features a user-friendly design that caters to both technical and non-technical administrators. Its intuitive interface and easy-to-navigate layout ensure that administrators of all backgrounds can effectively use the platform.
       <br/><br/> `,
        category: "Custom Application",
        industry: "Fintech",
        projectURL: "https://nedco-admin.bsl.com.gh",
        techStacks: ["Nextjs (TypeScript)", "NextAuthjs","TailwindCSS", "Swiperjs", "Framer-Motion", "NextThemes"],
        desktopImages: ["/assets/nedco-admin/nedco-2.png", "/assets/nedco-admin/nedco-3.png" ,"/assets/nedco-admin/nedco-4.png", "/assets/nedco-admin/nedco-5.png"],

    }
]



export default MyProjects