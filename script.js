// Alternar modo escuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Carrossel
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

// Simulação de Cultivo Urbano
function startSimulation() {
    alert("Você escolheu cultivar manjericão! Regue regularmente e deixe ao sol por pelo menos 4 horas/dia.");
}

// Calculadora de Pegada Rural
function calculateImpact() {
    alert("Sua pegada rural é equilibrada! Você pode melhorar comprando diretamente de agricultores locais.");
}

// Salvar perfil do usuário
function saveProfile() {
    let username = document.getElementById("username").value;
    if (username) {
        alert(`Perfil salvo! Bem-vindo, ${username}.`);
        localStorage.setItem("username", username);
    } else {
        alert("Digite um nome válido!");
    }
}

// Compartilhamento social
function shareContent() {
    alert("Compartilhe seu amor pelo campo e cidade nas redes sociais!");
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

