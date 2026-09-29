/**
 * router.js - Gerenciador de rotas e navegação da SPA
 */
import { renderHome, renderProjetos, renderCadastro, renderNotFound } from './templates.js';

const routes = {
  '#/': renderHome,
  '#/projetos': renderProjetos,
  '#/cadastro': renderCadastro
};

export function navigate(onCadastroLoaded) {
  const appContainer = document.getElementById('app');
  const hash = window.location.hash || '#/';
  const renderView = routes[hash] || renderNotFound;

  if (appContainer) {
    appContainer.innerHTML = '';
    appContainer.innerHTML = renderView();
  }

  // Fecha o menu hambúrguer no mobile após clique
  const mainNav = document.getElementById('mainNav');
  if (mainNav && mainNav.classList.contains('is-open')) {
    mainNav.classList.remove('is-open');
  }

  // Executa callback específico caso a rota seja de cadastro
  if (hash === '#/cadastro' && typeof onCadastroLoaded === 'function') {
    onCadastroLoaded();
  }

  window.scrollTo(0, 0);
}