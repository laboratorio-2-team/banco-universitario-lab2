import { AboutLanding } from "../../components/AboutLanding"
import { InfoLanding } from "../../components/InfoLanding"
import { ObjectivesLanding } from "../../components/ObjectivesLanding"
import { WelcomeLanding } from "../../components/WelcomeLanding"

export const Home = () => {

  return (
    <>
      <WelcomeLanding />
      <AboutLanding />
      <ObjectivesLanding />
      <InfoLanding />
    </>
  )
}
