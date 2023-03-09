import React from "react";
import { styles } from "../styles";
import PortalGunCanvas from "./canvas/PortalGun";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute insert-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      ></div>
      <PortalGunCanvas/>
    </section>
  );
};

export default Hero;
