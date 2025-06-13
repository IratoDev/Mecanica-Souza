import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

import Imagem1 from "../../assets/Img_local.jpg";
import Imagem2 from "../../assets/img_Alinhamento.jpeg";
import Imagem3 from "../../assets/img_Oleo.jpeg";
import Imagem4 from "../../assets/img_Pneu.jpg";

const itensGaleria = [
  { id: "1", titulo: "Serviço A", descricao: "Detalhes sobre o serviço A.", img:Imagem1 },
  { id: "2", titulo: "Serviço B", descricao: "Detalhes sobre o serviço B.", img:Imagem2 },
  { id: "3", titulo: "Serviço C", descricao: "Detalhes sobre o serviço C.", img:Imagem3 },
  { id: "4", titulo: "Serviço D", descricao: "Detalhes sobre o serviço D.", img:Imagem4 },
];

export function CarroselGaleria() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto text-center select-none relative">
      <Swiper
        modules={[Autoplay, EffectCreative]}
        slidesPerView={1.4}
        centeredSlides={true}
        loop={true}
        spaceBetween={16}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {itensGaleria.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <SwiperSlide key={item.id}>
              <div
                className={`transition-all duration-300 md:w-80 md:h-80 h-60 w-60 flex flex-col items-center justify-center text-center px-4 py-2 rounded-full p-5 `}
                style={{backgroundImage: `url(${item.img})`, backgroundSize: "cover", backgroundPosition:"center"}}
              >
                {isActive && (
                  <div className={`${
                isActive
                  ? "bg-blue-200 scale-75 shadow-xl px-10 py-20 overflow-hidden rounded-full"
                  : ""
              }`}>
                <h3 className="font-bold text-lg">{item.titulo}</h3>
                  <p className="text-sm text-gray-700 mt-2">{item.descricao}</p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      
    </div>
  );
}
