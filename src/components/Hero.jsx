import skills from "../data/top-skills";

export default function Hero() {
  return (
    <div>
      <div
        className={`flex h-[1000px] w-full flex-col items-center bg-black bg-hero-image bg-contain bg-center bg-no-repeat`}
      >
        <Text />
        <Button />
        <TopSkills />
      </div>
      <div className="h-20 bg-black"></div>
    </div>
  );
}

function Text() {
  return (
    <div className="mt-[250px] flex flex-col gap-8 text-center">
      <p className="flex flex-col text-center text-5xl font-black">
        <span>WEBSITE </span>
        <span>DEVELOPMENT</span>
      </p>
      <h1 className="font-bold italic">with Baberr</h1>
      <p className="max-w-[600px] text-center">
        Combining creativity and technical expertise to deliver websites that
        not only look beautiful but also serve business needs. From design to
        deployment, I ensure websites are both attractive and effective.
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="mb-[100px] mt-[240px]">
      <a
        href="#portfolio"
        className="rounded-full bg-black px-28 py-6 text-xl font-black"
      >
        VIEW MY WORK
      </a>
    </div>
  );
}

function TopSkills() {
  return (
    <div className="flex flex-row gap-16">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ffffff20]">
            <img src={skill.icon} alt={`${skill.text}} Logo`} className="h-8" />
          </div>
          <a href="#" className="font-bold">
            {skill.text}
          </a>
        </div>
      ))}
    </div>
  );
}
