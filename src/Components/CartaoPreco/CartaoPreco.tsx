import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import { ButtonComponet } from '../Ux/Button/ButtonComponet';
import { FaClock } from 'react-icons/fa6';
import Style from './Style.module.css';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


const ComponentePreco = [
  {
    tempo: "40 min",
    titulo: "Alinhamento & \n Balanceamento",
    preco: "R$ 59,90",
    servico: "Evita desgaste dos pneus, melhora a direção e garante mais segurança ao dirigir.",
  },
  {
    tempo: "50 min",
    titulo: "Cambagem",
    preco: "R$ 100,00",
    servico: "Corrige a inclinação das rodas e melhora a estabilidade e o desgaste dos pneus.",
  },
  {
    tempo: "30 min",
    titulo: "Troca de Óleo",
    preco: "R$ 135,00",
    servico: "Lubrifica e protege o motor, evitando falhas e aumentando sua durabilidade.",
  },
  {
    tempo: "60 min",
    titulo: "Pneus Remold",
    preco: "R$ 220,00",
    servico: "Pneus com ótimo custo-benefício e montagem inclusa, garantindo segurança e economia.",
  },
];

export function CarrosselPreco() {
  return (
    <div className="container mx-auto px-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        speed={500}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 3000 }}
        pagination={{ type: 'fraction' }}
        navigation
        className={Style.CarroselPreco}
      >
        {ComponentePreco.map((item, index) => (
          <SwiperSlide key={index} className={Style.Slide}>
            <div className="flex flex-col rounded-3xl p-6">
              <div className={Style.BoxInfo}>
                <div className='flex gap-4 items-center justify-center'>
                <span className="flex items-center gap-2 text-sm bg-red-600 text-white px-2 py-1 rounded-full text-nowrap">
                  <FaClock /> {item.tempo}
                </span>
                <h3 className="text-xl font-semibold mt-4">{item.titulo}</h3>
                </div>
                <h1 className="text-2xl font-bold text-green-700">{item.preco}</h1>
              </div>
              <div className={Style.BoxServicos}>
                <p className="mb-4 text-gray-700">{item.servico}</p>
                <ButtonComponet text="Order Now" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
