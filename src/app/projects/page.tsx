import Container from "@/components/Layouts/Container";
import Image from "next/legacy/image";

interface ButtonLinkProps {
  href: string;
  text: string;
}

const ButtonLink = ({ href, text }: ButtonLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
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
    </a>
  );
};

const SingleProjectType1 = () => {
  return (
    <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-purple-50 dark:from-purple-900/50 dark:to-fuchsia-700 to-fuchsia-300 dark:border-slate-700 border-slate-100">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-300 dark:via-fuchsia-600 to-transparent"></div>
      <div className="grid grid-cols-1 min-h-[500px] max-h-[500px] md:grid-cols-2">
        <div className="md:w-[650px] max-h-[500px]">
          <Image
            className="absolute bottom-20 md:bottom-0 md:-left-16"
            objectFit="fill"
            src="https://res.cloudinary.com/braydoncoyer/image/upload/v1638225420/pomegradient_ipadpro_vhapql.png"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1638225420/pomegradient_ipadpro_vhapql.png"
            width={1978}
            height={1713}
            layout="intrinsic"
            alt={"NgLimeade on an iPad"}
          />
        </div>
        <div className="self-end order-first col-span-1 m-8 text-center md:order-last md:text-left">
          <h2 className="mt-0">Sample Project1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <ButtonLink text="Visit Sample Project1" href="/singleproject" />
        </div>
      </div>
    </div>
  );
};

const SingleProjectType2 = () => {
  return (
    <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-slate-50 dark:from-slate-800 dark:to-blue-900 to-blue-300 dark:border-slate-700 border-slate-100">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent"></div>
      <div className="grid grid-cols-1 min-h-[500px] md:grid-cols-2">
        <div className="self-end col-span-1 m-8 text-center md:text-left">
          <h2 className="mt-0">Sample Project 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <ButtonLink text="Sample Project 2" href="/singleproject" />
        </div>
        <div className="md:absolute md:top-4 md:right-[-200px] md:w-[800px]">
          <Image
            objectFit="fill"
            src="https://res.cloudinary.com/braydoncoyer/image/upload/v1638221102/mbpro_bundle_site_zg8jbe.png"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1638221102/mbpro_bundle_site_zg8jbe.png"
            width={900}
            height={552}
            layout="intrinsic"
            alt={"Bundle, LLC on a Macbook Pro"}
          />
        </div>
      </div>
    </div>
  );
};

const SingleProjectType3 = () => {
  return (
    <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-slate-50 dark:from-slate-800 dark:to-blue-900 to-blue-300 dark:border-slate-700 border-slate-100">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent"></div>
      <div className="grid grid-cols-1 min-h-[500px] md:grid-cols-2">
        <div className="self-end col-span-1 m-8 text-center md:text-left">
          <h2 className="mt-0">Sample Project 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <ButtonLink text="Sample Project 2" href="/singleproject" />
        </div>
        <div className="md:absolute md:top-4 md:right-[-200px] md:w-[800px]">
          <Image
            objectFit="fill"
            src="/bsl-final.png"
            placeholder="blur"
            blurDataURL="/bsl-final.png"
            width={1204}
            height={739}
            layout="intrinsic"
            alt={"Bundle, LLC on a Macbook Pro"}
          />
        </div>
      </div>
    </div>
  );
};

interface SingleProjectProp {
  imgURL: string;
  title: string;
  shortDescription: string;
  href?: string;
}

const SingleProjectType4 = ({
  imgURL,
  title,
  shortDescription,
  href = "/singleproject",
}: SingleProjectProp) => {
  return (
    <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-purple-50 dark:from-purple-900/50 dark:to-fuchsia-700 to-fuchsia-300 dark:border-slate-700 border-slate-100 h-full">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-300 dark:via-fuchsia-600 to-transparent"></div>
      <div className="flex justify-between flex-col md:flex-row p-4 gap-10">
        <div className="order-last m-5">
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

        <div className="border flex justify-end items-end ">
          <div className="text-center md:text-left m-4 ">
            <h2 className="mt-0">{title}</h2>
            <p>{shortDescription}</p>
            <ButtonLink text="Visit Sample Project1" href={href} />
          </div>
        </div>
      </div>
    </div>
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

      <div className="flex flex-col gap-5">
        <SingleProjectType1 />
        <SingleProjectType2 />
        <SingleProjectType3 />
        <SingleProjectType4
          title="Project Name"
          shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,"
          imgURL="/bsl-final.png"
        />
      </div>
    </Container>
  );
}
