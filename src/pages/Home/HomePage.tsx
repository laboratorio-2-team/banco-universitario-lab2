import { AboutLanding, InfoLanding, ObjectivesLanding, WelcomeLanding } from "./components"

export const HOME_ROUTE = '';

export const HomePage = () => {

  return (
    <>
      <WelcomeLanding />
      <AboutLanding />
      <ObjectivesLanding />
      <InfoLanding />
    </>
  )
}
