"use client";
import { ShoppingCart, UserRound } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import CartModal from "../ui/modals/CartModal";
import LoginModal from "../ui/modals/auth/LoginModal";
import SearchInput from "./search";

const Navbar = () => {
  const [openAuth, setOpenAuth] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);

  const handleOpenAction = (title: string) => {
    if (title === "Cart") {
      setOpenCart(true);
    } else if (title === "My Account") {
      setOpenAuth(true);
    }
  };
  return (
    <main>
      {/* create header with logo on the left and content on the right */}
      <nav className="flex w-full items-center justify-between bg-[#EDEDEC] p-6 sm:px-8  dark:bg-zinc-800/30">
        <Image
          src={"/img/logo.png"}
          alt="brand_logo "
          width={150}
          height={150}
          className="sm:w-1/12 w-12"
        />
        <SearchInput />

        <section className="flex items-center sm:gap-5 gap-3">
          {navLinkData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleOpenAction(item.title)}
              className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-neutral-400"
            >
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </button>
          ))}
        </section>
      </nav>

      {openAuth && <LoginModal onClose={() => setOpenAuth(false)} />}
      {openCart && <CartModal onClose={() => setOpenCart(false)} />}
    </main>
  );
};

export default Navbar;

export const navLinkData = [
  {
    id: 1,
    title: "My Account",
    icon: <UserRound />,
  },
  {
    id: 2,
    title: "Cart",
    icon: <ShoppingCart />,
  },
];
