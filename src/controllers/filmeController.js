import filmeModel from "../models/filmeModel.js";

export default class Filmes{
    async BuscarTodosOsFilmes(req, res){//Async e await faz o javascript aguardar as informações de findAll antes de dar a resposta para o usuario
        try {
            const filmes = await filmeModel.findAll();//Await indica que o código deve entrar em estado de espera
            res.json(filmes);
        }
        catch(err){
            res.status(500).json({erro: err.message});
        }


    }
    async CadastrarFilme(req, res){
        try {
            const filmeCadastrado = await filmeModel.create(req.body);
            res.json({message: 'Filme cadastrado com sucesso!', filmeCadastrado});
        } 
        catch (err) {
            res.status(500).json({erro: err.message});
        }

    }

}