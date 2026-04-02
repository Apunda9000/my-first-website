import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'royalblue', marginBottom: '2rem' }}>hello Belinda</div>
      <Carousel>
        <CarouselContent>
          <CarouselItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image src="/1.jpg" alt="Image 1" width={500} height={300} /></CarouselItem>
          <CarouselItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image src="/2.jpg" alt="Image 2" width={500} height={300} /></CarouselItem>
          <CarouselItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image src="/3.jpg" alt="Image 3" width={500} height={300} /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}