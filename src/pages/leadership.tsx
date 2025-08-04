import {Separator} from "@/components/ui/separator.tsx";

export default function LeadershipPage() {
    return (
        <>
            <div className="flex flex-col w-full max-w-7xl justify-center mx-auto gap-5">
                <StartUpClubNZ/>
                <UnYouthNZ/>

            </div>

        </>
    )
}

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import scnz1 from "@/assets/GalleryPageImages/scnz1.jpeg";
import scnz2 from "@/assets/GalleryPageImages/scnz2.jpeg";
import scnz3 from "@/assets/GalleryPageImages/scnz3.jpeg";

function StartUpClubNZ() {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-center font-heading text-[5vw] text-[#4169E1]">Startup Club NZ</h1>
            <Separator/>
            <div className="flex gap-5 justify-center">
                <img
                    src={scnz1}
                    alt="startup club nz"
                    className="w-full object-cover rounded min-w-0 aspect-auto"
                />
                <img
                    src={scnz2}
                    alt="startup club nz"
                    className="w-full object-cover rounded min-w-0 h-auto"
                />
                <img
                    src={scnz3}
                    alt="startup club nz"
                    className="w-full object-cover rounded min-w-0 h-auto"
                />
            </div>
            <Card>
                <div className="text-center">
                    <CardHeader>
                        <CardTitle>Startup Club NZ - Marketing Executive:</CardTitle>
                        <CardDescription>FEBRUARY 2024 - NOVEMBER 2024</CardDescription>
                    </CardHeader>

                </div>
                <CardContent>
                    <p>As a Marketing Executive for Startup Club NZ, I demonstrated leadership by taking initiative,
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
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

import amun1 from "@/assets/GalleryPageImages/amun1.jpg";
import amun2 from "@/assets/GalleryPageImages/amun2.jpg";
import amun3 from "@/assets/GalleryPageImages/amun3.jpg";
import amun4 from "@/assets/GalleryPageImages/amun4.jpg";
import amun5 from "@/assets/GalleryPageImages/amun5.jpg";

import ayd1 from "@/assets/GalleryPageImages/ayd1.jpg";
import ayd2 from "@/assets/GalleryPageImages/ayd2.jpg";
import ayd3 from "@/assets/GalleryPageImages/ayd3.jpg";
import ayd4 from "@/assets/GalleryPageImages/ayd4.jpg";
import ayd5 from "@/assets/GalleryPageImages/ayd5.jpg";

function UnYouthNZ() {
    return (
        <>
            <div className="flex flex-col gap-5">
                <h1 className="text-center font-heading text-[5vw] text-[#4B9CD3]">UN Youth NZ</h1>
                <Separator/>
                <h2 className="text-center font-serif text-xl text-[#FEBE10]">Auckland Model United Nations (AMUN) 2025 </h2>
                <div className="flex gap-5 justify-center">
                    <img
                        src={amun1}
                        alt="AMUN"
                        className="w-full object-cover rounded min-w-0 aspect-auto"
                    />
                    <img
                        src={amun4}
                        alt="AMUN"
                        className="w-full object-cover rounded min-w-0 h-auto"
                    />
                    <img
                        src={amun5}
                        alt="AMUN"
                        className="w-full object-cover rounded min-w-0 h-auto"
                    />
                </div>
                <Card>
                    <div className="text-center">
                        <CardHeader>
                            <CardTitle>UN Youth NZ - Media Officer:</CardTitle>
                            <CardDescription>MARCH 2025</CardDescription>
                        </CardHeader>

                    </div>
                    <CardContent>
                        <p>As the Media Officer for AMUN, my role involved capturing the spirit and energy of the event primarily through photography.
                            I documented key moments of delegates' speeches, collaboration, and committee debates to highlight the significance of
                            youth voices in global discussions. This experience deepened my appreciation for how photos can shape engagement and memory.
                            I learned how important it is to capture not just people, but purpose, ensuring the delegates felt seen and celebrated for
                            their efforts. The role also strengthened my attention to detail and my ability to work efficiently under a structured hourly
                            schedule.
                        </p>
                    </CardContent>
                </Card>
                <div className="flex gap-5 mt-5 justify-center">
                    <img
                        src={amun2}
                        alt="AMUN"
                        className="w-full object-cover rounded min-w-0 h-auto"
                    />
                    <img
                        src={amun3}
                        alt="AMUN"
                        className="w-full object-cover rounded min-w-0 h-auto"
                    />
                </div>
            </div>
            <Separator/>
            <div className="flex flex-col gap-5">
                <h2 className="text-center font-serif text-xl text-[#FEBE10]">Aotearoa Youth Declaration (AYD) 2025 </h2>
                <div className="flex gap-5 justify-center">
                    <img
                        src={ayd1}
                        alt="AMUN"
                        className="w-full object-cover rounded min-w-0 aspect-auto"
                    />
                    <img
                        src={ayd3}
                        alt="AMUN"
                        className="w-full object-cover rounded min-w-0 h-auto"
                    />
                    <img
                        src={ayd4}
                        alt="AMUN"
                        className="w-full object-cover rounded min-w-0 h-auto"
                    />
                </div>
                <Card>
                    <div className="text-center">
                        <CardHeader>
                            <CardTitle>UN Youth NZ - Logistics Officer:</CardTitle>
                            <CardDescription>APRIL 2025</CardDescription>
                        </CardHeader>

                    </div>
                    <CardContent>
                        <p>At AYD, I served as a Logistics Officer, where I supported the behind-the-scenes operations that made the event run smoothly.
                            From setting up tables and packing it down to managing catering and picking up food orders, I learned the importance of
                            planning, teamwork, and communication. This role pushed me to be proactive and adaptable. When unexpected issues arose, I
                            quickly problem-solved with my team to ensure the environment remained presentable and efficient for participants. I
                            developed strong organisational skills and became more confident in coordinating with diverse teams under time constraints.

                        </p>
                    </CardContent>
                </Card>
                <div className="flex gap-5 mt-5 justify-center">
                    <img
                        src={ayd2}
                        alt="AMUN"
                        className="w-full object-cover rounded min-w-0 h-auto"
                    />
                    <img
                        src={ayd5}
                        alt="AMUN"
                        className="w-full object-cover rounded min-w-0 h-auto"
                    />
                </div>
            </div>
        </>
    )
}
