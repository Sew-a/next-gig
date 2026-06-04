"use client";
import SearchBar from "@/components/SearchBar";
import "./styles.scss";
import ScrollCards from "../ScrollCards";

export default function PlaygroundPage() {
  return (
    <>
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
      <ScrollCards />
      <SearchBar />
      {/* <ApiExplorer /> */}
    </main>
    </>
  );
}
