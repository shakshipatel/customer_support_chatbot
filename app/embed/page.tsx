import React, { Suspense } from "react";
import EmbedWidget from "./EmbedWidget";

const EmbedPage = () => (
  <Suspense fallback={null}>
    <EmbedWidget />
  </Suspense>
);

export default EmbedPage;
