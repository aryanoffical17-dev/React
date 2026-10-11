
import React from "react";
import Left from "./Left";
import Right from "./Right";

const Page1Content = (props) => {
  return (
    <main className="min-h-[87vh] px-[4%] py-6 sm:py-10">
      <div className="grid min-h-[79vh] grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)] lg:gap-10">

        <Left />

        <Right users={props.users}/>

      </div>
    </main>
  );
};

export default Page1Content;
