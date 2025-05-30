// Alternar modo escuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Corrigir carrossel
let index = 0;
function moveSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    index += direction;

    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    document.querySelector(".carousel-container").style.transform = `translateX(-${index * 100}%)`;
}

// Leitor Dinâmico
function speakText() {
    let text = document.body.innerText;
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-BR";
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
