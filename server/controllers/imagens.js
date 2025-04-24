import { db } from '../db.js';


export const listarImagem = async (_, res) => {
  try {
    const [dados] = await db.query('SELECT * FROM imagens');
    res.json(dados);}
  catch (error) {
      console.error('Erro ao listar imagens:', error);

    }
};

export const AdicionarImagem = async (req, res) => {
  try{
  const { titulo, descricao, imagem_url } = req.body;

  const data_upload = new Date(); 

  const [result] = await db.query(
    'INSERT INTO imagens (titulo, descricao, data_upload, imagem_url) VALUES (?, ?, ?, ?, ?)', 
    [titulo, descricao, data_upload, imagem_url]
  );
  res.status(201).json({
    id: result.insertId, 
    titulo,
    descricao, 
    data_upload, 
    imagem_url
  });}
  catch (error) {
    console.error('Erro ao adicionar imagem:', error);
    res.status(500).json({ error: 'Erro ao adicionar imagem' });
  }
};

export const deletarImagem = async (req, res) => {
  try{
    const { id } = req.params;
    await db.query('DELETE FROM imagens WHERE id = ?', [id]);
    res.status(204).send();}
    catch (error) {
      console.error('Erro ao deletar imagem:', error);
      res.status(500).json({ error: 'Erro ao deletar imagem' });
    }
}

export const updateImagem = async (req, res) => {
  try{
    const { id } = req.params;
    const { titulo, descricao} = req.body;

    await db.query(
        'UPDATE imagens SET titulo = ?, descricao = ? WHERE id = ?',
        [titulo, descricao, id]
    );

    res.status(200).json({ message: 'Imagem atualizada com sucesso!' });}
    catch (error) {
      console.error('Erro ao atualizar imagem:', error);
      res.status(500).json({ error: 'Erro ao atualizar imagem' });
    }
}