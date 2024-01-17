"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Sidebar() {
  const aside = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-animate='fade']",
        { opacity: 0, translateY: -10 },
        { opacity: 1, translateY: 0, stagger: 0.1 }
      );
    },
    { scope: aside }
  );

  return (
    <aside
      ref={aside}
      className="col-start-12 col-span-1 flex flex-col items-end space-y-6 sticky top-16 h-fit max-md:hidden"
    >
      <a
        data-animate="fade"
        href="mailto:p.karczewsk@gmail.com"
        className="group opacity-0"
      >
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
          <g clipPath="url(#clip0_18_285)">
            <path
              d="M1.99992 2H13.9999C14.3681 2 14.6666 2.29848 14.6666 2.66667V13.3333C14.6666 13.7015 14.3681 14 13.9999 14H1.99992C1.63173 14 1.33325 13.7015 1.33325 13.3333V2.66667C1.33325 2.29848 1.63173 2 1.99992 2ZM8.04032 7.7886L3.76473 4.15847L2.90177 5.17487L8.04865 9.54473L13.1029 5.17077L12.2303 4.16256L8.04032 7.7886Z"
              className="fill-[#505050] group-hover:fill-[#997658] group-focus:fill-[#997658] transition-all duration-500"
            />
          </g>
          <defs>
            <clipPath id="clip0_18_285">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <a
        data-animate="fade"
        href="/Piotr Karczewski CV.pdf"
        target="_blank"
        className="group opacity-0"
      >
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
          <path
            d="M10.6667 1.33334L14 4.66668V14.0055C14 14.3707 13.7034 14.6667 13.3377 14.6667H2.66227C2.29651 14.6667 2 14.3631 2 14.0055V1.99454C2 1.62938 2.29663 1.33334 2.66227 1.33334H10.6667ZM8.66667 8.00001V5.33334H7.33333V8.00001H5.33333L8 10.6667L10.6667 8.00001H8.66667Z"
            className="fill-[#505050] group-hover:fill-[#997658] group-focus:fill-[#997658] transition-all duration-500"
          />
        </svg>
      </a>
      <a
        data-animate="fade"
        href="https://github.com/karczewskiPiotr"
        target="_blank"
        className="group opacity-0"
      >
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00067 1.33334C4.31732 1.33334 1.33398 4.31668 1.33398 8.00001C1.33398 10.95 3.24232 13.4417 5.89232 14.325C6.22565 14.3833 6.35065 14.1833 6.35065 14.0083C6.35065 13.85 6.34232 13.325 6.34232 12.7667C4.66732 13.075 4.23398 12.3583 4.10065 11.9833C4.02565 11.7917 3.50065 11.2 3.41732 11.0417C3.18398 10.9167 2.85065 10.6083 3.40898 10.6C3.93398 10.5917 4.30898 11.0833 4.43398 11.2833C5.03398 12.2917 5.99232 12.0083 6.37565 11.8333C6.43398 11.4 6.60898 11.1083 6.80066 10.9417C5.31732 10.775 3.76732 10.2 3.76732 7.65001C3.76732 6.92501 4.02565 6.32501 4.45065 5.85834C4.38398 5.69168 4.15065 5.00834 4.51732 4.09168C4.51732 4.09168 5.07565 3.91668 6.35065 4.77501C6.884 4.62501 7.45066 4.55001 8.01733 4.55001C8.584 4.55001 9.15066 4.62501 9.684 4.77501C10.959 3.90834 11.5173 4.09168 11.5173 4.09168C11.884 5.00834 11.6507 5.69168 11.584 5.85834C12.009 6.32501 12.2673 6.91668 12.2673 7.65001C12.2673 10.2083 10.709 10.775 9.22567 10.9417C9.46733 11.15 9.67566 11.55 9.67566 12.175C9.67566 13.0667 9.66733 13.7833 9.66733 14.0083C9.66733 14.1833 9.79233 14.3917 10.1257 14.325C12.8393 13.4089 14.6666 10.8642 14.6673 8.00001C14.6673 4.31668 11.684 1.33334 8.00067 1.33334Z"
            className="fill-[#505050] group-hover:fill-[#997658] group-focus:fill-[#997658] transition-all duration-500"
          />
        </svg>
      </a>
    </aside>
  );
}
