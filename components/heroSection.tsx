import { Button } from "./ui/button";

export default function HeroSection() {
    return (
        <section className="p-30 w-full flex flex-row gap-12 justify-center items-center">
            <div className="flex flex-col gap-6 w-full">
                <h1 className="text-[48px] not-italic font-bold leading-[56px] tracking-[-0.96px]">Encuentra el psicólogo que realmente resuena contigo</h1>
                <p>Una experiencia humana y personalizada para tu bienestar mental. Te conectamos con profesionales verificados basados en tus necesidades únicas.</p>
                <Button asChild>
                    <a href="#cuestionario">Encontrar un Psicólogo</a>
                </Button>
            </div>
            <div className="flex flex-col w-full h-fit justify-center items-center">
                <img className="rounded-3xl w-full h-auto object-cover" src="e731f1066d1c0fbf878494ef72dfc2e29bc7ceb9.png" alt="Two people sitting" />
            </div>

        </section>
    )
}