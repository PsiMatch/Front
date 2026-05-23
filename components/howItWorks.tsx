export default function HowItWorks() {
  return (
    <section id="como-funciona" className="px-6 lg:px-30 py-20 flex flex-col lg:flex-row gap-20 w-full items-center justify-center">
      <div className="flex flex-col gap-6 w-full lg:w-[35%]">
        <h2 className="text-3xl font-semibold">Un enfoque más humano</h2>
        <p className="font-inter text-zinc-600">Tres simples pasos para conectar con el profesional adecuado. Nuestro algoritmo prioriza la compatibilidad humana por encima de todo.</p>
      </div>
      <div className="flex flex-col w-[65%] gap-0">
        <div className="flex flex-row gap-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold bg-iris/10 text-iris shrink-0">
              1
            </div>
            <div className="w-[2px] grow bg-sand/40 my-2" />
          </div>
          <div className="flex flex-col pb-10 gap-2">
            <h3 className="text-2xl font-bold">Cuéntanos sobre ti</h3>
            <p className="text-zinc-600 font-inter leading-relaxed">Completa un breve y confidencial cuestionario sobre tus preferencias, necesidades y estilo de comunicación deseado.</p>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold bg-iris/10 text-iris shrink-0">
              2
            </div>
            <div className="w-[2px] grow bg-sand/40 my-2" />
          </div>
          <div className="flex flex-col pb-10 gap-2">
            <h3 className="text-2xl font-bold">Revisa tus matches</h3>
            <p className="text-zinc-600 font-inter leading-relaxed">Recibe una lista curada de terapeutas compatibles. Explora sus perfiles detallados, enfoques y áreas de especialidad.</p>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold bg-iris text-white shrink-0">
              3
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Reserva con confianza</h3>
            <p className="text-zinc-600 font-inter leading-relaxed">Agenda tu primera sesión de introducción gratuita directamente desde la plataforma en el horario que mejor te convenga.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
