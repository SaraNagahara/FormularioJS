
//Primeira parte do formulario

//Variaveis Cadastro 1

var nomeCompleto = document.querySelector("#nome"); 
var idade = document.querySelector("#idade"); 
var cpfSemFormatar = document.querySelector("#cpf");
var msg_geral = document.querySelector(".msg_geral"); 
var btn_geral = document.querySelector("#bot");

// Funcoes Cadastro 1

function aparecerMsgGeral(){
  msg_geral.classList.remove("esconder");
  msg_geral.classList.add("exibir");
}

//botão cadastro 1

btn_geral.addEventListener('click', function() {
      msg_geral.innerHTML = '';

      let erro = false;

    if (nomeCompleto.value.length == 0 || nomeCompleto.value.length <= 3) { 
      nomeCompleto.style.backgroundColor = "red";
      msg_geral.style.color = "red";
      aparecerMsgGeral();
      msg_geral.innerHTML += "* Erro: Nome Inválido <br>";
      erro = true;
    }else{
      nomeCompleto.style.backgroundColor = "white";
    }

    if(idade.value == '' || idade.value < 18 || idade.value > 60 || isNaN(idade.value)){
      aparecerMsgGeral();
      idade.style.backgroundColor = 'red';
      msg_geral.style.color = "red"
      msg_geral.innerHTML += "* Erro: Idade Incorreta <br>"
      erro = true;
    }else{
      idade.style.backgroundColor = "white";
    }

    let cpfCorrigido = corrigePontoeTraco(cpfSemFormatar);

    if(cpfCorrigido == '' || cpfCorrigido.length !== 11){
      aparecerMsgGeral();
      msg_geral.style.color = "red"
      cpfSemFormatar.style.backgroundColor = 'red';
      msg_geral.innerHTML += "* Erro: cpf incorreto! <br>"
      erro = true;
    }else{
      cpfSemFormatar.style.backgroundColor = 'white';
    }

    if(!erro){
      aparecerMsgGeral();
      msg_geral.style.color = "green"
      msg_geral.innerHTML = "Sucesso!!";
    }

  });
  

//Parte de seleção juridica ou fisica

//Variaveis Cadastro 2

var nomeFouJ= document.querySelector("#nome2"); 
var select = document.querySelector("#selecionar"); 
var msg_opcaoFouJ = document.querySelector("#aviso-erro");
var msg_botao = document.querySelector(".msg_botao");
var btn_opcaoFouJ = document.querySelector("#next");
var fisicoCadastro = document.querySelector(".fisicoCadastro");
var juridicoCadastro = document.querySelector(".juridicoCadastro");

//Funçoes cadastro 2 juridica ou fisica

function AparecerMsgBotao(){
  msg_botao.classList.remove("esconder");
  msg_botao.classList.add("exibir");
}

function EsconderMsgBotao(){
  msg_botao.classList.remove("exibir");
  msg_botao.classList.add("esconder");
}

function exibirDivFisico(){
  fisicoCadastro.classList.remove("esconder");
  fisicoCadastro.classList.add("exibir");
}


function exibirDivJuridico(){
  juridicoCadastro.classList.remove("esconder");
  juridicoCadastro.classList.add("exibir");
}

function esconderDivFisico(){
  fisicoCadastro.classList.remove("exibir");
  fisicoCadastro.classList.add("esconder");
}

function esconderDivJuridico(){
  juridicoCadastro.classList.remove("exibir");
  juridicoCadastro.classList.add("esconder");
}

function esconderDivsFisicoEJuridico(){
  juridicoCadastro.classList.remove("exibir");
  fisicoCadastro.classList.remove("exibir");
  juridicoCadastro.classList.add("esconder");
  fisicoCadastro.classList.add("esconder");
}

//botao cadastro fisico juridico e selecao

btn_opcaoFouJ.addEventListener('click', function(){

    if(nomeFouJ.value == '' || nomeFouJ.value.length < 3){
      AparecerMsgBotao();
      msg_opcaoFouJ.style.color = "red";
      msg_opcaoFouJ.innerHTML = "* Erro: nome inválido!";
      nomeFouJ.style.backgroundColor = "red";

    }else if(select.value === "" && nomeFouJ.value != ''){
      AparecerMsgBotao();
      msg_opcaoFouJ.style.color = "red";
      msg_opcaoFouJ.innerHTML = "* Erro: Selecione uma opção!";
    }
    
    else{
      nomeFouJ.style.backgroundColor = "white";
      msg_opcaoFouJ.innerHTML = " ";
      EsconderMsgBotao();
    }

    if(select.value === "fisico" && nomeFouJ.value !== ''){
      esconderDivJuridico()
      exibirDivFisico()
    }else if(select.value == "juridico" && nomeFouJ.value !== ''){
      esconderDivFisico()
      exibirDivJuridico()
    }else{
      esconderDivsFisicoEJuridico();
    }

})



//Cadastro Físico

//Variaveis Cadastro Físico

var cpfFisico = document.querySelector("#cpfF"); 
var rgCorrige = document.querySelector("#rg"); 
var idadeFisico = document.querySelector("#idadeFisico");
var btn_fisico = document.querySelector("#gravarFisico");
var msg_botaoFisico = document.querySelector('.msg_botaoFisico');

btn_fisico.addEventListener('click', function(){

    msg_botaoFisico.innerHTML = "";

    let erro = false

    let cpfCorrigido = corrigePontoeTraco(cpfFisico);

    if(cpfCorrigido == '' || cpfCorrigido.length !== 11){
      msg_botaoFisico.style.color = "red";
      exibirMsgFisicoErro();
      cpfFisico.style.backgroundColor = "red"
      msg_botaoFisico.innerHTML += "* Erro: CPF inválido! <br>"
      erro = true
    }else{
      cpfFisico.style.backgroundColor = "white"
    }

    let rg = corrigePontoeTraco(rgCorrige);

    if(rg == '' || rg.length !== 10){
      exibirMsgFisicoErro();
      msg_botaoFisico.style.color = "red";
      rgCorrige.style.backgroundColor = 'red'
      msg_botaoFisico.innerHTML += "* Erro: RG inválido! <br> "
      erro = true
    }else{
      rgCorrige.style.backgroundColor = "white"
    }

    if(idadeFisico.value < 18 || idadeFisico.length == '' || idadeFisico.value > 60){
      exibirMsgFisicoErro();
      msg_botaoFisico.style.color = "red";
      idadeFisico.style.backgroundColor = 'red';
      msg_botaoFisico.innerHTML += "* Erro: Idade inválida! <br>"
      erro = true;
    }else{
      idadeFisico.style.backgroundColor = 'white'
    }

    if(!erro){
    exibirMsgFisicoErro();
    msg_botaoFisico.style.color = "green";
    msg_botaoFisico.innerHTML += "Sucesso!!"
      
    }
})

//funcoes


function exibirMsgFisicoErro(){
  msg_botaoFisico.classList.remove("esconder");
  msg_botaoFisico.classList.add("exibir");
}


//Cadastro Juridico

//Variaveis Cadastro Jurídico

var cnpjCorrige = document.querySelector("#cnpj"); 
var ie = document.querySelector("#ie"); 
var nomeFantasia = document.querySelector("#fantasia");
var btn_juridico= document.querySelector("#gravarJuridico");
var msg_botaoJuridico = document.querySelector(".msg_botaoJuridico");


btn_juridico.addEventListener('click', function(){
    msg_botaoJuridico.innerHTML = '';
     
    let erro = false;
    
    let cnpj = corrigeCNPJ(cnpjCorrige);

    if(cnpj == '' || cnpj.length !== 14){
      exibirMsgJuridicoErro();
      msg_botaoJuridico.style.color = 'red';
      cnpjCorrige.style.backgroundColor = 'red';
      msg_botaoJuridico.innerHTML += "* Erro: CNPJ Incorreto! <br>";
      erro = true;
    }else{
      cnpjCorrige.style.backgroundColor = 'white'
    }

    if(ie.value == '' || ie.value.length !== 12){
      exibirMsgJuridicoErro();
      msg_botaoJuridico.style.color = 'red';
      ie.style.backgroundColor = 'red';
      msg_botaoJuridico.innerHTML += "* Erro: IE Incorreto! <br>";
      erro = true;
    }else{
      ie.style.backgroundColor = 'white'
    }

    // console.log(ie.value)

    if(nomeFantasia.value == ''){
      exibirMsgJuridicoErro();
      msg_botaoJuridico.style.color = 'red';
      nomeFantasia.style.backgroundColor = 'red'
      msg_botaoJuridico.innerHTML += "* Erro: Insira um Nome Fantasia! <br>"
      erro = true;
    }else{
      nomeFantasia.style.backgroundColor = 'white'
    }

    if(!erro){
      exibirMsgJuridicoErro();
      msg_botaoJuridico.style.color = 'green';
      msg_botaoJuridico.innerHTML += "Sucesso!!"

      
    }

})

//Funcao aparecer mensagem erro juridica

function exibirMsgJuridicoErro(){
  msg_botaoJuridico.classList.remove("esconder");
  msg_botaoJuridico.classList.add("exibir");
}

//Funçoes repetitivas


function corrigeCNPJ(numerocnpj){

  let valorcnpj = numerocnpj.value;

  if(valorcnpj.includes(".") || valorcnpj.includes("-") || valorcnpj.includes("/")){
    let cnpj = valorcnpj.replaceAll(".", "");
    cnpj = cnpj.replaceAll("-", "");
    cnpj = cnpj.replaceAll("/", "");
    return cnpj;
  }

  return numerocnpj.value;
 
}

function corrigePontoeTraco(numerocpf){

  let valorcpf = numerocpf.value;

  if(valorcpf.includes(".") || valorcpf.includes("-")){
    let cpf = valorcpf.replaceAll(".", "");
    cpf = cpf.replaceAll("-", "");
    return cpf;
  }

  return numerocpf.value;
 
}





