import Image from "next/image";

export default function Gallery() {
    return (
      <section id="gallery">
        <div className="my-custom-font text-6xl text-black w-screen bg-amber-200 saturate-100 p-2 md:px-20">Some of our work</div>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3 w-screen h-auto items-start  bg-amber-200 saturate-100 p-2 md:px-20 md:py-10">
            <Image className="my-4 mx-auto shadow-xl" alt="image 1" src="/assets/gallery/1.jpg" height={300} width={300}></Image>
            <Image className="my-4 mx-auto shadow-xl" alt="image 2" src="/assets/gallery/2.jpg" height={300} width={300}></Image>
            <Image className="my-4 mx-auto shadow-xl" alt="image 3" src="/assets/gallery/3.jpg" height={300} width={300}></Image>
            <Image className="my-4 mx-auto shadow-xl" alt="image 4" src="/assets/gallery/4.jpg" height={300} width={300}></Image>
            <Image className="my-4 mx-auto shadow-xl" alt="image 5" src="/assets/gallery/5.jpg" height={300} width={300}></Image>
            <Image className="my-4 mx-auto shadow-xl" alt="image 7" src="/assets/gallery/7.jpg" height={300} width={300}></Image>
            <Image className="my-4 mx-auto shadow-xl" alt="image 6" src="/assets/gallery/6.jpg" height={300} width={300}></Image>
            <Image className="my-4 mx-auto shadow-xl" alt="image 8" src="/assets/gallery/8.jpg" height={300} width={300}></Image>
            <Image className="my-4 mx-auto shadow-xl" alt="image 9" src="/assets/gallery/9.jpg" height={300} width={300}></Image>
            <Image className="my-4 mx-auto shadow-xl" alt="image 10" src="/assets/gallery/10.jpg" height={300} width={300}></Image>
        </div>
      </section>
    )
  }