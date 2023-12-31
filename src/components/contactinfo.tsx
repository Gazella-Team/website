import { Reveal } from "./Animations/Reveal";

export default function ContactInfo() {
  return (
    <section className="py-[60px] border-b-[1px]">
      <Reveal>
        <div className="w-[90%] mx-auto max-w-main grid grid-cols-contact">
          <div>
            <h1 className="text-[32px] font-[600] mb-[14px] text-main">
              Kontakt os
            </h1>
            <p className="text-gray-600 text-[18px]">
              Vi glæder os til at høre fra dig
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-[60px]">
            <div>
              <h1 className="font-[600] text-[22px] mb-[10px] text-main">
                Kontakt
              </h1>
              <p className="text-gray-600 text-[18px]">
                kontakt@gazellateam.com
              </p>
            </div>
            <div>
              <h1 className="font-[600] text-[22px] mb-[10px] text-main">
                Generelt
              </h1>
              <p className="text-gray-600 text-[18px]">info@gazellateam.com</p>
            </div>
            <div>
              <h1 className="font-[600] text-[22px] mb-[10px] text-main">
                Ansættelse
              </h1>
              <p className="text-gray-600 text-[18px]">job@gazellateam.com</p>
            </div>
            <div>
              <h1 className="font-[600] text-[22px] mb-[10px] text-main">
                Ring til os
              </h1>
              <p className="text-gray-600 text-[18px]">+45 5069 5272</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
