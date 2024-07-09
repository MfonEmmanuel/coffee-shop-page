import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { CardList } from "../../components/CardList";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Nav } from "../../components/Nav";
import { KeyboardArrowLeft2 } from "../../icons/KeyboardArrowLeft2";
import { KeyboardArrowRight1 } from "../../icons/KeyboardArrowRight1";
import { Shopping3 } from "../../icons/Shopping3";

export const Coffee = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="w-full flex flex-row justify-center bg-[#fff9e8]">
      <div
        className={`relative ${screenWidth < 1440 ? "w-[428px]" : screenWidth >= 1440 ? "w-[1440px]" : ""} ${
          screenWidth < 1440 ? "h-[3936px]" : screenWidth >= 1440 ? "h-[3161px]" : ""
        } ${screenWidth < 1440 ? "bg-[#fff9e8]" : screenWidth >= 1440 ? "bg-variable-collection-background" : ""}`}
      >
        {screenWidth < 1440 && (
          <>
            <div className="flex flex-col w-[368px] items-center justify-center gap-2 absolute top-[102px] left-[30px]">
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-[#5e5e5e] text-[40px] text-center tracking-[0] leading-[normal]">
                  All Coffee
                </div>
              </div>
              <div className="flex flex-col h-[113px] items-center justify-center gap-2.5 relative self-stretch w-full">
                <div className="w-fit text-[#5e5e5e] text-xl relative [font-family:'Nunito',Helvetica] font-normal tracking-[0] leading-[normal]">
                  Embark on a Coffee&nbsp;&nbsp;Journey
                </div>
                <p className="w-72 h-[68px] text-variable-collection-text text-[10px] text-center relative [font-family:'Nunito',Helvetica] font-normal tracking-[0] leading-[normal]">
                  Embark on a Coffee Journey: From the Bright and Invigorating Sunrise Blends to the Deep and Enigmatic
                  Midnight Roasts, <br />
                  <br />
                  Discover the Perfect Brew: From Sunrise to Midnight, Explore Our Unique Coffee Roasts.
                </p>
              </div>
            </div>
            <div className="absolute w-[22px] h-[5px] top-[524px] left-[203px]">
              <div className="left-0 bg-[#888888] absolute w-[5px] h-[5px] top-0 rounded-[2.39px/2.5px]" />
              <div className="left-[9px] bg-[#c2c2c2] absolute w-[5px] h-[5px] top-0 rounded-[2.39px/2.5px]" />
              <div className="left-[17px] bg-[#c2c2c2] absolute w-[5px] h-[5px] top-0 rounded-[2.39px/2.5px]" />
            </div>
            <div className="absolute top-[2305px] left-[29px] [font-family:'Nunito',Helvetica] font-extrabold text-[#5e5e5e] text-xl tracking-[0] leading-[normal]">
              Creamy
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 absolute top-[574px] left-[30px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-extrabold text-[#5e5e5e] text-xl tracking-[0] leading-[normal]">
                Roast
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 absolute top-[1447px] left-[30px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-extrabold text-[#5e5e5e] text-xl tracking-[0] leading-[normal]">
                Black
              </div>
            </div>
            <div className="flex w-[368px] h-[200px] items-center justify-between px-0 py-[236px] absolute top-[308px] left-[30px] bg-[url(/static/img/frame-8.png)] bg-cover bg-[50%_50%]">
              <KeyboardArrowLeft2 className="!relative !w-[50px] !h-[50px] !mt-[-161.00px] !mb-[-161.00px]" />
              <KeyboardArrowRight1 className="!relative !w-[50px] !h-[50px] !mt-[-161.00px] !mb-[-161.00px]" />
            </div>
            <div className="top-[621px] left-[30px] flex flex-col w-[147px] items-center justify-center gap-2.5 absolute rounded-[20px]">
              <img
                className="relative self-stretch w-full h-[283px] object-cover"
                alt="Rectangle"
                src="/img/rectangle-6-12.png"
              />
              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto] ml-[-13.00px] mr-[-13.00px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-semi-semi-bold-20 font-[number:var(--semi-semi-bold-20-font-weight)] text-[#1f1f1f] text-[length:var(--semi-semi-bold-20-font-size)] text-center tracking-[var(--semi-semi-bold-20-letter-spacing)] leading-[var(--semi-semi-bold-20-line-height)] [font-style:var(--semi-semi-bold-20-font-style)]">
                    Midnight Brew
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[173px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    Bold and intense
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[52px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    $ 14.00
                  </div>
                </div>
              </div>
            </div>
            <div className="top-[1494px] left-[30px] flex flex-col w-[147px] items-center justify-center gap-2.5 absolute rounded-[20px]">
              <img
                className="relative self-stretch w-full h-[283px] object-cover"
                alt="Rectangle"
                src="/img/rectangle-6-11.png"
              />
              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto] ml-[-13.00px] mr-[-13.00px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-semi-semi-bold-20 font-[number:var(--semi-semi-bold-20-font-weight)] text-[#1f1f1f] text-[length:var(--semi-semi-bold-20-font-size)] text-center tracking-[var(--semi-semi-bold-20-letter-spacing)] leading-[var(--semi-semi-bold-20-line-height)] [font-style:var(--semi-semi-bold-20-font-style)]">
                    Shadow Blend
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[173px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    Rich and Velvety
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[52px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    $ 20
                  </div>
                </div>
              </div>
            </div>
            <div className="top-[2353px] left-[30px] flex flex-col w-[147px] items-center justify-center gap-2.5 absolute rounded-[20px]">
              <img
                className="relative self-stretch w-full h-[283px] object-cover"
                alt="Rectangle"
                src="/img/rectangle-6-12.png"
              />
              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto] ml-[-13.00px] mr-[-13.00px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-semi-semi-bold-20 font-[number:var(--semi-semi-bold-20-font-weight)] text-[#1f1f1f] text-[length:var(--semi-semi-bold-20-font-size)] text-center tracking-[var(--semi-semi-bold-20-letter-spacing)] leading-[var(--semi-semi-bold-20-line-height)] [font-style:var(--semi-semi-bold-20-font-style)]">
                    Midnight Brew
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[173px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    Bold and intense
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[52px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    $ 14.00
                  </div>
                </div>
              </div>
            </div>
            <div className="top-[1017px] left-[30px] flex flex-col w-[147px] items-center justify-center gap-2.5 absolute rounded-[20px]">
              <img
                className="relative self-stretch w-full h-[283px] object-cover"
                alt="Rectangle"
                src="/img/rectangle-6-14.png"
              />
              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto] ml-[-13.00px] mr-[-13.00px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-semi-semi-bold-20 font-[number:var(--semi-semi-bold-20-font-weight)] text-[#1f1f1f] text-[length:var(--semi-semi-bold-20-font-size)] text-center tracking-[var(--semi-semi-bold-20-letter-spacing)] leading-[var(--semi-semi-bold-20-line-height)] [font-style:var(--semi-semi-bold-20-font-style)]">
                    Velvet Roast
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[173px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    Smooth and rich
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[52px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    $ 14.00
                  </div>
                </div>
              </div>
            </div>
            <div className="top-[2749px] left-[30px] flex flex-col w-[147px] items-center justify-center gap-2.5 absolute rounded-[20px]">
              <img
                className="relative self-stretch w-full h-[283px] object-cover"
                alt="Rectangle"
                src="/img/rectangle-6-14.png"
              />
              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto] ml-[-13.00px] mr-[-13.00px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-semi-semi-bold-20 font-[number:var(--semi-semi-bold-20-font-weight)] text-[#1f1f1f] text-[length:var(--semi-semi-bold-20-font-size)] text-center tracking-[var(--semi-semi-bold-20-letter-spacing)] leading-[var(--semi-semi-bold-20-line-height)] [font-style:var(--semi-semi-bold-20-font-style)]">
                    Velvet Roast
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[173px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    Smooth and rich
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[52px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    $ 14.00
                  </div>
                </div>
              </div>
            </div>
            <div className="top-[1890px] left-[30px] flex flex-col w-[147px] items-center justify-center gap-2.5 absolute rounded-[20px]">
              <img
                className="relative self-stretch w-full h-[283px] object-cover"
                alt="Rectangle"
                src="/img/rectangle-6-15.png"
              />
              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto] ml-[-13.00px] mr-[-13.00px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-semi-semi-bold-20 font-[number:var(--semi-semi-bold-20-font-weight)] text-[#1f1f1f] text-[length:var(--semi-semi-bold-20-font-size)] text-center tracking-[var(--semi-semi-bold-20-letter-spacing)] leading-[var(--semi-semi-bold-20-line-height)] [font-style:var(--semi-semi-bold-20-font-style)]">
                    Nightfall Espresso
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[173px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    Intense and invigorating
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[52px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    $ 25
                  </div>
                </div>
              </div>
            </div>
            <div className="top-[621px] left-[239px] flex flex-col w-[147px] items-center justify-center gap-2.5 absolute rounded-[20px]">
              <img
                className="relative self-stretch w-full h-[283px] object-cover"
                alt="Rectangle"
                src="/img/rectangle-6-17.png"
              />
              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto] ml-[-13.00px] mr-[-13.00px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-semi-semi-bold-20 font-[number:var(--semi-semi-bold-20-font-weight)] text-[#1f1f1f] text-[length:var(--semi-semi-bold-20-font-size)] text-center tracking-[var(--semi-semi-bold-20-letter-spacing)] leading-[var(--semi-semi-bold-20-line-height)] [font-style:var(--semi-semi-bold-20-font-style)]">
                    Sunrise Blend
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[173px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    Bright and uplifting
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[52px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    $ 15.00
                  </div>
                </div>
              </div>
            </div>
            <div className="top-[2353px] left-[239px] flex flex-col w-[147px] items-center justify-center gap-2.5 absolute rounded-[20px]">
              <img
                className="relative self-stretch w-full h-[283px] object-cover"
                alt="Rectangle"
                src="/img/rectangle-6-17.png"
              />
              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto] ml-[-13.00px] mr-[-13.00px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-semi-semi-bold-20 font-[number:var(--semi-semi-bold-20-font-weight)] text-[#1f1f1f] text-[length:var(--semi-semi-bold-20-font-size)] text-center tracking-[var(--semi-semi-bold-20-letter-spacing)] leading-[var(--semi-semi-bold-20-line-height)] [font-style:var(--semi-semi-bold-20-font-style)]">
                    Sunrise Blend
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[173px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    Bright and uplifting
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[52px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    $ 15.00
                  </div>
                </div>
              </div>
            </div>
            <div className="top-[1494px] left-[239px] flex flex-col w-[147px] items-center justify-center gap-2.5 absolute rounded-[20px]">
              <img
                className="relative self-stretch w-full h-[283px] object-cover"
                alt="Rectangle"
                src="/img/rectangle-6-18.png"
              />
              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto] ml-[-13.00px] mr-[-13.00px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-semi-semi-bold-20 font-[number:var(--semi-semi-bold-20-font-weight)] text-[#1f1f1f] text-[length:var(--semi-semi-bold-20-font-size)] text-center tracking-[var(--semi-semi-bold-20-letter-spacing)] leading-[var(--semi-semi-bold-20-line-height)] [font-style:var(--semi-semi-bold-20-font-style)]">
                    Cinder Black
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[173px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    Bold and intense
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[52px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    $ 30
                  </div>
                </div>
              </div>
            </div>
            <div className="top-[1017px] left-[239px] flex flex-col w-[147px] items-center justify-center gap-2.5 absolute rounded-[20px]">
              <img
                className="relative self-stretch w-full h-[283px] object-cover"
                alt="Rectangle"
                src="/img/rectangle-6-20.png"
              />
              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto] ml-[-13.00px] mr-[-13.00px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-semi-semi-bold-20 font-[number:var(--semi-semi-bold-20-font-weight)] text-[#1f1f1f] text-[length:var(--semi-semi-bold-20-font-size)] text-center tracking-[var(--semi-semi-bold-20-letter-spacing)] leading-[var(--semi-semi-bold-20-line-height)] [font-style:var(--semi-semi-bold-20-font-style)]">
                    Mountain Majesty
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <p className="relative self-stretch w-[173px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    A taste for great outdoors.
                  </p>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[52px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    $19.25
                  </div>
                </div>
              </div>
            </div>
            <div className="top-[2749px] left-[239px] flex flex-col w-[147px] items-center justify-center gap-2.5 absolute rounded-[20px]">
              <img
                className="relative self-stretch w-full h-[283px] object-cover"
                alt="Rectangle"
                src="/img/rectangle-6-20.png"
              />
              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto] ml-[-13.00px] mr-[-13.00px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-semi-semi-bold-20 font-[number:var(--semi-semi-bold-20-font-weight)] text-[#1f1f1f] text-[length:var(--semi-semi-bold-20-font-size)] text-center tracking-[var(--semi-semi-bold-20-letter-spacing)] leading-[var(--semi-semi-bold-20-line-height)] [font-style:var(--semi-semi-bold-20-font-style)]">
                    Mountain Majesty
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <p className="relative self-stretch w-[173px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    A taste for great outdoors.
                  </p>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[52px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    $19.25
                  </div>
                </div>
              </div>
            </div>
            <div className="top-[1890px] left-[239px] flex flex-col w-[147px] items-center justify-center gap-2.5 absolute rounded-[20px]">
              <img
                className="relative self-stretch w-full h-[283px] object-cover"
                alt="Rectangle"
                src="/img/rectangle-6-21.png"
              />
              <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto] ml-[-13.00px] mr-[-13.00px]">
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-semi-semi-bold-20 font-[number:var(--semi-semi-bold-20-font-weight)] text-[#1f1f1f] text-[length:var(--semi-semi-bold-20-font-size)] text-center tracking-[var(--semi-semi-bold-20-letter-spacing)] leading-[var(--semi-semi-bold-20-line-height)] [font-style:var(--semi-semi-bold-20-font-style)]">
                    Onyx Brew
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[173px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    Deep and Smooth
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative self-stretch w-[52px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
                    $ 40
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {screenWidth >= 1440 && (
          <>
            <div className="inline-flex items-center gap-[172px] absolute top-[158px] left-[87px]">
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-heading-heading-24 font-[number:var(--heading-heading-24-font-weight)] text-variable-collection-text text-[length:var(--heading-heading-24-font-size)] tracking-[var(--heading-heading-24-letter-spacing)] leading-[var(--heading-heading-24-line-height)] [font-style:var(--heading-heading-24-font-style)]">
                  All Coffee
                </div>
              </div>
              <div className="flex flex-col w-[760px] items-start justify-center relative">
                <div className="flex w-[640px] h-[88px] items-center justify-center gap-2.5 p-2.5 relative">
                  <p className="relative w-fit mt-[-1.00px] font-body-body-06 font-[number:var(--body-body-06-font-weight)] text-variable-collection-text text-[length:var(--body-body-06-font-size)] tracking-[var(--body-body-06-letter-spacing)] leading-[var(--body-body-06-line-height)] [font-style:var(--body-body-06-font-style)]">
                    Embark on a Coffee Journey
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative w-[733px] mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-variable-collection-text text-2xl tracking-[0] leading-[normal]">
                    Embark on a Coffee Journey: From the Bright and Invigorating Sunrise Blends to the Deep and
                    Enigmatic Midnight Roasts, <br />
                    <br />
                    Discover the Perfect Brew: From Sunrise to Midnight, Explore Our Unique Coffee Roasts.
                  </p>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[1073px] left-[70px]">
              <div className="relative w-fit mt-[-1.00px] font-heading-heading-09 font-[number:var(--heading-heading-09-font-weight)] text-variable-collection-text text-[length:var(--heading-heading-09-font-size)] tracking-[var(--heading-heading-09-letter-spacing)] leading-[var(--heading-heading-09-line-height)] [font-style:var(--heading-heading-09-font-style)]">
                Roast
              </div>
            </div>
            <div className="absolute top-[1600px] left-20 font-heading-heading-09 font-[number:var(--heading-heading-09-font-weight)] text-variable-collection-text text-[length:var(--heading-heading-09-font-size)] tracking-[var(--heading-heading-09-letter-spacing)] leading-[var(--heading-heading-09-line-height)] [font-style:var(--heading-heading-09-font-style)]">
              Black
            </div>
            <div className="absolute top-[2118px] left-20 font-heading-heading-09 font-[number:var(--heading-heading-09-font-weight)] text-variable-collection-text text-[length:var(--heading-heading-09-font-size)] tracking-[var(--heading-heading-09-letter-spacing)] leading-[var(--heading-heading-09-line-height)] [font-style:var(--heading-heading-09-font-style)]">
              Creamy
            </div>
            <CardList
              cardDivClassName="![align-self:unset]"
              cardImg="/img/rectangle-6-33.png"
              cardImgClassName="!mr-[-24239.00px] !mt-[-4137.00px]"
              cardRectangle="/img/rectangle-6-32.png"
              cardRectangle1="/img/rectangle-6-34.png"
              cardRectangle2="/img/rectangle-6-35.png"
              cardRectangle3="/img/rectangle-6-41.png"
              cardRectangle4="/img/rectangle-6-39.png"
              cardRectangle5="/img/rectangle-6-39.png"
              cardRectangle6="/img/rectangle-6-39.png"
              cardRectangleClassName="!mr-[-24699.00px] !mt-[-4137.00px]"
              cardRectangleClassNameOverride="!mr-[-24469.00px] !mt-[-4137.00px]"
              cardText="$ 14.00"
              cardText1="Midnight Brew"
              cardText10="$ 19.25"
              cardText11="A taste for great outdoors."
              cardText12="$ 20.00"
              cardText13="Twilight Roast"
              cardText14="Unwind with every sip"
              cardText15="$ 12.00"
              cardText16="Wildwood Blend"
              cardText17="Earthy and aromatic"
              cardText2="Bold and intense"
              cardText3="$ 15.00"
              cardText4="Sunrise Blend"
              cardText5="Bright and uplifting"
              cardText6="$ 25.00"
              cardText7="Velvet Roast"
              cardText8="Smooth and rich"
              cardText9="Mountain Majesty"
              className="!flex !absolute !left-20 !w-[1358px] !top-[1138px]"
            />
            <CardList
              cardDivClassName="![align-self:unset]"
              cardImg="/img/rectangle-6-33.png"
              cardImgClassName="!mr-[-24239.00px] !mt-[-5173.00px]"
              cardRectangle="/img/rectangle-6-32.png"
              cardRectangle1="/img/rectangle-6-34.png"
              cardRectangle2="/img/rectangle-6-35.png"
              cardRectangle3="/img/rectangle-6-41.png"
              cardRectangle4="/img/rectangle-6-39.png"
              cardRectangle5="/img/rectangle-6-39.png"
              cardRectangle6="/img/rectangle-6-39.png"
              cardRectangleClassName="!mr-[-24699.00px] !mt-[-5173.00px]"
              cardRectangleClassNameOverride="!mr-[-24469.00px] !mt-[-5173.00px]"
              cardText="$ 14.00"
              cardText1="Midnight Brew"
              cardText10="$ 19.25"
              cardText11="A taste for great outdoors."
              cardText12="$ 20.00"
              cardText13="Twilight Roast"
              cardText14="Unwind with every sip"
              cardText15="$ 12.00"
              cardText16="Wildwood Blend"
              cardText17="Earthy and aromatic"
              cardText2="Bold and intense"
              cardText3="$ 15.00"
              cardText4="Sunrise Blend"
              cardText5="Bright and uplifting"
              cardText6="$ 25.00"
              cardText7="Velvet Roast"
              cardText8="Smooth and rich"
              cardText9="Mountain Majesty"
              className="!flex !absolute !left-20 !w-[1358px] !top-[2174px]"
            />
            <CardList
              cardImg="/img/rectangle-6-42.png"
              cardImgClassName="!mr-[-24239.00px] !mt-[-4655.00px]"
              cardRectangle="/img/rectangle-6-41.png"
              cardRectangle1="/img/rectangle-6-43.png"
              cardRectangle2="/img/rectangle-6-44.png"
              cardRectangle3="/img/rectangle-6-45.png"
              cardRectangle4="/img/rectangle-6-48.png"
              cardRectangle5="/img/rectangle-6-48.png"
              cardRectangle6="/img/rectangle-6-48.png"
              cardRectangle7="/img/rectangle-6-40.png"
              cardRectangleClassName="!mr-[-24699.00px] !mt-[-4655.00px]"
              cardRectangleClassNameOverride="!mr-[-24469.00px] !mt-[-4655.00px]"
              cardText="$ 20"
              cardText1="Shadow Blend"
              cardText10="$ 40"
              cardText11="Deep and smooth"
              cardText12="$ 60"
              cardText13="Dark Horizon"
              cardText14="Bold and expansive"
              cardText15="$ 22"
              cardText16="Cinder Black"
              cardText17="Perfectly dark and rich"
              cardText2="Rich and velvety"
              cardText3="$ 30"
              cardText4="Cinder Black"
              cardText5="Bold and smoky"
              cardText6="$ 25"
              cardText7="Nightfall Espresso"
              cardText8="Intense and invigorating"
              cardText9="Onyx Brew"
              className="!flex !absolute !left-20 !w-[1358px] !top-[1656px]"
            />
            <div className="flex w-[1440px] items-center justify-between px-20 py-5 absolute top-0 left-0 bg-[#261200]">
              <Logo className="!flex-[0_0_auto]" divClassName="!text-3xl" />
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <Nav className="!flex-[0_0_auto]" divClassName="!text-[#fff9e8]" text="Coffee" />
                <Nav className="!flex-[0_0_auto]" divClassName="!text-[#fff9e8]" text="Shop" />
                <Nav className="!flex-[0_0_auto]" divClassName="!text-[#fff9e8]" text="About" />
                <Shopping3 className="!relative !w-[50px] !h-[50px]" color="#EB7100" />
                <button className="all-[unset] box-border inline-flex h-[50px] items-center justify-center gap-2.5 px-5 py-2 relative flex-[0_0_auto] bg-[#eb7000]">
                  <button className="all-[unset] box-border relative w-fit font-body-body-21 font-[number:var(--body-body-21-font-weight)] text-[#fff9e8] text-[length:var(--body-body-21-font-size)] tracking-[var(--body-body-21-letter-spacing)] leading-[var(--body-body-21-line-height)] [font-style:var(--body-body-21-font-style)]">
                    Log in
                  </button>
                </button>
              </div>
            </div>
            <div className="absolute w-[1280px] h-[522px] top-[481px] left-20 bg-[url(/static/img/rectangle-4.png)] bg-cover bg-[50%_50%]">
              <KeyboardArrowLeft2 className="!absolute !w-[50px] !h-[50px] !top-[236px] !left-0" />
              <KeyboardArrowRight1 className="!absolute !w-[50px] !h-[50px] !top-[236px] !left-[1230px]" />
            </div>
          </>
        )}

        <img
          className={`left-0 absolute ${screenWidth < 1440 ? "w-[428px]" : screenWidth >= 1440 ? "w-[1440px]" : ""} ${
            screenWidth < 1440 ? "top-[3224px]" : screenWidth >= 1440 ? "top-[2568px]" : ""
          } ${screenWidth < 1440 ? "h-[712px]" : screenWidth >= 1440 ? "h-[593px]" : ""}`}
          alt="Footer dark"
          src={
            screenWidth < 1440 ? "/img/footer-1-dark.svg" : screenWidth >= 1440 ? "/img/footer-1-dark-1.png" : undefined
          }
        />
        {screenWidth < 1440 && <Header className="!absolute !left-0 !top-0" />}
      </div>
    </div>
  );
};
