import { Fragment } from "react"

import Camp from "@/components/camp"
import Features from "@/components/features"
import GetApp from "@/components/get-app"
import Guide from "@/components/guide"
import Hero from "@/components/hero"

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </Fragment>
  )
}
