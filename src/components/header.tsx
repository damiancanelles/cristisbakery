export default function Header() {
    return (
      <section id="header">
        <div className="my-custom-font flex w-screen h-[600px] items-center justify-evenly bg-[url('/assets/header2.jpg')] saturate-100 bg-cover bg-center px-2 md:px-20">
            <div className="md:pr-10">
                <div className="text-6xl text-black capitalize">Cristi's Bakery</div>
                <div className="text-4xl text-black p-5">Savor the Celebration with Cristi's Bakery: Crafting Special Bocadillos for Party Tables.</div>
                <div className="flex justify-end">
                <a href="https://wa.me/16786519484" target="_blank" rel="noopener noreferrer" className="text-4xl text-black border-black p-5 border-2 hover:bg-gray-200">Contact Us</a>
                </div>
            </div>
        </div>
      </section>
    )
  }