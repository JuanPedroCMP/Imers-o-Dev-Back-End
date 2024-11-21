import  { getTodosPosts , criarPost } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Define uma rota HTTP GET no caminho "/posts".

    const posts = await getTodosPosts();
    // Obtém todos os posts chamando a função 'getTodosPosts'.

    res.status(200).json(posts);
    // Envia os posts como resposta no formato JSON com o código de status 200 (OK).
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(novoPost);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}