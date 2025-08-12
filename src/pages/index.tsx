import cake from "@/assets/HomePageImages/cake.png";
import camera from "@/assets/HomePageImages/camera.png";
import bow from "@/assets/HomePageImages/bow.png";
import apple from "@/assets/HomePageImages/apple.png";
import coke from "@/assets/HomePageImages/coke.png";
import ghibli from "@/assets/HomePageImages/ghibli.png";
import nyota from "@/assets/HomePageImages/nyota.png";
import stars from "@/assets/HomePageImages/stars.png";

export default function IndexPage() {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="relative -z-5">
                    <div className="relative w-full md:h-screen h-[600px]">
                        <img
                            className="absolute w-[25.5vw] md:w-[17vw] top-[5%] left-[5%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={cake} alt="cake"/>
                        <img
                            className="absolute w-[25.5vw] md:w-[17vw] top-[5%] right-[5%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={camera} alt="camera"/>
                        <img
                            className="absolute w-[25.5vw] md:w-[17vw] top-[5%] left-[40%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={stars} alt="stars"/>
                        <img
                            className="absolute w-[22.5vw] md:w-[15vw] bottom-[5%] left-[8%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={nyota} alt="nyota"/>
                        <img
                            className="absolute w-[20vw] md:w-[10vw] top-[30%] left-[20%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={bow} alt="bow"/>
                        <img
                            className="absolute w-[18vw] md:w-[8vw] bottom-[5%] left-[40%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={ghibli} alt="ghibli"/>
                        <img
                            className="absolute w-[12vw] md:w-[8vw] top-[30%] right-[23%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={coke} alt="coke"/>
                        <img
                            className="absolute w-[22.5vw] md:w-[15vw] bottom-[5%] right-[5%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={apple} alt="apple"/>
                    </div>
                </div>
                <div className="relative -z-5">
                    <div className="relative w-full md:h-screen h-[600px] block md:hidden">
                        <img
                            className="absolute w-[25.5vw] md:w-[17vw] top-[5%] left-[5%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={cake} alt="cake"/>
                        <img
                            className="absolute w-[25.5vw] md:w-[17vw] top-[5%] right-[5%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={camera} alt="camera"/>
                        <img
                            className="absolute w-[25.5vw] md:w-[17vw] top-[5%] left-[40%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={stars} alt="stars"/>
                        <img
                            className="absolute w-[22.5vw] md:w-[15vw] bottom-[5%] left-[8%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={nyota} alt="nyota"/>
                        <img
                            className="absolute w-[15vw] md:w-[10vw] top-[40%] left-[20%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={bow} alt="bow"/>
                        <img
                            className="absolute w-[12vw] md:w-[8vw] bottom-[5%] left-[40%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={ghibli} alt="ghibli"/>
                        <img
                            className="absolute w-[12vw] md:w-[8vw] top-[40%] right-[23%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={coke} alt="coke"/>
                        <img
                            className="absolute w-[22.5vw] md:w-[15vw] bottom-[5%] right-[5%] object-contain animate-[bounce_4s_infinite_ease-in-out]"
                            src={apple} alt="apple"/>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="absolute inset-0 flex items-center justify-center text-[200px] sm:text-[400px] font-heading text-[#74A662] pointer-events-none">Joy</h1>
            </div>
        </>
    )
}