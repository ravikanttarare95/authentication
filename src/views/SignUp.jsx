import MainHeading from "./../components/MainHeading.jsx";
import InputComp from "./../components/InputComp.jsx";
import Button from "./../components/Button.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
function SignUp() {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [signUpData, setSignUpData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    companyName: "",
  });

  const onInputchange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = () => {
    localStorage.setItem("signUpData", JSON.stringify(signUpData));
    setSignUpData({
      name: "",
      number: "",
      email: "",
      password: "",
      companyName: "",
    });
    toast.success("Account Created Successfully");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  useEffect(() => {
    if (
      !signUpData.name ||
      !signUpData.number ||
      !signUpData.email ||
      !signUpData.password ||
      !signUpData.companyName
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [signUpData]);

  return (
    <>
      <div className=" h-[680px]  w-96 mt-6 px-5 py-10 gap-3.5 flex flex-col mx-auto shadow-md border border-gray-200  rounded bg-white">
        <MainHeading
          headingTitle={"Create your PopX account"}
          customHeadStyle={"w-56"}
        />
        <form
          className="flex flex-col gap-3.5  h-[500px] "
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <InputComp
            type={"text"}
            id={"input-name"}
            name={"name"}
            placeholder={"Ravikant Tarare"}
            inputLegend={"Full Name"}
            isMandatory={true}
            value={signUpData.name}
            onchange={onInputchange}
          />
          <InputComp
            type={"number"}
            id={"input-number"}
            name={"number"}
            min={1}
            max={9999999999}
            placeholder={"8275957698"}
            inputLegend={"Phone number"}
            isMandatory={true}
            value={signUpData.number}
            onchange={onInputchange}
          />
          <InputComp
            type={"email"}
            id={"input-email"}
            name={"email"}
            placeholder={"ravikanttarare2001@gmail.com"}
            inputLegend={"Email address"}
            isMandatory={true}
            value={signUpData.email}
            onchange={onInputchange}
          />
          <InputComp
            type={"password"}
            id={"input-password"}
            name={"password"}
            placeholder={""}
            inputLegend={"Password"}
            isMandatory={true}
            value={signUpData.password}
            onchange={onInputchange}
          />
          <InputComp
            type={"text"}
            id={"input-company-name"}
            name={"companyName"}
            placeholder={"Company name"}
            inputLegend={"Company name"}
            isMandatory={false}
            value={signUpData.companyName}
            onchange={onInputchange}
          />
          <Button
            type={"submit"}
            btnTitle={"Create Account"}
            btnVariant={"primary"}
            customStyle={"mt-auto"}
            size="md"
            isDisabled={isDisabled}
          />
        </form>
      </div>
    </>
  );
}

export default SignUp;
