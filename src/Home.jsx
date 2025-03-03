import Aboutbrand from "./Component/Aboutbrand"
import Aboutinfo from "./Component/Aboutinof"
import Contact from "./Component/Contact"
import Hero from "./Component/Hero"
import Properties from "./Component/Properties"
import Question from "./Component/Question"
import Topoffers from "./Component/Topoffers"

function Home(){
    return<>
     <Hero></Hero>
     <Topoffers></Topoffers>
     <Aboutbrand></Aboutbrand>
     <Properties></Properties>
     <Aboutinfo></Aboutinfo>
     <Question></Question>
     <Contact></Contact>
    
     
    </>
}
export default Home