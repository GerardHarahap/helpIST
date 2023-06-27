"use client";
import { useState } from "react";

const Accordion = ({ data }) => {
  return (
    <div className="accordion p-5">
      {data.map(({ header, body }, key) => (
        <AccordionItem header={header} body={body} key={key} />
      ))}
    </div>
  );
};

const AccordionItem = ({ header, body }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion-item bg-white">
      <div
        onClick={() => setShow(!show)}
        className="accordion-header flex justify-between p-5 border text-base select-none rounded-lg font-semibold cursor-pointer hover:bg-gray-100"
      >
        <span>{header}</span>
        <span> {show ? "▽" : "△"} </span>
      </div>

      {show ? (
        <p className="accordion-body p-5 border text-base rounded-lg leading-relaxed">
          {body}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Accordion;
