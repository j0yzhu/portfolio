import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Joy from "@/assets/AboutPageImages/Me.jpg";
import {Button} from "@/components/ui/button.tsx";
import {LinkedinIcon} from "lucide-react";

export default function AboutPage() {
    return (
        <>
            <div>
                <h1 className="text-center text-[10vw] font-cursive text-[#74A662]">Xiaomin Zhu (Joy)</h1>
                <Card className="max-w-5xl mx-auto">
                    <CardContent className="flex flex-row">
                        <div className="w-full">
                            <img className="w-[20vw] rounded-2xl" src={Joy} alt="Me"/>
                            <a href="https://www.linkedin.com/in/joy-zhu-49640a278/">
                                <Button variant="link"><LinkedinIcon/>LinkedIn</Button>
                            </a>

                        </div>
                        <div>
                            <CardTitle className="mb-2">About Me:</CardTitle>
                            <CardDescription>
                                Hi I'm Joy! I am a recent graduate from the University of Auckland with a
                                strong passion for
                                technology. Currently building my portfolio through mobile and web development projects.
                                With a focus on
                                creating user-friendly, accessible and inclusive designs that enhance the user
                                experience. Eager to keep learing, I'm continuously developing my skills through
                                personal
                                projects.
                            </CardDescription>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <ImageCarousel/>
        </>
    )
}

import cameraFrame from "@/assets/AboutPageImages/digi.png"; // replace with your actual path
import img1 from "@/assets/HomePageImages/Pig.png";
import img2 from "@/assets/HomePageImages/apple.png";
import img3 from "@/assets/HomePageImages/bow.png";
// Add more images as needed

const images = [img1, img2, img3];

function ImageCarousel() {
    return (
        <div className="relative w-full h-[30vh] overflow-hidden bg-secondary">
            {/* Scrolling carousel */}
            <div className="absolute w-[200%] h-full flex items-center animate-slide-right">
                {[...images, ...images, ...images].map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`carousel-${index}`}
                        className="h-[10vh] mx-2 object-cover rounded"
                    />
                ))}
            </div>

            {/* Camera overlay frame */}
            <img
                src={cameraFrame}
                alt="Camera Frame"
                className="absolute w-[60vw] max-w-[400px] z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
        </div>
    );
}