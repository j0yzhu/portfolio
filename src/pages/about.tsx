import {
    Card,
    CardContent,
    CardDescription, CardFooter, CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Joy from "@/assets/AboutPageImages/Me.jpg";
import {Button} from "@/components/ui/button.tsx";
import {GithubIcon, LinkedinIcon} from "lucide-react";
import type {ComponentType} from "react";

export default function AboutPage() {
    return (
        <>
            <div className="flex flex-col w-full max-w-7xl justify-center mx-auto gap-5 mt-5">
                <AboutSection
                    heading="Xiaomin (Joy) Zhu"
                    title="About Me:"
                    image={
                        Joy
                    }
                    description={`
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident , sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident , sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident , sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident , sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident , sunt in culpa qui officia deserunt mollit anim id est laborum.
                    
                    `}
                    links={[
                        {
                            link: "https://www.linkedin.com/in/joy-zhu-49640a278/",
                            name: "LinkedIn",
                            icon: LinkedinIcon
                        },
                        {
                            link: "https://github.com/j0yzhu",
                            name: "GitHub",
                            icon: GithubIcon
                        },

                    ]}
                />
            </div>
        </>
    )
}

interface AboutPageLink {
    link: string;
    name: string;
    icon: ComponentType;
}

interface AboutPageProps {
    heading: string;
    headingColour?: string;
    title: string;
    image: string;
    description: string;
    links: AboutPageLink[];
}

function AboutSection({heading, headingColour, title, image, description, links}: AboutPageProps) {
    const headingColourStyle = headingColour ? `text-[${headingColour}]` : "text-[#74A662]";

    return (
        <div className="flex flex-col gap-5 items-center mx-2">
            <h1 className={`text-center font-heading text-8xl ${headingColourStyle}`}>{heading}</h1>
            <Card className="w-full max-w-5xl ml-10">
                <CardContent className="flex flex-col sm:flex-row gap-4">
                    <div>
                        {
                            <img
                                src={image}
                                className="object-cover sm:min-w-sm rounded aspect-auto"
                            />
                        }
                        <div className="flex justify-start gap-3">
                            {
                                links.map(aboutPageLink => {
                                    return (
                                        <a href={aboutPageLink.link}>
                                            <Button variant="link">
                                                <aboutPageLink.icon/>
                                                {aboutPageLink.name}</Button>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <CardTitle>{title}</CardTitle>
                        <p>{description}</p>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}
