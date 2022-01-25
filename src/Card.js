import  React from "react"
import Info from "./Comp/Info"
import Footer from "./Comp/Footer"
import Interests from "./Comp/Interests"
import About from "./Comp/About"


export default function Card(){
   return(
        <div className="card-cont">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}
