import React from "react";
import { carouselData } from "@/lib/mockData";
import Image from "next/image";
import { Button } from "../button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";

export default function HeroCarousel() {
  return (
    <Carousel className="bg-[#F2D2D3] w-full h-auto rounded-lg">
      <CarouselContent className="">
        {carouselData?.map((item) => (
          <CarouselItem className="" key={item?.id}>
            <div className="flex justify-between ">
              <div className="sm:w-6/12 flex flex-col justify-center sm:px-12 px-4">
                <p className="sm:text-5xl text-md font-bold leading-5">
                  {item.title}
                </p>
                {item?.children?.map((child) => (
                  <div key={child?.id}>
                    <p className="sm:my-12 my-4 sm:text-3xl text-xs font-light">
                      {child.desc}
                    </p>
                    <Button variant={"cyan"} size={"lg"}>
                      {child.cta}
                    </Button>
                  </div>
                ))}
              </div>
              <Image
                src={item.img}
                alt={item.title}
                width={650}
                height={300}
                className="mt-5 sm:w-6/12 w-64"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
