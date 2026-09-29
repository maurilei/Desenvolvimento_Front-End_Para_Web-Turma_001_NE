/**
 * templates.js - Produção de marcação HTML dinâmica via Template Literals
 */
import { carregarVoluntarios } from './storage.js';

export const listaProjetos = [
  {
    id: 'horta',
    titulo: 'Horta Solidária',
    descricao: 'Cultivo sustentável de alimentos frescos para distribuição comunitária direta.',
    status: 'Meta Ativa',
    badgeClass: 'badge-success',
    acaoTexto: 'Apoiar Projeto',
    desabilitado: false
  },
  {
    id: 'reforco',
    titulo: 'Reforço Escolar',
    descricao: 'Apoio pedagógico individualizado a crianças e jovens de comunidades locais.',
    status: 'Poucas Vagas',
    badgeClass: 'badge-warning',
    acaoTexto: 'Ser Educador',
    desabilitado: false
  },
  {
    id: 'digital',
    titulo: 'Inclusão Digital',
    descricao: 'Oficinas de informática básica e capacitação profissional para jovens.',
    status: 'Concluído',
    badgeClass: 'badge-success',
    acaoTexto: 'Inscrições Encerradas',
    desabilitado: true
  }
];

export function renderHome() {
  return `
    <div class="grid-row">
      <div class="col-12">
        <span class="badge badge-success">Causas Ativas</span>
        <span class="badge badge-warning">Urgência de Apoio</span>
      </div>
    </div>

    <section class="grid-row">
      <div class="col-12">
        <figure class="hero-figure">
          <img src="assets/imagens/banner-principal.png" alt="Banner principal: Voluntários cultivando horta comunitária" width="1200" height="400">
          <figcaption>Junte-se à nossa rede de solidariedade e transformação comunitária.</figcaption>
        </figure>
      </div>
    </section>

    <section class="grid-row">
      <div class="col-6">
        <div class="card-project">
          <div>
            <h2>Quem Somos</h2>
            <p style="margin-top: var(--space-xs);">
              Transformamos realidades promovendo cidadania, dignidade e apoio direto a famílias e crianças em situação de vulnerabilidade social.
            </p>
          </div>
          <figure style="margin-top: var(--space-sm);">
            <img src="assets/imagens/icon ong.png" alt="Ícone da causa" style="max-height: 120px; object-fit: contain;">
          </figure>
        </div>
      </div>

      <div class="col-6">
        <div class="card-project">
          <div>
            <h3>Nossa Missão</h3>
            <p style="margin-top: var(--space-xs);">
              Desenvolver autonomia e inclusão social através da cooperação ativa e do voluntariado em nossas frentes de auxílio comunitário.
            </p>
          </div>
          <a href="#/cadastro" class="btn-primary" style="margin-top: var(--space-md);">Quero Fazer Parte</a>
        </div>
      </div>
    </section>

    <section class="grid-row">
      <div class="col-12">
        <div class="contact-box">
          <img src="assets/imagens/icone-contato.svg" alt="Ícone de contato" class="contact-icon">
          <address style="font-style: normal;">
            <h3 style="margin-bottom: var(--space-xs);">Canais de Contato</h3>
            <p><strong>E-mail:</strong> contato@ongsolidaria.org.br</p>
            <p><strong>Telefone:</strong> (11) 99999-8888</p>
            <p><strong>Endereço:</strong> Rua da Esperança, 100 - Centro, São Paulo - SP</p>
          </address>
        </div>
      </div>
    </section>
  `;
}

export function renderProjetos() {
  const cardsHtml = listaProjetos.map(projeto => `
    <div class="col-4" id="${projeto.id}">
      <article class="card-project">
        <div>
          <span class="badge ${projeto.badgeClass}">${projeto.status}</span>
          <h3 style="margin-top: var(--space-xs);">${projeto.titulo}</h3>
          <p style="margin-top: var(--space-xs);">${projeto.descricao}</p>
        </div>
        ${
          projeto.desabilitado
            ? `<button class="btn-primary" disabled>${projeto.acaoTexto}</button>`
            : `<button class="btn-primary btn-apoiar" data-projeto="${projeto.titulo}">${projeto.acaoTexto}</button>`
        }
      </article>
    </div>
  `).join('');

  return `
    <div class="grid-row">
      <div class="col-12">
        <h2>Projetos em Andamento</h2>
        <p style="color: var(--color-neutral-medium); margin-top: var(--space-2xs);">
          Conheça as ações em campo e escolha onde apoiar.
        </p>
      </div>
    </div>
    <div class="grid-row">
      ${cardsHtml}
    </div>
  `;
}

export function renderCadastro() {
  const voluntariosSalvos = carregarVoluntarios();
  const totalInscritos = voluntariosSalvos.length;

  return `
    <div class="grid-row">
      <div class="col-6" style="margin-inline: auto;">
        <div class="alert alert-success">
          <strong>Processo Seletivo 2026:</strong> Já contamos com <strong>${totalInscritos}</strong> voluntários cadastrados na rede!
        </div>

        <div class="card-project" style="background: var(--color-neutral-lightest);">
          <h2>Seja um Voluntário</h2>
          <p style="color: var(--color-neutral-medium); margin-bottom: var(--space-md);">
            Preencha seus dados para receber o contato da nossa equipe de coordenação.
          </p>

          <form id="formVoluntario" novalidate>
            <div class="form-control">
              <label for="nome">Nome Completo</label>
              <input type="text" id="nome" class="form-input" placeholder="Ex: Ana Maria Silva" required>
              <span class="form-feedback" id="feedback-nome"></span>
            </div>

            <div class="form-control">
              <label for="email">E-mail</label>
              <input type="email" id="email" class="form-input" placeholder="exemplo@dominio.com" required>
              <span class="form-feedback" id="feedback-email"></span>
            </div>

            <div class="form-control">
              <label for="telefone">Telefone / WhatsApp</label>
              <input type="tel" id="telefone" class="form-input" placeholder="(11) 98888-7777" required>
              <span class="form-feedback" id="feedback-telefone"></span>
            </div>

            <div class="form-control">
              <label for="area">Área de Atuação</label>
              <select id="area" class="form-select" required>
                <option value="">Selecione uma área de atuação</option>
                <option value="Horta Solidária">Horta Solidária</option>
                <option value="Reforço Escolar">Reforço Escolar</option>
                <option value="Triagem de Mantimentos">Triagem de Mantimentos</option>
                <option value="Comunicação e Apoio">Comunicação e Apoio</option>
              </select>
              <span class="form-feedback" id="feedback-area"></span>
            </div>

            <button type="submit" class="btn-primary" style="margin-top: var(--space-sm); width: 100%;">
              Concluir Inscrição
            </button>
          </form>
        </div>
      </div>
    </div>
  `;
}

export function renderNotFound() {
  return `
    <div class="grid-row">
      <div class="col-12" style="text-align: center; padding: var(--space-2xl) 0;">
        <h2>404 - Página Não Encontrada</h2>
        <p style="margin: var(--space-sm) 0;">O endereço requisitado não corresponde a uma seção da plataforma.</p>
        <a href="#/" class="btn-primary">Voltar para o Início</a>
      </div>
    </div>
  `;
}