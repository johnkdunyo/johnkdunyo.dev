import Container from "@/components/Layouts/Container";
import Image from "next/legacy/image";
import MyProjects from "@/data/projectData";
import Link from "next/link";

interface SingleProjectProp {
  imgURL: string;
  title: string;
  shortDescription: string;
  id: number;
}

interface ButtonLinkProps {
  href: string;
  text: string;
}

const ButtonLink = ({ href, text }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      // target="_blank"
      // rel="noreferrer"
      className={`group inline-flex items-center rounded-full px-6 py-1.5 font-semibold transitionbg-midnight text-white dark:bg-gray-200 dark:text-midnight hover:bg-slate-700 bg-midnight no-underline`}
    >
      {text}
      <svg
        className={`mt-0.5 ml-2 -mr-1 stroke-2 stroke-white dark:stroke-midnight`}
        fill="none"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        aria-hidden="true"
      >
        <path
          className="transition opacity-0 group-hover:opacity-100"
          d="M0 5h7"
        ></path>
        <path
          className="transition group-hover:translate-x-[3px]"
          d="M1 1l4 4-4 4"
        ></path>
      </svg>
    </Link>
  );
};

const SingleProject = ({
  imgURL,
  title,
  shortDescription,
  id,
}: SingleProjectProp) => {
  const isEven = id % 2 === 0;
  return (
    <>
      {isEven ? (
        <div
          className={`relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-purple-50 dark:from-purple-900/50 dark:to-fuchsia-700 to-fuchsia-300 dark:border-slate-700 border-slate-100 h-full`}
        >
          <div
            className={`w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-300 dark:via-fuchsia-600 to-transparent`}
          ></div>
          <div className="flex justify-between flex-col md:flex-row p-4 gap-10">
            <div className="order-last m-5 border items-end flex">
              <Image
                objectFit="fill"
                src={imgURL}
                placeholder="blur"
                blurDataURL={imgURL}
                width={1204}
                height={739}
                layout="intrinsic"
                alt={"Bundle, LLC on a Macbook Pro"}
              />
            </div>

            <div className=" flex justify-end items-end ">
              <div className="text-center md:text-left m-4 ">
                <h2 className="mt-0">{title}</h2>
                <p>{shortDescription}</p>
                <ButtonLink text="Visit Project" href={`/projects/${id}`} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-slate-50 dark:from-slate-800 dark:to-blue-900 to-blue-300 dark:border-slate-700 border-slate-100">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent"></div>
          <div className="flex justify-between flex-col md:flex-row p-4 gap-10">
            <div className="order-last m-5  border items-end flex">
              <Image
                objectFit="fill"
                src={imgURL}
                placeholder="blur"
                blurDataURL={imgURL}
                width={1204}
                height={739}
                layout="intrinsic"
                alt={"Bundle, LLC on a Macbook Pro"}
              />
            </div>

            <div className=" flex justify-end items-end ">
              <div className="text-center md:text-left m-4 ">
                <h2 className="mt-0">{title}</h2>
                <p>{shortDescription}</p>
                <ButtonLink text="Visit Project" href={`/projects/${id}`} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function Projects() {
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
        <SingleProject
          title="Project Name"
          shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,"
          imgURL="/bsl-final.png"
          id={0}
        />
      </div>
    </Container>
  );
}
