/**
 * storage.js - Gerenciamento de persistência no localStorage
 */
const STORAGE_KEY = 'voluntarios_ong';

export function salvarVoluntario(novoRegistro) {
  try {
    const lista = carregarVoluntarios();
    lista.push(novoRegistro);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
    return true;
  } catch (error) {
    console.error('Erro ao salvar no localStorage:', error);
    return false;
  }
}

export function carregarVoluntarios() {
  try {
    const dados = localStorage.getItem(STORAGE_KEY);
    return dados ? JSON.parse(dados) : [];
  } catch (error) {
    console.error('Erro ao ler do localStorage:', error);
    return [];
  }
}