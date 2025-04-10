import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Menu, X } from "lucide-react"; // Icons for menu and close

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Navbar
      className="w-full max-w-[1900px] h-[90px] bg-[#072a30]"
      expand="lg"
      variant="dark"
    >
      <div className="w-full flex justify-between px-[20px] md:px-[24px] lg:px-[80px] py-[20px] relative items-center">
        {/* Logo */}
        <a
          href="/"
          className="w-[96px] h-[35px] md:w-[118px] mdh-[43px] lg::w-[130px] lg:h-[48px]"
        >
          <img
            src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741440756/Kriapay_Logo_nm8w7f.svg"
            alt="Kriapay Logo"
          />
        </a>

        {/* Desktop Nav (Hidden on mobile) */}
        <div className="hidden md:flex flex-row gap-8 p-0 font-medium ml-6">
          <Nav.Link
            className="text-white text-[16px] tracking-[-1px]"
            href="/kriacard"
          >
            Kriacard
          </Nav.Link>
          <Nav.Link
            className="text-white text-[16px] tracking-[-1px]"
            href="/company"
          >
            Company
          </Nav.Link>
          <Nav.Link
            className="text-white text-[16px] tracking-[-1px]"
            href="/ask"
          >
            Ask Kriapay
          </Nav.Link>
          <Nav.Link
            className="text-white text-[16px] tracking-[-1px]"
            href="https://kriapay.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </Nav.Link>
        </div>

        {/* Sign Up Button (Hidden on mobile) */}
        <a
          href="https://kriapay.vercel.app/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="!no-underline"
        >
          <button className="hidden md:block w-[146px] h-[46px] tracking-[-1px] bg-[#1B4F56] text-white font-medium rounded">
            Sign up
          </button>
        </a>

        {/* Hamburger Menu Button (Visible on mobile) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={32} />
        </button>

        {/* Sidebar (Mobile Navigation) */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#072a30] z-50 p-6 transform ${
            isSidebarOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 md:hidden`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-6 text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={32} />
          </button>

          {/* Sidebar Menu */}
          <div className="flex flex-col items-center gap-[32px] mt-16">
            <Nav.Link
              className="text-white !text-[17px] tracking-[-1px] leading-[19px] !font-medium"
              href="/kriacard"
              onClick={() => setIsSidebarOpen(false)}
            >
              Kriacard
            </Nav.Link>
            <Nav.Link
              className="text-white !text-[17px] tracking-[-1px] leading-[19px] !font-medium"
              href="/company"
              onClick={() => setIsSidebarOpen(false)}
            >
              Company
            </Nav.Link>
            <Nav.Link
              className="text-white !text-[17px] tracking-[-1px] leading-[19px] !font-medium"
              href="/ask"
              onClick={() => setIsSidebarOpen(false)}
            >
              Ask Kriapay
            </Nav.Link>
            <Nav.Link
              className="text-white !text-[17px] tracking-[-1px] leading-[19px] !font-medium"
              href="https://kriapay.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsSidebarOpen(false)}
            >
              Login
            </Nav.Link>
            <a href="https://kriapay.vercel.app/signup" target="_blank" rel="noopener noreferrer" className="!no-underline">

            <button className="w-[146px] h-[46px] tracking-[-1px] bg-[#1B4F56] text-white font-medium leading-[19px] rounded !mt-[6px]" onClick={() => setIsSidebarOpen(false)}>
              
              Sign up
            </button>
            </a>
            
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Navigation;
