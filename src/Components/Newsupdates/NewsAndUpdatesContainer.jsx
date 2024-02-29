import { FunctionComponent } from "react";
import Footer from "../Newsupdates/Footer";

const NewsAndUpdatesContainer: FunctionComponent = () => {
  return (
    <main className="w-[1184px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
      <section className="w-[1079px] flex flex-col items-start justify-start gap-[58px_0px] max-w-full text-left text-10xl-1 text-black font-inter mq700:gap-[58px_0px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[0px_25px] max-w-full mq925:flex-wrap">
          <div className="h-[346px] w-[394px] rounded-4xs flex flex-col items-center justify-start bg-[url('/public/8-879685346@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[394px] max-w-full mq700:min-w-full mq925:flex-1">
            <img
              className="self-stretch h-[346px] relative rounded-4xs max-w-full overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="newsimg/8-879685346@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border min-w-[429px] max-w-full mq700:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[19px_0px]">
              <b className="self-stretch relative mq450:text-4xl">
                Equipping Young Minds: Shagun Trust Provides Essential
                Educational Stationery
              </b>
              <div className="self-stretch relative text-lg font-medium">
                Shagun Public Charitable Trust understands the importance of
                education in shaping a brighter future. In a generous endeavor,
                the trust has distributed free books and educational stationary
                to children from economically challenged backgrounds. The
                initiative aims to bridge the educational gap and empower these
                children with the tools they need to excel in their studies.
              </div>
              <div className="flex flex-col items-start justify-start gap-[10px_0px] text-center text-xl text-white">
                <div className="rounded-8xs bg-darkorange overflow-hidden flex flex-row items-center justify-center py-1 pr-0 pl-[3px]">
                  <div className="flex flex-col items-start justify-start py-0 px-0">
                    <div className="relative font-medium mq450:text-base">
                      upcoming project
                    </div>
                  </div>
                </div>
                <div className="relative font-medium text-gray-100 text-left mq450:text-base">
                  Monday, February 19,2024
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer
          contactUs="newsimg/9-1@2x.png"
          dignityAndConfidenceShagu="Dignity and Confidence: Shagun Trust Empowers Children with New Clothes"
          recognizingTheSignificanc="Recognizing the significance of adequate clothing for the overall well-being of children, the trust has extended its support by providing free clothing to those in need. The initiative ensures that every child, regardless of their economic circumstances, has access to warm and comfortable clothing, fostering a sense of dignity and confidence."
          fridayFebruary22024="Friday, February 2,2024"
        />
        <Footer
          contactUs="newsimg/19-1@2x.png"
          dignityAndConfidenceShagu="Nourishing Futures: Shagun Trust Provides Nutritious Meals for Underprivileged Children"
          recognizingTheSignificanc="Shagun Public Charitable Trust goes beyond the classroom by addressing the basic needs of nutrition. The trust has initiated a program to provide nutritious meals to underprivileged children, aiming to combat hunger and enhance their overall health. By nourishing both bodies and minds, the trust envisions a community where every child has the opportunity to thrive."
          fridayFebruary22024="Friday,January 26,2024"
          propGap="47px 0px"
          propGap1="18px 0px"
          propWidth="294px"
          propDisplay="inline-block"
          propHeight="unset"
        />
        <Footer
          contactUs="newsimg/12-1@2x.png"
          dignityAndConfidenceShagu={`Shagun Trust's "Book Buddies" Program: Illuminating Minds Through Books and Bags`}
          recognizingTheSignificanc={`The "Book Buddies" initiative by Shagun Trust goes beyond the conventional by providing students with a backpack filled not only with school supplies but also with a carefully curated collection of educational books. This holistic approach aims to ignite a passion for learning and empower students with knowledge, transcending socio-economic barriers.`}
          fridayFebruary22024="Thursday,December 28,2023"
          propGap="43px 0px"
          propGap1="16px 0px"
          propWidth="369px"
          propDisplay="inline-block"
          propHeight="60px"
        />
      </section>
    </main>
  );
};

export default NewsAndUpdatesContainer;
