"use client";

import { isNotFoundError } from "next/dist/client/components/not-found";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];

    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[100px]",
        "w-[300px]",
        "h-[500px]",
        "pt-[40px]",
        "left-[40px]",
        "gap-[34px]",
        "rounded-[20px]",
        "pl-[17px]",
        "pr-[20px]",
        "font-medium",
        "bg-orange-400",
        "flex-col",
      ];
    } else {
      menuClasses.push("hidden", "md:flex");
    }

    return menuClasses.join(" ");
  }

  return (
    <nav
      className="bg-inherit text-black p-4 sm:p-6 md:flex 
    md:justify-between md:items-center"
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          Toingg
        </a>
        <div className={getMenuClasses()}>
          <Link href="/contact" className="mx-2">
            Contact
          </Link>

          <Link href="/pricing" className="mx-2">
            Pricing
          </Link>

          <Link href="/docs" className="mx-2">
            Documentation
          </Link>

          <Link href="/join" className="mx-2">
            Join Our Community
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
