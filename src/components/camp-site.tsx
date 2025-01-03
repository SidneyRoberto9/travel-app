import Image from "next/image"
import { twMerge } from "tailwind-merge"

import { PEOPLE_URL } from "@/constants"

interface CampSiteProps {
  backgroundImage: string
  title: string
  subTitle: string
  peopleJoined: string
}

const CampSite = ({
  backgroundImage,
  peopleJoined,
  subTitle,
  title,
}: CampSiteProps) => {
  return (
    <div
      className={twMerge(
        "h-full w-full min-w-[68.75rem] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl",
        backgroundImage
      )}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" width={28} height={28} alt="map" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subTitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((person) => (
              <Image
                src={person}
                key={person}
                alt="person"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

export default CampSite
