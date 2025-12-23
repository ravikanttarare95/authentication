import MainHeading from "./../components/MainHeading.jsx";
import InputComp from "./../components/InputComp.jsx";

function SignUp() {
  return (
    <div>
      <MainHeading headingTitle={"Create your PopX account"} />
      <InputComp
        type={"text"}
        placeholder={"Ravikant Tarare"}
        inputLegend={"Full Name"}
        isMandatory={true}
        onchange={onchange}
      />
      <InputComp
        type={"number"}
        placeholder={"8275957698"}
        inputLegend={"Phone number"}
        isMandatory={true}
        onchange={onchange}
      />
      <InputComp
        type={"email"}
        placeholder={"ravikanttarare2001@gmail.com"}
        inputLegend={"Email address"}
        isMandatory={true}
        onchange={onchange}
      />
      <InputComp
        type={"password"}
        placeholder={""}
        inputLegend={"Password"}
        isMandatory={true}
        onchange={onchange}
      />
      <InputComp
        type={"text"}
        placeholder={"Company name"}
        inputLegend={"Company name"}
        isMandatory={false}
        onchange={onchange}
      />
    </div>
  );
}

export default SignUp;
