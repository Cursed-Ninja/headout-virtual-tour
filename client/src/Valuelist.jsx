import React from "react";
import Value from "./Value";
import Values from "./Values";

export default function ValueList() {
  return (
    <div className="flex justify-evenly mt-10">
      {Values.map((value) => (
        <Value
          key={value.id}
          icon={value.icon}
          heading={value.heading}
          para={value.para}
        />
      ))}
    </div>
  );
}
