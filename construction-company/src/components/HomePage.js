import React from "react";
import { Layout } from "./Layout";
import { Header } from "./Header";

import HomePageCard from "./HomePageCard";

export const HomePage = () => {
  return (
    <Layout>
      <div className='grid grid-cols-3 xl:grid-cols-4'>

        <Header/>
        <HomePageCard/>
      </div>
    </Layout>
  );
};
