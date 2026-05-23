import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section id="cuestionario" className="w-full flex flex-col items-center justify-center gap-6 py-25 bg-iris text-white">
      <h2 className="text-4xl font-bold">Tu camino hacia el bienestar comienza aquí.</h2>
      <p className="text-[#FFF7FB] text-center font-['Inter'] text-[18px] not-italic font-normal leading-[28px]">
        Da el primer paso hoy. Nuestro proceso de matching toma menos de 5 minutos y es completamente gratuito.
      </p>
      <Button className="bg-white text-iris hover:bg-white/90 py-2 px-4 rounded-full shadow-lg">
        Comenzar el cuestionario
      </Button>
    </section>
  );
}
