import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navBar";
import Home from "@/pages/home";

export default async function HomePage() {


  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <Home />


    </div>
  );
}
