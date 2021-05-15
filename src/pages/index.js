import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import MemberCard from '../components/MemberCard'

import LabelText from '../components/LabelText'
import Layout from '../components/layout/Layout'
import SplitSection from '../components/SplitSection'
import team from '../data/team'

import HeroImage from '../svg/HeroImage'
import SvgCharts from '../svg/SvgCharts'
import AdventureMap from '../svg/AdventureMap'
import Genius from '../svg/Genius'
import Line from '../svg/Line'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Index = () => (
  <Layout>
    <section id="domu" className="pt-10 md:pt-20">
      <div className="container px-8 mx-auto lg:flex">
        <div className="relative hidden w-1 mt-12 mr-4 md:inline-block">
          <Line />
        </div>
        <div className="pt-10 text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl font-bold leading-none lg:text-4xl xl:text-5xl">
            Baví Vás matematika a přemýšlíte jaké povolání si zvolit?
          </h1>
          <p className="mt-6 text-lg font-light lg:text-xl">
            Ústav matematiky a statistiky Přírodovědecké fakulty Masarykovy univerzity si Vás
            dovoluje pozvat na několikadenní seznamovací kurz určený studentům maturitních ročníků
            (případně třetích ročníků), kteří se zajímají o studium matematiky na vysoké škole.
          </p>
          <p className="mt-8 md:mt-12">
            <AnchorLink className="px-4" href="#info">
              <Button size="lg">Chci vědět víc</Button>
            </AnchorLink>
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
            <Card className="mb-8">
              <p className="text-xl font-semibold">První věc</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="text-xl font-semibold">Druhá věc</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="text-xl font-semibold">Třetí věc</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
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
          <h3 className="text-3xl font-semibold leading-tight">
            Vydej se s námi na cestu za poznáním
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna
            vitae auctor integer
          </p>
        </div>
      }
      secondarySlot={<AdventureMap />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Zkoumej rovnici vesmíru</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna
            vitae auctor integer
          </p>
        </div>
      }
      secondarySlot={<Genius />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Skládej puntíky na poličky</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna
            vitae auctor integer
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />

    <section id="tym" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-center text-gray-600">Náš tým</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {team.map((member) => (
            <div key={member.memberName} className="flex-1 px-3">
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container py-24 mx-auto my-20 text-center bg-gray-200 rounded-lg">
      <h3 className="text-5xl font-semibold">Tak co, cítíš se na to?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Podat přihlášku</Button>
      </p>
    </section>
  </Layout>
)

export default Index
