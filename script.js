const btnsobre = document.getElementById('sobre');
const menuVerticalLicencas = document.getElementById('sidebar-sobre');
const btnContato = document.getElementById('contato');
const menuVerticalContato = document.getElementById('sidebar-contato');

// Adiciona o evento de clique no botão "Sobre"
btnsobre.addEventListener('click', function(event) {
    abreMenu(event, menuVerticalLicencas);
});

btnContato.addEventListener('click', function(event) {
    abreMenu(event, menuVerticalContato);
});

//Funcão geral para abrir/fechar TODOS OS menu vertical
function abreMenu(event, menu) {
    event.preventDefault(); // Evita que a página recarregue ao clicar no link
    // Liga/Desliga a classe 'active' do menu vertical
    menu.classList.toggle('active');
}

function fechaMenu(event, menu, btn) {
    if (!menu.contains(event.target) && event.target !== btn) {
        menu.classList.remove('active');
    }
}

// Opcional: Fecha o menu se o usuário clicar fora dele
document.addEventListener('click', function(event) {
    fechaMenu(event, menuVerticalLicencas, sobre);
    fechaMenu(event, menuVerticalContato, contato);
});

const form = document.getElementById('formulario');

const cadastro = document.getElementById('cadastro');
const login = document.getElementById('login');
if(form){
from.addEventListener('submit', function () {

    const nome = document.getElementById('Nome').value;
    const cpf = document.getElementById('cpf').value;
    const end = document.getElementById('End').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const texto = `Informações do cadastro:\n\n` +
                    `Nome: ${nome}\n` +
                    `CPF: ${cpf}\n` +
                    `Endereço: ${end}\n` +
                    `Email: ${email}\n` +
                    `Senha: ${senha}\n`;

    const arquivo = new Blob([texto], {
        type: "text/plain;charset=utf-8"
    });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(arquivo);
    link.download = 'cadastro.txt'; 
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

})};
