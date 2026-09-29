/**
 * validation.js - Regras de consistência e manipulação visual de formulários
 */
export const regexPatterns = {
  nome: /^[A-Za-zÀ-ÿ]{2,}(\s+[A-Za-zÀ-ÿ]{2,})+$/,   // Nome e sobrenome válidos
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,           // E-mail válido
  telefone: /^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/        // Telefone brasileiro com DDD
};

export function validarCampo(input, regex, mensagemErro, feedbackId) {
  const feedbackElement = document.getElementById(feedbackId);
  const valor = input.value.trim();
  const isValido = regex ? regex.test(valor) : valor !== '';

  if (!isValido) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    if (feedbackElement) {
      feedbackElement.textContent = mensagemErro;
      feedbackElement.style.display = 'block';
    }
    return false;
  } else {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    if (feedbackElement) {
      feedbackElement.textContent = '';
      feedbackElement.style.display = 'none';
    }
    return true;
  }
}