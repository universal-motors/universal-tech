import React from "react";
import basit from "@/assets/images/basit.png";
import Image from "next/image";
import baqar from "@/assets/images/baqar.png";
import Ahmad from "@/assets/images/ahmad.jpeg";
import Avatar from "@/assets/images/boys.avif";
import Siraj from "@/assets/images/siraj.png";
import girls from "@/assets/images/girlss.png";
import maria from "@/assets/images/Maria.png.jpg";
import AOS from "aos";
export default function Leadership() {
  AOS.refresh();
  const people = [
    {
      name: "Yousuf Sajid",
      role: "Co-Founder / CEO",
      imageUrl: Avatar,
    },
    {
      name: "Baqar Naqvi",
      role: "Backend Lead ",
      imageUrl: baqar,
    },
    {
      name: "Mubashir Raza",
      role: "Frontend Lead ",
      imageUrl: Avatar,
    },

    {
      name: "Muhammad Basit",
      role: "SEO Lead ",
      imageUrl: basit,
    },
    {
      name: "Rida Wasim ",
      role: "Content Writer ",
      imageUrl: girls,
    },
    {
      name: "Maria Khan",
      role: "Frontend Internee",
      imageUrl: maria,
    },
    {
      name: "Ahmad Raza",
      role: "Frontend Internee ",
      imageUrl: Ahmad,
    },

    {
      name: "Alina Nazir",
      role: "HR Executive ",
      imageUrl: girls,
    },

    {
      name: "Adeel Mohiuddin",
      role: "Accounts Executive ",
      imageUrl: Avatar,
    },

    {
      name: "Siraj Uddin Khan",
      role: "I.T Administrator  ",
      imageUrl: Siraj,
    },
    {
      name: "Mohammad Ibrahim Parkar",
      role: "Accounts Officer ",
      imageUrl: Avatar,
    },
  ];
  return (
    <div id="team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div data-aos="fade-right" className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our dedicated team of experts who are passionate about transforming
            ideas into reality. All professional staff collaborate to deliver
            high-quality, result-driven solutions to clients.
          </p>
        </div>
        <ul
          data-aos="fade-left"
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 "
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  width={64}
                  height={64}
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-[#00A0C1]">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
