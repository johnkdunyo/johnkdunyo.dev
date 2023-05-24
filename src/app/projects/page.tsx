"use client";
import Container from "@/components/Layouts/Container";
import MyProjects from "@/data/projectData";

import { OtherProjectsCard, SingleProject } from "./Components";
import { useState } from "react";
import Button from "@/components/uis/Button";
import { ButtonType } from "@/lib/types";

export default function Projects() {
  const [viewMore, setViewMore] = useState(false);
  return (
    <Container ttitle="Projects - Jon Dexter">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          Projects
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          A selection of my favorite works.
        </span>
      </h1>

      <div className="flex flex-col gap-10">
        {MyProjects &&
          MyProjects.map((project) => (
            <SingleProject
              key={project.id}
              title={project.projectTitle}
              shortDescription={project.shortDescription}
              imgURL={project.mainImageURL}
              id={project.id}
            />
          ))}

        <div>
          {!viewMore && (
            <Button
              buttonType={ButtonType.SECONDARY}
              onButtonClick={() => setViewMore((prev) => !prev)}
            >
              View more
            </Button>
          )}
          <div
            className={`grid grid-cols-1 md:grid-cols-2  gap-12 mt-10 ${
              !viewMore && "hidden"
            } `}
          >
            <OtherProjectsCard
              title="MorePlex Eskills Platform"
              shortDescription="A platform for eskills learning for the Moreplex startup"
              imgURLs={["/assets/moreplex-eskills/1.jpeg"]}
              projectURL="https://eskills.moreplexgh.com"
            />
            <OtherProjectsCard
              title="BSL Lunch App"
              shortDescription="A custom lunch ordering application for the BSL group"
              imgURLs={["/assets/lunchapp/1.jpeg", "/assets/lunchapp/2.png"]}
              projectURL="https://bsl-lunchapp.netlify.app/"
            />

            <OtherProjectsCard
              title="Math the Pairs"
              shortDescription="A simple react application to match the pairs"
              imgURLs={[
                "/assets/matchpairs/1.png",
                "/assets/matchpairs/2.png",
                "/assets/matchpairs/3.png",
              ]}
              projectURL="https://matchthepairs.netlify.app/"
            />
          </div>

          {viewMore && (
            <div className="mt-10 ">
              <Button
                buttonType={ButtonType.SECONDARY}
                onButtonClick={() => setViewMore((prev) => !prev)}
              >
                View Less
              </Button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
