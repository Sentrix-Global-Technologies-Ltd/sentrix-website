import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Problem from "@/components/home/Problem";
import Ecosystem from "@/components/home/Ecosystem";
import Capabilities from "@/components/home/Capabilities";
import SolutionsTeaser from "@/components/home/SolutionsTeaser";
import IndustriesTeaser from "@/components/home/IndustriesTeaser";
import CtaBand from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Problem />
      <Ecosystem />
      <Capabilities />
      <SolutionsTeaser />
      <IndustriesTeaser />
      <CtaBand />
    </>
  );
}
