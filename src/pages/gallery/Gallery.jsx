import React, { useEffect } from "react";
import InstagramGallery from "./InstagramGallery";

// InstagramGallery from https://codesandbox.io/s/pw363kq3nm?file=/src/index.js:0-535

export function Gallery() {
  // This can be retrieved with a GET https://www.instagram.com/web/search/topsearch/?context=blended&query=INSTAGRAM_USERNAME
  const INSTAGRAM_ID = "7129949213";
  const THUMBNAIL_WIDTH = 640;
  const PHOTO_COUNT = 60;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <InstagramGallery
      userId={INSTAGRAM_ID}
      thumbnailWidth={THUMBNAIL_WIDTH}
      photoCount={PHOTO_COUNT}
    />
  );
}
