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
