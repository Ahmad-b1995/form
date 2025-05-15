import { RegistrationForm } from "@/components/registration-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background/50 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full p-4 md:max-w-[30%] max-w-[440px] bg-card/30 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden border border-border/10">
          <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 ">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">FORMATION</h1>
            <p className="text-sm sm:text-base text-muted-foreground font-bold">
              Pleasure to meet you!
              <br />
              Allow us to get to know you better.
            </p>
          </div>
          <RegistrationForm />
      </div>
    </main>
  );
}