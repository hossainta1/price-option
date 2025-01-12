import axios from "axios";
import React, { useEffect, useState } from "react";
import { BarChart, Bar } from "recharts";

const Phones = () => {
  const [phones, setPhone] = useState([]);

  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => setPhone(data.data))
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-"[1])),
          };

          return obj;
        });

        setPhone(phonesWithFakeData);
      });
  }, []);
  return (
    <div>
      <h2 className="text-5xl">Phones: {phones.length}</h2>
      <BarChart width={600} height={400} data={phones}>
        <Bar dataKey="price" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Phones;
