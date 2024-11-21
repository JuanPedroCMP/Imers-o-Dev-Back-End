import express from "express"; 
// Importa o framework Express, que facilita a criação de servidores web em Node.js.

import routes from "./src/routes/postsRoutes.js";

const app = express(); 
// Cria uma aplicação Express, que será usada para configurar rotas e gerenciar o servidor.

routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});
// Inicializa o servidor na porta 3000 e imprime uma mensagem no console indicando que o servidor está funcionando.


