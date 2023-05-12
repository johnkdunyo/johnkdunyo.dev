"use client";
import React from "react";
import Container from "@/components/Layouts/Container";
import Button from "@/components/uis/Button";
import siteMetadata from "@/data/siteMetaData";
import { useRouter } from "next/navigation";
import Image from "next/legacy/image";
import { ButtonType } from "@/lib/types";
import CustomLink from "@/components/uis/CustomLink";

const SingleSummaryItem = ({
  title,
  value,
  isLink = false,
}: {
  title: string;
  value: string;
  isLink?: boolean;
}) => {
  return (
    <div className="text-base text-center  ">
      <p className="font-bold ">{title}</p>
      <p className="-mt-3">
        {isLink ? <CustomLink href={value}>{value}</CustomLink> : value}
      </p>
    </div>
  );
};

const SingleTechStack = ({ value }: { value: string }) => {
  return (
    <div className="w-fit border whitespace-nowrap h-fit px-4 border-indigo-500">
      {value}
    </div>
  );
};

const page = () => {
  return (
    <Container title="Single Project Page">
      <main className="py-5 flex flex-col gap-20">
        <h1>
          <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
            Project
          </span>
          <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
            Project Name
          </span>
        </h1>
        <div className="flex justify-center">
          <img
            src="/bsl-final.png"
            className="w-full md:w-3/4"
            alt="bsl-final"
          />
        </div>

        <div className="h-fit justify-center  bg-gray-100 dark:bg-midnight rounded-3xl  flex flex-col md:flex-row items-center md:justify-evenly">
          <SingleSummaryItem title="Category" value="Corporate Website" />
          <SingleSummaryItem title="Industry" value="Telecoms & Fintech" />
          <SingleSummaryItem
            title="Website"
            value="https://bsl.com.gh"
            isLink={true}
          />
        </div>

        <div>
          <h1 className="text-2xl">Summary</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between  gap-8 items-center">
          <div className="md:w-6/12 w-full">
            <p className="">
              Providing a mobile first developement; with focus on
              responsiveness and speed
            </p>
            <img src="/assets/bsl/bsl_web2.png" alt="bsl" />
          </div>
          <div className="flex flex-row justify-between md:w-6/12 w-full gap-5">
            <Image
              src="/assets/bsl/bsl_mobile2.png"
              blurDataURL="/assets/bsl/bsl_mobile2.png"
              alt="bsl"
              className="w-full rounded-[20px]"
              placeholder="blur"
              layout="intrinsic"
              objectFit="fill"
              height={1632}
              width={862}
            />
            <Image
              src="/assets/bsl/bsl_mobile3.png"
              blurDataURL="/assets/bsl/bsl_mobile2.png"
              alt="bsl"
              className="w-full rounded-[20px]"
              placeholder="blur"
              layout="intrinsic"
              objectFit="fill"
              height={1632}
              width={862}
            />
          </div>
        </div>

        {/* tech stacks used */}
        <div>
          <h1 className="text-2xl">Tech Stacks Used</h1>

          <div className="flex gap-4 overscroll-contain flex-wrap">
            <SingleTechStack value="Nextjs 13" />
            <SingleTechStack value="Tailwind CSS" />
            <SingleTechStack value="Framer Motion" />
            <SingleTechStack value="Daisy UI" />
            <SingleTechStack value="tRPC" />
          </div>
        </div>
      </main>
    </Container>
  );
};

export default page;
