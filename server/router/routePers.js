import { Router } from 'express';
import { AdicionarImagem, deletarImagem, listarImagem, updateImagem } from '../controllers/imagens.js'
import { listarPastas, listarImagensDaPasta , adicionarPasta, removerDaPasta, removerPasta, criarPasta, atualizarPasta,} from '../controllers/pastas.js';

const router = Router();

router.get('/', listarImagem);
router.post('/Add', AdicionarImagem );
router.delete('/deletar/:id', deletarImagem)
router.put('/imagens/:id', updateImagem);
router.get('/pastas', listarPastas);
router.get('/pastas/:id/imagens', listarImagensDaPasta);
router.post('/pastas/adicionar-imagem', adicionarPasta);
router.delete('/pastas/:pastaId/imagens/:imagemId', removerDaPasta); 
router.delete("/pastas/remove", removerPasta);
router.post('/pastas',criarPasta)
router.put('/pastas/:id', atualizarPasta)

export default router;