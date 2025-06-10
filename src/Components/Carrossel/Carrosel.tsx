import { useState, useEffect, useRef } from "react";
import Style from "./Style.module.css";

import { ButtonComponet } from "../Ux/Button/ButtonComponet";
import Img1 from "../../assets/CarroselHome1.jpg";
import Img2 from "../../assets/CarroselHome2.jpg";
import Img3 from "../../assets/CarroselHome3.jpg";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
  const [currentItem, setCurrentItem] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // Verifica o carregamento completo das imagens
  useEffect(() => {
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // Inicia o carrossel automaticamente somente após todas as imagens serem carregadas
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  // Atualiza posição das imagens
  useEffect(() => {
    const percent = `-${currentItem * 100}%`;
    if (imageRef.current) {
      imageRef.current.style.transform = `translateX(${percent})`;
    }
  }, [currentItem]);

  const nextSlide = () => {
    if (imagesLoaded) {
      setCurrentItem((prev) => (prev + 1) % images.length);
    }
  };

  const prevSlide = () => {
    if (imagesLoaded) {
      setCurrentItem((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className={Style.ConteinerCarrosel}>
      <button className={Style.ButtonLeft} onClick={prevSlide}>
        <FaArrowLeft />
      </button>

      <div className={Style.Carrosel}>
        {/* Imagens */}
        <div className={Style.ConteinerImg} ref={imageRef}>
          {images.map((src, index) => (
            <div key={index} className={Style.BoxConteudo}>
              <img
                alt={`imagem_carrosel_${index + 1}`}
                src={src}
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Texto fixo */}
        <div className={Style.ConteinerTexto}>
          <div className={Style.BoxConteudo}>
            <h5>{textSlides[currentItem].title}</h5>
            {textSlides[currentItem].subtitle.split("\n").map((line, i) => (
              <h1 key={i}>{line}</h1>
            ))}
            <div className={Style.BoxButton}>
              <ButtonComponet text="Read More" />
              <ButtonComponet
                text="Get appointment"
                style={{ backgroundColor: "transparent", border: "1px solid #fff" }}
              />
            </div>
          </div>
        </div>
      </div>

      <button className={Style.ButtonNext} onClick={nextSlide}>
        <FaArrowRight />
      </button>
    </div>
  );
}
