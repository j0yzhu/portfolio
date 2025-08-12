import cameraFrame from "@/assets/GalleryPageImages/digi.png";
import img1 from "@/assets/GalleryPageImages/img1.jpg";
import InfiniteLooper from "@/components/ui/ImageCarousel.tsx";
import img2 from "@/assets/GalleryPageImages/img2.jpg";
import img3 from "@/assets/GalleryPageImages/img3.jpg";
import img4 from "@/assets/GalleryPageImages/img4.jpg";
import img5 from "@/assets/GalleryPageImages/img5.jpg";
import img6 from "@/assets/GalleryPageImages/img6.jpg";
import img7 from "@/assets/GalleryPageImages/img7.jpg";
import bow from "@/assets/HomePageImages/bow.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function GalleryPage() {
    return (
        <>
            <div className="text-center justify-center mt-20 w-full">
                <div className="flex gap-5 sm:gap-20 mx-4 justify-center items-center">
                    <img className="w-[17vw] md:w-[8vw] object-contain" src={bow} alt="bow"/>
                    <h1 className="flex justify-center text-[80px] sm:text-9xl font-heading text-[#74A662]">Joy in Life</h1>
                    <img className="w-[17vw] md:w-[8vw] object-contain" src={bow} alt="bow"/>
                </div>

                <p className="text-muted-foreground mt-5 text-[20px] sm:text-3xl font-serif">Cherished Memories {"<3"}</p>

                <ImageCarousel/>
            </div>
        </>

    )
}

function ImageCarousel() {
    return (
        <div className="relative top-30">
            {/*Camera overlay frame*/}
            <img
                src={cameraFrame}
                alt="Camera Frame"
                className="absolute max-h-[800px] z-10 right-[50%] sm:right-5 top-11 transform translate-x-1/2 sm:translate-x-0 -translate-y-1/2 pointer-events-none"
            />
            <div className="w-full py-6 overflow-hidden bg-accent">
                <InfiniteLooper speed={10} direction="right">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`carousel-img-${index}`}
                            className="h-40 w-auto mx-2 object-contain"
                        />
                    ))}
                </InfiniteLooper>
            </div>
        </div>
    );
}


