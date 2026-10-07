
const btnsobre = document.getElementById('sobre');
const menuVerticalLicencas = document.getElementById('sidebar-sobre');
const btnContato = document.getElementById('contato');
const menuVerticalContato = document.getElementById('sidebar-contato');

if (btnsobre && menuVerticalLicencas) {
    btnsobre.addEventListener('click', function(event) {
        abreMenu(event, menuVerticalLicencas);
    });
}

if (btnContato && menuVerticalContato) {
    btnContato.addEventListener('click', function(event) {
        abreMenu(event, menuVerticalContato);
    });
}

function abreMenu(event, menu) {
    event.preventDefault();
    menu.classList.toggle('active');
}

function fechaMenu(event, menu, btn) {
    if (!menu.contains(event.target) && event.target !== btn) {
        menu.classList.remove('active');
    }
}

document.addEventListener('click', function(event) {

    if (menuVerticalLicencas && btnsobre) {
        fechaMenu(event, menuVerticalLicencas, btnsobre);
    }

    if (menuVerticalContato && btnContato) {
        fechaMenu(event, menuVerticalContato, btnContato);
    }

});


const form = document.getElementById('formulario');

if (form) {

    form.addEventListener('submit', function(event) {

        event.preventDefault();

        const nome = document.getElementById('Nome').value;
        const cpf = document.getElementById('cpf').value;
        const end = document.getElementById('End').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

            const usuario = {
        nome: nome,
        cpf: cpf,
        endereco: end,
        email: email,
        senha: senha
    };

    const usuarioJSON = JSON.stringify(usuario);

    localStorage.setItem('usuario', usuarioJSON);


        const texto =
            `Informações do cadastro:\n\n` +
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

        URL.revokeObjectURL(link.href);

        alert('Cadastro realizado com sucesso!');

        window.location.href = 'login.html';
    });

const formLogin = document.getElementById('formLogin');

if (formLogin) {

    formLogin.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        const dados = localStorage.getItem('usuario');

        if (!dados) {
            alert('Nenhum usuário cadastrado!');
            return;
        }

        const usuario = JSON.parse(dados);

        if (email === usuario.email && senha === usuario.senha) {

            alert(`Login realizado com sucesso! Bem-vindo, ${usuario.nome}!`);

            localStorage.setItem('logado', 'true');

            window.location.href = 'index.html';

        } else {

            alert('Email ou senha incorretos!');

        }

    });
}


}



