import HeadHome from "@/components/HeadHome"
import { GridCrads } from "../components/GridCrads"

const Home = () => {
  const images = [
    { src: "/public/images/cidade1.jpg", alt: "Praça Central" },
    { src: "/public/images/cidade2.jpg", alt: "Vista Aérea" },
    { src: "/public/images/cidade3.jpg", alt: "Parque Municipal" },
  ]
  return (
    <>
      <HeadHome
        images={images}
        description="Este projeto visa valorizar os espaços urbanos, promover o turismo local
  e destacar as belezas naturais e arquitetônicas da cidade. Com iniciativas 
  de infraestrutura e cultura, esperamos fortalecer o sentimento de pertencimento 
  e orgulho na população.
  Junte-se a nós nessa jornada de redescoberta e celebração da nossa cidade!"
      />
      <GridCrads />
    </>
  )
}

export default Home
