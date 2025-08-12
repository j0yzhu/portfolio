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
                    As a Marketing Executive for Startup Club NZ, I demonstrated leadership by taking initiative,
                        encouraging collaboration, and leading marketing efforts to grow the club’s presence and student
                        engagement.

                        I was responsible for managing all marketing tasks for events I was assigned to, making sure our
                        campaigns supported the club’s goal of increasing involvement and awareness.
                        One of the main ways I showed leadership was by taking full ownership of event promotion. I
                        attended planning meetings and led discussions on how we could market events in a way that would
                        appeal to students.

                        I suggested ideas that matched our target audience and created engaging content for our social
                        media. I used tools like Canva to design graphics and CapCut to create short videos.
                        These were then shared on platforms like Instagram, Facebook, and LinkedIn. I also made sure
                        everything followed a consistent visual style to keep our brand strong and recognisable.
                        These efforts are what drove our marketing campaigns to be successful in getting students
                        involved. We had over 300 new member sign-ups in just five weeks, and our events regularly met
                        or even exceeded our attendance goals.

                        The way we presented the club made a strong first impression, and it helped encourage more
                        students to join and stay involved. We even met our goal to reach over 1000 followers on
                        instagram before the year ended.
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
                    As the Media Officer for AMUN, my role involved capturing the spirit and energy of the event
                            primarily through photography.
                            I documented key moments of delegates' speeches, collaboration, and committee debates to
                            highlight the significance of
                            youth voices in global discussions. This experience deepened my appreciation for how photos
                            can shape engagement and memory.
                            I learned how important it is to capture not just people, but purpose, ensuring the
                            delegates felt seen and celebrated for
                            their efforts. The role also strengthened my attention to detail and my ability to work
                            efficiently under a structured hourly
                            schedule.
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
                    At AYD, I served as a Logistics Officer, where I supported the behind-the-scenes operations
                            that made the event run smoothly.
                            From setting up tables and packing it down to managing catering and picking up food orders,
                            I learned the importance of
                            planning, teamwork, and communication. This role pushed me to be proactive and adaptable.
                            When unexpected issues arose, I
                            quickly problem-solved with my team to ensure the environment remained presentable and
                            efficient for participants. I
                            developed strong organisational skills and became more confident in coordinating with
                            diverse teams under time constraints.
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


