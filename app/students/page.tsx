"use client";

import Image from "next/image";
import leaders from "../../data/leaders";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";

export default function Students() {
  return (
    <div className="font-sans bg-gradient-to-b from-[#f4f7ff] via-white to-[#eef2ff] text-slate-900">
      <section className="hero-section text-white">
        <div className="grid gap-7 text-left">
          <h1 className="hero-heading m-0">
            Leadership Team
          </h1>
        </div>
      </section>

      <section className="py-[90px] px-[6vw] pb-[110px] grid gap-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12">
          {leaders.map((leader) => (
            <div key={leader.name} className="flex flex-col items-center text-center">
              {/* image fills the column width and keeps a 1:1 aspect ratio */}
              <div className="w-full">
                <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* text below image */}
              <div className="mt-4">
                <h3 className="text-[18px] font-semibold text-slate-900 leading-tight">{leader.name}</h3>
                <div className="text-[14px] text-slate-600 mt-1 font-medium">{leader.role}</div>
                <div className="text-[13px] text-slate-500 mt-1">
                  {leader.major}, {leader.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <CallToAction
        title="Partner or mentor with DAML"
        description="Whether you want to scope a project, give a workshop, or connect talent with opportunities, reach out to any director or division lead. We will route your note to the right pod within 24 hours."
        primaryButton={{
          text: "Contact",
          href: "mailto:renzo.larrea@duke.edu",
        }}
        secondaryButton={{
          text: "Explore consulting",
          href: "mailto:mayur.sekhar@duke.edu",
        }}
        backgroundColor="bg-gradient-to-br from-[#040c24] to-[#0b2f5c]"
      />
      <Footer />
    </div>
  );
}
