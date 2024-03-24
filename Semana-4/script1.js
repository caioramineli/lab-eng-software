let divInserir = document.getElementById('inserir')
let profRadio = document.getElementById('professor')
let alunoRadio = document.getElementById('aluno')

profRadio.addEventListener('change', () => {
    divInserir.innerHTML = ""
    document.getElementById('span-radio').style.display = 'none'

    let area = `<label for="area">Area:</label>
    <input type="text" name="area" id="area" placeholder="Digite sua area de atuação">`

    let matricula = `<label for="matricula">Matrícula:</label>
    <input type="text" name="matricula" id="matricula" placeholder="Digite sua matrícula">`

    let lattes = `<label for="lattes">Lattes:</label>
    <input type="text" name="lattes" id="lattes" placeholder="Digite aqui seu endereço para o lattes">`

    divInserir.innerHTML += area + matricula + lattes;

})

alunoRadio.addEventListener('change', () => {
    divInserir.innerHTML = ""
    document.getElementById('span-radio').style.display = 'none'

    let curso = `<label for="curso">Curso:</label>
    <input type="text" name="curso" id="curso" placeholder="Digite seu curso">`

    let matricula = `<label for="matricula">Matrícula:</label>
    <input type="text" name="matricula" id="matricula_a" placeholder="Digite sua matrícula">`

    divInserir.innerHTML += curso + matricula
})

let resetarForm = document.getElementById('reset-form')
resetarForm.addEventListener('click', () => {
    divInserir.innerHTML = ""
    removeError()
    document.getElementById('span-radio').style.display = 'none'
})

// Utilizei a documentação abaixo para trabalhar com classes
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes

class Pessoa {
    constructor(nome, email, data_nascimento, telefone_f, telefone_c) {
        this.nome = nome;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.telefone_f = telefone_f;
        this.telefone_c = telefone_c;
    }
}

class Aluno extends Pessoa {
    constructor(nome, email, data_nascimento, telefone_f, telefone_c, curso, matricula) {
        super(nome, email, data_nascimento, telefone_f, telefone_c);
        this.curso = curso;
        this.matricula = matricula;
    }

    mostrarTodosOsDados() {
        return "Nome: " + this.nome +
            " Email: " + this.email +
            " Data de Nascimento: " + this.data_nascimento +
            " Telefone Fixo: " + this.telefone_f +
            " Telefone Celular: " + this.telefone_c +
            " Curso: " + this.curso +
            " Matricula: " + this.matricula;
    }
}

class Professor extends Pessoa {
    constructor(nome, email, data_nascimento, telefone_f, telefone_c, area, matricula, lattes) {
        super(nome, email, data_nascimento, telefone_f, telefone_c);
        this.area = area;
        this.matricula = matricula;
        this.lattes = lattes;
    }

    mostrarTodosOsDados() {
        return "Nome: " + this.nome +
            " Email: " + this.email +
            " Data de Nascimento: " + this.data_nascimento +
            " Telefone Fixo: " + this.telefone_f +
            " Telefone Celular: " + this.telefone_c +
            " Area: " + this.area +
            " Matricula: " + this.matricula +
            " Lattes: " + this.lattes;
    }
}

const btnEnviar = document.getElementById('btn-enviar')
let dadosForm = document.getElementById('dados-form')
const form = document.getElementById('form')
const spanError = document.getElementById('span-erro')

function setError() {
    spanError.style.display = 'inline'
}

function removeError() {
    spanError.style.display = 'none'
}

btnEnviar.addEventListener('click', () => {

    if (profRadio.checked || alunoRadio.checked) {
        let nome = document.getElementById('nome').value.trim();
        let email = document.getElementById('email').value.trim();
        let data_nascimento = document.getElementById('data_nascimento').value.trim();
        let telefone_f = document.getElementById('telefone_f').value.trim();
        let telefone_c = document.getElementById('telefone_c').value.trim();


        if (profRadio.checked) {
            let area = document.getElementById('area').value.trim();
            let lattes = document.getElementById('lattes').value.trim();
            let matricula = document.getElementById('matricula').value.trim();
            if (!nome || !email || !data_nascimento || !telefone_f || !telefone_c || !area || !matricula || !lattes) {
                setError();
            }
            else {
                removeError()
                let professor = new Professor(nome, email, data_nascimento, telefone_f, telefone_c, area, matricula, lattes);
                mostrarProfessor(professor)
                form.reset();
            }
        }
        else if (alunoRadio.checked) {
            let curso = document.getElementById('curso').value.trim();
            let matriculaAluno = document.getElementById('matricula_a').value.trim();
            if (!nome || !email || !data_nascimento || !telefone_f || !telefone_c || !curso || !matriculaAluno) {
                setError();
            }
            else {
                removeError()
                let aluno = new Aluno(nome, email, data_nascimento, telefone_f, telefone_c, curso, matriculaAluno);
                mostrarAluno(aluno)
                form.reset();
            }
        }
    } else {
        document.getElementById('span-radio').style.display = 'inline'
    }
})

form.addEventListener('keypress', () => {
    removeError()
})

function mostrarAluno(aluno) {
    const list = document.getElementById('dados-form');

    const listItem = document.createElement('li');
    listItem.textContent = "ALUNO - " +
        "Nome: " + aluno.nome +
        " Email: " + aluno.email +
        " Data de Nascimento: " + aluno.data_nascimento +
        " Telefone Fixo: " + aluno.telefone_f +
        " Telefone Celular: " + aluno.telefone_c +
        " Curso: " + aluno.curso +
        " Matricula: " + aluno.matricula;

    list.appendChild(listItem);
}

function mostrarProfessor(professor) {
    const list = document.getElementById('dados-form');

    const listItem = document.createElement('li');
    listItem.textContent = "PROFESSOR - " +
        "Nome: " + professor.nome +
        " Email: " + professor.email +
        " Data de Nascimento: " + professor.data_nascimento +
        " Telefone Fixo: " + professor.telefone_f +
        " Telefone Celular: " + professor.telefone_c +
        " Area: " + professor.area +
        " Matricula: " + professor.matricula +
        " Lattes: " + professor.lattes;

    list.appendChild(listItem);
}



