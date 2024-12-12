import React from "react";

interface CustomHeadProps {
  //   image?: string;
  //   robots?: string;
  heading: string | undefined;
  desc?: string | undefined;
}

export default function CustomHead({
  //   image,
  //   robots,
  heading,
  desc,
}: CustomHeadProps) {
  return (
    <>
      <title>{heading}</title>
      <meta property="og:title" content={heading} />
      {/* <meta name="robots" content={robots ?? ""} /> */}
      {desc && <meta name="description" content={desc} />}
      <meta property="og:description" content={desc} />
      {/* <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={"Crafty Art Image"} /> */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
    </>
  );
}
