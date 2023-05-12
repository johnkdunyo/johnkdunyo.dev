"use client";
import React from "react";
import Container from "@/components/Layouts/Container";
import Button from "@/components/uis/Button";
import siteMetadata from "@/data/siteMetaData";
import { useRouter } from "next/navigation";
import Image from "next/legacy/image";
import { ButtonType } from "@/lib/types";
import CustomLink from "@/components/uis/CustomLink";

const page = () => {
  return (
    <Container title="Single Project Page">
      <main className="py-5">
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
        </div>
      </main>
    </Container>
  );
};

export default page;
