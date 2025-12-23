import { useState } from "react";
import MainHeading from "./../components/MainHeading.jsx";
import InputComp from "./../components/InputComp.jsx";
import Button from "./../components/Button.jsx";

function Login() {
  const [isDisabled, setIsDisabled] = useState(true);

  const onInputChange = () => {};

  return (
    <div>
      <MainHeading
        headingTitle={"Signin to your PopX account"}
        headingDescription={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
      />
      <InputComp
        type={"email"}
        placeholder={"Enter email address"}
        inputLegend={"Email Address"}
        isMandatory={true}
        onchange={onInputChange}
      />
      <InputComp
        type={"password"}
        placeholder={"Enter password"}
        inputLegend={"Password"}
        isMandatory={true}
        onchange={onInputChange}
      />
      <Button
        type={"submit"}
        btnTitle={"Login"}
        btnVariant={"primary"}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default Login;
