import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

export const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/**LEFT LINKS */}

      <div className="hidden md:flex gap-4">
        <Link href={"/"}>Home</Link>

        <Link href={"/menu"}>Menu</Link>

        <Link href={"/"}>Contact</Link>
      </div>

      <div className="text-xl md:font-bold flex-1 md:text-center">
        {/**LOGO */}
        <Link href={"/"}>Som Kafe</Link>
      </div>

      <div className="md:hidden">
        {/**Mobile Menu */}
        <Menu />
      </div>

      {/**RIGHT LINKS */}

      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src={"/phone-icon.png"} alt="" width={20} height={20} />

          <span>0869.191.420</span>
        </div>

        {!user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/orders"}>Orders</Link>
        )}

        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
