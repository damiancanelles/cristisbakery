import GoogleMapC from "./map";

export default function Contact() {
    return (
      <section id="contact">
        <div className="my-custom-font text-6xl text-black w-screen bg-amber-200 saturate-100 p-2 md:px-20">You can find us here</div>
        <div className="my-custom-font md:flex w-screen h-auto items-center justify-evenly bg-amber-200 saturate-100 p-2 md:px-20 md:py-10">
            <div className="hidden md:flex">
                <GoogleMapC height="400px" width="600px"></GoogleMapC>
            </div>
            <div className="p-4 md:hidden">
                <GoogleMapC height="300px" width="300px"></GoogleMapC>
            </div>
            <div className="">
                <div className="text-xl text-black p-5">
                    We work on Marietta Georgia 30008
                    <br></br>
                    You can call us to this phone number: 678 651 9484
                    <br></br>
                    Or go directly to whats app right here
                </div>
                <div className="flex justify-end">
                    <a href="https://wa.me/16786519484" target="_blank" rel="noopener noreferrer" className="text-4xl text-black border-black p-5 border-2 hover:bg-gray-200">Contact Us</a>
                </div>
            </div>
        </div>
      </section>
    )
  }