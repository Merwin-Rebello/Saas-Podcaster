import React from "react";
import Image from "next/image";
const PodcastCard = ({
  imgURL,
  title,
  description,
  podcastID,
}: {
  podcastID: number;
  title: string;
  description: string;
  imgURL: string;
}) => {
  return (
    <div className="cursor-point">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgURL}
          width={174}
          height={174}
          alt={title}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div>
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
