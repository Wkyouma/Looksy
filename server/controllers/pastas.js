import { db } from '../db.js';

export const listarPastas = async (_, res) => {
    const [rows] = await db.query('SELECT * FROM pastas');
    res.json(rows); 
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
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar imagens da pasta:', error);
        res.status(500).json({ error: 'Erro ao buscar imagens da pasta' });
    }
};

export const adicionarPasta = async (req, res) => {
    const { imagemId, pastaId } = req.body; 
    try {
        await db.query(
            'UPDATE imagens SET caminho = ? WHERE id = ?', 
            [pastaId, imagemId]
        );
        res.status(200).json({ message: 'Imagem adicionada à pasta com sucesso!' });
    } catch (error) {
        console.error('Erro ao adicionar imagem à pasta:', error);
        res.status(500).json({ error: 'Erro ao adicionar imagem à pasta' });
    }
};