import MainHeading from "./../components/MainHeading.jsx";
import InputComp from "./../components/InputComp.jsx";
import Button from "./../components/Button.jsx";

function SignUp() {
  return (
    <>
      <div className=" h-[680px]  w-96 mt-6 px-5 py-10 gap-3.5 flex flex-col mx-auto shadow-md border border-gray-200  rounded bg-white">
        <MainHeading
          headingTitle={"Create your PopX account"}
          customHeadStyle={"w-56"}
        />
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
        <Button
          type={"button"}
          btnTitle={"Create Account"}
          btnVariant={"primary"}
          customStyle={"mt-auto"}
          size="md"
        />
      </div>
    </>
  );
}

export default SignUp;
