// Dados das baterias (isso poderia vir de um banco de dados no futuro)
const sugestoes = {
    "leve": "Recomendamos Baterias de 45Ah a 60Ah (Moura ou Heliar).",
    "pesado": "Recomendamos Baterias de 100Ah a 150Ah (Linha Diesel).",
    "moto": "Recomendamos Baterias de 5Ah a 12Ah (Route ou Yuasa)."
};

function consultarBateria() {
    const tipoVeiculo = document.getElementById("tipo-veiculo").value;
    const resultadoDiv = document.getElementById("resultado-consulta");
    
    if (tipoVeiculo === "") {
        resultadoDiv.innerHTML = "Por favor, selecione um tipo de veículo.";
        return;
    }

    const mensagem = sugestoes[tipoVeiculo];
    resultadoDiv.innerHTML = `<strong>Resultado:</strong> ${mensagem}`;
    resultadoDiv.style.color = "#002e5b";
}

// Efeito de scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
