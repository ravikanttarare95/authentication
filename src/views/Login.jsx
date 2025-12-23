import MainHeading from "./../components/MainHeading.jsx";
import InputComp from "./../components/InputComp.jsx";

function Login() {
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
        onchange={onchange}
      />
      <InputComp
        type={"password"}
        placeholder={"Enter password"}
        inputLegend={"Password"}
        isMandatory={true}
        onchange={onchange}
      />
    </div>
  );
}

export default Login;
