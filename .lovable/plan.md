# Plano: site institucional para Ponto de Cultura de Hip Hop

## Resultado esperado
Construir um site completo, responsivo e institucional para um Ponto de Cultura de Hip Hop, com identidade urbana contemporânea, navegação funcional, conteúdo mockado realista e páginas internas consistentes.

## Direção visual
- Base sofisticada em preto profundo, grafite, off-white e cinzas, com uma cor principal vibrante e uma secundária centralizadas em tokens.
- Tipografia profissional com Montserrat para títulos/botões/labels e Inter para leitura.
- Linguagem Hip Hop por composição editorial, diagonais, grids, linhas de áudio, recortes, vinil/equalizador, microtextura urbana e fotografia documental.
- Alternância entre blocos claros e escuros, sem excesso de neon, graffiti, sombras ou glassmorphism.
- Liquid glass usado apenas nos controles pedidos: filtros de notícias, paginação, compartilhamento, cookies e acessibilidade.

## Estrutura de dados e componentes
Criar dados mockados reutilizáveis para:
- notícias;
- projetos;
- equipe;
- galeria por ano/evento;
- documentos de transparência;
- redes sociais;
- dados institucionais.

Criar componentes reutilizáveis para:
- layout geral, navbar, footer e heroes internos;
- cards de notícia, projeto, equipe, atuação, artesanato, institucional e redes sociais;
- CTAs editoriais;
- lightbox de imagens;
- accordions de transparência;
- filtros, busca e paginação;
- botões flutuantes de cookies, acessibilidade, WhatsApp e V-Libras.

## Páginas e rotas
Implementar todas as rotas solicitadas:
- `/`
- `/quem-somos`
- `/quem-somos/equipe`
- `/quem-somos/transparencia`
- `/projetos`
- `/projetos/projeto-1`
- `/projetos/projeto-2`
- `/projetos/projeto-3`
- `/noticias`
- `/noticias/$slug`
- `/galeria`
- `/contato`
- `/politica-de-privacidade`
- `/termos-de-uso`

## Conteúdo e interações
- Home com 10 seções: hero, quem somos, atuação, projetos, cultura Hip Hop, território, notícias, galeria, transparência e CTA final.
- Página de notícias com filtros, busca, mensagem de vazio e paginação.
- Página individual de notícia com hero fotográfico, conteúdo de leitura, galeria, compartilhamento com feedback e relacionadas.
- Galeria em página única com seletor de anos, eventos dinâmicos e lightbox.
- Projetos com páginas individuais, indicadores, metodologia, cards de oficinas/artesanato quando aplicável, galeria e CTA.
- Transparência com seção institucional e accordions com listagens de documentos.
- Contato com informações, formulário com labels, aceite de privacidade e feedback de envio.
- Menu desktop com submenu Quem Somos e menu mobile funcional.

## Acessibilidade, SEO e responsividade
- Contraste adequado, `alt` nas imagens, labels em formulários, `aria-label` em botões de ícone, foco visível e navegação por teclado.
- Metadados únicos em todas as páginas: title, description, Open Graph, og:type e twitter:card.
- Dados estruturados para organização e notícias quando fizer sentido.
- Verificação visual em desktop e mobile para evitar sobreposição, textos grandes demais, rolagem horizontal e controles flutuantes conflitantes.

## Observações
- Usarei conteúdo fictício realista, sem Lorem ipsum.
- As imagens serão temporárias, com URLs remotas estáveis e descrições acessíveis, para facilitar futura troca por fotos reais da organização.
- O site será construído como sistema visual único, evitando aparência de template genérico.
