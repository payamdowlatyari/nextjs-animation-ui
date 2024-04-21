import { TypewriterEffect } from "./typewriter-effect";

export default function Hero() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
      <TypewriterEffect words={words} />
      <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Spotlight effect is a great way to draw attention to a specific part of
        the page. Here, we are drawing the attention towards the text section of
        the page. I don&apos;t know why but I&apos;m running out of copy.
      </p>
    </div>
  );
}
