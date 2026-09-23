# Refinamento final dos componentes institucionais

## Objetivo
Preservar rotas, conteúdo-base, paleta, Montserrat e funcionalidades atuais, refinando apenas os componentes e páginas solicitados para uma linguagem editorial, institucional e ligada ao Hip Hop.

## Implementação
- Criar um `IconCircleButton` reutilizável com variantes glass clara/escura, sólida e outline, três tamanhos, foco visível, rótulos acessíveis e tooltip.
- Substituir todas as letras “WA” e ícones genéricos de WhatsApp por um símbolo oficial reconhecível; manter o atalho flutuante circular e ajustar sua posição.
- Remover o botão “VL” customizado e carregar o widget oficial VLibras globalmente, sem envoltório visual próprio.
- Converter ações secundárias sobre fotografias em composições com círculo de ícone e texto separado, mantendo CTAs principais sólidos.
- Refinar Notícias com cards de vidro leve e compactos, ação circular, busca e filtros discretos e paginação integralmente circular baseada na quantidade real de páginas.
- Limpar a notícia individual, mover o compartilhamento para antes da galeria, usar quatro ícones circulares reais com confirmação de cópia e manter galeria editorial seguida dos relacionados.
- Reduzir a hierarquia dos títulos de eventos da Galeria sem alterar seleção anual ou lightbox.
- Reestruturar Transparência para introdução aberta centralizada, acervo de até 960px com accordions e linhas compactas, ações circulares e CTA final.
- Reestruturar Equipe para introdução, grade autoral inspirada em capas e pôsteres e CTA final, removendo somente a seção intermediária indicada.
- Redesenhar Contato em duas colunas: canais compactos e redes circulares à esquerda, formulário institucional limpo à direita, sem seções extras.

## Detalhes técnicos
- Manter Tailwind e tokens semânticos existentes; novos acabamentos de vidro serão utilitários globais reutilizáveis.
- Usar ícones Lucide onde apropriado e um símbolo vetorial oficial do WhatsApp em componente próprio, sem texto substituto.
- Carregar o script oficial VLibras apenas no navegador e inicializar uma vez no layout global.
- Preservar os dados demonstrativos existentes e todos os links, filtros, busca, lightbox, accordions e formulário.

## Validação
- Conferir `/noticias`, uma notícia individual, `/galeria`, `/quem-somos/equipe`, `/quem-somos/transparencia` e `/contato` em desktop e mobile.
- Testar busca, filtros, paginação, compartilhamento/cópia, lightbox, accordions, formulário e navegação por teclado.
- Verificar o widget VLibras, os ícones do WhatsApp, sobreposições dos controles flutuantes, largura móvel e compilação sem erros.
