import { Heading } from "@chakra-ui/react";
import CollegeCards from "./sections/CollegeCards";
import ImageGallery from "./sections/ImageGallery";
import ResearchPapers from "./sections/ResearchPapers";
import Reviews from "./sections/Reviews";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <CollegeCards />
      <Heading className="my-20 text-center">Image Gallary</Heading>
      <ImageGallery />
      <Heading className="my-20 text-center">Research Papers</Heading>
      <ResearchPapers />
      <Heading className="my-20 text-center"> Reviews</Heading>
      <Reviews />
    </div>
  );
};

export default Home;
