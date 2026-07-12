# PROMPT DE CONTEXTO — SITE "VIVA OLINDA"
### Estratégia comercial AESHO para o Road-Show Recife 2026

---

## 1. CONTEXTO E OBJETIVO DO PROJETO

Criar um site institucional/comercial chamado **"Viva Olinda"**, apresentado pela **AESHO (Associação de Empreendedores do Sítio Histórico de Olinda)**, com produção técnica da **OCCA (Olinda Creative Community Action)**.

O site é a principal ferramenta comercial da delegação de Olinda no **Road-Show Recife**, evento promovido pelo Recife Convention Bureau em parceria com o Sebrae Pernambuco. O objetivo é apresentar a "prateleira de produtos" turísticos de Olinda para agentes de viagem, operadoras e compradores corporativos, direcionando-os diretamente para os canais de venda de cada parceiro.

**Substitui e atualiza** um site anterior ("Isso é Olinda", 2019, feito no Readymag), que era bonito editorialmente mas carecia de hierarquia comercial, CTAs de venda diretos e estrutura para turismo corporativo (MICE).

### Modelo de negócio por trás do site
- Inscrição no Road-Show (R$1.575) e custos operacionais da 1ª etapa (R$2.400) são rateados entre os **5 hotéis/pousadas da AESHO**.
- Esses 5 estabelecimentos recebem **destaque comercial máximo** no site, por serem financiadores da ação.
- Restaurantes e atrativos turísticos participam por **adesão voluntária**, ampliando o conteúdo e fortalecendo a narrativa do destino, mas em hierarquia visual secundária.
- O site funciona como **hub de hiperlinks comerciais**, direcionando o tráfego do evento direto para WhatsApp/booking/site de cada parceiro.
- Inclui também o início de uma frente de **turismo corporativo/MICE** (eventos para grupos), liderada pela Ticiane, com revisão de Vitor — ainda em levantamento.

---

## 2. PÚBLICO-ALVO

Agentes de viagem, operadoras turísticas e compradores corporativos (B2B) presentes no Road-Show Recife — incluindo público internacional (operadoras estrangeiras que também circulam por Recife). Não é um site de turismo voltado ao consumidor final; é uma ferramenta de venda/apresentação comercial.

---

## 3. RECOMENDAÇÃO TÉCNICA DE ARQUITETURA (decisão delegada à IA geradora)

Formato recomendado: **híbrido**
- **Home em rolagem única (one-page scroll)** com seções-resumo de cada categoria (Hospedagem, Gastronomia, Experiências, Corporativo, Contato), pensada para ser percorrida rapidamente num estande/tablet durante o evento.
- **Páginas internas dedicadas** para:
  - Hospedagem (com destaque total aos 5 hotéis da AESHO)
  - Turismo Corporativo / MICE (estrutura "em breve")
- Sem numeração de página "X of 7" e sem menu lateral fixo no estilo Readymag — visual **100% redesenhado**, sem qualquer rastro estético da ferramenta antiga.
- Mapa interativo clicável (Leaflet/Mapbox ou Google Maps Embed) para a seção de Gastronomia, com os 12 restaurantes geolocalizados.

---

## 4. IDENTIDADE DE MARCA

- **Nome do site/marca:** Viva Olinda
- **Assinatura institucional:** "AESHO apresenta: Viva Olinda"
- **Crédito técnico (rodapé apenas):** "Feito por: OCCA — Olinda Creative Community Action"
- **Paleta de cores:** inspirada nos azulejos e casario colonial de Olinda — azul, amarelo, branco, vermelho. Aplicar com sofisticação (não usar as 4 cores em peso igual; sugerir azul/branco como base neutra elegante e amarelo/vermelho como acentos de CTA e destaque).
- **Idiomas:** Português (padrão), Inglês e Espanhol — com seletor de idioma (toggle) visível no header.
- **Tom de voz:** comercial e direto, mas culturalmente rico — vendendo experiência autêntica, não apenas hospedagem genérica.

---

## 5. ARQUITETURA DE CONTEÚDO E SEÇÕES

### [A] HOME / CAPA
- "AESHO apresenta: Viva Olinda"
- Hero visual de impacto (foto/vídeo do casario colonial de Olinda, pôr do sol na baía, ou Carnaval/frevo)
- Resumo rápido de navegação para as seções abaixo
- CTA principal: botão de contato/WhatsApp institucional da AESHO

### [B] HISPÓRIA (resumida, tom institucional)
Manter a essência do texto original, mas condensado para leitura rápida em contexto de evento:
- Origem do nome (frase de Duarte Coelho)
- Fundação 1537, Foral, primeira capital de Pernambuco
- Selo "Patrimônio da UNESCO" como diferencial visual forte

### [C] GEOGRAFIA (simplificada para B2B)
Manter apenas os pontos mais relevantes para o público comercial/operador:
- Centro de Convenções de Pernambuco — 4km
- Aeroporto Internacional dos Guararapes — 17km
- Marco Zero / Recife Antigo — 8km
- Praia de Boa Viagem — 16km
- Ilha de Fernando de Noronha — 1h de voo
(Remover pontos menos relevantes comercialmente do mapa original, como shoppings)

### [D] FICAR — HOSPEDAGEM (seção de maior destaque comercial)
**Os 5 hotéis/pousadas da AESHO, com hierarquia visual máxima:**
1. Hotel 7 Colinas
2. Hotel Pousada São Francisco
3. Pousada do Amparo
4. Pousada dos Quatro Cantos
5. Hotel Costeiro

Para cada um, estruturar um **card comercial completo**:
- Nome
- Foto (usar placeholder genérico de Olinda até receber fotos reais — sinalizar visualmente como "imagem ilustrativa")
- Descrição curta (reaproveitar texto de 2019 como base, revisar tom)
- **3 botões de CTA diretos:** "Reservar pelo site" / "Falar no WhatsApp" / "Ver no Booking" (usar placeholder de link `#` até receber os links reais)
- Cada botão deve ter rastreamento de clique (ver seção 7)

*Observação: links e fotos reais ainda não recebidos — estruturar com placeholders claramente sinalizados para fácil substituição posterior.*

### [E] COMER — GASTRONOMIA
- **Mapa interativo clicável** com os 12 restaurantes geolocalizados (pino no mapa abre card com nome, foto, telefone, link)
- Lista de restaurantes (reaproveitar dados de 2019, já completos: nome, telefone, descrição, link):
  Oficina do Sabor, Beijupirá Olinda, Trattoria Dom Francesco, Bodega de Veio, Casbah, Olinda Art & Grill, Boucherie Marine, Restaurante Patuá, Prudente 242, Estação 4 Cantos, Tribuna Sabores Ibéricos, Ateliê Café Arte Machê

### [F] FAZER — EXPERIÊNCIAS (reduzido e com destaques)
Apenas 3 experiências, com 2 delas em **destaque visual maior**:
1. **Receptivo de Olinda** [DESTAQUE]
2. Trilha Ecológica Horto Del Rey
3. Tour Histórico

Mais **3 lugares para visitar**, com 1 em destaque:
1. **Casa Estação da Luz** [DESTAQUE]
2. (2 lugares adicionais — a definir/levantar)

### [G] TURISMO CORPORATIVO / MICE (placeholder estrutural)
- Seção/página já criada na arquitetura, com identidade visual completa
- Conteúdo: placeholder "Em breve" com texto institucional (ex: "Estamos estruturando uma curadoria de espaços corporativos e experiências para grupos em Olinda. Fale com a gente para saber mais.")
- Botão de contato direto (WhatsApp/formulário) para quem quiser detalhes antecipados
- Estrutura pronta para receber, no futuro, o levantamento da Ticiane (auditórios, espaços corporativos, capacidade, fotos)

### [H] CONTATO
- Formulário de lead: nome, e-mail, empresa, telefone, tipo de interesse (hospedagem / gastronomia / corporativo / outro)
- Botão direto de WhatsApp institucional da AESHO
- E-mail institucional
- Rodapé: "Feito por: OCCA — Olinda Creative Community Action"

---

## 6. CONTEÚDO DE REFERÊNCIA JÁ EXISTENTE (reaproveitável do site 2019)

> Usar os textos abaixo como base para revisão/adaptação de tom — não copiar literalmente, mas preservar fatos e estrutura informativa.

**História:**
- Origem do nome a partir da frase de Duarte Coelho ("Ó linda situação...")
- Fundação não datada com precisão; elevação a vila em 1537; Foral enviado a D. João III em 12/03/1537
- Primeira capital de Pernambuco, centro econômico/cultural/histórico do Brasil colonial

**Hospedagem (descrições-base por hotel):**
- 7 Colinas: construções em meio a vegetação tropical e jardins floridos, contraste com arquitetura colonial
- São Francisco: a 100m da praia, infraestrutura para negócios e lazer
- Amparo: casarão à beira da falésia, vista para o mar e Recife
- 4 Cantos: casarão do século XVIII restaurado, "autêntico clima de Olinda"
- Costeiro: primeiro 3 estrelas na beira-mar de Olinda, 10 min do Centro do Recife

**Gastronomia (12 restaurantes com dados completos):** nome, telefone, descrição curta — listados na seção 5[E] acima.

---

## 7. FUNCIONALIDADES TÉCNICAS NECESSÁRIAS

- **Rastreamento de cliques por link/botão**: implementar Google Analytics (GA4) com eventos customizados (`gtag('event', 'click', {...})`) em cada botão de CTA (WhatsApp, site do hotel, booking, formulário). O relatório deve permitir identificar quantos cliques cada hotel/parceiro recebeu individualmente.
- Formulário de contato com captura de lead (nome, e-mail, empresa, interesse) — pode usar serviço simples de formulário (Formspree, ou backend leve) com envio de notificação por e-mail.
- Botão de WhatsApp com número institucional da AESHO, e também (quando disponíveis) números individuais por hotel.
- Responsivo para mobile/tablet (uso provável em estande do evento).
- Seletor de idioma PT / EN / ES.

## 8. RECOMENDAÇÃO DE STACK TÉCNICA

Dado o prazo curto (2 semanas), a necessidade de tracking de cliques, formulário, multilíngue e fácil hospedagem/manutenção pela OCCA:

**Recomendação: site estático moderno (HTML/CSS/JS) com:**
- Google Analytics 4 + eventos de clique customizados
- Formulário via serviço leve (Formspree/similar) — sem necessidade de backend próprio
- Hospedagem simples (Vercel, Netlify ou GitHub Pages) — gratuita, rápida, fácil de atualizar
- Estrutura de componentes reaproveitável para facilitar manutenção futura pela OCCA

*(Alternativa: Webflow, se a equipe da OCCA preferir um editor visual no-code para manutenção contínua sem depender de código)*

---

## 9. PENDÊNCIAS / DADOS A RECEBER ANTES DA VERSÃO FINAL

- [ ] Fotos profissionais dos 5 hotéis da AESHO
- [ ] Links de reserva/WhatsApp/booking reais por hotel
- [ ] Confirmação final de 2 lugares adicionais em "lugares para visitar"
- [ ] Levantamento da Ticiane sobre espaços corporativos/MICE (revisão de Vitor)
- [ ] Número de WhatsApp institucional da AESHO e e-mail de contato definitivo

## 10. PRAZO

Apresentação da primeira versão ao grupo de hotelaria da AESHO em até **2 semanas**, antes da data do Road-Show Recife.
