import { db } from '../db.js';

export const listarPastas = async (_, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM pastas');
        return res.json(rows);  
    } catch (error) {
        console.error('Erro ao listar pastas:', error);
        return res.status(500).json({ error: 'Erro ao listar pastas' });
    }
};

export const listarImagensDaPasta = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query(
            `SELECT i.* 
             FROM imagens i
             JOIN pastas p ON i.caminho = p.id
             WHERE p.id = ?`, 
            [id]
        );

        const imagens = rows.map(imagem => ({
            ...imagem,
            imagemUrl: imagem.imagem_url
        }));

        return res.json(imagens); 
    } catch (error) {
        console.error('Erro ao buscar imagens da pasta:', error);
        return res.status(500).json({ error: 'Erro ao buscar imagens da pasta' });
    }
};

export const adicionarPasta = async (req, res) => {
    const { imagemId, pastaId } = req.body;
    try {
        await db.query(
            'UPDATE imagens SET caminho = ? WHERE id = ?',
            [pastaId, imagemId]
        );
        return res.status(200).json({ message: 'Imagem adicionada à pasta com sucesso!' });
    } catch (error) {
        console.error('Erro ao adicionar imagem à pasta:', error);
        return res.status(500).json({ error: 'Erro ao adicionar imagem à pasta' });
    }
};

export const removerDaPasta = async (req, res) => {
    const { imagemId, pastaId } = req.body;
    try {
        await db.query(
            'UPDATE imagens SET caminho = " " WHERE id = ? AND caminho = ?',
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
        await db.query('UPDATE imagens SET caminho = 0 WHERE caminho = ?', [id]);
        await db.query('DELETE FROM pastas WHERE id = ?', [id]);    
        return res.status(200).json({ message: 'Pasta removida com sucesso' });
    } catch (error) {
        console.error('Erro ao remover pasta:', error);
        return res.status(500).json({ error: 'Erro ao remover pasta' });
    }
};
