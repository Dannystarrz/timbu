import React from 'react'

export default function Button({buttonText}) {
  return (
    <>
      <button className="bg-[#FFB6C1] border-2 font-bold border-[#DE8C99] lg:px-7 lg:py-3 rounded-full">
        {buttonText || "Button Text"}
      </button>
    </>
  );
}
