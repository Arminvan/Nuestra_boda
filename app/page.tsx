import Image from "next/image";
import RSVPForm from "./components/RSVPForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#fcfaf0]">
      {/* Ajuste 1: Se aumenta la altura a h-[850px] para dar espacio al formulario debajo de la fecha.
        Ajuste 2: Se cambia flex-col para permitir que los elementos respiren.
      */}
      <div className="relative w-full max-w-[380px] h-[850px] shadow-2xl rounded-3xl overflow-hidden bg-white flex flex-col">
        
        {/* Contenedor de la imagen con altura fija para que no tape el formulario */}
        <div className="relative w-full h-[550px]">
          <Image 
            src="/invita.png" 
            alt="Invitación Boda Floral Isabel y Sebastian" 
            fill 
            priority 
            className="object-cover object-top" 
          />
        </div>
        
        {/* Capa de contenido: Se elimina el 'absolute' para que el formulario se coloque 
          naturalmente debajo de la imagen informativa.
        */}
        <div className="w-full px-6 py-8 z-10 animate-fade-in bg-white">
          <RSVPForm />
        </div>

        {/* Gradiente sutil ahora opcional ya que no están encimados */}
      </div>
      
      <footer className="mt-6 text-sm text-[#2c5282]/60 font-serif">
        Con amor, Isabel y Sebastian
      </footer>
    </main>
  );
}
