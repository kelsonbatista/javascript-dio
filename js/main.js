
var name1 = "Kelson Fox";
var cidade1 = "SJCampos-SP"
var n1 = 20;
var n2 = 33;
var frase = "Esse é um teste de javascript!"

var lista = ['Maçã','Pera','Laranja'];

var cadastro = {nome: "Maçã", cor: "vermelha"};
var cadastrolista = [{nome: "Maçã", cor: "vermelho"},{nome:"Pera", cor:"verde"},{nome:"Laranja", cor:"laranja"},{nome:"Uva", cor:"roxo"}];

//alert('Bem-vindo ' + name1 + ' (' + cidade1 + ')');
//alert(num1 + num2);

console.log(name1);
console.log(n1 + n2);
console.log(frase);
console.log(frase.replace("teste","exercício"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

//alert(frase.replace("teste","exercício"));
lista.push("Uva");

console.log(lista);
console.log(lista[1]);

lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[3]);
console.log(lista.join(' - '));

console.log(cadastro);
console.log(cadastro.cor);
console.log(cadastrolista[1].nome + " tem cor " + cadastrolista[1].cor);

//var idade = prompt("Qual sua idade?");
var idade = 20;

if (idade >= 18) {
    console.log("Maior de idade");
}
else {
    console.log("Menor de idade");
}

var i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}

for (i=0;i<=3;i++) {
    console.log(i);
}

///////////////////////////////////////////////////

var d = new Date();

console.log(d);
console.log(d.getMonth() + 1);
console.log(d.getDay());
console.log(d.getHours());

function soma(n3, n4) {
    return n3 + n4;
}

console.log(soma(5,4));

function replaceitem(phrase, item1, item2) {
    return phrase.replace(item1,item2);
}

console.log(replaceitem("Argentina é maior","Argentina","Brasil"));

function validaidade(age) {
 var maior;
    if (age >= 18) {
        maior = true;
    } else {
        maior = false;
    }
    return maior;
}

//var age = prompt("Digite sua idade:");
//console.log(validaidade(age));

/////////////////////////////////////////////
// Teste escrita na página

function clicou(){
    alert("Obrigado por clicar!");
}

function msg_obg() {
    document.getElementById("msg_obg").innerHTML = "Obrigado por clicar novamente!";
}

function redirect() {
    window.open("https://google.com","_blank");
    //window.location.href = 'https://uol.com.br';

}

function mouse(){
    document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse!"
    //alert('trocar msg');
}

function voltar(){
    document.getElementById("mouse").innerHTML = "Passe o mouse aqui."
}

function mouse2(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!"
    //alert('trocar msg');
}

function voltar2(elemento){
    elemento.innerHTML = "Passe o mouse aqui (this)."
}

function mouse3(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!"
    //alert('trocar msg');
}

function voltar3(elemento){
    elemento.innerHTML = "Passe o mouse aqui (sem id)."
}

function load(){
    console.log('Página carregada!');
}

function troca(elemento){
    console.log(elemento.value);
}