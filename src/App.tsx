import AppRouter from "./router"
import "./GloablStyle.css"

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-fade";
// @ts-ignore
import "swiper/css/navigation"; 
// @ts-ignore
import "swiper/css/pagination";

export function MensagemWhatsApp(Mensagem:string){
const telefone = "554399697488";
const mensagem = Mensagem;
const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

window.open(url, "_blank", "noopener,noreferrer");

}

function App() {


  return (
    <>
    <AppRouter/>
    </>
  )
}

export default App
