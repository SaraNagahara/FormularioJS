var botao = document.getElementById("bot");


var nome = document.getElementById("nome");
var idade = document.getElementById("idade");
var cpf = document.getElementById("cpf");
var msg_geral = document.getElementsByClassName('msg_geral')[0];

botao.addEventListener("click", function(){

    let erro = false; //Validação para que só apareca a mensagem de sucesso se todos os erros forem false

    msg_geral.textContent = '';

   if(nome.value.length === 0 || nome.value.length <= 3){
      
        msg_geral.classList.remove('esconder');
         msg_geral.classList.add('exibir');
         msg_geral.style.color = "red";
        nome.style.border = '2px solid red';
       nome.style.backgroundColor = 'red';
       msg_geral.innerHTML +='nome não informado ou fora do padrão! <br>  ' 
       erro = true;
     
   }
   
   if(idade.value.length === 0 || idade.value < 18 || idade.value >= 60){
    msg_geral.style.color = "red";
    idade.style.border = '2px solid red';
    idade.style.backgroundColor = 'red';
    msg_geral.innerHTML +='idade não informado ou fora do padrão!  <br> '
    
    msg_geral.classList.remove('esconder');
    msg_geral.classList.add('exibir');
    erro = true;
   }

   let cpfcorrige = cpf.value;
   cpfcorrige = cpfcorrige.replaceAll('.', '');
   cpfcorrige = cpfcorrige.replaceAll('-', '');
   
   if (cpfcorrige.length === 0 || cpfcorrige.length !== 11 || isNaN(cpfcorrige)) {
    msg_geral.style.color = "red";
    cpf.style.border = '2px solid red';
    cpf.style.backgroundColor = 'red'; 
    msg_geral.innerHTML += 'CPF não informado! <br>';
    
    
     msg_geral.classList.remove('esconder');
     msg_geral.classList.add('exibir');
     erro = true;
   }

   if(!erro){
    msg_geral.style.color = 'green';
    msg_geral.textContent ='Sucesso!!'
   
    msg_geral.classList.remove('esconder');
    msg_geral.classList.add('exibir');
   }

});




/* Aqui começa a segunda parte do codigo */

var next = document.getElementById("next");
var msg_botao1 = document.getElementsByClassName("msg_botao")[0];


next.addEventListener('click', function(){
    var nome2 = document.getElementById("nome2").value;
    var aviso = document.getElementById("aviso-erro");

    var tipo = document.getElementById("selecionar").value;
    var fisicoCadastro = document.getElementsByClassName("fisicoCadastro")[0]; 
    var juridicoCadastro = document.getElementsByClassName("juridicoCadastro")[0]; 
    
    if(nome2.length == 0){
        msg_botao1.classList.remove("esconder");
        msg_botao1.classList.add("exibir");
        aviso.textContent = '';
        aviso.style.color = "red";
        aviso.textContent += "Preencha o nome";
    }

     if(tipo === "fisico" && tipo != '' && nome2.length != 0){
        mensagemFisico.textContent = '';

        msgJuridico.textContent = '';
      
        aviso.textContent = '';

        msg_botao1.classList.remove("exibir");
        msg_botao1.classList.add("esconder");

        msg_botao.classList.remove("exibir");
        msg_botao.classList.add('esconder');
        msg_botao2.classList.remove("exibir");
        msg_botao2.classList.add('esconder');

        juridicoCadastro.classList.remove("exibir");

        juridicoCadastro.classList.add('esconder');

        fisicoCadastro.classList.remove("esconder");

        fisicoCadastro.classList.add('exibir');

    }else if(tipo === "juridico" && tipo != '' && nome2.length != 0){
        mensagemFisico.textContent = '';

        msgJuridico.textContent = '';

        aviso.textContent = '';

        msg_botao1.classList.remove("exibir");
        msg_botao1.classList.add("esconder");
        
        msg_botao.classList.remove("exibir");
        msg_botao.classList.add('esconder');
        msg_botao2.classList.remove("exibir");
        msg_botao2.classList.add('esconder');

        fisicoCadastro.classList.remove("exibir");

        fisicoCadastro.classList.add('esconder');

        juridicoCadastro.classList.remove("esconder");

        juridicoCadastro.classList.add('exibir');
        
    }

    if(tipo == ''){
        juridicoCadastro.classList.add('esconder');
        fisicoCadastro.classList.add('esconder');
    }
});

/* Aqui começam as validacoes dos campos de pessoa fisica e juridica*/

//Física

var msg_botao = document.getElementsByClassName("msg_botao")[1];
var gravarFisico = document.getElementById("gravarFisico");

var rg = document.getElementById("rg");
var idadeFisico = document.getElementById("idadeFisico");
var mensagemFisico = document.getElementById("mensagemFisico");
var cpfFisico = document.getElementById("cpfF");

gravarFisico.addEventListener('click', function(){
    
    mensagemFisico.textContent = '';
    let erro = false; //Validação para que só apareca a mensagem de sucesso se todos os erros forem false

   let cpfFisicoCorrigido = cpfFisico.value;
   cpfFisicoCorrigido = cpfFisicoCorrigido.replaceAll('.', '');
   cpfFisicoCorrigido = cpfFisicoCorrigido.replaceAll('-', '');

    if(cpfFisicoCorrigido.length == 0 || cpfFisicoCorrigido.length !== 11 || isNaN(cpfFisicoCorrigido)){
        msg_botao.classList.remove("esconder");
        msg_botao.classList.add('exibir');
        mensagemFisico.style.color = "red";
        mensagemFisico.innerHTML += "Preencha com o cpf corretamente! <br>";
        erro = true;
    }


   if(rg.value.length == 0 || rg.value.length != 10){
        msg_botao.classList.remove("esconder");
        msg_botao.classList.add('exibir');
        mensagemFisico.style.color = "red";
        mensagemFisico.innerHTML += "Preencha com o RG corretamente! <br>";
        erro = true;
    }

    if(idadeFisico.value.length == 0 || idadeFisico.value < 18){
        msg_botao.classList.remove("esconder");
        msg_botao.classList.add('exibir');
        mensagemFisico.style.color = "red";
        mensagemFisico.innerHTML += "Preencha com a idade <br>";
        erro = true;
    }

    if(!erro){
        msg_botao.classList.remove("esconder");
        msg_botao.classList.add('exibir');
        mensagemFisico.style.color = "green";
        mensagemFisico.innerHTML = "Sucesso!!";
    }

});

// Jurídica
var msg_botao2 = document.getElementsByClassName("msg_botao")[2];
var gravarJuridico = document.getElementById("gravarJuridico");
var msgJuridico = document.getElementById("mensagemJuridico");
var cnpjcorrigir = document.getElementById("cnpj");
var ie = document.getElementById("ie");
var nomeFantasia = document.getElementById("fantasia");

gravarJuridico.addEventListener('click', function(){
    
    msgJuridico.textContent = '';

    let erro = false;

    let cnpj = cnpjcorrigir.value;
    cnpj = cnpj.replaceAll(".",'');
    cnpj = cnpj.replaceAll("-", '');
    cnpj = cnpj.replaceAll("/", '');

    if(cnpj.length == 0 || cnpj.length !== 14 || isNaN(cnpj)){
        msg_botao2.classList.remove("esconder");
        msg_botao2.classList.add('exibir');
        msgJuridico.style.color = "red";
        mensagemJuridico.innerHTML += "Preencha o CNPJ corretamente! <br>"
        erro = true;
    }

    if(ie.value.length == 0 || ie.value.length !== 12){
        msg_botao2.classList.remove("esconder");
        msg_botao2.classList.add('exibir');
        msgJuridico.style.color = "red";
        mensagemJuridico.innerHTML += "Preencha com o IE corretamente! <br>"
        erro = true;
    }

    if(nomeFantasia.value.length == 0){
        msg_botao2.classList.remove("esconder");
        msg_botao2.classList.add('exibir');
        msgJuridico.style.color = "red";
        mensagemJuridico.innerHTML += "Preencha com o nome do estabelecimento! <br>"
        erro = true;
    }

    if(!erro){
        msg_botao2.classList.remove("esconder");
        msg_botao2.classList.add('exibir');
        msgJuridico.style.color = "green";
        mensagemJuridico.textContent += "Sucesso!!"
    }

});




