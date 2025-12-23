import React from "react";

function MainHeading({ headingTitle, headingDescription }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold font-sans mb-1.5">
        {headingTitle}
      </h1>
      {headingDescription && (
        <p className="text-gray-500 w-50">{headingDescription}</p>
      )}
    </div>
  );
}

export default MainHeading;
