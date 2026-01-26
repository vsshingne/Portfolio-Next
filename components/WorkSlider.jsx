import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "ML Ops Pipeline",
          path: "/thumb1.jpg",
          link: "https://github.com/vsshingne/mlops-pipeline",
          description: "End-to-end automated ML model deployment with Docker, CI/CD, and Google Cloud Portal",
        },
        {
          title: "Drone Surveillance",
          path: "/thumb2.jpg",
          link: "https://github.com/vsshingne/swachhdrone",
          description: "AI-driven YOLOv8 model for real-time garbage detection with cloud syncing",
        },
        {
          title: "Crime Risk Prediction",
          path: "/thumb3.jpg",
          link: "https://github.com/vsshingne/riskmap",
          description: "Full-stack web app with interactive heatmap visualization using React and Flask",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex flex-col items-center justify-start group h-full"
                key={imageI}
              >
                <div className="flex flex-col items-center w-full h-full bg-[rgba(65,47,123,0.15)] overflow-hidden\">
                  {/* Image Section */}
                  <div className="relative w-full h-48 overflow-hidden\">
                    <Image
                      src={image.path}
                      alt={image.title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Image Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4a22bd] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col items-center justify-center text-center p-6 flex-grow relative">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-all duration-300">
                      {image.title}
                    </h3>
                    {/* Description */}
                    <p className="text-sm text-white/70 mb-4 line-clamp-3">
                      {image.description}
                    </p>

                    {/* link */}
                    <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Link
                        href={image.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-accent hover:text-white transition-colors"
                      >
                        {/* title */}
                        <div>VIEW PROJECT</div>
                        {/* icon */}
                        <div className="text-xl">
                          <BsArrowRight aria-hidden />
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none"
                    aria-hidden
                  />
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
