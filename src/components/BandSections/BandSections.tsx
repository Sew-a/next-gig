"use client";
import { BandHero } from "./BandHero";
import { BandGallery } from "./BandGallery";
import { BandGrid } from "./BandGrid";
import "./styles.scss";

const BandSections = () => {
  return (
    <div className="band-sections">
      <BandHero />
      <BandGallery />
      <BandGrid />
    </div>
  );
};

export default BandSections;
