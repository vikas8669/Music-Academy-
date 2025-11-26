import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "images.unsplash.com",
      "artiumacademy.com",
      "www.schoolofrock.com",
      "www.themusicschoolbangalore.com",
      "www.technologynetworks.com",
      "www.levelsmusicproduction.com",
      "www.jmcacademy.edu.au",
      "www.uwl.ac.uk",
      "www.radioart.com",
      "www.groove3.com"
    ]

  }
};

export default nextConfig;
