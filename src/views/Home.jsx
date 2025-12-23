import MainHeading from "./../components/MainHeading.jsx";
import Button from "./../components/Button.jsx";

function Home() {
  return (
    <div>
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
        />
        <Button
          type={"button"}
          btnTitle={"Already Registered? Login"}
          btnVariant={"secondary"}
          size="md"
        />
      </div>
    </div>
  );
}

export default Home;
