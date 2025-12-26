import React from "react";

function MainHeading({ headingTitle, headingDescription, customHeadStyle }) {
  return (
    <div>
      <h1 className={`${customHeadStyle} text-[29px] font-bold mb-1.5 tracking-wide`}>
        {headingTitle}
      </h1>
      {headingDescription && (
        <p className="text-gray-500 w-64 text-[19.3px]">{headingDescription}</p>
      )}
    </div>
  );
}

export default MainHeading;
