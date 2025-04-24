import { db } from '../db.js';

export const listarPastas = async (_, res) => {
    try {
        const [dados] = await db.query('SELECT * FROM pastas');
        return res.json(dados);  
    } catch (error) {
        console.error('Erro ao listar pastas:', error);
        return res.status(500).json({ error: 'Erro ao listar pastas' });
    }
};

export const listarImagensDaPasta = async (req, res) => {
    const { id } = req.params;
    try {
        const [dados] = await db.query(
            `SELECT i.* 
             FROM imagens i
             JOIN imagens_pastas ip ON i.id = ip.imagem_id
             WHERE ip.pasta_id = ?`, 
            [id]
        );

        return res.json(dados);
    } catch (error) {
        console.error('Erro ao buscar imagens da pasta:', error);
        return res.status(500).json({ error: 'Erro ao buscar imagens da pasta' });
    }
};

export const adicionarPasta = async (req, res) => {
    const { imagemId, pastaId } = req.body;
    try {
        await db.query(
            'INSERT INTO imagens_pastas (imagem_id, pasta_id) VALUES (?, ?)',
            [imagemId, pastaId]
        );
        return res.status(200).json({ message: 'Imagem adicionada à pasta com sucesso!' });
    } catch (error) {
        if(error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Imagem já está na pasta' });
        }
        console.error('Erro ao adicionar imagem à pasta:', error);
        return res.status(500).json({ error: 'Erro ao adicionar imagem à pasta' });  
}};

export const removerDaPasta = async (req, res) => {
    const { pastaId, imagemId } = req.params;
    try {
        await db.query(
            'DELETE FROM imagens_pastas WHERE imagem_id = ? AND pasta_id = ?',
            [imagemId, pastaId]
        );
        return res.status(200).json({ message: 'Imagem removida da pasta com sucesso!' });
    } catch (error) {
        console.error('Erro ao remover imagem da pasta:', error);
        return res.status(500).json({ error: 'Erro ao remover imagem da pasta' });
    }
};

export const removerPasta = async (req, res) => {
    const { id } = req.body;
    
    try {

        await db.query('DELETE FROM imagens_pastas WHERE pasta_id = ?', [id]);
        await db.query('DELETE FROM pastas WHERE id = ?', [id]);    
        return res.status(200).json({ message: 'Pasta removida com sucesso' });
    } catch (error) {
        console.error('Erro ao remover pasta:', error);
        return res.status(500).json({ error: 'Erro ao remover pasta' });
    }
};

export const criarPasta = async (req, res) => {
    const { nome } = req.body;
    try {
        await db.query('INSERT INTO pastas (nome) VALUES (?)', [nome]);
        return res.status(201).json({ message: 'Pasta criada com sucesso' });
    } catch (error) {
        console.error('Erro ao criar pasta:', error);
        return res.status(500).json({ error: 'Erro ao criar pasta' });
    }
};

export const atualizarPasta = async (req, res) => {
    const { id } = req.params; 
    const { nome } = req.body;

    try {
        const [result] = await db.query(
            'UPDATE pastas SET nome = ? WHERE id = ?', 
            [nome, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Pasta não encontrada' });
        }

        return res.status(200).json({ 
            message: 'Pasta atualizada com sucesso',
            pasta: { id, nome }
        });
    }
    catch (error) {
        console.error('Erro ao atualizar pasta:', error);
        return res.status(500).json({ error: 'Erro ao atualizar pasta' });
    }
};
