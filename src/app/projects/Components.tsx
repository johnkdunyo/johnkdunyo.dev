"use client";

import Image from "next/image";
import Link from "next/link";

import SwiperCore, { Autoplay, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ButtonLinkProps {
  href: string;
  text: string;
}

interface SingleProjectProp {
  imgURL: string;
  title: string;
  shortDescription: string;
  id: number;
}

interface OtherProjectsCardProps {
  imgURLs: string[];
  title: string;
  shortDescription: string;
  projectURL: string;
}

export const ButtonLink = ({ href, text }: ButtonLinkProps) => {
  return (
    <Link
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
    </Link>
  );
};

export const ButtonLink2 = ({ href, text }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className=" px-4 rounded-md cursor-pointer"
    >
      {text}
    </Link>
  );
};

export const SingleProject = ({
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
          <div className="flex justify-between flex-col md:flex-row p-4 gap-10 w-full">
            <div className="order-last m-5  items-end flex md:w-full">
              <Image
                objectFit="fill"
                src={imgURL}
                placeholder="blur"
                blurDataURL={imgURL}
                width={1204}
                height={739}
                layout="intrinsic"
                alt={"project image"}
              />
            </div>

            <div className=" flex justify-end items-end md:w-full">
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
            <div className="order-last m-5   items-end flex md:w-full">
              <Image
                objectFit="fill"
                src={imgURL}
                placeholder="blur"
                blurDataURL={imgURL}
                width={1204}
                height={739}
                layout="intrinsic"
                alt={"project image"}
              />
            </div>

            <div className=" flex justify-end items-end md:w-full">
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

export const OtherProjectsCard2 = ({
  imgURLs,
  title,
  shortDescription,
  projectURL,
}: OtherProjectsCardProps) => {
  return (
    <div className="flex items-center justify-center w-full   rounded-t-[20px] h-[20rem] ">
      <div className="relative block w-full h-full group ">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent"></div>
        <Swiper
          className="absolute  inset-0 h-full w-full  group-hover:opacity-50 flex flex-col justify-end pt-1"
          modules={[Autoplay, Navigation]}
          loop={true}
          mousewheel={true}
          autoplay={{
            delay: 2000,
          }}
          navigation={true}
          centeredSlides={true}
        >
          {imgURLs &&
            imgURLs.map((img, _x) => (
              <SwiperSlide key={_x}>
                <Image
                  src={img}
                  className=" h-full w-full  "
                  alt="images"
                  blurDataURL={img}
                  width={3456}
                  height={2234}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="relative p-10 h-full  inset-0text-center sm:text-left ">
          <div className="mt-2 h-full">
            <div
              className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0"
            >
              <div className="p-2  text-white h-full ">
                <h1 className="text-xl text-white">{title}</h1>
                <p>{shortDescription}</p>

                <ButtonLink href={projectURL} text="Visit Project" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute z-10  inset-0 rounded-t-[20px] h-full w-full  group-hover:opacity-50 flex flex-col justify-end  bg-cover ">
          <div className="border border-black py-1 px-2 text-lg transition-all transform group-hover:opacity-0 bg-gradient-to-r from-slate-500 to-blue-600 text-white">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export const OtherProjectsCard = ({
  imgURLs,
  title,
  shortDescription,
  projectURL,
}: OtherProjectsCardProps) => {
  return (
    <div className="relative  h-[17rem] sm:h-[20rem] w-full flex justify-between flex-col rounded-t-[25px] group">
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent"></div>
      <Swiper
        className="relative  inset-0  w-full  group-hover:opacity-50 flex flex-col justify-end  -mt-8 rounded-t-[25px]"
        modules={[Autoplay, Navigation]}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        centeredSlides={true}
      >
        {imgURLs &&
          imgURLs.map((img, _x) => (
            <SwiperSlide key={_x}>
              <Image
                src={img}
                className=" h-full w-full rounded-t-[25px] object-cover object-center"
                alt="images"
                blurDataURL={img}
                width={3456}
                height={2234}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="  w-full bottom-0 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 border-slate-600 h-1/12] ">
        <div className="px-2 text-white font-semibold tracking-wider">
          {title}
        </div>
      </div>

      <div className="absolute  bottom-0 h-[10rem] w-full z-20 transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 bg-gradient-to-b from-slate-50 dark:from-slate-800 dark:to-blue-900 to-blue-300 dark:border-slate-700 border-slate-100 ">
        <div className="px-2 pt-4  flex flex-col justify-center items-center text-center ">
          <h1 className="text-lg font-bold ">{title}</h1>
          <p className="text-base -mt-2">{shortDescription}</p>
          <div className="w-full flex justify-between">
            <ButtonLink2 text="Code" href="https://github.com/johnkdunyo" />
            <ButtonLink2 text="Demo" href={projectURL} />
          </div>
        </div>
      </div>
    </div>
  );
};
