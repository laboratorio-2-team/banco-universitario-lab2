import { AboutLanding } from "../../components/AboutLanding"
import { FooterLanding } from "../../components/FooterLanding"
import { HeaderLanding } from "../../components/HeaderLanding"
import { InfoLanding } from "../../components/InfoLanding"
import { ObjectivesLanding } from "../../components/ObjectivesLanding"
import { WelcomeLanding } from "../../components/WelcomeLanding"

export const Home = () => {

  return (
    <>
      <HeaderLanding/>
      <WelcomeLanding/>
      <AboutLanding/>
      <ObjectivesLanding/>
      <InfoLanding/>
      <FooterLanding/>
    </>
  )
}
