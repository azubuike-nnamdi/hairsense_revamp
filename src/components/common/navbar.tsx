import Image from "next/image";
import React from "react";
const Navbar = () => {
  return (
    <main>
      {/* create header with logo on the left and content on the right */}
      <header className="flex w-full items-center justify-between border-b border-gray-300 bg-gradient-to-b p-4 dark:border-neutral-800 dark:bg-zinc-800/30">
        <Image src={"/img/logo.png"} alt="brand_logo " width={50} height={50} />
        <nav className="flex gap-4"></nav>
      </header>
    </main>
  );
};

export default Navbar;
