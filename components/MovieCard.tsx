/* eslint-disable @next/next/no-img-element */
import React from "react";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        className="
        cursor-pointer
        object-cover
        transition
        durantion
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        w-full
        h-[12vw]
      "
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
    </div>
  );
};

export default MovieCard;
