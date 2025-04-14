import { db } from '../db.js';


export const listarImagem = async (_, res) => {
  const [rows] = await db.query('SELECT * FROM imagens');
  const imagens = rows.map(personagem => ({
    ...personagem,
    imagemUrl: personagem.imagem_url // Mapeia imagem_url para imagemUrl
  }));
  res.json(imagens);
};

export const AdicionarImagem = async (req, res) => {
  const { titulo, descricao, imagem_url } = req.body;

  const data_upload = new Date(); // Define a data atual automaticamente

  const [result] = await db.query(
    'INSERT INTO imagens (titulo, descricao, data_upload, imagem_url) VALUES (?, ?, ?, ?)', 
    [titulo, descricao, data_upload, imagem_url]
  );
  res.status(201).json({
    id: result.insertId, 
    titulo,
    descricao, 
    data_upload, 
    imagem_url
  });
};

export const deletarImagem = async (req, res) => {
    const { id } = req.params;
    await db.query('DELETE FROM imagens WHERE id = ?', [id]);
    res.status(204).send();
}

