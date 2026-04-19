import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Integration from "@/components/landing/integration";
import Navbar from "@/components/landing/nav";
import Pricing from "@/components/landing/pricing";
import SocialProof from "@/components/landing/social";
import { isAuthorized } from "@/lib/isAuthorized";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const user = await isAuthorized();
  if (user) {
    redirect("/dashboard");
  }

  return (
    <div>
      <main className="w-full flex flex-col relative z-10">
        <Navbar />
        <Hero />
        <SocialProof />
        <Features />
        <Integration />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
};

export default page;
