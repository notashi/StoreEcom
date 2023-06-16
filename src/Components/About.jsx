
import HeroSection from "../Newcomps/HeroSection"
import { useProductContext } from "../context/ProductContext"

const About = () => {
  const { myName } = useProductContext();

  const data ={
    name: "about Store",
    paragraph: " Nike, Inc. is an American multinational association that is involved in the design, development, manufacturing and worldwide marketing and sales of apparel, footwear, accessories, equipment and services."
  }

  return (
    <>
   
    {myName}
    <HeroSection myData={data}/>
    
    </>
  )
}

export default About