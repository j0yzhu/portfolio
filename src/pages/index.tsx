import cake from "@/assets/HomePageImages/cake.png";
import camera from "@/assets/HomePageImages/camera.png";
import bow from "@/assets/HomePageImages/bow.png";
import apple from "@/assets/HomePageImages/apple.png";
import coke from "@/assets/HomePageImages/coke.png";
import ghibli from "@/assets/HomePageImages/ghibli.png";
import nyota from "@/assets/HomePageImages/nyota.png";
import stars from "@/assets/HomePageImages/stars.png";
import {useState} from "react";


export default function IndexPage() {
    const [spin, setSpin] = useState(false);

    return (
        <>
            <div className="relative w-full h-screen">
                <div>
                    <img className="absolute w-[15vw] top-[5vh] left-[5vw] object-contain animate-[bounce_4s_infinite_ease-in-out]" src={cake} alt="cake"/>
                    <img className="absolute w-[17vw] top-[5vh] right-[5vw] object-contain animate-[bounce_4s_infinite_ease-in-out]"  src={camera} alt="camera"/>
                    <img className="absolute w-[17vw] top-[5vh] left-[40vw] object-contain animate-[bounce_4s_infinite_ease-in-out]" src={stars} alt="stars"/>
                    <img className="absolute w-[15vw] bottom-[5vh] left-[8vw] object-contain animate-[bounce_4s_infinite_ease-in-out]" src={nyota} alt="nyota"/>
                    <img className="absolute w-[10vw] top-[40vh] left-[20vw] object-contain animate-[bounce_4s_infinite_ease-in-out]" src={bow} alt="bow"/>
                    <img className="absolute w-[8vw] bottom-[5vh] left-[40vw] object-contain animate-[bounce_4s_infinite_ease-in-out]" src={ghibli} alt="ghibli"/>
                    <img className="absolute w-[8vw] top-[40vh] right-[23vw] object-contain animate-[bounce_4s_infinite_ease-in-out]" src={coke} alt="coke"/>\
                    <img className="absolute w-[15vw] bottom-[5vh] right-[5vw] object-contain animate-[bounce_4s_infinite_ease-in-out]" src={apple} alt="apple"/>
                </div>
                <div>
                    <h1 className="absolute inset-0 flex items-center justify-center text-[15vw] font-cursive text-[#74A662]">Joy</h1>
                </div>
            </div>
        </>

    )
}