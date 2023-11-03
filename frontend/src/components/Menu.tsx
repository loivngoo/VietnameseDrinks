"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;

  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
  ];

  return (
    <div>
      {!open ? (
        <Image
          src="/menu-icon.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close-icon.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-screen h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((el) => (
            <Link href={el.url} key={el.id} onClick={() => setOpen(false)}>
              {el.title}
            </Link>
          ))}

          {!user ? (
            <Link href={"/login"} onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href={"/orders"} onClick={() => setOpen(false)}>
              {" "}
              Orders
            </Link>
          )}
          <Link href={"/cart"} onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
