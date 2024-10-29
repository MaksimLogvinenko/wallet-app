"use client";
import React from 'react';
//COMPONENTS
import CardBalance from "@/components/cardBalance";
import DailyPoints from "@/components/dailyPoints";
import PaymentCard from "@/components/paymentCard";
import BrandList from "@/components/brandList";

type Brand = {
  id: number;
  img: string;
  percent?: number;
  profit: string;
  text: string;
  title: string;
  status: string;
  date: string;
  user?: string;
};

export default function Home() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const [brands, setBrands] = React.useState<Brand[]>([]);


  React.useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch('http://localhost:3004/brands');
        const data = await res.json();
        setBrands(data);
      } catch (error) {
        console.error("Error loading brands:", error);
        setError("Error loading brands!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return (
    <>
      <main className="py-5">
        <section>
          <div className="container">
            <div className="flex flex-col">
              <div className="grid grid-cols-2 grid-rows-2 gap-3 mb-8">
                <CardBalance />
                <DailyPoints />
                <PaymentCard />
              </div>

              <h2 className="text-2xl font-bold mb-2">Latest Transactions</h2>
              <BrandList brands={brands} isLoading={isLoading} error={error} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
