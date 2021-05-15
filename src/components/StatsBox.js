import React from 'react'

const StatsBox = ({ primaryText, secondaryText }) => (
  <>
    <p className="text-4xl font-semibold lg:text-6xl text-primary">{primaryText}</p>
    <p className="mb-6 font-semibold">{secondaryText}</p>
  </>
)

;<section id="stats" className="py-20 lg:pt-32">
  <div className="container mx-auto text-center">
    <LabelText className="text-gray-600">Our customers get results</LabelText>
    <div className="flex flex-col mt-8 sm:flex-row lg:px-24">
      <div className="w-full sm:w-1/3">
        <StatsBox primaryText="+100%" secondaryText="Stats Information" />
      </div>
      <div className="w-full sm:w-1/3">
        <StatsBox primaryText="+100%" secondaryText="Stats Information" />
      </div>
      <div className="w-full sm:w-1/3">
        <StatsBox primaryText="+100%" secondaryText="Stats Information" />
      </div>
    </div>
  </div>
</section>

export default StatsBox
