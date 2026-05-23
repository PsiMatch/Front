import { Card } from "@/components/ui/card";

function StarFilled() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-iris">
      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.1-.714 4.707c-.125.823.771 1.474 1.488 1.018L10 15.748l4.085 2.394c.717.456 1.613-.195 1.488-1.019l-.714-4.707 3.6-3.1c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
    </svg>
  );
}

function StarHalf() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-iris">
      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.1-.714 4.707c-.125.823.771 1.474 1.488 1.018L10 15.748l4.085 2.394c.717.456 1.613-.195 1.488-1.019l-.714-4.707 3.6-3.1c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" fill="#E5DCD3" />
      <path d="M10 2.884v12.864l-4.085 2.394c-.717.456-1.613-.195-1.488-1.019l.714-4.707-3.6-3.1c-.635-.544-.297-1.584.536-1.65l4.752-.382L10 2.884z" fill="currentColor" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="resenas" className="px-30 py-20 flex flex-col justify-center items-center bg-sand/20 w-full gap-16">
      <div className="flex flex-row justify-center items-stretch gap-8 w-full max-w-7xl">
        {/* Card 1 */}
        <Card className="flex flex-col p-10 gap-6 w-full md:w-1/3 bg-sand/50 rounded-3xl border border-sand/20 shadow-sm justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-1">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
            </div>
            <p className="italic text-zinc-700 font-inter leading-relaxed">
              "Después de años posponiendo buscar ayuda, el proceso de PsiMatch me pareció increíblemente amable. Mi terapeuta actual es exactamente lo que necesitaba."
            </p>
          </div>
          <p className="font-semibold text-zinc-500 font-inter">— Laura M.</p>
        </Card>

        {/* Card 2 */}
        <Card className="flex flex-col p-10 gap-6 w-full md:w-1/3 bg-sand/50 rounded-3xl border border-sand/20 shadow-sm justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-1">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
            </div>
            <p className="italic text-zinc-700 font-inter leading-relaxed">
              "La claridad en los perfiles me dio la confianza para dar el primer paso. Se siente menos como un trámite médico y más como una decisión de vida guiada."
            </p>
          </div>
          <p className="font-semibold text-zinc-500 font-inter">— Carlos D.</p>
        </Card>

        {/* Card 3 */}
        <Card className="flex flex-col p-10 gap-6 w-full md:w-1/3 bg-sand/50 rounded-3xl border border-sand/20 shadow-sm justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-1">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarHalf />
            </div>
            <p className="italic text-zinc-700 font-inter leading-relaxed">
              "Sentí que el algoritmo realmente entendió lo que buscaba. No solo me conectaron con alguien cerca, sino con alguien que entiende mi contexto."
            </p>
          </div>
          <p className="font-semibold text-zinc-500 font-inter">— Ana R.</p>
        </Card>
      </div>
    </section>
  );
}
