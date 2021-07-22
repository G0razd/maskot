import React from "react"
import { Link } from "gatsby"
import { Card, MemberCard, LabelText, Layout, SplitSection } from "/src/components"
import { HeroImage, SvgCharts, AdventureMap, Genius, Line } from "/src/svg"
import team from "../data/team"

const Index = () => (
  <Layout>
    <section id="domu" className="pt-10 md:pt-20">
      <div className="container px-8 mx-auto lg:flex">
        <div className="relative hidden w-1 mt-12 mr-4 md:inline-block">
          <Line />
        </div>
        <div className="pt-10 text-justify lg:text-left lg:w-1/2">
          <h1 className="text-3xl font-bold lg:text-4xl xl:text-5xl">
            Baví Vás matematika a přemýšlíte jaké povolání si zvolit?
          </h1>
          <p className="mt-6 text-lg font-light lg:text-xl">
            Ústav matematiky a statistiky Přírodovědecké fakulty Masarykovy univerzity si Vás
            dovoluje pozvat na několikadenní seznamovací kurz určený studentům maturitních ročníků
            (případně třetích ročníků), kteří se zajímají o studium matematiky na vysoké škole.
          </p>
          <p className="mt-8 md:mt-12">
            <Link className=" md:px-4" to="/#info">
              <button className="h-24 px-8 mt-12 text-3xl font-bold btn btn-lg btn-primary">
                Chci vědět víc
              </button>
            </Link>
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="w-3/5 pt-5 mx-auto md:pt-0 ">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
    <section id="info" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold lg:text-5xl">Informace</h2>
        <div className="flex flex-col mt-12 sm:flex-row sm:-mx-3">
          <div className="flex-1 px-3">
            <Card className="min-h-full mb-8">
              <p className="text-xl font-semibold">Budoucí spolužáci</p>
              <p className="mt-4">
                Seznamíš se s lidmi, kteří tě budou doprovázet další roky tvého života.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="min-h-full mb-8">
              <p className="text-xl font-semibold">Vysokoškolský život</p>
              <p className="mt-4">Dozvíš se co obnáší studium na vysoké škole.</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="min-h-full mb-8">
              <p className="text-xl font-semibold">Vyučující</p>
              <p className="my-auto">
                Budeš si moct popovídat s vyučujícími z Ústavu matematiky a statistiky.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <h2 className="text-3xl font-semibold text-center lg:text-5xl">Co tě vlastně čeká?</h2>
    <SplitSection
      id="ocekavani"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Zkušenosti starších</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Jsme současní studenti matematiky: od prváků k doktorandům, od studentů obecné
            matematiky k budoucím učitelům. Podělíme se s vámi o naše zkušenosti, radosti i útrapy.
            Řekneme vám, co bychom byli chtěli vědět, než jsme sami šli do prváku.
          </p>
        </div>
      }
      secondarySlot={<AdventureMap />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Výběr oboru</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Povíme ti, co můžeš čekat od jednotlivých oborů. Dozvíš se, co vlastně všechno obor
            ovlivňuje, a jak málo ve skutečnosti záleží na jeho volbě.
          </p>
        </div>
      }
      secondarySlot={<Genius />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Hry a workshopy</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Zážitkovou formou zjistíš, co se na škole učí. Na vlastní kůži poznáš, co to znamená být
            na vysoké škole
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />

    {/* 
    <section id="org" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-center text-gray-600">Náši Orgové</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {team.map((member, key) => (
            <div key={member.memberName} className="flex-1 px-3">
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section> */}
    <section className="container py-20 mx-auto my-20 text-center bg-gray-200 rounded-lg">
      <h3 className="text-3xl font-bold md:text-6xl">Tak co, cítíš se na to?</h3>
      <p className="mt-6 text-xl ">Vyplň přihlášku a pojeď s námi na seznamovací kurz</p>
      <Link to="/SignUp">
        <button className="mt-12 font-bold md:h-24 md:px-8 md:text-3xl btn btn-lg btn-primary">
          Jdu do toho!
        </button>
      </Link>
    </section>
  </Layout>
)

export default Index
