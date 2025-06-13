import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";


import Style from "./Style.module.css";
import { ButtonComponet } from "../Ux/Button/ButtonComponet";

import Img1 from "../../assets/CarroselHome1.jpg";
import Img2 from "../../assets/CarroselHome2.jpg";
import Img3 from "../../assets/CarroselHome3.jpg";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { MensagemWhatsApp } from "../../App";

const textSlides = [
  {
    title: "[ SERVIÇOS MECÂNICOS ESPECIALIZADOS ]",
    subtitle: "Manutenção automotiva com qualidade e confiança",
  },
  {
    title: "[ REVISÃO COMPLETA E TROCAS ]",
    subtitle: "Troca de óleo, freios, pneus e suspensão",
  },
  {
    title: "[ CUIDADOS QUE PROTEGEM SEU VEÍCULO ]",
    subtitle: "Performance, segurança e durabilidade ",
  },
];

const images = [Img1, Img2, Img3];

export function CarroselComponet() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={Style.ConteinerCarrosel}>
      <button className={Style.ButtonLeft} onClick={() => document.querySelector('.swiper-button-prev')?.dispatchEvent(new Event('click'))}>
        <FaArrowLeft />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className={Style.Carrosel}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className={Style.ConteinerImg}>
              <div className={Style.BoxConteudo}>
                <img
                  alt={`imagem_carrosel_${index + 1}`}
                  src={src}
                  decoding="async"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

{/* Texto fixo */}
      <div className={Style.ConteinerTexto}>
        <div className={Style.BoxConteudo}>
          <h5>{textSlides[currentSlide].title}</h5>
          {textSlides[currentSlide].subtitle.split("\n").map((line, i) => (
            <h1 key={i}>{line}</h1>
          ))}
          <div className={Style.BoxButton}>
            <ButtonComponet onClick={()=>MensagemWhatsApp("Olá gostaria de saber sobre seus serviços")} text="Saiba Mais" />
            <ButtonComponet onClick={()=>MensagemWhatsApp("Olá gostaria de fazer um orçamento")}
              text="Faça seu Orçamento"
              style={{ backgroundColor: "transparent", border: "1px solid #fff" }}
            />
          </div>
        </div>
      </div>

      </Swiper>

      <button className={Style.ButtonNext} onClick={() => document.querySelector('.swiper-button-next')?.dispatchEvent(new Event('click'))}>
        <FaArrowRight />
      </button>
    </div>
  );
}
