import React from "react";
import Card from "./Card";

function Project() {
  const cardData = [
    {
      id: 1,
      title: "Project 1",
      description: "Password Generator",
      status: "In Progress",
      // status: "Complete",
    },
    {
      id: 2,
      title: "Project 2",
      description: "To-Do List",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Expense Tracker",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Project 4",
      description: "Location Weather",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Project 5",
      description: "Currency Converter",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Project 6",
      description: "MCQ Quiz",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Project 7",
      description: "Tic Tac Toe",
      status: "In Progress",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 sm:grid-cols-2">
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </dl>
    </div>
  );
}

export default Project;
