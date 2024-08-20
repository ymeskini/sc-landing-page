import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import { HeroSection } from "../components/sections/HeroSection";
import Layout from "../components/layout";
import { SEO } from "../components/layout/SEO";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO title="Home" description="The best design and code resources on the web." pathname="/" />
);
