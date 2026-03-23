const form = document.querySelector("form");
const nome = document.getElementById("nome");
const data = document.getElementById("data");
const foto = document.getElementById("foto");
const profissao = document.getElementById("profissao");
const span = document.getElementById("aviso");
const cards = document.getElementById("cards");
const inputs = [nome, data, foto, profissao];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!verifyInputs()) {
        span.classList.remove("invisivel");
        return;
    }

    const card = document.createElement("div");
    card.classList.add("card");
    const card1 = document.createElement("div");
    card1.classList.add("card1");

    const reader = new FileReader();

    reader.onload = function (e) {
        card1.style.backgroundImage = `url(${e.target.result})`;
    };

    reader.readAsDataURL(foto.files[0]);

    const card2 = document.createElement("div");
    card2.classList.add("card2");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.innerText = `${capitalizar(nome.value)}`;

    const p1 = document.createElement("p");
    p1.innerText = `Data de Nascimento: ${data.value.replace(/-/g, "/")}`;

    const p2 = document.createElement("p");
    p2.innerText = `Profissão: ${profissao.value}`;

    cards.appendChild(card);
    card.appendChild(card1);
    card.appendChild(card2);
    card2.appendChild(titulo);
    card2.appendChild(p1);
    card2.appendChild(p2);
});

function verifyInputs() {
    let valid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add("erro");
            valid = false;
        } else {
            input.classList.remove("erro");
        }
    });

    if (valid) {
        span.classList.add("invisivel");
    }

    return valid;
}

function capitalizar(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}