import Button from "../components/Button";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import delishDelivery from "../img/delish-delivery.png";
import todoApp from "../img/todoapp.png";
import weatherApp from "../img/weather-app.png";

const projects = [
  {
    id: 1,
    title: "DelishDelivery",
    img: delishDelivery,
    url: "https://delishdelivery-e1cc9.web.app/",
    code: "https://github.com/loarden/DelishDelivery",
    desc: "Food delivery application with React, Firebase and Context API",
    stacks: [
      {
        id: 1,
        title: "React",
      },
      {
        id: 2,
        title: "Firebase",
      },
      {
        id: 3,
        title: "Tailwind",
      },
      {
        id: 4,
        title: "Context API",
      },
      {
        id: 5,
        title: "Reducer",
      },
    ],
  },
  {
    id: 2,
    title: "Todo Application",
    img: todoApp,
    url: "https://loarden.github.io/my-todo-app/",
    code: "https://github.com/loarden/my-todo-app",
    desc: "Responsive to-do application with localstorage",
    stacks: [
      {
        id: 1,
        title: "React",
      },
      {
        id: 2,
        title: "Vite",
      },
      {
        id: 3,
        title: "Material UI",
      },
    ],
  },
  {
    id: 3,
    title: "Weather Application",
    img: weatherApp,
    url: "https://loarden.github.io/weather-app/",
    code: "https://github.com/loarden/weather-app",
    desc: "Weather Application with 24 hours weather forecast",
    stacks: [
      {
        id: 1,
        title: "React",
      },
      {
        id: 2,
        title: "OpenWeather API",
      },
      {
        id: 3,
        title: "Tailwind",
      },
    ],
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-background pt-6 sm:pt-14 md:pt-20">
      <div className="w-full max-w-7xl mx-auto text-center px-4">
        <SectionTitle title="Portfolio" />
        <p className="mt-6">Here are some of my projects I've worked on.</p>
        <div className="grid grid-cols-1 my-14 md:my-24 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
          {projects.map((item) => {
            return (
              <Card
                key={item.id}
                img={item.img}
                desc={item.desc}
                url={item.url}
                code={item.code}
                stack={item.stacks}
              />
            );
          })}
        </div>
        <Button link="https://github.com/loarden" text="See more on GitHub" />
      </div>
    </section>
  );
}

export default Portfolio;
