import SectionTitle from "../components/SectionTitle";
import Skills from "../components/Skills";
import illustration from "../img/Freelance-Developer.png";

function About() {
  return (
    <section
      id="about"
      className=" bg-primary h-fit pt-24 sm:pt-32 md:pt-40 pb-48 sm:pb-60 md:pb-72 text-background w-full"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center px-4 md:px-8">
        <SectionTitle title="Hello, I'm Biacsi Ors." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-24 mt-12 sm:mt-14 md:mt-16">
          <div className="self-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            voluptatem ducimus at molestias aliquam possimus distinctio? Quis,
            ullam, totam non atque ut suscipit, ex quibusdam quaerat dolore
            repellendus recusandae vel.
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
