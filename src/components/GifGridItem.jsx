import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="gifgriditem animate__fadeIn">
      <img src={url} alt={title} />
    </div>
  );
};
