const ListaStarCafe = require("../models/starCafeList");

// Função para inicializar com dois cafés
const inicializarCafes = () => {
    ListaStarCafe.adicionarCafe("Café Expresso", 5.00, "Expresso tradicional");
    ListaStarCafe.adicionarCafe("Café Latte", 6.50, "Café com leite vaporizado");
};

const listarCafes = (req, res) => {
    const cafes = ListaStarCafe.listarCafes();
    res.json(cafes);
};

const adicionarCafe = (req, res) => {
    const { nome, valor, produto } = req.body;
    const novoCafe = ListaStarCafe.adicionarCafe(nome, valor, produto);
    res.status(201).json(novoCafe);
};

const buscarCafePorId = (req, res) => {
    const { id } = req.params;
    const cafe = ListaStarCafe.buscarCafePorId(parseInt(id, 10));
    if (cafe) {
        res.json(cafe);
    } else {
        res.status(404).send('Café não encontrado');
    }
};

const removerCafe = (req, res) => {
    const { id } = req.params;
    const cafeRemovido = ListaStarCafe.removerCafe(parseInt(id, 10));
    if (cafeRemovido) {
        res.json(cafeRemovido);
    } else {
        res.status(404).send('Café não encontrado');
    }
};

// Inicializar os cafés ao carregar o módulo
inicializarCafes();

module.exports = {
    listarCafes,
    adicionarCafe,
    buscarCafePorId,
    removerCafe
};