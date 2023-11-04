import React from "react";
import Value from "./Value";
import Values from "./Values";

export default function ValueList() {
  return (
    <div className="flex justify-between mt-10 mx-[90px]">
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
