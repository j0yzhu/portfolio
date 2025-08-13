import {Separator} from "@/components/ui/separator.tsx";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import loop1 from "@/assets/ProjectPageImages/loopPg1.png";
import loop2 from "@/assets/ProjectPageImages/loopPg2.png";
import LoopPoster from "@/assets/ProjectPageImages/LoopPoster.png";


import eggTimer from "@/assets/ProjectPageImages/eggTimer.png";

import gpt1 from "@/assets/ProjectPageImages/gpt1.png";

import techStack1 from "@/assets/ProjectPageImages/loopTechStack.png";
import techStack2 from "@/assets/ProjectPageImages/eggTimerTechStack.png";
import techStack3 from "@/assets/ProjectPageImages/gptTechStack.png";
import {Button} from "@/components/ui/button.tsx";
import {ExternalLinkIcon} from "lucide-react";


export default function LeadershipPage() {
    return (
        <>
            <div className="flex flex-col w-full max-w-7xl justify-center mx-auto gap-5">
                <ProjectSection
                    heading="Loop"
                    subHeading={`
                    By Joy Zhu, Grace Chen, Areesh Patni, Siqi Lai, Parmida Raeis-Hosseini, Azzarina Azizi
                    `}
                    images={[
                        loop1,
                        loop2,
                        LoopPoster
                    ]}
                    title="COMPSCI 399- Capstone Project:"
                    links={{
                        link:"https://github.com/j0yzhu/Loop"

                    }}
                    dateRange="March 2025 - July 2025"
                    description={`
                    Loop is a cross-platform mobile app designed to support neurodivergent students at the University of Auckland by creating a space that’s inclusive, 
                    easy to use, and low-pressure for connecting with others. We started this project because the mainstream social platforms can be overwhelming-too 
                    cluttered, not designed with neurodiverse needs in mind, and lacking the kind of community support that students actually need. With Loop, we 
                    aimed to change that. 

                    Loop offers features like interest-based communities, personalised profiles, events, announcements, and both one-on-one and group messaging, all 
                    built into a clean, user-friendly interface. We included features specifically for Inclusive Learning staff, like the ability to post verified 
                    announcements, so they can connect with students. On top of that, we included accessibility options such as dark/light mode, readable font sizes, 
                    and a built-in session timer to support students with different sensory needs. 

                    My contributions spanned full-stack development and cloud deployment - building RESTful APIs in Flask with PostgreSQL, developing reusable UI 
                    components in React Native, and deploying on AWS (ECS, ECR, ELB, S3, RDS). As tech lead, I coordinated the team, guided consistent design and code 
                    quality, and solved technical challenges. This project strengthened my skills in API design, UI development, and Agile teamwork, while deepening my 
                    understanding of designing for accessibility and inclusivity.

                    Looking ahead, improvements include notifications, multimedia sharing in messages, and scaling to other universities across New Zealand. 
                    Loop marks a strong first step toward creating a safe, inclusive digital space where neurodivergent students can feel heard, supported, and connected.
                    `}
                    image={
                        techStack1
                    }


                />
                <ProjectSection
                    heading="Egg Timer"
                    subHeading="By Joy Zhu"
                    images={[
                        eggTimer
                    ]}
                    title="🥚 Egg Timer:"
                    links={{
                        link:"https://github.com/j0yzhu/egg-timer"

                    }}
                    dateRange="February 2025"
                    description={`
                    This was a small fun project I made while trying out React, TypeScript, and Vite for the first time. I built it because I could never get my
                    boiled eggs just right. Too runny, too firm, too chaotic!.

                     So I built Egg Timer: It’s a simple web application that counts down while your egg is cooking, and when time’s up, you’re alerted by the lovely,
                     triumphant sound of a chicken...

                     Just a cute, aesthetic one-pager to make boiling eggs a bit more entertaining.
                    `}
                    image={
                        techStack2
                    }
                />
                <ProjectSection
                    heading="GPTiculate"
                    subHeading="By Eli Chandler, Joy Zhu"
                    images={[
                        gpt1
                    ]}
                    title="GPTiculate"
                    links={{
                        link:"https://github.com/j0yzhu/gpticulate"

                    }}
                    dateRange="June 2025"
                    description={`
                    Gpticulate is an AI-powered twist on the classic “Articulate!” game where players input custom topics and age ranges, and ChatGPT dynamically generates unique, 
                    age-appropriate prompts to keep gameplay fresh and engaging. Built with React for a smooth, interactive front-end and powered by a fast API backend that handles 
                    requests and communicates with ChatGPT, the app keeps track of time and points throughout the game so you don't have to!
                    `}
                    image={
                        techStack3
                    }
                />
            </div>

        </>
    )
}

interface ProjectPageLink {
    link: string;
}

interface ProjectSectionProps {
    heading: string;
    headingColour?: string;
    subHeading?: string;
    images: string[];
    image: string;
    title: string;
    dateRange: string;
    description: string;
    links: ProjectPageLink
}

function ProjectSection({
                            heading,
                            headingColour,
                            subHeading,
                            images,
                            image,
                            title,
                            dateRange,
                            description,
                            links,
                        }: ProjectSectionProps) {
    const headingColourStyle = headingColour ? `text-[${headingColour}]` : "text-[#74A662]";

    return (
        <div className="flex flex-col gap-5 w-full px-5">
            <h1 className={`text-center font-heading text-[50px] sm:text-[100px] ${headingColourStyle}`}>{heading}</h1>

            {subHeading && <h2 className="text-center font-serif text-[15px] sm:text-[20px] text-xl dark:text-accent text-muted-foreground ">{subHeading}</h2>}
            <Separator/>
            <div className="flex flex-wrap gap-3 justify-center">
                {
                    images.map(image => {
                        return (
                            <img
                                src={image}
                                className="flex-1 object-contain rounded sm:min-w-md aspect-auto"
                            />
                        )
                    })
                }
            </div>
            <Card>
                <div className="text-center">
                    <CardHeader>
                        <CardTitle className="flex justify-center">
                            <a
                                href={links.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                <Button variant="link" className="hover:cursor-pointer text-[#74A662] text-lg sm:text-2xl inline-flex items-center gap-1">{title}<ExternalLinkIcon/></Button>
                            </a>
                        </CardTitle>
                        <CardDescription>{dateRange}</CardDescription>
                    </CardHeader>

                </div>
                <CardContent>
                    {description.split('\n\n').map((para, idx) => (
                        <p key={idx} className="mb-4">
                            {para.trim()}
                        </p>
                    ))}
                    <img
                        src={image}
                        className="mx-auto object-cover sm:min-w-sm sm:max-h-20 rounded aspect-auto"
                    />
                </CardContent>
            </Card>
        </div>
    );
}


