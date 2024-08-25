import "animate.css";
import HeadingLarge from "@/components/about/HeadingLarge";
import HeadingMedium from "@/components/about/HeadingMedium";
import BtnInstall from "@/components/buttons/Install";
import BtnSourceCode from "@/components/buttons/SourceCode";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="px-10 py-20 absolute top-0 right-0 left-0 flex flex-wrap">
        <div id="left" className="border">
          <hgroup className="space-y-5 z-5">
            <h1 className="text-4xl italic font-extrabold z-5 animate__animated animate__fadeInLeft">
              Ad
              <span className="text-primary">Cense</span> - Keep your browsing
              ad-free.
            </h1>
            <p className="font-bold text-2xl italic text-greenDark animate__animated animate__fadeInLeft animate__delay-05s">
              Free and open-source.
            </p>
          </hgroup>

          <div className="space-x-2 flex mt-20 animate__animated animate__fadeInLeft drop-shadow-md">
            <BtnInstall />
            <BtnSourceCode />
          </div>
        </div>

        <div
          id="right"
          className="shadow-2xl shadow-black/80 mx-auto rounded-xl overflow-hidden hidden lg:block"
        >
          <Image
            src="/giphy.gif"
            width={280}
            height={250}
            alt="AdCense Extension"
            className="h-full"
            loading="eager"
          />
        </div>
      </header>

      <section className="space-y-9 mt-[400px] animate__animated animate__fadeInUp animate__delay-05s">
        <div className="space-y-4">
          <HeadingLarge>About AdCense</HeadingLarge>
          <Paragraph>{`
            AdCense is a powerful, free web ad blocker that aims to give users a
            smooth, ad-free browsing experience. AdCense's sophisticated
            filtering technology efficiently removes intrusive popup
            advertisements, boosting page load speeds and removing distractions
            from your online experience. AdCense makes sure that your sessions
            stay focused and uninterrupted, whether you're browsing for business
            or pleasure.
          `}</Paragraph>
        </div>
        <div className="space-y-4">
          <HeadingMedium>How does AdCense work?</HeadingMedium>
          <Paragraph>{`
            Real-time website scanning is how AdCense finds and blocks pop-up
            advertisements. To identify and stop advertisements from displaying,
            it makes use of sophisticated algorithms and an extensive list of
            known ad domains. AdCense ensures a smooth and ad-free browsing
            experience by blocking popup ads as soon as they are identified.
            AdCense's compact and effective design guarantees optimal protection
            against invasive advertisements with the least possible negative
            effect on the performance of your device.
          `}</Paragraph>
        </div>
        <div className="space-y-4">
          <HeadingMedium>Does AdCense collect your data?</HeadingMedium>
          <Paragraph>{`
            No, AdCense doesn't gather any personal information about you.
            AdCense is made to function without requiring access to or storage
            of your browsing history since we value your privacy. We just care
            about preventing advertisements and enhancing your online experience
            without jeopardizing your privacy.
          `}</Paragraph>
        </div>
      </section>
    </>
  );
}
