import React from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading ? <p>Loading...</p> : null}
      <div className="gifgrid">
        {data.map((img) => (
          <GifGridItem img={img} key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
