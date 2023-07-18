import Skills from "../components/Skills";
import illustration from "../img/Freelance-Developer.png";

function About() {
  return (
    <section
      id="about"
      className=" bg-primary h-fit pt-24 sm:pt-32 md:pt-40 pb-72 text-background w-full"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center px-8">
        <h2 className="text-center font-mono text-4xl">Hello, I'm Ors Biacsi</h2>
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
