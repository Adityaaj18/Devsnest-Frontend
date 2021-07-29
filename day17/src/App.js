import React from "react";
import Card from "./Card";

export default function App() {
  return (
    <div>
      <Card title="Pizza" info="you have consumed 56 cals today" />
      <Card title="Burger" info="you have consumed 69 cals today" />
      <Card title="Coke" info="you have consumed 500 cals today" />
      <Card title="Browne" info="you have consumed 789 cals today" />
      <Card title="Fried Rice" info="you have consumed 469 cals today" />
      <Card title="Lassania" info="you have consumed 79 cals today" />
    </div>
  );
}
