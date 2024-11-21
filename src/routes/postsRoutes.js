import express from "express"; 
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) =>{
    app.use(express.json());
    // Middleware que permite a aplicação interpretar requisições no formato JSON.

    app.get("/posts", listarPosts);
}

export default routes;



