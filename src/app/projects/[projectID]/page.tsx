import React from "react";
import ProjectsData from "@/data/projectData";
import CustomLink from "@/components/uis/CustomLink";
import Container from "@/components/Layouts/Container";
import Image from "next/image";
import { ProjectData } from "@/lib/types";

type Params = {
  params: {
    projectID: number;
  };
};

export async function getProjectData(id: number) {
  const data = ProjectsData.find((project) => project.id === 0);
  console.log("data", data);
  return data;
}

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
export default async function ProjectPage({ params: { projectID } }: Params) {
  if (!projectID) return;
  const projectData: Promise<ProjectData> = getProjectData(projectID);
  const project = await projectData;

  return (
    <Container title="Single Project Page">
      <main className="py-5 flex flex-col gap-20">
        <h1>
          <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
            Project
          </span>
          <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
            {project?.projectTitle}
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
          <SingleSummaryItem title="Category" value={project?.category!} />
          <SingleSummaryItem title="Industry" value={project?.industry!} />
          <SingleSummaryItem
            title="Website"
            value={project?.projectURL ? project?.projectURL : ""}
            isLink={true}
          />
        </div>

        <div>
          <h1 className="text-2xl">Summary</h1>
          <p
            className=""
            dangerouslySetInnerHTML={{
              __html: String(project?.projectSummary),
            }}
          ></p>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between  gap-8 items-center">
          <div className="md:w-6/12 w-full">
            <p className="">
              Providing a mobile first developement; with focus on
              responsiveness and speed
            </p>
            <img src="/assets/bsl/bsl_web2.png" alt="bsl" />
          </div>
          <div className="flex flex-row justify-between md:w-6/12 w-full gap-5 border">
            {project?.mobileImages &&
              project.mobileImages.map((img, _x) => (
                <Image
                  src={img}
                  blurDataURL={img}
                  alt={project.projectTitle}
                  className="w-full rounded-[20px]"
                  placeholder="blur"
                  layout="intrinsic"
                  objectFit="fill"
                  height={1632}
                  width={862}
                />
              ))}
          </div>
        </div>

        {/* tech stacks used */}
        <div>
          <h1 className="text-2xl">Tech Stacks Used</h1>
          <div className="flex gap-4 overscroll-contain flex-wrap">
            {project?.techStacks &&
              project.techStacks.map((stack, _x) => (
                <SingleTechStack key={_x} value={stack} />
              ))}
          </div>
        </div>
      </main>
    </Container>
  );
}
