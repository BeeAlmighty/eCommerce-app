import React, { useContext } from "react";
import { AppContext } from "./context/Context";
import { Navbar } from "./components/Navbar";
import { SkeletonTheme } from "react-loading-skeleton";
import { BackToTopButton } from "./components/BackToTopButton";
import { GiSelfLove } from "react-icons/gi";
import { FaGithub } from "react-icons/fa6";
import { AnimatedPages } from "./components/AnimatedPages";

export const App = () => {
  const { state } = useContext(AppContext);
  return (
    <div
      className={`${
        state.isDark ? "bg-black text-white" : "bg-white text-black"
      } font-Aboreto`}>
      <SkeletonTheme
        baseColor={state.isDark ? "#313131" : "#e2e2e6"}
        highlightColor={state.isDark ? "#525252" : "#f5f5f5"}>
        <Navbar />
        <BackToTopButton />
        <AnimatedPages />
        <hr />
        <section className="flex flex-col gap-[1rem] min-lg:px-[7rem] min-[700px]:px-[3rem] min-xl:px-[10rem] pb-[3rem] font-CormorantU px-[1rem] py-[2rem] min-md:flex-row-reverse min-md:justify-between">
          <a href="https://www.github.com/beealmighty" target="_blank">
            <FaGithub className="text-[2rem]" />
          </a>
          <p className="flex items-center gap-1.5 text-[1.3rem]">
            Made with <GiSelfLove className="text-purple" /> By Lord Hendrixx
          </p>
        </section>
      </SkeletonTheme>
    </div>
  );
};
