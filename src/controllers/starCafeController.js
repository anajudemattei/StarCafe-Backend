const starCafeList = require("./models/starCafeList");

const starCafeList = (req, res) => {
    res.json(listaCafes.listarCafes());
};

const adicionarCafe = (req, res) => {
    const { nome, valor, produto } = req.body;
    if (!nome || !valor || !produto) {
        return res.status(400).json({erro: "Todos os campos são obrigatórios!"});
    }

const novoCafe = listaCafes.adicionarCafe(nome, valor, produto);
res.status(201).json(novoCafe);
};

const buscarCafe = (req, res) => {
    const cafe =
listaCafes.buscarCafePorId(parseInt(req.params.id));
    if (!cafe) {
        return res.status(404).json({erro: "Café não encontrado!"});
    }
    res.json(cafe);
}

const removerCafe = (req, res) => {
    const cafeRemovido =
listaCafes.removerCafe(parseInt(req.params.id));
    if (!cafeRemovido) {
        return res.status(404).json({erro: "Café não encontrado!"});
    }
    res.json({message: "Café removido com sucesso!", cafeRemovido});
};

module.exports = { listaCafes, adicionarCafe, buscarCafe, removerCafe};