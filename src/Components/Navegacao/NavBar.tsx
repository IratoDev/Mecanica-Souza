import { useState } from "react";
import { ButtonComponet } from "../Ux/Button/ButtonComponet";
import { LogoComponet } from "../Ux/Logo/LogoComponet";

import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Style from "./Style.module.css"; // ainda pode usar o estilo existente se quiser
import { MensagemWhatsApp } from "../../App";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full mb-4 px-5 fixed top-0 z-50 py-2 bg-white">
      <div className="flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center max-h-32 overflow-hidden pb-3 rounded-3xl">
          <LogoComponet />
        </div>

        {/* Botão mobile */}
        <div className="md:hidden border border-red-500 p-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className=" focus:outline-none"
          >
            {menuOpen ? <HiOutlineX size={42} className="fill-black"/> : <HiOutlineMenu size={42} className="fill-black"/>}
          </button>
        </div>

        {/* Navegação Desktop */}
        <div className="hidden md:flex mb:gap-4 gap-2">
          <button className={Style.ButtonNav}>Home</button>
          <button className={Style.ButtonNav}>Serviços</button>
          <button className={Style.ButtonNav}>Sobre</button>
          <button className={Style.ButtonNav}>Galeria</button>
          <button className={Style.ButtonNav}>Processos</button>
          <button className={Style.ButtonNav}>Preços</button>
          <button className={Style.ButtonNav}>Contato</button>
        </div>

        {/* Botão de ação */}
        <div className="hidden md:block">
          <ButtonComponet onClick={()=>MensagemWhatsApp("Olá gostaria de fazer um orçamento")} text="Marcar consulta" />
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="flex flex-col justify-center items-center gap-4 pb-20 md:hidden h-screen z-50">
          <button className={Style.ButtonNav}>Home</button>
          <button className={Style.ButtonNav}>Serviços</button>
          <button className={Style.ButtonNav}>Sobre</button>
          <button className={Style.ButtonNav}>Galeria</button>
          <button className={Style.ButtonNav}>Processos</button>
          <button className={Style.ButtonNav}>Preços</button>
          <button className={Style.ButtonNav}>Contato</button>
          <ButtonComponet onClick={()=>MensagemWhatsApp("Olá gostaria de marcar um orçamento")} text="Marcar consulta" />
        </div>
      )}
    </header>
  );
}
