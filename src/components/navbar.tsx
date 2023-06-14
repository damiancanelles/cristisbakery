import Link from "next/link";

export default function Navbar() {
    return (
      <div className="fixed z-50 top-0 hidden md:flex w-screen h-20 items-center justify-center px-10 bg-amber-200">
        <Link legacyBehavior href="#header">
            <div className="nav-link cursor-pointer text-lg text-center text-black w-30 mx-2 px-2">
                Home
            </div>
        </Link>
        <Link legacyBehavior href="#about">
            <div className="nav-link cursor-pointer text-lg text-center text-whblackite w-30 mx-2 px-2">
                About Us
            </div>
        </Link>
        <Link legacyBehavior href="#gallery">
            <div className="nav-link cursor-pointer text-lg text-center text-whblackite w-30 mx-2 px-2">
                Gallery
            </div>
        </Link>
        <Link legacyBehavior href="#contact">
            <div className="nav-link cursor-pointer text-lg text-center text-black w-30 mx-2 px-2 border-2 border-black hover:bg-white hover:border-black">
                Contact Us
            </div>
        </Link>
      </div>
    )
  }