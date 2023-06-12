import React from "react";

import MainHomeScreen from "./MainHomeScreen";
import PremiumCollectionPage from "./PremiumCollectionPage";
import TopItems from "./TopItemsPage/TopItems";
import StoryBrand from "./StoryBrand/StoryBrand";
import Achievement from "./Achievement/Achievement";
import Reviews from "./Reviews/Reviews";
import FormLetter from "./FormLetter/FormLetter";
const HomePage = () => {
  return (
    <div>
      <MainHomeScreen />
      <PremiumCollectionPage />
      <TopItems />
      <StoryBrand />
      <Achievement />
      <Reviews />
      <FormLetter />
    </div>
  );
};

export default HomePage;
