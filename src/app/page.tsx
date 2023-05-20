"use client";

import { ButtonType, SubscribeSize } from "@/lib/types";
import Image from "next/image";
import Container from "@/components/Layouts/Container";
import siteMetadata from "@/data/siteMetaData";
import Button from "@/components/uis/Button";
import { useRouter } from "next/navigation";
import HorinzontalRule from "@/components/uis/HorinzontalRule";
import { Parallax } from "@/components/animations/Parallax";

const SingleService = ({
  title,
  description,
  imageURL,
}: {
  title: string;
  description: string;
  imageURL: string;
}) => {
  return (
    <div className="w-full text-center border rounded-[20px] border-indigo-500 h-[45rem]">
      <div className="m-5 mt-10 h-[21rem] ">
        <h1 className="text-xl">{title}</h1>
        <p className="prose-base prose  dark:prose-slate">{description}</p>
      </div>
      <div className="  relative h-[19rem] ">
        <Image
          alt="sample"
          src={`/assets/services/${imageURL}`}
          blurDataURL={`/assets/services/${imageURL}`}
          placeholder="blur"
          fill
          className="absolute h-full w-full"
        />
      </div>
    </div>
  );
};

export default function Home() {
  const { push } = useRouter();
  return (
    <Container>
      <div>
        <div>
          <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
            <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
              I'm <span className="text-teal-500 dark:text-teal-400">John</span>
              . I'm a software developer, system engineer and a product
              developer.
            </h1>
            <div className="order-1 md:order-2  flex justify-center">
              <Parallax clampFinal offset={30}>
                <Image
                  alt="John Kwame"
                  height={200}
                  width={200}
                  src={siteMetadata.avatarImage}
                  placeholder="blur"
                  blurDataURL={siteMetadata.avatarImage}
                  className="col-span-1 border rounded-full border-indigo-500 dark:border-transparent"
                  layout="fixed"
                />
              </Parallax>
            </div>
          </div>
          <div className="space-y-6 text-center md:text-left md:space-y-0 md:space-x-4">
            <Button
              buttonType={ButtonType.PRIMARY}
              onButtonClick={() => push("/projects")}
            >
              View my projects
            </Button>
            <Button
              buttonType={ButtonType.SECONDARY}
              onButtonClick={() => push("/about")}
            >
              More about me
            </Button>
          </div>
        </div>
        <HorinzontalRule />
        <div className="mt-10">
          <h2></h2>
          <p>Check out a few of the services I provide.</p>
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <SingleService
              title="Product Design"
              description="I offer comprehensive Product Design services, delivering innovative and tailored solutions that captivate users. With a focus on user-centered design and the latest industry practices, I create seamless and engaging experiences. From concept to implementation, I guide clients through the entire design process, ensuring exceptional and impactful product designs."
              imageURL="product.webp"
            />
            <SingleService
              title="Software Development"
              imageURL="code.webp"
              description="I provide customized Software Development services, leveraging the latest technologies and industry best practices. From concept to deployment, ensuring efficient code development, rigorous testing, and seamless integration. Experience reliable and scalable software solutions tailored to your unique needs."
            />
            <SingleService
              title="DevOps & IT Support"
              imageURL="devops.webp"
              description="I streamline software development through automation and monitoring. I also provide dedicated IT Support, addressing end-users' needs and offering timely assistance. By combining these services, clients can focus on core business objectives while enjoying reliable and efficient technology operations."
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
