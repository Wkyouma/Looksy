import React, { useState } from 'react';
import Input from '../Input/index';

const FormularioImagem = () => {
  const [imagens, setImagens] = useState({
    titulo: '',
    descricao: '',
    imagem_url: '' ,
    autor:''
  });
  const [sucesso, setSucesso] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setImagens((prevImagem) => ({
      ...prevImagem,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/Add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(imagens),
    });

    if (response.ok) {
      setSucesso(true);
      setImagens({
        titulo: '',
        descricao: '',
        imagem_url: '',
        autor:'' 
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 
    rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Adicionar Imagem</h2>

      {sucesso && <div className="text-blue-500 mb-4">Imagem adicionada com sucesso!</div>}

      <form onSubmit={handleSubmit}>
        <Input
          label="Título"
          type="text"
          name="titulo"
          value={imagens.titulo}
          onChange={handleChange}
        />
        <Input
          label="Descrição"
          type="text"
          name="descricao"
          value={imagens.descricao}
          onChange={handleChange}
        />
        <Input
          label="URL da Imagem"
          type="text"
          name="imagem_url"
          value={imagens.imagem_url}
          onChange={handleChange}
        />
         <Input
          label="autor"
          type="text"
          name="autor"
          value={imagens.autor}
          onChange={handleChange}
        />
   

        <button
          type="submit"
          className="w-full p-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white
           rounded-md hover:bg-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition 
           duration-300"
        >
          Adicionar Imagem
        </button>
      </form>
    </div>
  );
};

export default FormularioImagem;

