import {Router} from 'express';
import LaunchController from '../controllers/LaunchController';

const routes = Router();

const PATH = '/launch';

routes.get(PATH + '/list', LaunchController.listAll);

export default routes;