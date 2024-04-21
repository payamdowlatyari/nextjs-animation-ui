import Features from "./components/ui/Features";
import Hero from "./components/ui/Hero";

export default function Home() {
  return (
    <div className="h-[80rem] w-full rounded-md flex flex-col md:items-center md:justify-around bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Hero />
      <Features />
    </div>
  );
}
