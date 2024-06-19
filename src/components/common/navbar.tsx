"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Search, ShoppingCart, UserRound } from "lucide-react";
import AuthModal from "../ui/modals/AuthModal";
import CartModal from "../ui/modals/CartModal";

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
        />
        <div className="w-[320px] relative">
          <Input
            className="w-full pr-10 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
            placeholder="Search products..."
          />
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2" />
        </div>

        <section className="flex items-center gap-5">
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

      {openAuth && <AuthModal onClose={() => setOpenAuth(false)} />}
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
