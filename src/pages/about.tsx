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
            <div className="mt-10">
                <h1 className="text-center text-[100px] font-cursive text-[#74A662]">Xiaomin Zhu (Joy)</h1>
                <ImageCarousel/>
                <Card className="max-w-5xl mx-auto mt-40">
                    <CardContent className="flex flex-row gap-4">
                        <div className="w-full">
                            <img className="w-full max-w-sm rounded-2xl" src={Joy} alt="Me"/>
                            <a href="https://www.linkedin.com/in/joy-zhu-49640a278/">
                                <Button variant="link"><LinkedinIcon/>LinkedIn</Button>
                            </a>

                        </div>
                        <div>
                            <CardTitle className="mb-2">About Me:</CardTitle>
                            <CardDescription className="mb-5">
                                Hi I'm Joy! I am a recent graduate from the University of Auckland with a
                                strong passion for
                                technology. Currently building my portfolio through mobile and web development projects.
                                With a focus on
                                creating user-friendly, accessible and inclusive designs that enhance the user
                                experience. Eager to keep learning, I'm continuously developing my skills through
                                personal
                                projects.
                            </CardDescription>
                            <CardTitle>Tech Stack:</CardTitle>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

import cameraFrame from "@/assets/AboutPageImages/digi.png";
import img1 from "@/assets/AboutPageImages/newimage.jpg";
import InfiniteLooper from "@/components/ui/ImageCarousel.tsx";
/*import img2 from "@/assets/AboutPageImages/image2.jpg";
import img3 from "@/assets/AboutPageImages/image3.jpg";*/

const images = [img1, img1, img1];

function ImageCarousel() {
    return (
        <>
            {/*Camera overlay frame*/}
            <img
                src={cameraFrame}
                alt="Camera Frame"
                className="absolute w-[60vw] max-w-[400px] z-10 right-[0vw] top-[30.6vh] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
            <div className="relative top-[5vh] w-full h-[15vh] overflow-hidden bg-accent">
                {/* Scrolling carousel */}
{/*                <div className="absolute w-[200%] h-full flex items-center animate-slide-right">
                    {[...images, ...images, ...images, ...images, ...images].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`carousel-${index}`}
                            className="h-[11vh] mx-2 object-cover rounded"
                        />
                    ))}
                </div>*/}
                <InfiniteLooper speed={4} direction="right">
                    <div className="contentBlock contentBlock--one">
                        Place the stuff you want to loop
                    </div>
                    <div className="contentBlock contentBlock--one">right here</div>
                </InfiniteLooper>
            </div>
        </>
    );
}