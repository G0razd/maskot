import React from "react"

interface SplitSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string
  primarySlot: React.ReactNode
  secondarySlot: React.ReactNode
  reverseOrder?: boolean
}

const SplitSection: React.FC<SplitSectionProps> = ({
  id,
  primarySlot,
  secondarySlot,
  reverseOrder = false,
}) => (
  <section id={id} className="py-20">
    <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
      <div className="lg:w-1/2">{primarySlot}</div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
)

export default SplitSection
