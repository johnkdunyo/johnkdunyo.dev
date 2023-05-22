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
  console.log("debug id", id);
  const data = ProjectsData.find((project) => project.id == id);
  if (!data) {
    throw new Error("No data found");
  } else console.log("data", data);
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
  console.log("debug projectID", projectID);
  const projectData: Promise<ProjectData> = getProjectData(projectID);
  const project = await projectData;

  return (
    <Container title="Single Project Page">
      <main className="py-5 flex flex-col gap-8">
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
            src={project.mainImageURL}
            className="w-full md:w-3/4"
            alt={project.projectTitle}
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

        {project.mobileImages && (
          <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center  px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <img
                  src={project.desktopImages[0]}
                  alt="bsl"
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {project.mobileImages.map((img, _x) => (
                  <img
                    className="w-full rounded-[20px]"
                    src={img}
                    alt="mobile images"
                    key={_x}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {!project.mobileImages && (
          <section className="md:pt-10 ">
            <div className="  gap-x-20  items-center   mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  flex-wrap">
              {project.desktopImages.map((img, _x) => (
                <div className={` ${_x % 2 === 0 ? "md:mt-0" : "md:-mt-60"}`}>
                  <Image
                    alt={project.projectTitle}
                    src={img}
                    blurDataURL={img}
                    width={3456}
                    height={2234}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

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
