import Image from "next/image";

export default function About() {
    return (
      <section id="about">
        <div className="my-custom-font md:flex h-auto items-center justify-evenly bg-amber-200 saturate-100 p-4 md:px-20">
            <div className="md:pr-10">
                <div className="text-start text-sm md:text-xl text-black p-1 md:p-5">Welcome to Cristi's Bakery, where we specialize in crafting delectable desserts for your special occasions. At Cristi's Bakery, we take pride in creating exquisite treats that are made with love and attention to detail. Our menu features a wide variety of desserts, from custom cakes to mouthwatering pastries, all designed to add a touch of sweetness to your celebrations.
                    <br />
                    To ensure the highest quality and personalized service, we kindly request that you place your orders in advance. This allows us to carefully prepare each order, ensuring that every dessert is made to perfection. When the big day arrives, you can conveniently pick up your delectable treats from our bakery, where you'll be greeted with a warm smile and friendly service.
                    <br />
                    Whether you're celebrating a birthday, anniversary, or any other special event, let Cristi's Bakery be a part of your joyous moments. Indulge in our delightful creations, made with passion and expertise, and experience the pure bliss of savoring handcrafted desserts that are sure to impress both you and your guests.
                    <br />
                    Order with us today and let Cristi's Bakery make your celebrations sweeter and more memorable.
                </div>
            </div>
            <Image className="mx-auto" alt="cristis image" src="/assets/cristis.jpg" height={400} width={400}></Image>
        </div>
      </section>
    )
  }