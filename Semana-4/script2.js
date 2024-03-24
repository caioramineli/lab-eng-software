class Carro {
    constructor(marca, modelo, ano, cor, km, valorFipe) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.km = km;
        this.valorFipe = valorFipe;
    }

    anosUtilizacao() {
        let anoAtual = new Date().getFullYear()
        return anoAtual - this.ano
    }

    valorMercado() {
        // carros que rodam até 30.000 km/ano – 110% do valor_fipe
        // carros que rodam entre 30.000 e 50.000 km/ano – 100% do valor_fipe
        // carros que rodam mais que 50.000 km/ano – 90% do valor_fipe
        let divisao = this.km / this.anosUtilizacao()

        if (divisao <= 30000) {
            return this.valorFipe * 1.1
        } else if (divisao > 30000 && divisao <= 50000) {
            return this.valorFipe
        } else if (divisao > 50000) {
            return this.valorFipe * 0.9
        }
    }
}


const btnEnviar = document.getElementById('btn-enviar')
const spanError = document.getElementById('span-erro')

btnEnviar.addEventListener('click', () => {
    let marca = document.getElementById('marca').value.trim()
    let modelo = document.getElementById('modelo').value.trim()
    let ano = parseInt(document.getElementById('ano').value)
    let cor = document.getElementById('cor').value.trim()
    let km = parseInt(document.getElementById('km').value)
    let valorFipe = parseInt(document.getElementById('valor_fipe').value)
    
    if (!marca || !modelo || !ano || !cor || !km || !valorFipe) {
        setError()
    } else {
        let carro = new Carro(marca, modelo, ano, cor, km, valorFipe);
        let corCarro = document.getElementById('carro')
        corCarro.style.backgroundColor = cor;
        let containerCarro = document.getElementsByClassName('container-carro')
        containerCarro[0].style.display = 'flex'
        exibirCarro(carro)
        removeError()
        form.reset()
    }
})

function setError() {
    spanError.style.display = 'inline'
}

function removeError() {
    spanError.style.display = 'none'
}

form.addEventListener('keypress', () => {
    removeError()
})

function exibirCarro(carro) {
    const div = document.getElementById('dados-form');

    div.innerHTML = "Marca: " + carro.marca +
        "<br>" +
        "Modelo: " + carro.modelo +
        "<br>" +
        "Ano: " + carro.ano +
        "<br>" +
        "Cor: " + carro.cor +
        "<br>" +
        "Kilometragem: " + carro.km +
        "<br>" +
        "Valor Fipe: " + carro.valorFipe +
        "<br>" +
        "Anos de utilização: " + carro.anosUtilizacao() +
        "<br>" +
        " Valor de mercado: " + carro.valorMercado().toFixed(2)
}



