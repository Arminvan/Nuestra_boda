import Image from "next/image";
import RSVPForm from "./components/RSVPForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#fcfaf0]">
      {/* Contenedor principal: Máximo ancho móvil para mantener la estética de invitación */}
      <div className="relative w-full max-w-[380px] h-[700px] shadow-2xl rounded-3xl overflow-hidden bg-white">
        
        {/* Imagen de fondo floral azul y dorado */}
        {/* Asegúrate de tener tu imagen en public/invitacion_azul.webp */}
        <Image 
          src="/invita.png" 
          alt="Invitación Boda Floral Isabel y Sebastian" 
          fill 
          priority 
          className="object-cover" 
        />
        
        {/* Capa de contenido: Formulario de Confirmación */}
        {/* La clase animate-fade-in viene de tu globals.css */}
        <div className="absolute bottom-8 w-full px-6 z-10 animate-fade-in">
          <RSVPForm />
        </div>

        {/* Gradiente sutil para suavizar la transición con el formulario */}
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/10 to-transparent z-0"></div>
      </div>
      
      {/* Pie de página sutil */}
      <footer className="mt-6 text-sm text-[#2c5282]/60 font-serif">
        Con amor, Isabel y Sebastian
      </footer>
    </main>
  );
}