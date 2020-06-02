let submitButton = document.getElementById("submit-button");
let stateForm = document.getElementById("input-estado");
let nameInput = document.getElementById("input-name");
let emailInput = document.getElementById("input-email");
let cpfInput = document.getElementById("input-CPF");
let enderecoInput = document.getElementById("input-endereco");
let cidadeInput =  document.getElementById('input-cidade');
let dataInput = document.getElementById('data-inicio');

let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

let stateList = [
  ["Acre", "AC"],
  ["Alagoas", "AL"],
  ["Amapá", "AP"],
  ["Amazonas", "AM"],
  ["Bahia", "BA"],
  ["Ceará", "CE"],
  ["Distrito Federal", "DF"],
  ["Espírito Santo", "ES"],
  ["Goiás", "GO"],
  ["Maranhão", "MA"],
  ["Mato Grosso", "MT"],
  ["Mato Grosso do Sul", "MS"],
  ["Minas Gerais", "MG"],
  ["Pará", "PA"],
  ["Paraíba", "PB"],
  ["Paraná", "PR"],
  ["Pernambuco", "PE"],
  ["Piauí", "PI"],
  ["Rio de Janeiro", "RJ"],
  ["Rio Grande do Norte", "RN"],
  ["Rio Grande do Sul", "RS"],
  ["Rondônia", "RO"],
  ["Roraima", "RR"],
  ["Santa Catarina", "SC"],
  ["São Paulo", "SP"],
  ["Sergipe", "SE"],
  ["Tocantins", "TO"],
];

function validaNome() {
  let name = nameInput.value;
  let nameLength = name.length;

  if (nameLength > 40) {
    alert("O Campo nome não pode ter mais que 40 caracteres");
  }

  if (name === "") {
    alert("O campo nome é obrigatório");
  }
}

function validaEmail() {
  let email = emailInput.value;
  if (email === "") {
    alert("O campo Email é um campo obrigatório");
  }
  if (regex.test(email)) {
    alert("email válido");
  } else {
    alert("email inválido");
  }
}

function validaCpf() {
  cpf = cpfInput.value;
  let cpfLength = cpf.length;
  if (cpf === "") {
    alert("O campo CPF é um campo obrigatório");
  }
  if (cpfLength > 11) {
    alert("O campo CPF precisa ter no máximo 11 dígitos");
  }
}

function validaEndereco() {
  let endereco = enderecoInput.value;
  if (endereco === "") {
    alert("o Campo Endereço é um campo obrigatório");
  }
  if (endereco.length > 200) {
    alert("O Campo Endereço não pode ultrapassar 200 caracteres");
  }
}

function validaCidade() {
  let cidade = cidadeInput.value;
  if (cidade === "") {
    alert("o Campo Cidade é um campo obrigatório");
  }
  if (cidade.length > 28) {
    alert("O Campo Cidade não pode ultrapassar 28 caracteres");
  }
}

function validaData() {
  data = dataInput.value;
  dataArray = data.split('/');
  if(dataArray[0] > 0 && dataArray[0] <= 31){
    alert('opa, tudo certo')
  } else {
    alert('ops, até dia 31 só hein')
  }

  if( dataArray[1] > 0 && dataArray[1] <= 12){
    alert('tudo certo');
  } else {
    alert('ops, o ano só tem 12 meses');
  }

  if(dataArray[2] < 0){
    alert('ano negativo? onde isso existe?')
  }
}


function stateListFunction() {
  for (i = 0; i < stateList.length; i += 1) {
    let stateOption = document.createElement("option");
    stateOption.innerHTML = stateList[i][0];
    stateOption.value = stateList[i][1];
    stateForm.appendChild(stateOption);
  }
}

function submitForm(){
  
}

stateListFunction();

submitButton.addEventListener("click", validaData);
