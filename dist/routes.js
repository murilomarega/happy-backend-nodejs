"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const upload_1 = __importDefault(require("./config/upload"));
const OrphanagesController_1 = __importDefault(require("./controllers/OrphanagesController"));
const routes = express_1.Router();
const upload = multer_1.default(upload_1.default);
// Rota = conjunto
// recurso = usuário
// métodos HTTP = GET, POST, PUT, DELETE
//GET = BUSCANDO INFORMAÇÃO
//POST = CRIAR UMA INFORMAÇÃO
//PUT = EDITANR INFORMAÇÃO
//DELETE = DELETAR INFORMAÇÃO
//PARAMETROS
//Query params: localhost:3333/users?search=Diego&age=22 (busca)
//Route params: localhost:3333/users/1 (identificar um recurso)
//Body: localhost:3333/users/1
// app.post('/users/:id', (request, response) => {
//     console.log(request.query);
//     console.log(request.params);
//     console.log(request.body);
//     return response.json({ message: "Hello World" });
// })
//MVC
// model => representação de uma entidade/tabela no banco
// view => como as coisas são visualizadas
// controllers => lógica das rotas
//index, show, create, update, delete => metodos padões controller
routes.get('/orphanages', OrphanagesController_1.default.index);
routes.get('/orphanage/:id', OrphanagesController_1.default.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController_1.default.create);
exports.default = routes;
