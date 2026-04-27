import BestSellingItems from "@/component/Home/BestSellingItems";
import HeroSlider from "@/component/Home/HeroSlider";
import LatestItems from "@/component/Home/LatestItems";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <BestSellingItems />
      <LatestItems />
    </div>
  );
}
