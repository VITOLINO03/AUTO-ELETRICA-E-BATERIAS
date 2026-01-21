// Banco de dados simulado de recomendações
const recomendacoes = {
    "leve": "🚗 Ideal para seu carro: Baterias de 60Ah. Temos Moura e Heliar pronta entrega!",
    "pesado": "🚛 Para linha pesada: Baterias de 100Ah a 150Ah com alta durabilidade.",
    "moto": "🏍️ Para sua moto: Baterias de 5Ah a 12Ah com tecnologia AGM."
};

// Função do Simulador
function consultarBateria() {
    const select = document.getElementById("tipo-veiculo");
    const resultado = document.getElementById("resultado-consulta");
    const valor = select.value;

    if (valor === "") {
        resultado.innerHTML = "❌ Por favor, selecione um tipo de veículo.";
        resultado.style.color = "red";
    } else {
        resultado.innerHTML = recomendacoes[valor];
        resultado.style.color = "#002e5b";
        
        // Efeito de pulo suave no resultado
        resultado.style.animation = "none";
        setTimeout(() => {
            resultado.style.animation = "bounce 0.5s";
        }, 10);
    }
}

// Suavizar o scroll interno do site
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
