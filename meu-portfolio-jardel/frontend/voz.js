
// Configuração da Voz (Speech Synthesis)
const sintetizador = window.speechSynthesis;

// Função para a IA falar
function falarResposta(texto) {
    // Cancela falas anteriores para não encavalar
    sintetizador.cancel();

    const pronuncia = new SpeechSynthesisUtterance(texto);
    pronuncia.lang = 'pt-BR';
    pronuncia.rate = 1.1; // Velocidade

    // Seleciona sua foto no portfólio para animar
    const minhaFoto = document.querySelector(".foto-perfil"); 

    pronuncia.onstart = () => {
        if (minhaFoto) minhaFoto.classList.add("animar-fala");
    };

    pronuncia.onend = () => {
        if (minhaFoto) minhaFoto.classList.remove("animar-fala");
    };

    sintetizador.speak(pronuncia);
}

// Configuração do Ouvinte (Speech Recognition)
const Reconhecimento = window.SpeechRecognition || window.webkitSpeechRecognition;

if (Reconhecimento) {
    const escuta = new Reconhecimento();
    escuta.continuous = true;
    escuta.lang = 'pt-BR';

    escuta.onresult = (event) => {
        const resultado = event.results[event.results.length - 1][0].transcript.toLowerCase();
        console.log("Usuário falou: ", resultado);

        // Se detectar seu nome, ele envia para o chatbot
        if (resultado.includes("jardel")) {
            // Aqui você chama a função que já existe no seu frontend para falar com o backend
            enviarParaChatbot(resultado); 
        }
    };

    // Inicia a escuta (Precisa de um clique inicial no site para o navegador permitir)
    document.addEventListener('click', () => {
        escuta.start();
        console.log("Microfone ativado e ouvindo...");
    }, { once: true });

} else {
    console.error("Este navegador não suporta reconhecimento de voz.");
}