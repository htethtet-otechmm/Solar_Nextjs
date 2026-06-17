import BestSellingItems from "@/components/Home/BestSellingItems";
import HeroSlider from "@/components/Home/HeroSlider";
import LatestItems from "@/components/Home/LatestItems";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <BestSellingItems />
      <LatestItems />
    </div>
  );
}
