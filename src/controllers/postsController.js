import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Define uma rota HTTP GET no caminho "/posts".

    const posts = await getTodosPosts();
    // Obtém todos os posts chamando a função 'getTodosPosts'.

    res.status(200).json(posts);
    // Envia os posts como resposta no formato JSON com o código de status 200 (OK).
}