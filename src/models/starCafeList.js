const StarCafe = require("../models/starCafe");

class ListaStarCafe {
    constructor() {
        this.cafes = [];
        this.proximoId = 1; 
    }

    adicionarCafe(nome, valor, produto) {
        const novoCafe = new StarCafe(this.proximoId++, nome, valor, produto);
        this.cafes.push(novoCafe);
        return novoCafe;
    }

    listarCafes() {
        return this.cafes;
    }

    buscarCafePorId(id) {
        return this.cafes.find(cafe => cafe.id === id);
    }

    removerCafe(id) {
        const index = this.cafes.findIndex(cafe => cafe.id === id);
        if (index !== -1) {
            return this.cafes.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = new ListaStarCafe();