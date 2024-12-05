import HeroSection from '@/components/home/HeroSection';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import NewArrivals from '@/components/home/NewArrivals';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCategories />
      <NewArrivals />
    </main>
  );
}