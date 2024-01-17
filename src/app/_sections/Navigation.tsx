export default function Navigation() {
  return (
    <nav className="flex flex-col col-start-1 col-span-1 w-fit space-y-2 items-center sticky top-16 h-fit max-md:hidden">
      <svg width="32" viewBox="0 0 20 16" fill="none">
        <path
          d="M10 5.83334C11.25 5.83334 20 9.58334 20 10.8333C20 12.0833 11.25 15.8333 10 15.8333C8.75 15.8333 0 12.0833 0 10.8333C0 9.58334 8.75 5.83334 10 5.83334Z"
          fill="#505050"
        />
        <path
          d="M10 2.91666C11.25 2.91666 20 6.66666 20 7.91666C20 9.16666 11.25 12.9167 10 12.9167C8.75 12.9167 0 9.16666 0 7.91666C0 6.66666 8.75 2.91666 10 2.91666Z"
          fill="#2D2D2D"
        />
        <path
          d="M10 0C11.25 0 20 3.75 20 5C20 6.25 11.25 10 10 10C8.75 10 0 6.25 0 5C0 3.75 8.75 0 10 0Z"
          fill="black"
        />
      </svg>
      <div className="h-1 w-1 rounded-full bg-[#505050] mx-auto" />
      <a
        className="[writing-mode:tb-rl;] -rotate-180 font-sans font-bold text-[#505050] leading-none hover:text-[#997658] transition-colors duration-500 text-[clamp(theme(fontSize.base),1.045vw,1.05vw)] mr-[2px]"
        href="#works"
      >
        selected work
      </a>
      <div className="h-1 w-1 rounded-full bg-[#505050] mx-auto" />
      <a
        className="[writing-mode:tb-rl;] -rotate-180 font-sans font-bold text-[#505050] leading-none hover:text-[#997658] transition-colors duration-500 text-[clamp(theme(fontSize.base),1.045vw,1.05vw)] mr-[2px]"
        href="#experience"
      >
        experience
      </a>
      <div className="h-1 w-1 rounded-full bg-[#505050] mx-auto" />
      <a
        className="[writing-mode:tb-rl;] -rotate-180 font-sans font-bold text-[#505050] leading-none hover:text-[#997658] transition-colors duration-500 text-[clamp(theme(fontSize.base),1.045vw,1.05vw)] mr-[2px]"
        href="#education"
      >
        education
      </a>
    </nav>
  );
}
