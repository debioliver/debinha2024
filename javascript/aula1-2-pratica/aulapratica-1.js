// Exercicio sobre o metodo slice()
let nomeUsuaria = "Thatianna";
let primeirasLetras = nomeUsuaria.slice(0, 3);

//console.log("As tres primeiras letras do nome da usuaria sao:", primeirasLetras);

//Exercicio sobre o metodo substring()

let projetoOlabi = "PretaLab";
let tamanhoVariavel = projetoOlabi.length;
let ultimasLetras = projetoOlabi.substring(4,8);

//console.log(tamanhoVariavel);

//console.log("As quatro ultimas letras do projeto do Olabi são:", ultimasLetras);

let nomeUsuaria2 = "Deborah";
let tamanhoVariavel2 = nomeUsuaria2.length;
//console.log(tamanhoVariavel2)

let ocultandoNomeUsuaria = nomeUsuaria2.replace('Deborah', '*******');
//console.log(ocultandoNomeUsuaria)

//Exercicio sobre o metodo replace

let senha = "AWdkq2&";
let comprimentoDesSenha = senha.length;

console.log("O comprimento total da senha", senha, "é: ", comprimentoDesSenha, "caracteres");

//Exercicio sobre o metodo length


let frase = "eu alcançarei meus objetivos";
let usandoOMetodoSplit = frase.split('e');

console.log("O resultado da frase", frase, "recortada usando a letra e", "é: ", usandoOMetodoSplit);