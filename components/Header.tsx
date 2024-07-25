import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";
import logo from "../app/logo.png";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo   */}
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={70}
            height={70}
            className="rounded-full"
          ></Image>
        </Link>
        {/* desktop nav  */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile nav  */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
