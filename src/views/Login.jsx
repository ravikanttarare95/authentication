import { useEffect, useState } from "react";
import MainHeading from "./../components/MainHeading.jsx";
import InputComp from "./../components/InputComp.jsx";
import Button from "./../components/Button.jsx";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setloginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    const signUpData = JSON.parse(localStorage.getItem("signUpData"));
    if (
      loginData.email !== signUpData.email ||
      loginData.password !== signUpData.password
    ) {
      toast.error("Please enter valid credentials");
    }

    toast.success("Login Successfull");

    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  useEffect(() => {
    if (!loginData.email || !loginData.password) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [loginData]);
  return (
    <>
      <div className=" h-[680px]  w-96 mt-6 px-5 py-10 gap-3.5 flex flex-col mx-auto shadow-md border border-gray-200  rounded bg-white">
        <MainHeading
          headingTitle={"Signin to your PopX account"}
          customHeadStyle={"w-56"}
          headingDescription={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          }
        />
        <form
          className="flex flex-col gap-3.5"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <InputComp
            type={"email"}
            name="email"
            id={"input-email"}
            placeholder={"Enter email address"}
            inputLegend={"Email Address"}
            isMandatory={false}
            value={loginData.email}
            onchange={onInputChange}
          />
          <InputComp
            type={"password"}
            id={"input-password"}
            name="password"
            placeholder={"Enter password"}
            inputLegend={"Password"}
            isMandatory={false}
            value={loginData.password}
            onchange={onInputChange}
          />
          <Button
            type={"submit"}
            btnTitle={"Login"}
            btnVariant={"primary"}
            isDisabled={isDisabled}
          />
        </form>
      </div>
    </>
  );
}

export default Login;
