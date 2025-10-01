import { useState } from 'react';
import logoFernandev from "../assets/fernandev.png"
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
<>
{menuOpen && (
  <div
    onClick={() => setMenuOpen(false)}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
  />
)}

 <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md px-6 py-6 md:py-12">
  <div className="relative flex justify-between items-center max-w-[1200px] mx-auto">
    {/* Logo en posición absoluta */}
    <div className="absolute left-0 top-6 -translate-y-1/2 ">
      <img
        src={logoFernandev.src}
        alt="logo"
        className="w-[140px] md:w-[220px] object-contain"
        
      />
    </div>

    {/* Botón menú móvil */}
    <button
      className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center ml-auto"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
    >
      {/* Ícono hamburguesa */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute h-8 w-8 text-white transition-opacity duration-200 ${
          menuOpen ? 'opacity-0' : 'opacity-100'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      {/* Ícono cerrar */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute h-8 w-8 text-white transition-opacity duration-200 ${
          menuOpen ? 'opacity-100' : 'opacity-0'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    {/* Menú horizontal (desktop) */}
    <ul class="hidden md:flex gap-10 text-[18px] font-ibm text-amarillo-texto ml-auto">
  {["Inicio", "Proyectos", "Sobre mí", "Contacto"].map((item, idx) => {
    const slug = item
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s/g, "-");

    const href = item === "Inicio" ? "/" : `#${slug}`;

    return (
      <li key={idx} class="relative p-1 transition">
        <a href={href} class="relative inline-block text-white group">
          {item}
          <span class="absolute left-0 bottom-0 h-[1px] w-0 bg-gray-500 opacity-40 transition-all duration-300 group-hover:w-full z-10"></span>
          <span class="absolute left-0 bottom-[-3px] h-[3px] w-0 bg-white transition-all duration-300 group-hover:w-full z-0"></span>
        </a>
      </li>
    );
  })}
</ul>



    {/* Menú móvil */}
  <ul
  class={`fixed top-0 right-0 h-screen w-[80%] max-w-[300px] z-40 backdrop-blur-md bg-gray-900 text-amarillo-texto text-center text-lg flex flex-col gap-6 py-10 px-6 transform transition-transform duration-300 ease-in-out font-ibm md:hidden ${
    menuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  {["Inicio", "Proyectos", "Sobre mí", "Contacto"].map((item, idx) => {
    const slug = item
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // elimina tildes
      .replace(/\s/g, "-");            // reemplaza espacios por guiones

    // 👇 si es "Inicio", va a otra página, si no, es un anchor
    const href = item === "Inicio" ? "/inicio" : `#${slug}`;

    return (
      <li key={idx}>
        <a
          href={href}
          class="block py-2 hover:bg-white/10"
          onClick={() => setMenuOpen(false)}
        >
          {item}
        </a>
      </li>
    );
  })}
</ul>


  </div>
</nav>


</>

  );
}
