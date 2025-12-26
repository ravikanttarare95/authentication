import { Camera } from "lucide-react";
import { useEffect, useState } from "react";

function Profile() {
  const [signUpData] = useState(JSON.parse(localStorage.getItem("signUpData")));

  return (
    <div className=" h-[680px]  w-96 mt-6 py-10 gap-3.5 flex flex-col mx-auto shadow-md border border-gray-200  rounded bg-white">
      <div className="px-6 py-1 ">
        <h2 className="text-lg font-semibold text-gray-700">
          Account Settings
        </h2>
      </div>

      <div className="px-6 py-5 bg-gray-100 border-b-2 border-gray-300 border-dashed">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />

            <button className="absolute bottom-1 -right-2 bg-indigo-500 p-1.5 rounded-full">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-800">
              {signUpData.name}
            </h3>
            <p className="text-sm text-gray-600">{signUpData.email}</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Profile;
