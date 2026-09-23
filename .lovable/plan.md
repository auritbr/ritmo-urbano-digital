# Ajustes editoriais de Notícias, Projetos, Transparência e heroes

## Objetivo
Equilibrar as páginas internas com heroes menores, controles circulares, projetos em composição editorial e um acervo documental mais claro, mantendo Montserrat, rotas, conteúdo e funcionalidades existentes.

## Implementação

### 1. Heroes internos
- Reduzir o componente compartilhado para cerca de 280–320px no mobile, 320–360px no tablet e 360–420px no desktop.
- Reduzir H1, espaçamentos e blocos visuais sem alterar o hero principal da Home.
- Aplicar os mesmos limites aos heroes próprios das notícias e dos projetos, preservando imagem, retorno, categoria, data e resumo.

### 2. Notícias
- Trocar cada filtro-pílula por um controle sem fundo retangular: círculo de 40–44px mais label ao lado.
- Manter linha horizontal no desktop e rolagem horizontal no mobile; ativo sólido e inativos em vidro leve.
- Preservar paginação circular existente e padronizar números e setas em 40–42px.
- Compactar especificamente o hero da notícia e limitar seu título a 32–38px no mobile e até 64px no desktop.

### 3. Página Projetos
- Remover metodologia, cards tradicionais e CTA extra dessa página.
- Criar introdução aberta e centralizada “Nossos projetos / Cultura em movimento”.
- Apresentar os três projetos em blocos alternados texto–imagem, imagem–texto, texto–imagem.
- Usar uma composição própria por projeto: vinil, waveform/equalizador e arco/seta/grid, sem neon ou estética gamer.
- Adicionar paginação circular reutilizando a linguagem de Notícias, preparada visualmente para mais páginas.

### 4. Subpáginas de projeto
- Manter as rotas existentes `/projetos/projeto-1`, `/projetos/projeto-2` e `/projetos/projeto-3`.
- Reduzir o hero e retirar métricas dele.
- Reorganizar cada página somente como: apresentação centralizada, cards temáticos, galeria editorial com lightbox e CTA final.
- Remover metodologia, indicadores, depoimento e demais blocos não solicitados.
- Criar 4–6 cards compactos conforme os dados disponíveis, com número, título, descrição e grafismo variado; três colunas no desktop, duas no tablet e uma no mobile.
- Diferenciar as páginas por símbolo, composição gráfica e cor secundária, mantendo o conteúdo editável atual.

### 5. Transparência
- Preservar introdução, acervo e CTA final.
- Manter cabeçalhos fechados compactos e o acervo centralizado em até 960–1040px.
- Ao abrir, exibir cabeçalho da categoria e documentos em uma única lista com divisores.
- Cada linha terá ícone, nome, badge “Arquivo PDF • tamanho” e botão textual “Baixar Documento”; no mobile, a ação quebra para baixo sem overflow.
- Usar transição suave do accordion, respeitando redução de movimento.

## Validação
- Conferir desktop, tablet e mobile para todos os heroes internos.
- Testar filtros, busca e paginação de Notícias.
- Abrir os três projetos, navegar pela galeria/lightbox e conferir CTAs.
- Abrir e fechar categorias da Transparência e verificar a lista documental em desktop/mobile.
- Confirmar ausência de overflow, títulos gigantes, cards tradicionais na página Projetos e erros no preview.

## Observação técnica
A rota dinâmica de projetos já atende aos três endereços solicitados porque os dados existentes usam exatamente os slugs `projeto-1`, `projeto-2` e `projeto-3`; ela será preservada. Os tamanhos dos arquivos documentais serão apresentados como metadados demonstrativos consistentes com o acervo atual, pois os dados hoje contêm nomes, mas não arquivos reais.
