"use client";

import Link from "next/link";
import React, { ReactNode, useCallback } from "react";

import Image from "next/image";

interface CustomLinkProps {
  href: string;
  children: ReactNode;
}

const CustomLink = ({ href, children }: CustomLinkProps) => {
  let [imagePreview, setImagePreview] = React.useState("");
  let [isHovering, setIsHovering] = React.useState(false);
  let inImagePreview = false;
  let inLink = false;

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  let handleMouseEnterImage = () => {
    inImagePreview = true;
    setIsHovering(true);
  };

  let handleMouseLeaveImage = () => {
    inImagePreview = false;
    setIsHovering(inLink);
  };

  let handleMouseEnterLink = () => {
    inLink = true;
    setIsHovering(true);
  };

  let handleMouseLeaveLink = () => {
    inLink = false;
    setIsHovering(inImagePreview);
  };

  let handleFetchImage = useCallback(
    async (url: string) => {
      const res = await fetch(`${origin}/api/link-preview?url=${url}`);
      const data = await res.json();
      setImagePreview(data.image);
    },
    [origin]
  );

  React.useEffect(() => {
    handleFetchImage(href);

    return () => setImagePreview("");
  }, [href, handleFetchImage]);

  return (
    <span>
      <span className="relative z-10 hidden md:inline-block">
        <Link
          href={href}
          className={`${isHovering && "underline"}`}
          onMouseEnter={handleMouseEnterLink}
          onMouseLeave={handleMouseLeaveLink}
          onFocus={handleMouseEnterLink}
          onBlur={handleMouseLeaveLink}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </Link>
        {isHovering && (
          <Link href={href} passHref>
            <span
              className="w-56 h-44 absolute top-[-195px] left-1/2 transform -translate-x-[7rem] translate-y-8 flex items-start justify-center"
              onMouseLeave={handleMouseLeaveImage}
              onMouseEnter={handleMouseEnterImage}
              onFocus={handleMouseEnterImage}
              onBlur={handleMouseLeaveImage}
            >
              {imagePreview ? (
                <Image
                  fill
                  className="object-cover object-top w-56 h-40 bg-white rounded-md shadow-lg hover:ring-4 hover:ring-emerald-400"
                  src={imagePreview}
                  alt={String(children)}
                />
              ) : (
                <span className="flex items-center justify-center w-56 h-40 bg-white rounded-md shadow-lg text-slate-800">
                  Loading...
                </span>
              )}
            </span>
          </Link>
        )}
      </span>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${isHovering && "underline"} md:hidden`}
        onMouseEnter={handleMouseEnterLink}
        onMouseLeave={handleMouseLeaveLink}
        onFocus={handleMouseEnterLink}
        onBlur={handleMouseLeaveLink}
      >
        {children}
      </a>
    </span>
  );
};

export default CustomLink;
