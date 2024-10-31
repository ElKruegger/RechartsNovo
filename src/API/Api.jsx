import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7205/api/AtendimentoPorServico',     

});

export const getReceptivos = async () => {
  const response = await api.get('/BuscaAtivoReceptivo');
  return response.data;
};

export const getMensal = async () => {
  const response = await api.get('/BuscaMensal');
  return response.data;
};

export const getPorcentagem = async () => {
  const response = await api.get('/BuscaPorcentagem');
  return response.data;
};

export const getTitular = async () => {
  const response = await api.get('/BuscaTitular');
  return response.data;
};

export default api;