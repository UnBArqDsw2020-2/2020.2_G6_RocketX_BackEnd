import Lancamentos from './Lancamentos.routes';

export default function SetRoutes(app) {
    app.use('/api', [Lancamentos]);
}