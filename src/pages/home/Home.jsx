import { AdsClick, Article } from "@mui/icons-material";

import LinkButton from "../../components/LinkButton";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col gap-4 px-8 py-4 md:px-32 lg:px-64">
      <h2 className="mt-10 pt-32">
        <div className="mb-4 text-2xl font-black uppercase italic opacity-50">
          Fullstack
        </div>
        <div className="text-4xl font-black">Junior Developer</div>
      </h2>
      <p className="max-w-[600px]">
        Combining creativity and technical expertise to deliver websites that
        look beautiful and serve business needs.
      </p>

      <div className="flex flex-col gap-2">
        <LinkButton text="Hire Me" link="/contact" icon={<AdsClick />} />
        <LinkButton text="About Me" link="/cv" icon={<Article />} />
      </div>
    </section>
  );
}
