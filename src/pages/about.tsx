import {
    Card,
    CardContent,
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
                    heading="Joy Zhu"
                    title="About Me:"
                    image={
                        Joy
                    }
                    description={`
                    I’m a recent Computer Science graduate from the University of Auckland with a strong passion for technology. 
                    I'm currently building my portfolio through mobile and web development projects, with a focus on creating 
                    user-friendly, accessible, and inclusive software. I have a keen eye for aesthetics and enjoy crafting 
                    intuitive designs that enhance the user experience. Eager to keep learning, I’m continuously developing my 
                    skills through personal projects.

                    I work across the full stack, primarily using Python and TypeScript to build robust applications. On the 
                    backend, I develop RESTful APIs with Flask and manage PostgreSQL databases through Python ORMs like Peewee.  
                    On the frontend, I create mobile-first apps and websites with React and React Native, always prioritizing 
                    user experience and accessibility. My deployment experience includes working with Docker containers and 
                    leveraging AWS services such as S3 and ECS to ensure scalable and reliable application hosting.

                    Currently, I’m deepening my skills in crafting polished mobile and web user interfaces, while also exploring 
                    cloud deployment and DevOps fundamentals to streamline application delivery. I’m interested in enhancing API 
                    design and backend performance to build efficient, impactful products that truly serve users’ needs.

                    When I’m not coding, I’m into DIY crafts, drawing, and photography - capturing food, scenery, and people. I 
                    also love animation and movies; I recently watched Shutter Island.
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
            <Card className="w-full max-w-5xl mx-10">
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
                        <CardTitle className="mb-1">{title}</CardTitle>
                        {description.split('\n\n').map((para, idx) => (
                            <p key={idx} className="mb-4">
                                {para.trim()}
                            </p>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

// Whats in my bag?
