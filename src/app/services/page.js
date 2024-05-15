"use client";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Features from "@/components/Features";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

const Plan = ({ title }) => {

  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="text-gray-600 text-xl" />
      <span>{title}</span>
    </div>
  );
};

const PricingCard = ({ name, title, price, image, btnText, trail, titleOne, titleTwo, titleThree, titleFour }) => {
  const router = useRouter()
  const purchase = (name, price) => {
    const product = {
      name,
      price,
    }
    localStorage.setItem("item", JSON.stringify(product))
    router.push("/billing")
  }
  return (
    <div className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-6 rounded-3xl border-neutral-200 border">
      <div>
        <Image
          src={image}
          width={300}
          height={300}
          alt="features"
          className="w-full rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500">{title}</span>
      </div>
      <div className="flex flex-col gap-5">
        {/* <Plan title={titleOne} />
        <Plan title={titleTwo} />
        <Plan title={titleThree} />
        <Plan title={titleFour} /> */}
      </div>
      <div className="mx-auto">
        <h2 class="text-4xl text-center leading-none flex items-center pb-4 mb-4">
          <span>${price}</span>
          <span class="text-lg ml-1 font-normal text-neutral-500">
          </span>
        </h2>
        <Link href="/billing">
          <p
            onClick={() => { purchase(name, price) }}
            className="w-fit capitalize text-base hover:bg-gray-600 hover:shadow-md hover:shadow-gray-600 hover:border-2 border-2 border-transparent py-3 px-6 text-white bg-gray-600 hover:border-gray-600 hover:text-white rounded-full">
            {btnText}
          </p>
        </Link>
        <span className="block text-gray-600 mt-5 font-semibold animate-bounce cursor-pointer">
          {trail}
        </span>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="pt-[150px] flex flex-col gap-y-[70px] container mx-auto">
      <div>
        <span className="service-name text-center">Our Services</span>
        <h2 className="title text-center">Purchase services we provide</h2>
      </div>
      <div className="grid grid-cols-3 gap-[40px]">
        <PricingCard
          name="Renovation and Modification Services"
          title="Our team of experts specializes in renovating, modifying, altering, adapting, or specially equipping motor vehicles to meet your unique requirements. Whether you're looking to enhance performance, upgrade features, or customize aesthetics, we'll work closely with you to bring your vision to life."
          price="1450"
          image="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"

        />
        <PricingCard
          name="Servicing and Maintenance"
          title="Trust our skilled technicians to keep your vehicles in peak condition with our servicing, maintenance, repair, and cleaning services. From routine oil changes and tire rotations to complex engine repairs and detailing, we provide comprehensive automotive care to ensure your vehicles perform at their best."
          price="600"
          image="https://images.pexels.com/photos/18867032/pexels-photo-18867032/free-photo-of-traffic-on-a-crowded-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"

        />
        <PricingCard
          name="Car-Care Sundries"
          title="In addition to fuels and lubricants, we provide motorists' requisites and car-care sundries to help you maintain and care for your vehicles. From cleaning products and maintenance tools to accessories and spare parts, we have everything you need to keep your vehicle in top condition."
          price="900"
          image="https://images.pexels.com/photos/18889304/pexels-photo-18889304/free-photo-of-close-up-of-racing-bmw-e9.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"

        />
        <PricingCard
          name="Fuel and Lubricants Supply"
          title="From gasoline and diesel to specialty lubricants, we offer a comprehensive range of products to keep your vehicles running at their best. Our fuels are rigorously tested for quality and reliability, while our lubricants are formulated to provide optimal performance and protection for engines and machinery."
          price="200"
          image="https://images.pexels.com/photos/3045302/pexels-photo-3045302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"

        />
      </div>
    </div>
  )
}

export default page