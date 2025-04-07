import React from "react";

export function Hotel() {
  const vegItems = [
    "Paneer Butter Masala",
    "Vegetable Biryani",
    "Palak Paneer",
    "Aloo Gobi",
    "Dal Tadka"
  ];

  const nonVegItems = [
    "Chicken Biryani",
    "Butter Chicken",
    "Mutton Rogan Josh",
    "Fish Curry",
    "Chicken Tikka Masala"
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold text-yellow-300 mb-2">Vegetarian Dishes</h2>
        <ul className="list-disc list-inside space-y-1">
          {vegItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-yellow-300 mb-2">Non-Vegetarian Dishes</h2>
        <ul className="list-disc list-inside space-y-1">
          {nonVegItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
