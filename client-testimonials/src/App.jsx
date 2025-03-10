import React from "react";
import TestimonialCard from "./Components/TestimonialCard";

const App = () => {
  const services = [
    {
      name: "Emily Watson",
      description: "This service was amazing! Highly recommended",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "John",
      description: "This is okayish! not highlhy recomended",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dhanush",
      description:
        "Yes This Service is Good and amazing it is recomended highly",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="flex flex-row justify-center items-center flex-wrap">
      {services.map((service, index) => (
        <TestimonialCard
          image={service.image}
          name={service.name}
          description={service.description}
          key={index}
        />
      ))}
    </div>
  );
};

export default App;
