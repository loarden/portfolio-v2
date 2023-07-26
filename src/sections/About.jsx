import SectionTitle from "../components/SectionTitle";
import illustration from "../img/Freelance-Developer.png";

function About() {
  return (
    <section
      id="about"
      className=" bg-primary h-fit pt-24 sm:pt-32 md:pt-40 pb-48 sm:pb-60 md:pb-72 text-background w-full"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center px-4 md:px-8">
        <SectionTitle title="Hello, I'm Örs Biacsi." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-24 mt-12 sm:mt-14 md:mt-16">
          <div className="self-center">
            I'm a Front-End Developer from Budapest, Hungary. I have serious
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences. I love to learn new technologies and improve my 
            current skills. <br/>
            Let's make something special together!
          </div>
          <div>
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
