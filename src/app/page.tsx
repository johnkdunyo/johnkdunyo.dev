"use client";

import { ButtonType, SubscribeSize } from "@/lib/types";
import Image from "next/image";
import Container from "@/components/Layouts/Container";
import siteMetadata from "@/data/siteMetaData";
import Button from "@/components/uis/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  return (
    <Container>
      <div>
        <div>
          <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
            <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
              I'm <span className="text-teal-500 dark:text-teal-400">John</span>
              . I'm a software developer....
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
              onButtonClick={() => push("/blog")}
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
        <hr className="hr"></hr>
      </div>
    </Container>
  );
}
