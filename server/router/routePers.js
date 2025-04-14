import { Router } from 'express';
import { AdicionarImagem, deletarImagem, listarImagem } from '../controllers/personagens.js'

const router = Router();

router.get('/', listarImagem);
router.post('/Add', AdicionarImagem );
router.delete('/deletar/:id', deletarImagem)
export default router;  