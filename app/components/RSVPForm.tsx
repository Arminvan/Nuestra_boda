"use client";
import { useState } from "react";
import { db } from "@/lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function RSVPForm() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleConfirm = async () => {
    // Validaciones básicas
    if (!name.trim()) {
      alert("Por favor, ingresa tu nombre.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "confirmaciones"), {
        nombre: name,
        asistentes: count,
        fecha: new Date().toISOString(),
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error al guardar: ", error);
      alert("Hubo un error al enviar. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white/90 p-8 rounded-2xl shadow-xl w-full max-w-sm text-center backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-[#bfa071] mb-2">¡Gracias!</h2>
        <p className="text-gray-700">Tu asistencia ha sido confirmada.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/90 p-6 rounded-2xl shadow-xl w-full max-w-sm backdrop-blur-sm">
      <h3 className="text-center font-serif italic text-lg text-[#bfa071] mb-4">
        ¿Cuántos asistirán?
      </h3>
      
      <input 
        type="text"
        className="w-full p-3 mb-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bfa071]"
        placeholder="Nombre del invitado"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />

      <div className="flex justify-center items-center gap-6 mb-6">
        <button 
          onClick={() => setCount(Math.max(1, count - 1))} 
          className="w-10 h-10 border-2 border-[#bfa071] text-[#bfa071] rounded-full flex items-center justify-center hover:bg-[#bfa071] hover:text-white transition-colors"
          disabled={loading}
        >
          -
        </button>
        <span className="text-3xl font-serif text-[#bfa071] w-12 text-center">{count}</span>
        <button 
          onClick={() => setCount(Math.min(10, count + 1))} 
          className="w-10 h-10 border-2 border-[#bfa071] text-[#bfa071] rounded-full flex items-center justify-center hover:bg-[#bfa071] hover:text-white transition-colors"
          disabled={loading}
        >
          +
        </button>
      </div>

      <button 
        onClick={handleConfirm}
        disabled={loading}
        className={`w-full py-3 rounded-full font-bold text-white transition-all ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#bfa071] hover:bg-[#a68b60]"
        }`}
      >
        {loading ? "Enviando..." : "Confirmar Asistencia"}
      </button>
    </div>
  );
}