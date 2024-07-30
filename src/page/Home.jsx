import React from "react";

import {
  About,
  Banner,
  NiggaEcosystem,
  // Presale,
  SocialSection,
  Timeline,
} from "../components";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      {/* <Presale /> */}
      <Timeline />
      <NiggaEcosystem />
      <SocialSection />
    </>
  );
}
