
import Logo from "../../../assets/logo.png"; // ajuste se necessário


export function LogoComponet() {
  return (
   
      <div className="flex flex-col items-center bg-colorButton2  p-4 rounded-3xl overflow-hidden">
        <img alt="logo" src={Logo} className="max-w-52" />
        <h1 className="font-family-[var(--fontSubTitulo)] font-[var(--weightSubTitulo)] text-white " style={{fontSize:"var(--sizeSubtitulo", textWrap:"nowrap"}}>
          Auto <span className="text-red-600">Center</span>{" "}
          <span className="bg-red-600 text-white p-1">Souza</span>
        </h1>
      </div>
    
  );
}
