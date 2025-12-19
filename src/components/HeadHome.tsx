import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function HeadHome({
  description,
  images,
}: {
  description?: string
  images?: { src?: string; alt: string }[]
}) {
  return (
    <div className="relative flex justify-center items-center gap-2 w-full lg:h-96  mb-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/cidade3.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#1b39e2]/70" />
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-6 w-full h-full px-8">
        <Carousel
          className="w-full md:w-1/2 lg:w-2/5 rounded-lg shadow-lg"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            {images?.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center p-4"
              >
                <div className="relative w-full h-64 rounded-lg shadow-md overflow-hidden bg-off-white">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={image.src}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-6" />
        </Carousel>
        <div className="max-w-[500px] text-off-white p-6">
          <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
          <p className="text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
