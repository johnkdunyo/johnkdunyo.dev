"use client";

import { ButtonType, SubscribeSize } from "@/lib/types";
import Image from "next/image";
import Container from "@/components/Layouts/Container";
import siteMetadata from "@/data/siteMetaData";
import Button from "@/components/uis/Button";
import { useRouter } from "next/navigation";
import HorinzontalRule from "@/components/uis/HorinzontalRule";

const SingleService = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full text-center border rounded-[20px] border-indigo-500 ">
      <div className="m-5 mt-10">
        <h1 className="text-xl">{title}</h1>
        <p>{description}</p>
      </div>
      <div className=" flex justify-center items-end -mb-8">
        <Image
          alt="sample"
          src="/assets/services/illustration_bulb.png"
          blurDataURL="/assets/services/illustration_bulb.png"
          placeholder="blur"
          height={300}
          width={254}
          className=" "
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
            <div className="order-1 md:order-2 border flex justify-center">
              <Image
                alt="John Kwame"
                height={200}
                width={200}
                src={siteMetadata.avatarImage}
                placeholder="blur"
                blurDataURL={siteMetadata.avatarImage}
                className="col-span-1 rounded-full"
                layout="fixed"
              />
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
              description="I have strong backgrounds in research, product design, and product coordination that can help the product grow from 0 to 1. As a first-rate analytical thinker, I am able to maintain the product's vision from start to finish, both technically and product-wise."
            />
            <SingleService
              title="Software Development"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <SingleService
              title="DevOps & IT Support"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
