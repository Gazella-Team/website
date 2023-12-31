export default function Features(props: any) {
  return (
    <section className="py-[100px] border-b-[1px]">
      <div className="w-[90%] mx-auto grid grid-cols-features max-w-main xl:grid-cols-1">
        <h1 className="text-[30px] leading-[35px] xl:hidden">
          En løsning til dine behov
        </h1>

        <div className="grid grid-cols-2 gap-[40px] gap-y-[60px] mid:grid-cols-1">
          {props.Obj.map((v: any) => (
            <FeatureCard key={v} Obj={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = (props: any) => {
  return (
    <div>
      <h2 className="text-[24px] font-[600] mb-[14px]">{props.Obj.heading}</h2>
      <p className="text-[18px] text-gray-600">{props.Obj.description}</p>
    </div>
  );
};
