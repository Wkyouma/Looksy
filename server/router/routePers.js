import { Router } from 'express';
import { AdicionarImagem, deletarImagem, listarImagem } from '../controllers/imagens.js'
import { listarPastas, listarImagensDaPasta , adicionarPasta, removerDaPasta, removerPasta, criarPasta, atualizarPasta} from '../controllers/pastas.js';

const router = Router();

router.get('/', listarImagem);
router.post('/Add', AdicionarImagem );
router.delete('/deletar/:id', deletarImagem)
router.get('/pastas', listarPastas);
router.get('/pastas/:id/imagens', listarImagensDaPasta);
router.post('/pastas/adicionar-imagem', adicionarPasta);
router.delete('/pastas/:pastaId/imagens/:imagemId', removerDaPasta); // Mudando para DELETE com params
router.delete("/pastas/remove", removerPasta);
router.post('/pastas',criarPasta)
router.put('/pastas/:id', atualizarPasta)

export default router;