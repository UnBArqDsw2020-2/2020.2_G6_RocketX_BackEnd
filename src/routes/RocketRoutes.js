import {Router} from 'express';
import RocketController from '../controllers/RocketController';

const routes = Router();

const PATH = '/rocket';

routes.get(PATH + '/list', RocketController.listAll);

export default routes;