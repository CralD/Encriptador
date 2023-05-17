
// Función para encriptar una palabra
function encriptar() {
   
    const palabraOriginal = document.getElementById("cuadro-texto").value;
    let palabra = palabraOriginal;
    palabra = palabra.replaceAll("e", "enter");
    palabra = palabra.replaceAll("i", "imes");
    palabra = palabra.replaceAll("a", "ai");
    palabra = palabra.replaceAll("o", "ober");
    palabra = palabra.replaceAll("u", "ufat");
     //comandos javascript para conectar con html
    document.getElementById("resultado").innerHTML = palabra;
    document.getElementById("mensajeInicial").style.display ="none";
    document.getElementById("mensajeInicialMinuscula").style.display ="none";
    resultado.style.backgroundImage = "none";
    document.getElementById("btn-c").style.display ="block";

    
    
  }
  
  // Función para desencriptar una palabra
  function desencriptar() {
    const palabraEncriptada = document.getElementById("cuadro-texto").value;
    let palabraArreglada = palabraEncriptada
    palabraArreglada = palabraArreglada.replaceAll("ufat", "u");
    palabraArreglada = palabraArreglada.replaceAll("ober", "o");
    palabraArreglada = palabraArreglada.replaceAll("ai", "a");
    palabraArreglada = palabraArreglada.replaceAll("imes", "i");
    palabraArreglada = palabraArreglada.replaceAll("enter", "e");
    //comandos javascript para conectar con html
    document.getElementById("resultado").innerHTML = palabraArreglada;
    document.getElementById("mensajeInicial").style.display ="none";
    document.getElementById("mensajeInicialMinuscula").style.display ="none";
    resultado.style.backgroundImage = "none";
    document.getElementById("btn-c").style.display ="block";
    
  }
   //función para copiar el texto en el cuadro de resultado
  function copiar(){
      let copyText = document.querySelector("#resultado");
      copyText.select();
      document.execCommand("copy");
    }
    
  
    
  
  