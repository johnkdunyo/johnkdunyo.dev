"use client";

import Container from "@/components/Layouts/Container";
import Button from "@/components/uis/Button";
import siteMetadata from "@/data/siteMetaData";
import { useRouter } from "next/navigation";
import Image from "next/legacy/image";
import { ButtonType } from "@/lib/types";
import CustomLink from "@/components/uis/CustomLink";
import { TimelineItem } from "@/components/uis/TimelineItem";
import workExperienceData from "@/data/workExperienceData";
import { Parallax } from "@/components/animations/Parallax";

export default function About() {
  const { push } = useRouter();

  return (
    <Container title="About Me - John Kwame Dunyo">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          About me
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Here&apos;s my story.
        </span>
      </h1>
      <p>
        I am a software engineer with a passion for creating remarkable digital
        experiences. With 3 years of experience, I excel in full stack web and
        application software development, specializing in Python, PHP, and
        JavaScript (TypeScript). My focus is on creating value for customers and
        stakeholders by leveraging technology. From product ideation to design,
        development, and launch, I ensure a comprehensive approach that exceeds
        customer expectations. With a strong background in software development,
        including front-end and back-end technologies, as well as software
        architecture and system design, I am committed to delivering
        high-quality and high-performing products that surpass customer
        expectations. My expertise extends to the domains of digital payments,
        eLearning, and eCommerce, which gives me valuable insights into the
        unique needs of these industries. I am driven by the desire to
        revolutionize the digital landscape and leave a lasting impact on those
        I serve
      </p>
      <p>
        I’m currently working as a software developer at{" "}
        <CustomLink href="http://broadspectrumltd.com/">
          Broadspectrum Ghana
        </CustomLink>{" "}
        where I help build fintech solutions. Our recent solution is the NEDCo
        power purchasing platform that serves over 2 million customers in Ghana.
      </p>
      <div>
        <Parallax clampFinal offset={120}>
          <div className="hidden md:block md:float-left ">
            <Image
              className="md:mr-8"
              src="/avatar-working.png"
              placeholder="blur"
              blurDataURL="/avatar-working.png"
              width={380}
              height={428}
              alt={"article cover"}
            />
          </div>
        </Parallax>
        <p>
          While at Broadspecturm, I worked as a full-stack engineer at{" "}
          <CustomLink href="http://kurz.ai/">Kurz.ai</CustomLink> where I helped
          build a scalable and progressive web application for learning
          practical CNC programming for the KELLER Group in Germany.
        </p>
        <p>
          Prior to joining Broaspectrum, I worked as the software lead for the
          MEST Express startup Moreplex Company Ltd, where I helped architect
          the company&apos;s software architectures for its growing eSkills and
          eCommerce platforms. I also led the team to build an AI product
          recommender system. And more recently is the yet-to-be-launched AI
          assistant dermatologist.
        </p>

        <p>
          I have built a couple of startups. Key among them is{" "}
          <CustomLink href="https://farmsens.netlify.app/">FarmSens</CustomLink>
          , the next-generation smart soil sensors with real-time farm
          analytics. I spend most of my free time running and improving
          FarmSens. I also love to volunteer on a number of initiatives; giving
          back to my society, from teaching high school students Maths and
          Science to providing technical and business mentorship to budding
          entrepreneurs in Kumasi, Ghana.
        </p>
        <p>
          I am fellow of the{" "}
          <CustomLink href="https://resolutionproject.org/fellows/john-kwame-dunyo/">
            Resolution Group, USA
          </CustomLink>
          . and the{" "}
          <CustomLink href="https://www.queensu.ca/innovationcentre/launch/jim-leech-mastercard-foundation-fellowship-entrepreneurship">
            Jim Leech Mastercard Enterprenuership Programm
          </CustomLink>{" "}
          at Queen’s University, Ontario, Canada.
        </p>
        <p>
          You can find me on <a href={siteMetadata.twitter}>Twitter</a> where I
          share tech-related tidbits and build in public, or you can follow me
          on <CustomLink href={siteMetadata.github}>GitHub</CustomLink>.
        </p>
        <div></div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="flex justify-center"></div>
      <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">Work Experience</h2>
        <p>Here&apos;s a brief rundown of my most recent experiences.</p>
        {workExperienceData ? (
          <div>
            {workExperienceData.map((workItem, index) => (
              <TimelineItem
                key={index}
                title={workItem.title}
                meta={workItem.company}
                link={workItem.companyUrl}
                meta_small={workItem.duration}
                description={workItem.description}
              />
            ))}
          </div>
        ) : null}
        <Button
          onButtonClick={() => push(siteMetadata.resume)}
          buttonType={ButtonType.PRIMARY}
        >
          View my resume
        </Button>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      {/* <div className="mb-12">
        <h2>I love to share my knowledge through writing.</h2>
        <p>Check out a few of my most recent publishings.</p>
        <ArticleList articles={recentArticles} />
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12">
        <div className="col-span-3">
          <h2>Interested in my gear?</h2>
          <p>
            I keep a list of software, applications, extensions, hardware and a
            list of supplies I've used to set up my office for those who are
            interested.
          </p>
          <Button
            buttonType={ButtonType.PRIMARY}
            onButtonClick={() => push("/toolbox")}
          >
            Check out my toolbox
          </Button>
        </div>
        <div className="col-span-2">
          <Image
            className="rounded-3xl group-hover:opacity-75"
            objectFit="cover"
            src="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186547/toolbox_hardware.jpg"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186547/toolbox_hardware.jpg"
            width={260}
            height={260}
            layout="responsive"
            alt={"article cover"}
          />
        </div>
      </div> */}
    </Container>
  );
}
