import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FooterType = {
  contactUs?: string;
  dignityAndConfidenceShagu?: string;
  recognizingTheSignificanc?: string;
  fridayFebruary22024?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propGap1?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propHeight?: CSSProperties["height"];
};

const Footer: FunctionComponent<FooterType> = ({
  contactUs,
  dignityAndConfidenceShagu,
  recognizingTheSignificanc,
  fridayFebruary22024,
  propGap,
  propGap1,
  propWidth,
  propDisplay,
  propHeight,
}) => {
  const donateNowStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const volunteerBtnStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const fridayFebruary22024Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      height: propHeight,
    };
  }, [propWidth, propDisplay, propHeight]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[0px_25px] max-w-full text-left text-10xl-1 text-black font-roboto mq925:flex-wrap">
      <div className="w-[393px] rounded-4xs bg-silver box-border flex flex-row items-center justify-center min-w-[393px] max-w-full border-[3px] border-solid border-black mq700:min-w-full mq925:flex-1">
        <div className="self-stretch w-[393px] relative rounded-4xs bg-silver box-border hidden max-w-full z-[1] border-[3px] border-solid border-black" />
        <img
          className="h-[361px] flex-1 relative rounded-4xs max-w-full overflow-hidden object-cover z-[1] mq925:flex-1"
          loading="eager"
          alt=""
          src={contactUs}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[430px] max-w-full mq700:min-w-full">
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[47px_0px] mq700:gap-[47px_0px]"
          style={donateNowStyle}
        >
          <b className="self-stretch relative leading-[35px] mq450:text-4xl mq450:leading-[28px]">
            {dignityAndConfidenceShagu}
          </b>
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[14px_0px] text-lg font-inter"
            style={volunteerBtnStyle}
          >
            <div className="self-stretch relative font-medium">
              {recognizingTheSignificanc}
            </div>
            <div
              className="w-72 relative text-xl font-medium text-gray-200 flex items-center mq450:text-base"
              style={fridayFebruary22024Style}
            >
              {fridayFebruary22024}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
