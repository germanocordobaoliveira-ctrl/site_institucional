
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    // Substitua pelo número real do escritório
    const numero = "5511999999999";

    const texto = `
Olá! Gostaria de informações sobre os serviços jurídicos.

Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone}

Mensagem:
${mensagem}
    `;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});

