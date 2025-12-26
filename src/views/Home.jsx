import MainHeading from "./../components/MainHeading.jsx";
import Button from "./../components/Button.jsx";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" h-[680px]  w-96 mt-6 px-5 py-10 flex flex-col justify-end mx-auto shadow-md border border-gray-200  rounded bg-white">
        <MainHeading
          headingTitle={"Welcome to PopX"}
          headingDescription={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
        />
        <div className="flex flex-col gap-2.5 mt-8">
          <Button
            type={"button"}
            btnTitle={"Create Account"}
            btnVariant={"primary"}
            size="md"
            onBtnClick={() => {
              navigate("/sign_up");
            }}
          />
          <Button
            type={"button"}
            btnTitle={"Already Registered? Login"}
            btnVariant={"secondary"}
            size="md"
            onBtnClick={() => {
              navigate("/login");
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
