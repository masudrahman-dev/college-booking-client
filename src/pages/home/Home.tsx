import { Heading } from "@chakra-ui/react";
import CollegeCardSection from "./sections/CollegeCardSection";
import ImageGallerySection from "./sections/ImageGallerySection";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <CollegeCardSection />
      <Heading className="my-20 text-center">Image Gallary</Heading>
      <ImageGallerySection />
    </div>
  );
};

export default Home;
