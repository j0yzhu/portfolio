import {Separator} from "@/components/ui/separator.tsx";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import scnz1 from "@/assets/LeadershipPageImages/scnz1.jpeg";
import scnz2 from "@/assets/LeadershipPageImages/scnz2.jpeg";
import scnz3 from "@/assets/LeadershipPageImages/scnz3.jpeg";

import amun1 from "@/assets/LeadershipPageImages/amun1.jpg";
import amun2 from "@/assets/LeadershipPageImages/amun2.jpg";
import amun3 from "@/assets/LeadershipPageImages/amun3.jpg";
import amun4 from "@/assets/LeadershipPageImages/amun4.jpg";
import amun5 from "@/assets/LeadershipPageImages/amun5.jpg";

import ayd1 from "@/assets/LeadershipPageImages/ayd1.jpg";
import ayd2 from "@/assets/LeadershipPageImages/ayd2.jpg";
import ayd3 from "@/assets/LeadershipPageImages/ayd3.jpg";
import ayd4 from "@/assets/LeadershipPageImages/ayd4.jpg";
import ayd5 from "@/assets/LeadershipPageImages/ayd5.jpg";

import wtw1 from "@/assets/LeadershipPageImages/wtw1.jpg";
import wtw2 from "@/assets/LeadershipPageImages/wtw2.jpg";
import wtw3 from "@/assets/LeadershipPageImages/wtw3.jpg";


export default function LeadershipPage() {
    return (
        <>
            <div className="flex flex-col w-full max-w-7xl justify-center mx-auto gap-5">
                <LeadershipSection
                    heading="Startup Club NZ"

                    images={[
                        scnz3,
                        scnz2,
                        scnz1
                    ]}
                    title="Startup Club NZ - Marketing Executive:"
                    dateRange="February 2024 - November 2024"
                    description={`
                        As a Marketing Executive at Startup Club NZ at the University of Auckland, I led marketing initiatives to grow the club’s presence 
                        and drive student engagement. I took ownership of event promotion by attending planning meetings, 
                        contributing creative ideas, and developing campaigns tailored to our target audience.

                        I created engaging content using tools like Canva and CapCut, and shared it across Instagram, Facebook, and LinkedIn, 
                        ensuring a consistent visual style that strengthened our brand identity. These efforts contributed to over 300 new 
                        member sign-ups in just five weeks, with events regularly meeting or exceeding attendance goals.

                        By presenting the club in a way that made a strong first impression, we also achieved our goal 
                        of reaching 1k+ Instagram followers by year-end, helping more students discover and engage 
                        with Startup Club NZ.
                    `}
                />
                <LeadershipSection
                    heading="UN Youth NZ"
                    subHeading="Auckland Model United Nations (AMUN)"
                    images={[
                        amun1,
                        amun2,
                        amun3,
                        amun4,
                        amun5
                    ]}
                    title="UN Youth NZ - Media Officer:"
                    dateRange="March 2025"
                    description={`
                        As Media Officer for AMUN, I captured the energy and impact of the event through photography, documenting key moments of 
                        delegates’ speeches, collaboration, and committee debates. This role taught me the power of visuals in shaping engagement 
                        and preserving memories, highlighting the significance of youth voices in global discussions. I focused on capturing not 
                        just people, but purpose - ensuring delegates felt seen and celebrated for their contributions. The experience also 
                        strengthened my attention to detail and my ability to work efficiently within a structured schedule.
                    `}
                />
                <LeadershipSection
                    heading="UN Youth NZ"
                    subHeading="Aoteroa Youth Declaration (AYD)"
                    images={[
                        ayd1,
                        ayd2,
                        ayd3,
                        ayd4,
                        ayd5
                    ]}
                    title="UN Youth NZ - Logistics Officer:"
                    dateRange="April 2025"
                    description={`
                        As a Logistics Officer at AYD, I supported the behind-the-scenes operations that ensured the event ran smoothly. From 
                        setting up and packing down to managing catering and coordinating food orders, I honed skills in planning, teamwork, and 
                        communication. This role required me to be proactive and adaptable, quickly problem-solving with my team when unexpected 
                        issues arose to maintain an efficient and presentable environment for participants. Through this experience, I 
                        strengthened my organizational skills and gained confidence in coordinating with diverse teams under time-sensitive conditions.
                    `}
                />
                <LeadershipSection
                    heading="We the Women Hackfest"
                    images={[
                        wtw1,
                        wtw3,
                        wtw2

                    ]}
                    title="We the Women Hackfest Scholarship:"
                    dateRange="June 2024"
                    description={`
                    We the Women is a highly selective hackathon for women dedicated to using technology for social impact. 
                    I received a full scholarship to participate, collaborating with mentors from PwC New Zealand, ANZ, and 
                    Spark to address critical issues affecting women and girls today.
                    I received high-level leadership training and transformative guidance from New Zealand technology leaders. 
                    Collaborating with innovators from across the country, we focus on UN Global Goal #5 Gender Equality, 
                    developing cutting-edge tech solutions to uplift women and communities.
                    The life-changing experience has inspired me to continue to use technology as a tool to create meaningful change.
                    `}
                />
            </div>
        </>
    )
}

interface LeadershipSectionProps {
    heading: string;
    headingColour?: string;
    subHeading?: string;
    images: string[];
    title: string;
    dateRange: string;
    description: string;
}

function LeadershipSection({heading, headingColour, subHeading, images, title, dateRange, description}: LeadershipSectionProps) {
    const headingColourStyle = headingColour ? `text-[${headingColour}]` : "text-[#74A662]";

    return (
        <div className="flex flex-col gap-5 px-5">
            <h1 className={`text-center font-heading text-[50px] sm:text-[100px] ${headingColourStyle}`}>{heading}</h1>
            {subHeading && <h2 className="text-center font-serif text-xl dark:text-accent text-muted-foreground ">{subHeading}</h2>}

            <Separator/>
            <div className="flex flex-wrap gap-3 justify-center">
                {
                    images.map(image => {
                        return (
                            <img
                                src={image}
                                className="flex-1 object-cover rounded sm:min-w-md aspect-auto"
                            />
                        )
                    })
                }
            </div>
            <Card>
                <div className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg sm:text-2xl text-[#74A662]">{title}</CardTitle>
                        <CardDescription>{dateRange}</CardDescription>
                    </CardHeader>

                </div>
                <CardContent>
                    {description.split('\n\n').map((para, idx) => (
                        <p key={idx} className="mb-4">
                            {para.trim()}
                        </p>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}


