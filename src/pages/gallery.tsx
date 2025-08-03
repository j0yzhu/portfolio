export default function GalleryPage() {
    return (
        <div className="mt-30">
            <ImageCarousel/>
        </div>

    )
}

import cameraFrame from "@/assets/AboutPageImages/digi.png";
import img1 from "@/assets/AboutPageImages/img1.jpg";
import InfiniteLooper from "@/components/ui/ImageCarousel.tsx";
import img2 from "@/assets/AboutPageImages/img2.jpg";
/*import img3 from "@/assets/AboutPageImages/image3.jpg";*/

const images = [img1, img2];

function ImageCarousel() {
    return (
        <div className="relative">
            {/*Camera overlay frame*/}
            <img
                src={cameraFrame}
                alt="Camera Frame"
                className="absolute max-h-[800px] z-10 right-5 top-10 transform -translate-y-1/2 pointer-events-none"
            />
            <div className="w-full py-6 overflow-hidden bg-accent">
                <InfiniteLooper speed={4} direction="right">
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