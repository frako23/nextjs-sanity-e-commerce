import Image from "next/image";
import { Hero } from "./component/Hero";
import { Newest } from "./component/Newest";

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
    </div>
  );
}
