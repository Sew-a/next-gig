"use client";
import { useEffect } from "react";
import { useInitialStore } from "../../contexts/store";
import Image from "next/image";
import "./styles.scss";

const newData = [
  {
    imageSrc: "https://pbs.twimg.com/media/GmqrF5UaIAA_3rF.jpg",
    name: "Punks songs",
    article: "This is a sample The Punks group article.",
    relatedPics: [
      "https://f4.bcbits.com/img/a1538084436_2.jpg",
      "https://f4.bcbits.com/img/0004968017_10.jpg",
    ],
  },
];

const RelatedImages = ({ relatedImages }: { relatedImages: string[] }) => {
  if (!relatedImages.length) return null;

  return (
    <div className="related-images">
      {relatedImages.map((url, index) => (
        <Image
          key={index}
          src={url}
          alt="Related content"
          className="related-image"
          width={200}
          height={150}
        />
      ))}
    </div>
  );
};

export default function AppList() {
  const storedData = useInitialStore((state) => state.storedData);
  const setStoreData = useInitialStore((state) => state.setStoredData);

  // avoid setting state during render – run effect after mount
  useEffect(() => {
    setStoreData(newData);
  }, [setStoreData]);

  if (!storedData) {
    return null;
  }

  return (
    <section className="app-list-section">
      {storedData.map((dataItem) => (
        <div key={dataItem.imageSrc} className="app-card">
          <Image
            src={dataItem.imageSrc}
            alt={dataItem.name}
            className="card-image"
            width={700}
            height={700}
          />
          <div>
            <h2 className="card-title">{dataItem.name}</h2>
            <p className="card-description">{dataItem.article}</p>
            {dataItem.relatedPics && (
              <RelatedImages relatedImages={dataItem.relatedPics} />
            )}
          </div>
        </div>
      ))}
      <hr className="app-list-hr" />
    </section>
  );
}
