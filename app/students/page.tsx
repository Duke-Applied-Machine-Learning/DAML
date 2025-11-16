"use client";

import Image from "next/image";
import leaders from "../../data/leaders";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";

function buildEmail(name: string) {
  const parts = name.trim().toLowerCase().split(/\s+/);
  if (parts.length === 1) {
    return `${parts[0]}@duke.edu`;
  }
  const email = `${parts[0]}.${parts[parts.length - 1]}`;
  return `${email}@duke.edu`;
}

export default function Students() {
  return (
    <div className="font-sans bg-gradient-to-b from-[#f4f7ff] via-white to-[#eef2ff] text-slate-900">
      <section className="relative py-[120px] px-[6vw] pb-[90px] overflow-hidden bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(14,116,144,0.2),transparent_50%),linear-gradient(120deg,#031633_0%,#0f3a63_45%,#1f6aa5_85%)] text-white">
        <div className="relative max-w-[1080px] mx-auto grid gap-6">
          <span className="text-sm tracking-[6px] uppercase font-semibold text-blue-200/85">
            Leadership
          </span>
          <h1 className="text-[52px] font-bold leading-[1.08] m-0">
            The people steering DAML&apos;s research, training, and partner work.
          </h1>
          <p className="text-lg leading-[1.75] text-slate-200/90 max-w-[800px]">
            Directors, division leads, and instructors collaborate across hardware, software, and analytics pods. Get in
            touch to partner on a build, mentor the next cohort, or explore how DAML can embed with your team.
          </p>
        </div>
      </section>

      <section className="py-[90px] px-[6vw] pb-[110px] grid gap-10">
        <div className="text-center grid gap-3">
          <h2 className="text-[34px] font-bold m-0">Leadership team</h2>
          <p className="text-[17px] text-slate-600 leading-[1.7] max-w-[760px] mx-auto">
            Get to know our leadership team and their areas of expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {leaders.map((leader) => {
            const email = buildEmail(leader.name);
            return (
              <Card
                key={leader.name}
                className="pt-0 bg-white rounded-[28px] border border-slate-300/18 shadow-[0_24px_46px_rgba(15,23,42,0.12)] overflow-hidden grid grid-rows-[260px_auto] transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-[0_32px_62px_rgba(15,23,42,0.18)]"
              >
                <div className="relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.18),transparent_70%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.14),transparent_75%)] z-[1]"
                  />
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    fill
                    className="object-cover object-[center_top] scale-105"
                  />
                </div>
                <CardContent className="p-7 px-[26px] pb-8 grid gap-3.5">
                  <div className="flex flex-col gap-1">
                    <CardTitle className="text-[22px] font-[650]">{leader.name}</CardTitle>
                    <span className="text-[15px] text-blue-700 font-semibold">{leader.role}</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <Badge className="px-3 py-1.5 rounded-full bg-blue-600/12 text-blue-700 text-xs font-semibold tracking-[0.4px]">
                      {leader.major}
                    </Badge>
                    <Badge className="px-3 py-1.5 rounded-full bg-teal-600/12 text-teal-700 text-xs font-semibold tracking-[0.4px]">
                      {leader.year}
                    </Badge>
                  </div>
                  <p className="text-[15px] text-slate-600 leading-[1.65]">{leader.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="inline-flex items-center gap-2.5 px-[18px] py-2.5 rounded-full border border-blue-600/30 text-blue-700 font-semibold text-sm hover:bg-blue-50"
                  >
                    <a href={`mailto:${email}`}>
                      {email}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <CallToAction
        title="Partner or mentor with DAML"
        description="Whether you want to scope a project, give a workshop, or connect talent with opportunities, reach out to any director or division lead. We will route your note to the right pod within 24 hours."
        primaryButton={{
          text: "Talk with the directors",
          href: "mailto:renzo.larrea@duke.edu",
        }}
        secondaryButton={{
          text: "Explore consulting pods",
          href: "mailto:mayur.sekhar@duke.edu",
        }}
        backgroundColor="bg-gradient-to-br from-[#040c24] to-[#0b2f5c]"
      />
      <Footer />
    </div>
  );
}
