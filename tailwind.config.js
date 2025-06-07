/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {

    colors:{
      colorButton1:"var(--colorSecundaria)",
      colorButton2:"#19191b",
      colorButton3:"#fff",
    },

    textColor:{
      colorText1:"#19191b",
      colorText2:"#666666",
      colorText3:"#fff"
    },

    fontSize:{
      TituloSize:"var(--sizeTitulo)",
      SubTituloSize:"var(--sizeSubtitulo)",
      TextSize:"var(--sizeTexto)",
    },

    fontFamily:{
      Titulo:"var(--fontTitulo)",
      SubTitulo:"var(--fontSubTitulo)",
      Text:"var(--fontTexto)",
    },

    fontWeight:{
      TituloW:"var(--weightTitulo)",
      SubTituloW:"var(--weightSubTitulo)",
      TextW:"var(--weightTexto)",
    }


    }, 
  },
  plugins: [],
}

