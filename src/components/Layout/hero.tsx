import { Reveal } from "../Animations/Reveal";

export default function Hero(props: any) {
  return (
    <section className="bg-[linear-gradient(rgba(5,29,64,0.40),rgba(5,29,64,1)),url(/flyout.jpg)] bg-center bg-cover pt-[400px] pb-[70px]">
      <Reveal>
        <div className="w-[90%] mx-auto max-w-main">
          <p className="text-white mb-[14px] uppercase">{props.section}</p>
          <h1 className="text-[70px] font-[500] w-[80%] leading-[80px] text-white mid:text-[50px] mid:leading-[60px] lg:text-[60px] lg:leading-[70px]">
            {props.heading}
          </h1>
        </div>
      </Reveal>
    </section>
  );
}
