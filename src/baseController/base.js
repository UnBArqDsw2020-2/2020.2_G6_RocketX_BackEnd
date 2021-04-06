// Decorator

function Base (model) {
    //atributes
    this.model = model;

    //methods
    this.create = async function(data) {
        return await this.model.create(data);
    }

    this.findOne = async function(data) {
        return await this.model.findOne(data);
    }

    this.findAll = async function(data) {
        return await this.model.findAll(data);
    }

    this.update = async function(data, where) {
        return await this.model.update(data, where);
    }

    this.listAll = async function() {
        return await this.model.findAll();
    }
}

module.exports = Base;



/*

// template method example

function a(){
    this.login = ()=>{
        this.pegarCadastro();
        this.autenticar();
        this.prosseguir();
    };
    this.pegarCadastro = ()=>{};
    this.autenticar = function (){};
    this.prosseguir = ()=>{};
}

function admin(){
    this.pegarCadastro = () => {
        //codigo do cadastro
    }
    this.autenticar = () => {
        //autenticar usuario
    }
    this.prosseguir = () => {
        //prosseguir com o usuario logado
    }
}

function user(){
    this.pegarCadastro = () => {
        //codigo do cadastro
    }
    this.autenticar = () => {
        //autenticar usuario
    }
    this.prosseguir = () => {
        //prosseguir com o usuario logado
    }
}

    c = new b;
    c.login();

// iterator patten example

a = { 
    a : 'a',
    b : 'b',
    c : 'c',
    d : 'x',
    findElement = (element) => {
        this.map((o, key) => {
            return o[key] === element;
        })
    }
}

a.findElement('x');

*/
