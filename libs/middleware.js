import bodyParse from 'body-parser';
import cors from 'cors';
import morgan from  'morgan';
import logger from './logger.js';


module.exports = app => {
    app.set('port', 3000);
    app.set('json spaces', 4);
    app.use(morgan("common", {
        stream: {
            write: (message) => {
                logger.info(message);
            }
        }
    }));
    app.use(bodyParse.json());
    app.use(cors({
        origin: ["*"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }));
}