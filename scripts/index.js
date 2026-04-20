const selectTemplate = document.getElementById("template");
const lista = document.querySelector(".elements__cards");

const carros = [
  {
    nome: "FERRARI 488 SPIDER",
    preco: "R$ 3.798.000",
    imagens: [
      "./images/images-car/ferrari-1.png",
      "./images/images-car/ferrari-2.png",
      "./images/images-car/ferrari-3.png",
      "./images/images-car/ferrari-4.png",
      "./images/images-car/ferrari-5.png",
    ],
  },
  {
    nome: "MASERATI MC20",
    preco: "R$ 3.528.000",
    imagens: [
      "./images/images-car/maserati-1.png",
      "./images/images-car/maserati-2.png",
      "./images/images-car/maserati-3.png",
      "./images/images-car/maserati-4.png",
      "./images/images-car/maserati-5.png",
    ],
  },
  {
    nome: "MCLAREN 570S",
    preco: "R$ 4.250.000",
    imagens: [
      "./images/images-car/mclaren-1.png",
      "./images/images-car/mclaren-2.png",
      "./images/images-car/mclaren-3.png",
      "./images/images-car/mclaren-4.png",
      "./images/images-car/mclaren-5.png",
    ],
  },
  {
    nome: "LAMBORGHINI AVENTADOR",
    preco: "R$ 6.799.000",
    imagens: [
      "./images/images-car/l.aventador-1.png",
      "./images/images-car/l.aventador-2.png",
      "./images/images-car/l.aventador-3.png",
      "./images/images-car/l.aventador-4.png",
      "./images/images-car/l.aventador-5.png",
    ],
  },
{
    nome: "FORD MUSTANG ",
    preco: "R$ 1.399.000",
    imagens: [
      "./images/images-car/mustang-1.png",
      "./images/images-car/mustang-2.png",
      "./images/images-car/mustang-3.png",
      "./images/images-car/mustang-4.png",
      "./images/images-car/mustang-5.png",
    ],
  },
  {
    nome: "CHEVROLET CORVETTE",
    preco: "R$ 1.869.000",
    imagens: [
      "./images/images-car/corvette-1.png",
      "./images/images-car/corvette-2.png",
      "./images/images-car/corvette-3.png",
      "./images/images-car/corvette-4.png",
      "./images/images-car/corvette-5.png",
    ],
  },

];

carros.forEach((carro) => {
  const template = selectTemplate.content.cloneNode(true);

  template.querySelector(".template__card-image").src = carro.imagens[0];
  template.querySelector(".template__card-title").textContent = carro.nome;
  template.querySelector(".template__card-price").textContent = carro.preco;

  template.querySelector(".template__card").addEventListener("click", () => {
    console.log("clicou");
    abrirModal(carro);
  });
  lista.appendChild(template);
});

let carroAtual;
let index = 0;

function abrirModal(carro) {
  carroAtual = carro;
  index = 0;
  document.getElementById("modal").style.display = "flex";
  atualizar();
}

function atualizar() {
  document.getElementById("modal-img").src = carroAtual.imagens[index];
  document.getElementById("modal-name").textContent = carroAtual.nome;
  document.getElementById("modal-price").textContent = carroAtual.preco;
}

function proxima() {
  index = (index + 1) % carroAtual.imagens.length;
  atualizar();
}

function anterior() {
  index = (index - 1 + carroAtual.imagens.length) % carroAtual.imagens.length;
  atualizar();
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    fecharModal();
  }
});