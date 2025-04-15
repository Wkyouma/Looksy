import { Router } from 'express';
import { AdicionarImagem, deletarImagem, listarImagem } from '../controllers/imagens.js'
import { listarPastas, listarImagensDaPasta , adicionarPasta} from '../controllers/pastas.js';

const router = Router();

router.get('/', listarImagem);
router.post('/Add', AdicionarImagem );
router.delete('/deletar/:id', deletarImagem)
router.get('/pastas', listarPastas);
router.get('/pastas/:id/imagens', listarImagensDaPasta);
router.post('/pastas/adicionar-imagem', adicionarPasta);

export default router;