import React from "react";
import "./Info.css";
import Card from "./Card";

export default function Info() {
  return (
    <div className="recommended">
      <h2 className="sano">Dashboard Information</h2>
      <div className="recommmended__videocard">
        <Card title="Active Elections" number="1"/>
        <Card title="Active Voters" number="1" />
        <Card title="Total Elections" number="1" />
        <Card title="Register Voters" number="1" />
        {/* <Card title="Constituencies" number="1" /> */}
      </div>
    </div>
  );
}
