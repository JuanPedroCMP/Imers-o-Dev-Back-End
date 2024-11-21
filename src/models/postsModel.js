import conectarAoBanco from "../config/dbConfig.js";
// Importa uma função para conectar ao banco de dados. O arquivo dbConfig.js deve exportar a função 'conectarAoBanco'.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Realiza a conexão ao banco de dados usando uma string de conexão armazenada em uma variável de ambiente (process.env.STRING_CONEXAO).

export default async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    // Acessa o banco de dados chamado "imersao-instabytes".

    const colecao = db.collection("posts");
    // Acessa a coleção (similar a uma tabela em bancos relacionais) chamada "posts".

    return colecao.find().toArray();
    // Retorna todos os documentos da coleção "posts" como um array.
}