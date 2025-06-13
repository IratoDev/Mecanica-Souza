
import { CarroselComponet } from "../Components/Carrossel/Carrosel"
import { ComponeteServico } from "../Components/ComponenteServicos/ComponeteServicos"
import { ButtonComponet } from "../Components/Ux/Button/ButtonComponet"
import { CarroselGaleria } from "../Components/componetGaleria/ComponeteGaleria"
import { ComponeteProcesso } from "../Components/ComponenteProcesso/ComponeteProcesso"
import { CarrosselPreco } from "../Components/CartaoPreco/CartaoPreco"

import carroImg from "../assets/Carro.png";
import BgForm from "../assets/form-bg.jpg";
import Video from "../assets/vwash-video-bg02.mp4";


import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
import { MdDoubleArrow } from "react-icons/md";

import IconRoda from "../assets/racing.png";
import IconSuspensao from "../assets/spring.png";
import IconFreio from "../assets/spare-parts.png";
import IconOil from "../assets/oil-change.png";

import IconeChcklist from "../assets/checklist (1).png";
import IconVehicle from "../assets/vehicle.png";
import IconDiagnosis from "../assets/diagnosis.png";
import IconCarKey from "../assets/car-key.png";

import { LogoComponet } from "../Components/Ux/Logo/LogoComponet"

import { PiSparkleFill } from "react-icons/pi";

import { MensagemWhatsApp } from "../App"


import Style from "./Style.module.css"




export function Home(){

return(

<>

<main>

{/*Home*/}
<section className="mt-36 px-5 md:px-10">

<CarroselComponet/>

</section>

{/*Serviços*/}
<section className="flex flex-wrap justify-around py-10 gap-4 px-5 md:px-10">
<ComponeteServico icone={<img alt="icone_troca_oleo" src={IconOil}/>} titulo="Troca de Óleo" texto="Lubrificação eficiente com produtos de qualidade para garantir o bom desempenho do motor."/>

<ComponeteServico icone={<img alt="icone_freio" src={IconFreio}/>} titulo="Troca de Pastilha de Freio" texto="Verificação e substituição de pastilhas para uma frenagem precisa e segura."/>

<ComponeteServico icone={<img alt="icone_armotecedor" src={IconSuspensao}/>} titulo="Revisão de Amortecedores" texto="Mais estabilidade e conforto na direção com a manutenção ideal da suspensão."/>

<ComponeteServico icone={<img alt="icone_pneu" src={IconRoda}/>} titulo="Alinhamento e Troca de Pneus" texto="Serviço completo para prolongar a vida útil dos pneus e garantir segurança na direção."/>
</section>

{/*Sobre*/}
<section id={Style.Sobre} className="py-10 px-5 md:px-10 mb-6">

<div className={`${Style.conteinerSobre} flex justify-between gap-4`}>
    <div className={Style.BoxImagem}>
        <img alt="foto carro" src={carroImg}/>
    </div>
    <div className={Style.BoxTexto}>
        <h5>Sobre Nós</h5>
        <h1>Especialistas em Mecânica Automotiva</h1>
        <p>Cuidar do seu carro vai muito além da aparência. Oferecemos manutenção completa com foco em segurança, desempenho e durabilidade. Desde a troca de óleo até a substituição de pastilhas de freio, nosso time de especialistas garante um serviço técnico, confiável e eficiente.</p>
        <ul>
            <li><PiSparkleFill /> Serviços personalizados para seu veículo</li>
            <li><PiSparkleFill /> Atendimento rápido e especializado</li>
            <li><PiSparkleFill /> Equipamentos modernos e peças de qualidade</li>
        </ul>
        <div className="flex items-center gap-8 flex-row justify-center">
            <ButtonComponet onClick={()=>MensagemWhatsApp("Olá gostaria de saber sobre seus serviços")} text="Saiba Mais"/>

            <div className="flex items-center gap-2 py-5">
                <div className={Style.BoxIconePhone}><FaPhoneAlt/></div>
                <div className={Style.BoxTextoContato}> 
                    <h3>Fale com a gente:</h3>
                    <p>(43) 9969-7488</p>
                </div>
            </div>
        </div>
    </div>
</div>

</section>

{/*Galeria*/}
<section id={Style.Galeria} className="py-10 px-5 md:px-10 mb-12">
    <div className={Style.BoxGaleria}>
        <CarroselGaleria/>
    </div>
</section>

{/*Processos*/}
<section id={Style.Processo} className="py-10 px-5 md:px-10 mb-6">
    <div className="flex flex-wrap justify-between gap-6 w-full">
        
       <div className={Style.BoxProcesso}>

        <div className={Style.BoxTextoProcesso}>
            <h5>Processo</h5>
            <h1>Como Trabalhamos</h1>
            <p>Realizamos diagnósticos precisos, oferecemos orçamentos transparentes e executamos serviços mecânicos com qualidade e confiança para garantir a segurança e o desempenho do seu veículo.</p>
        </div>

        <video autoPlay muted loop playsInline>
            <source src={Video} type="video/mp4"/>
        </video>
        <div className={`${Style.ConteinerProcessos} flex items-start  mb-5 gap-4 overflow-hidden md:mt-96 mt-80`}>
        <ComponeteProcesso icone={<img alt="chek-list" src={IconeChcklist}/>} titulo="01. Agendamento" texto="Agende seu serviço de forma rápida e prática, online ou presencialmente."/>
        <MdDoubleArrow /> 

        <ComponeteProcesso icone={<img alt="inspeção" src={IconVehicle}/>} titulo="02. Inspeção" texto="Fazemos uma avaliação detalhada para identificar necessidades reais do seu veículo."/>
        <MdDoubleArrow />

        <ComponeteProcesso icone={<img alt="diagnostico" src={IconDiagnosis}/>} titulo="03. Diagnóstico" texto="Utilizamos ferramentas modernas para detectar falhas e propor soluções precisas."/>
        <MdDoubleArrow />

        <ComponeteProcesso icone={<img alt="car-key" src={IconCarKey}/>} titulo="04. Entrega" texto="Após o reparo, realizamos testes e entregamos seu carro com total segurança e garantia."/>
        </div>
       </div> 
        
    </div>
</section>

{/*Preços*/}
<section id={Style.Preco} className="py-10 px-5 md:px-10 mb-12">
    <div className={`${Style.ConteinerPreco} flex flex-wrap justify-between gap-6`}>
        <div className={Style.BoxTextoPreco}>
            <h5>Preços</h5>
            <h1>Planos acessíveis para manutenção e serviços mecânicos.</h1>
            <p>Os valores apresentados são preços iniciais e podem variar conforme o modelo do veículo, o estado de conservação e os serviços específicos escolhidos. Para um orçamento preciso, entre em contato diretamente com a nossa equipe.</p>
            <ButtonComponet onClick={()=>MensagemWhatsApp("Olá gostaria de saber mais sobres os planos")} text="Saiba Mais" style={{ backgroundColor: "#19191b" }}/>
        </div>

        <div className={Style.BoxCartaoPreco}>

    <CarrosselPreco/>
      
        </div>
    </div>
</section>

{/*Contato*/}
<section id={Style.Contato} className="py-10 px-5 md:px-10 mb-6">
    <div className={`${Style.ConteinerContato} flex  justify-between gap-6 `}>
        <div className={Style.BoxImagem}><img alt="img-contato" src={BgForm}/></div>

        <div className={Style.Boxform}>

            <h5>Contato</h5>
            <h1>Agende sua Manutenção</h1>

            <form>
                
                <input type="text" placeholder="Nome Completo" name="Nome"/>
                <input type="email" placeholder="Email" name="Email"/>
                <input type="tel" placeholder="Telefone" name="Telefone"/>
                
                <textarea name="" id=""></textarea>

                <div className={Style.ConteinerButton}>
                <ButtonComponet onClick={()=> alert("teste de envio de email")} text="Enviar" style={{width:"150px"}}/>
                </div>
            </form>
        </div>
    </div>
</section>

</main>

<footer className=" flex bg-colorButton2">
  <div  className="flex flex-wrap  gap-6 w-full p-10 items-center justify-center">  
    
    <div className={Style.BoxLogoFooter}>
    <LogoComponet/>
    <div className="flex justify-between gap-4">

        <div className={Style.IconeRedeSocial}><a href=""><FaFacebook /></a></div>
        <div className={Style.IconeRedeSocial}><a href="https://www.instagram.com/autocenter_souza/"><FaInstagram /></a></div>
        <div className={Style.IconeRedeSocial}><a href="https://wa.me/554391733453" 
  target="_blank" 
  rel="noopener noreferrer"><FaWhatsapp /></a></div>
    </div>
    </div>
   
   <div className={Style.BoxInfoFooter} >

    <div>
        <h5>Informações de contato</h5>
        <ul>
            <li> <FaLocationDot/>Avenida Bento Amaral Monteiro 2256</li>
            <li> <FaPhoneAlt/>43 9969-7488</li>
            <li> <MdOutlineMailOutline/> officeone@youremail.com</li>
        </ul>

    </div>

    <div>
        <h5>Horario de funcionamento</h5>
        <ul>
            <li> <TbClockHour3 /> Segunda a Sexta das 8:30 as 18:30</li>
            <li> <TbClockHour3 /> Sabado das 8:30hr as 12:30hr</li>
            <li> <TbClockHour3 /> Domingo: fechado</li>
            <li> <TbClockHour3 /> Feriados das 8:30 às 12:30</li>
        </ul>
    </div>
    
   </div>
  </div> 

<h5 className={Style.Copy}>Copyright By IratoDev. © 2025. All Rights Reserved.</h5>

</footer>

</>

)

}