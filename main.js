const form =  document.getElementById("form-contato");
const arrayNomes = [];
const arrayTelefones = [];

let linhas ='';

function adicionaLinha(){
    const inputNome = document.getElementById("nome");
    const inputTelefone = document.getElementById("tel");

    if(arrayNomes.includes(inputNome.value)){
        alert("Nome já existe");

    } else {
        arrayNomes.push(inputNome.value);
        arrayTelefones.push(inputTelefone.value);
        
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
   

    inputNome.value = '';
    inputTelefone.value = '';

}

form.addEventListener("submit", function(e){
    e.preventDefault();
    adicionaLinha();
    

});

