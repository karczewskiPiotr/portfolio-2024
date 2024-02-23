import type { Metadata } from "next";
import { EB_Garamond, Jost } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin-ext"],
  variable: "--font-garamond",
  display: "swap",
});
const jost = Jost({
  subsets: ["latin-ext"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piotr Karczewski • Portfolio",
  description:
    "Full-stack web developer with 3+ years of experience creating and maintaining data-driven single-page client apps, micro-frontend widgets and interactive web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${garamond.variable} ${jost.variable} mx-auto grid grid-cols-12 gap-x-5 p-[4.2vw] pb-32`}
      >
        {children}

        <svg>
          <filter id="grainy">
            <feTurbulence type="turbulence" baseFrequency="0.65" />
          </filter>
        </svg>

        <div className="pointer-events-none absolute inset-0">
          <svg
            width="390"
            height="325"
            viewBox="0 0 390 325"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="left-0 top-0 z-[-1] h-auto w-1/2 -translate-x-[15%] -translate-y-[15%] overflow-visible mix-blend-color-burn blur-3xl"
          >
            <g filter="url(#filter0_df_121_26)">
              <path
                d="M95.1284 94.6108C103.176 94.6108 159.508 115.382 159.508 122.305C159.508 129.229 103.176 150 95.1284 150C87.0809 150 30.7485 129.229 30.7485 122.305C30.7485 115.382 87.0809 94.6108 95.1284 94.6108Z"
                fill="#D5A67F"
              />
            </g>
            <g filter="url(#filter1_df_121_26)">
              <path
                d="M72.7877 49.1018C81.8862 49.1018 145.575 74.7006 145.575 83.2335C145.575 91.7665 81.8862 117.365 72.7877 117.365C63.6892 117.365 0 91.7665 0 83.2335C0 74.7006 63.6892 49.1018 72.7877 49.1018Z"
                fill="#BD9471"
              />
            </g>
            <g filter="url(#filter2_df_121_26)">
              <path
                d="M135.126 0C145.11 0 215 34.1317 215 45.509C215 56.8862 145.11 91.0179 135.126 91.0179C125.141 91.0179 55.2515 56.8862 55.2515 45.509C55.2515 34.1317 125.141 0 135.126 0Z"
                fill="#997658"
              />
            </g>
          </svg>

          <svg
            width="1092"
            height="707"
            viewBox="0 0 1092 707"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0 z-[-1] h-auto w-3/5 overflow-visible mix-blend-color-burn blur-3xl"
          >
            <g>
              <path
                d="M708.07 344.084C677.452 344.084 463.127 280.677 463.127 259.542C463.127 238.406 677.452 175 708.07 175C738.688 175 953.013 238.406 953.013 259.542C953.013 280.677 738.688 344.084 708.07 344.084Z"
                fill="#D5A67F"
              />
            </g>
            <g>
              <path
                d="M793.068 483.007C758.452 483.007 516.136 404.863 516.136 378.815C516.136 352.767 758.452 274.622 793.068 274.622C827.685 274.623 1070 352.767 1070 378.815C1070 404.863 827.685 483.007 793.068 483.007Z"
                fill="#BD9471"
              />
            </g>
            <g>
              <path
                d="M518 633C475.125 633 175 528.75 175 494C175 459.25 475.125 355 518 355C560.875 355 861 459.25 861 494C861 528.75 560.875 633 518 633Z"
                fill="#997658"
              />
            </g>
          </svg>
        </div>
      </body>
    </html>
  );
}
