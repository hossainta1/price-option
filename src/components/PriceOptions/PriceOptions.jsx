import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 20,
      currency: "USD",
      duration: "Monthly",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "1 fitness assessment per month",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 40,
      currency: "USD",
      duration: "Monthly",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "4 fitness assessments per month",
        "Group fitness classes",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 70,
      currency: "USD",
      duration: "Monthly",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "Unlimited fitness assessments",
        "Group fitness classes",
        "Personal training (4 sessions/month)",
        "Access to spa and sauna",
      ],
    },
    {
      id: 4,
      name: "Annual Membership",
      price: 400,
      currency: "USD",
      duration: "Yearly",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "12 personal training sessions per year",
        "Group fitness classes",
        "Access to spa and sauna",
        "Exclusive member events",
      ],
    },
    {
      id: 5,
      name: "Day Pass",
      price: 10,
      currency: "USD",
      duration: "One Day",
      features: ["Access to gym equipment", "Locker facility"],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best price in the Town</h2>
      <div className="grid grid-cols-5 gap-6">
        {
        priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))
        
        }
      </div>
    </div>
  );
};

export default PriceOptions;
