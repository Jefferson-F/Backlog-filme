import express from "express";//importação da lib
import bodyParser from "body-parser";//importação da lib
import cors from "cors";
import filmeRoutes from "../src/routes/filmeRoutes.js";//importação do arquivo de rotas

const app = express();//constante da lib

app.use(cors());
app.use(bodyParser.json());//conversão para json
app.use('/', filmeRoutes);//sempre que "/" for ativado, chama o arquivo filmeRoutes

export default app;//Exportando tudo nesse arquivo