/**
 * main.js - Inicializador e Orquestrador Central (ES6 Module)
 */
import { navigate } from './modules/router.js';
import { salvarVoluntario } from './modules/storage.js';
import { regexPatterns, validarCampo } from './modules/validation.js';

const appContainer = document.getElementById('app');

/* ==========================================================================
   1. DELEGAÇÃO DE EVENTOS NO CONTÊINER PRINCIPAL
   ========================================================================== */
appContainer.addEventListener('click', function(event) {
  const btnApoiar = event.target.closest('.btn-apoiar');
  if (btnApoiar && !btnApoiar.disabled) {
    const nomeProjeto = btnApoiar.getAttribute('data-projeto');
    sessionStorage.setItem('projeto_selecionado', nomeProjeto);
    window.location.hash = '#/cadastro';
  }
});

/* ==========================================================================
   2. INICIALIZAÇÃO E CONTROLE DO FORMULÁRIO DE CADASTRO
   ========================================================================== */
function inicializarCadastro() {
  const form = document.getElementById('formVoluntario');
  if (!form) return;

  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const telInput = document.getElementById('telefone');
  const areaSelect = document.getElementById('area');

  // Recupera seleção prévia feita nos cards de projetos
  const projetoPreSelecionado = sessionStorage.getItem('projeto_selecionado');
  if (projetoPreSelecionado && areaSelect) {
    for (let option of areaSelect.options) {
      if (option.text.includes(projetoPreSelecionado)) {
        option.selected = true;
        break;
      }
    }
    sessionStorage.removeItem('projeto_selecionado');
  }

  // Validação em tempo real
  nomeInput.addEventListener('blur', () => validarCampo(nomeInput, regexPatterns.nome, 'Informe seu nome e sobrenome completo.', 'feedback-nome'));
  emailInput.addEventListener('blur', () => validarCampo(emailInput, regexPatterns.email, 'Informe um e-mail válido (ex: seu@email.com).', 'feedback-email'));
  telInput.addEventListener('blur', () => validarCampo(telInput, regexPatterns.telefone, 'Telefone inválido. Formato esperado: (11) 98888-7777.', 'feedback-telefone'));
  areaSelect.addEventListener('change', () => validarCampo(areaSelect, null, 'Selecione uma área de atuação.', 'feedback-area'));

  // Submissão do formulário
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const vNome = validarCampo(nomeInput, regexPatterns.nome, 'Informe seu nome e sobrenome completo.', 'feedback-nome');
    const vEmail = validarCampo(emailInput, regexPatterns.email, 'Informe um e-mail válido.', 'feedback-email');
    const vTel = validarCampo(telInput, regexPatterns.telefone, 'Telefone inválido.', 'feedback-telefone');
    const vArea = validarCampo(areaSelect, null, 'Selecione uma área de atuação.', 'feedback-area');

    if (!vNome || !vEmail || !vTel || !vArea) {
      Swal.fire({
        title: 'Dados Incompletos',
        text: 'Por favor, revise os campos destacados em vermelho antes de enviar.',
        icon: 'error',
        confirmButtonText: 'Corrigir',
        confirmButtonColor: '#c62828'
      });
      return;
    }

    const novoVoluntario = {
      id: Date.now(),
      nome: nomeInput.value.trim(),
      email: emailInput.value.trim(),
      telefone: telInput.value.trim(),
      area: areaSelect.value,
      cadastradoEm: new Date().toISOString()
    };

    salvarVoluntario(novoVoluntario);

    Swal.fire({
      title: 'Inscrição Concluída!',
      text: 'Seus dados foram registrados com sucesso no banco local da nossa rede.',
      icon: 'success',
      confirmButtonText: 'Voltar ao Início',
      confirmButtonColor: '#1b5e20'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.hash = '#/';
      }
    });
  });
}

/* ==========================================================================
   3. INICIALIZAÇÃO GLOBAL E MENU
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const dropdownProjetos = document.getElementById('dropdownProjetos');

  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      mainNav.classList.toggle('is-open');
    });
  }

  if (dropdownProjetos) {
    dropdownProjetos.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        dropdownProjetos.classList.toggle('is-expanded');
      }
    });
  }

  navigate(inicializarCadastro);

  // Alternador de Alto Contraste Acessível
  const btnContrast = document.getElementById('btnContrastToggle');
  if (btnContrast) {
    btnContrast.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
    });
  }
});

window.addEventListener('hashchange', () => navigate(inicializarCadastro));