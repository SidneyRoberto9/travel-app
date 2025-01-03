import Image from "next/image"

import FeatureItem from "@/components/feature-item"
import { FEATURES } from "@/constants"

const Features = () => {
  return (
    <section className="flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative flex w-full justify-end">
        <div className="flex flex-1 lg:min-h-[56.25rem]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-0.3125rem] top-[-1.75rem] w-10 lg:w-[3.125rem]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>

          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature, index) => (
              <FeatureItem {...feature} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features
