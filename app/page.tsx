import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-(--background) text-(--foreground)">
      <Hero />
      <Footer />
    </main>
  );
}
