import Image from "next/image";
import bg from "../public/banner.png";
import logo from "../public/Logo.png";

export default function Home() {
  return (
    <div className="bg-white justify-between ">
      <link rel="icon" href="/favicon.svg" />
      <div className="sm:flex h-full w-full  sm:ml-24 bg-white relative">
        <Image
          src={logo}
          height={400}
          width={400}
          alt="logo"
          className="m-auto sm:m-0"
        />
      </div>
      <div className="justify-center h-full w-full pb-16">
        <p className="text-center text-3xl font-Madani">... جاري العمل</p>
      </div>
      <div className="justify-bottom h-full w-full pt-36 sm:pt-16 bg-white">
        <Image src={bg} height={300} width={2000} alt="bg" />
      </div>
    </div>
  );
}
