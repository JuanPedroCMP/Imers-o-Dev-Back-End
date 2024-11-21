import express from "express"; 
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

const routes = (app) =>{
    app.use(express.json());
    // Middleware que permite a aplicação interpretar requisições no formato JSON.

    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
}

export default routes;



