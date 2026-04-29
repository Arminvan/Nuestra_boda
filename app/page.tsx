import Image from "next/image";
import RSVPForm from "./components/RSVPForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#fcfaf0]">
      <div className="relative w-full max-w-sm h-[600px] shadow-2xl rounded-xl overflow-hidden">
        {/* Imagen de fondo de tu invitación */}
        <Image 
          src="/invitacion.png" 
          alt="Invitación Boda" 
          fill 
          className="object-cover" 
        />
        
        {/* Capa de interacción */}
        <div className="absolute bottom-10 w-full px-4">
          <RSVPForm />
        </div>
      </div>
    </main>
  );
}