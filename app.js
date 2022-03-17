const carta1 = {
  nome: "Dragão branco dos olhos azuis",
  imagem:
    "https://http2.mlstatic.com/D_NQ_NP_125321-MLB20771522859_062016-O.jpg",
  atributos: {
    ataque: 3000,
    defesa: 2500,
  }
};
const carta2 = {
  nome: "Jovem Touro Guerreiro",
  imagem:
    "https://mypcards.com/img/3/382/yugioh_db2_en037/yugioh_db2_en037_en.jpg",
  atributos: {
    ataque: 1800,
    defesa: 1300,
  }
};
const carta3 = {
  nome: "Caveira invocada",
  imagem:
    "https://ms.yugipedia.com//thumb/7/7f/SummonedSkull-MIL1-EN-C-1E.png/300px-SummonedSkull-MIL1-EN-C-1E.png",
  atributos: {
    ataque: 2500,
    defesa: 1200,
  }
};

const cartas = [carta1, carta2, carta3];

let cartaMaquina;
let cartaJogador;

function sortearCarta(){
  let numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  let numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  printarCartas();

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  const opcoes = document.getElementById("opcoes");
  let radioOptions = "";

  for (const atributo in cartaJogador.atributos) {
    radioOptions +=
      '<input type="radio" name="atributo" value= ' +
      atributo +
      " >" +
      atributo;
  }
  opcoes.innerHTML = radioOptions;
}

function obtemAtributoSelecionado() {
  const radioAtributos = document.getElementsByName("atributo");

  for (let i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  const atributoSelecionado = obtemAtributoSelecionado();
  const elementoResultado = document.getElementById("resultado");
  const valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  const valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu!";
    document.getElementById("btnJogar").disabled = true;
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu!";
    document.getElementById("btnJogar").disabled = true;
  } else if (valorCartaJogador == null || valorCartaMaquina == null) {
    elementoResultado.innerHTML = "Selecione um atributo";
    document.getElementById("btnJogar").disabled = false;
  } else {
    elementoResultado.innerHTML = "Empate!";
    document.getElementById("btnJogar").disabled = true;
  }
}

function printarCartas() {
  const cartaJogadorImagem =
    '<img src="' + cartaJogador.imagem + '">"';
  const cartaMaquinaImagem =
    '<img src="' + cartaMaquina.imagem + '">"';
  const divImagemJogador = document.getElementById("carta-jogador");
  const divImagemMaquina = document.getElementById("carta-maquina");

  divImagemJogador.innerHTML = cartaJogadorImagem;
  divImagemMaquina.innerHTML = cartaMaquinaImagem;
}
