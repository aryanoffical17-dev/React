
import React from "react";
import Left from "./Left";
import Right from "./Right";

const Page1Content = () => {
  return (
    <main className="min-h-[87vh] px-[4%] py-10">
      <div className="grid min-h-[79vh] grid-cols-[1fr_2fr] gap-10">

        <Left />

        <Right />

      </div>
    </main>
  );
};

export default Page1Content;
