import { Card } from "@/components/ui/card";

export default function FeaturesSection() {
  return (
    <section id="filosofia" className="flex py-20 px-6 lg:px-30 flex-col gap-20 w-full bg-sand/30 items-center justify-center">
      <h2 className="text-3xl font-semibold">Un enfoque más humano</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <Card className="flex flex-col p-12 gap-4">
          <div className="flex items-center justify-center p-4 rounded-full bg-sand/50 w-fit h-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9.975 20C8.40833 19.8 7.00833 19.4 5.775 18.8C4.54167 18.2 3.49583 17.4167 2.6375 16.45C1.77917 15.4833 1.125 14.3625 0.675 13.0875C0.225 11.8125 0 10.4 0 8.85C1.83333 9.03333 3.38333 9.36667 4.65 9.85C5.91667 10.3333 6.94583 11.0167 7.7375 11.9C8.52917 12.7833 9.1 13.8875 9.45 15.2125C9.8 16.5375 9.975 18.1333 9.975 20ZM9.975 11.575C9.59167 10.9917 9.07083 10.4167 8.4125 9.85C7.75417 9.28333 6.99167 8.76667 6.125 8.3C6.225 7.6 6.39167 6.875 6.625 6.125C6.85833 5.375 7.14167 4.6375 7.475 3.9125C7.80833 3.1875 8.1875 2.49167 8.6125 1.825C9.0375 1.15833 9.49167 0.55 9.975 0C10.4583 0.55 10.9125 1.15833 11.3375 1.825C11.7625 2.49167 12.1417 3.1875 12.475 3.9125C12.8083 4.6375 13.0917 5.375 13.325 6.125C13.5583 6.875 13.725 7.6 13.825 8.3C12.9583 8.75 12.1958 9.25833 11.5375 9.825C10.8792 10.3917 10.3583 10.975 9.975 11.575ZM11.975 19.6C11.9417 18.4333 11.8542 17.3542 11.7125 16.3625C11.5708 15.3708 11.35 14.4333 11.05 13.55C11.8333 12.2 12.9125 11.1 14.2875 10.25C15.6625 9.4 17.55 8.93333 19.95 8.85C19.9667 11.4833 19.2625 13.7542 17.8375 15.6625C16.4125 17.5708 14.4583 18.8833 11.975 19.6Z" fill="#1D1C14" />
            </svg>
          </div>
          <p className="text-2xl font-bold">Calma</p>
          <p className="font-inter text-zinc-600">Diseñamos una experiencia libre de fricciones. Desde el primer clic hasta tu primera sesión, todo está pensado para reducir la ansiedad.</p>
        </Card>
        <Card className="flex flex-col p-12 gap-4">
          <div className="flex items-center justify-center p-4 rounded-full bg-sand/50 w-fit h-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path d="M6.95 13.55L12.6 7.9L11.175 6.475L6.95 10.7L4.85 8.6L3.425 10.025L6.95 13.55ZM8 20C5.68333 19.4167 3.77083 18.0875 2.2625 16.0125C0.754167 13.9375 0 11.6333 0 9.1V3L8 0L16 3V9.1C16 11.6333 15.2458 13.9375 13.7375 16.0125C12.2292 18.0875 10.3167 19.4167 8 20Z" fill="#1D1C14" />
            </svg>
          </div>
          <p className="text-2xl font-bold">Confianza</p>
          <p className="font-inter text-zinc-600">Solo trabajamos con profesionales acreditados y verificados. Tu seguridad emocional es el pilar central de nuestra plataforma.</p>
        </Card>
        <Card className="flex flex-col p-12 gap-4">
          <div className="flex items-center justify-center p-4 rounded-full bg-sand/50 w-fit h-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
              <path d="M7.5 20C6.95 20 6.47917 19.8042 6.0875 19.4125C5.69583 19.0208 5.5 18.55 5.5 18H9.5C9.5 18.55 9.30417 19.0208 8.9125 19.4125C8.52083 19.8042 8.05 20 7.5 20ZM3.5 17V15H11.5V17H3.5ZM3.75 14C2.6 13.3167 1.6875 12.4 1.0125 11.25C0.3375 10.1 0 8.85 0 7.5C0 5.41667 0.729167 3.64583 2.1875 2.1875C3.64583 0.729167 5.41667 0 7.5 0C9.58333 0 11.3542 0.729167 12.8125 2.1875C14.2708 3.64583 15 5.41667 15 7.5C15 8.85 14.6625 10.1 13.9875 11.25C13.3125 12.4 12.4 13.3167 11.25 14H3.75Z" fill="#1D1C14" />
            </svg>
          </div>
          <p className="text-2xl font-bold">Claridad</p>
          <p className="font-inter text-zinc-600">Transparencia total en perfiles, enfoques y tarifas. Sin jerga médica innecesaria, solo información clara para que decidas mejor.</p>
        </Card>
      </div>
    </section>
  );
}
