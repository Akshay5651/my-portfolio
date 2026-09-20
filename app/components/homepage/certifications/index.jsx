// @flow strict
import Image from "next/image";

import { certifications } from "@/utils/data/certifications";
import { BsPatchCheckFill } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Certifications() {
  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {
            certifications.map(certification => (
              <GlowCard key={certification.id} identifier={`certification-${certification.id}`}>
                <div className="p-3 relative text-white">
                  <Image
                    src="/blur-23.svg"
                    alt=""
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {certification.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5 px-3 py-5">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                      <BsPatchCheckFill size={36} />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base mb-2 font-medium uppercase">
                        {certification.title}
                      </p>
                      <p className="text-sm text-[#16f2b3]">{certification.issuer}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Certifications;
