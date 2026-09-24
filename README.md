# Ritmo Urbano Digital

Crie um site institucional completo, moderno, responsivo e visualmente marcante para um PONTO DE CULTURA DE HIP HOP.

IMPORTANTE:
- Não copie nenhum site existente.
- O projeto deve ter identidade própria.
- A referência estética é a cultura Hip Hop urbana contemporânea, combinada com a organização, legibilidade e credibilidade de um site institucional profissional.
- O site NÃO deve parecer infantil, amador, genérico ou um template de ONG.
- Também não quero um site excessivamente carregado de grafite, neon, efeitos ou animações.
- O Hip Hop deve aparecer na linguagem visual por meio de composição, formas, fotografias, texturas, linhas, recortes, símbolos e detalhes gráficos.
- Priorize usabilidade, hierarquia visual, identidade, acessibilidade e navegação intuitiva.
- Quero que, ao entrar no site, a pessoa perceba imediatamente que se trata de uma organização séria ligada ao Hip Hop, à cultura, à formação e à atuação comunitária.
- A página inicial deve funcionar como um guia para todo o restante do site, apresentando a organização e despertando interesse para continuar navegando.

==================================================
1. TECNOLOGIA E ESTRUTURA
==================================================

Desenvolva como uma aplicação web moderna, organizada em componentes reutilizáveis.

Utilize:
- React
- TypeScript
- Tailwind CSS
- componentes bem estruturados
- Lucide Icons ou biblioteca equivalente para ícones
- layout totalmente responsivo
- boa semântica HTML
- acessibilidade
- navegação funcional entre todas as páginas

Estruture dados mockados de forma que depois seja fácil substituir por conteúdo real.

Evite colocar informações importantes diretamente duplicadas em vários componentes. Crie estruturas reutilizáveis para:
- notícias;
- projetos;
- equipe;
- galerias;
- documentos de transparência;
- redes sociais;
- dados institucionais.

==================================================
2. ARQUITETURA DO SITE
==================================================

Criar as seguintes páginas e rotas:

1. Página Inicial
/
  
2. Quem Somos
/quem-somos

Dentro do menu "Quem Somos", criar submenu:
- Quem Somos
- Equipe
- Transparência

Rotas:
- /quem-somos
- /quem-somos/equipe
- /quem-somos/transparencia

3. Projetos
/projetos

Criar também 3 páginas individuais de projetos:
- /projetos/projeto-1
- /projetos/projeto-2
- /projetos/projeto-3

4. Notícias
/noticias

Página individual:
- /noticias/:slug

5. Galeria
/galeria

Não criar subpágina de álbum.
Toda a navegação da galeria acontecerá dentro da própria página.

6. Contato
/contato

Também incluir páginas institucionais no footer:
- /politica-de-privacidade
- /termos-de-uso

==================================================
3. IDENTIDADE VISUAL GERAL
==================================================

Quero uma identidade que misture:

HIP HOP
+
CULTURA
+
TERRITÓRIO
+
PROFISSIONALISMO INSTITUCIONAL
+
DESIGN CONTEMPORÂNEO

A estética pode utilizar referências abstratas aos quatro elementos do Hip Hop:
- MC;
- DJ;
- breaking;
- graffiti.

Mas não transforme isso em caricatura.

Utilize elementos como:
- linhas diagonais;
- recortes geométricos;
- setas;
- grids;
- círculos;
- formas inspiradas em discos de vinil;
- ondas de áudio;
- barras de equalizador;
- linhas que lembrem pistas de áudio;
- formas que lembrem caixas de som;
- pequenos detalhes inspirados em spray;
- molduras assimétricas;
- fitas, stickers e labels reinterpretados de forma sofisticada;
- sobreposição de fotografias;
- blocos editoriais;
- números grandes;
- tipografia forte em títulos;
- microtexturas urbanas muito discretas.

NÃO usar:
- excesso de graffiti como fonte;
- fontes manuscritas difíceis de ler;
- Comic Sans ou qualquer estética infantil;
- excesso de cores neon;
- excesso de sombras;
- cards genéricos iguais em todas as seções;
- gradientes exagerados;
- aparência gamer;
- aparência de boate;
- excesso de glassmorphism.

==================================================
4. TIPOGRAFIA
==================================================

A tipografia precisa transmitir profissionalismo.

Utilize preferencialmente:

Fonte principal:
Montserrat

Pode combinar Montserrat com:
Inter
ou
Manrope

Sugestão:
- títulos: Montserrat, pesos 600, 700 ou 800;
- textos: Inter ou Montserrat, peso 400/500;
- botões: Montserrat 600;
- labels: Montserrat 600 com tracking leve.

NÃO utilizar fonte graffiti para textos principais.

Caso queira alguma referência à linguagem das ruas, utilize somente em pequenos elementos decorativos e nunca em:
- títulos principais;
- textos;
- menu;
- botões;
- informações institucionais.

==================================================
5. PALETA DE CORES
==================================================

Criar uma paleta urbana sofisticada.

Base:
- preto profundo;
- grafite;
- off-white;
- cinza claro;
- branco.

Adicionar 1 cor principal vibrante e 1 cor secundária inspiradas na identidade visual do Ponto de Cultura.

Como ainda não estou fornecendo a logomarca definitiva, deixe as cores principais centralizadas em variáveis/tokens para facilitar alteração posterior.

Exemplo conceitual:
--brand-primary
--brand-secondary
--background
--surface
--text-primary
--text-secondary
--border

Pode utilizar cores vibrantes pontualmente, mas nunca deixar o site visualmente poluído.

==================================================
6. NAVBAR / MENU PRINCIPAL
==================================================

Criar navbar sofisticada e responsiva.

No desktop:
LOGO

Início
Quem Somos ▾
Projetos
Notícias
Galeria
Contato

Botão de destaque opcional:
"Conheça nossos projetos"
ou
"Apoie a cultura"

O submenu "Quem Somos" deve possuir:
- Quem Somos
- Equipe
- Transparência

Quando estiver sobre o hero da página inicial:
- navbar inicialmente transparente;
- texto adequado ao fundo;
- ao rolar a página, transformar em navbar sólida ou translúcida;
- aplicar blur muito leve;
- borda inferior discreta.

Nas páginas internas:
- manter padrão consistente.

Navbar:
- sticky;
- limpa;
- profissional;
- sem altura exagerada;
- logo com tamanho equilibrado.

Mobile:
- menu hambúrguer;
- submenu funcional;
- boa hierarquia;
- sem ocupar a tela inteira desnecessariamente.

==================================================
7. COMPONENTES FLUTUANTES OBRIGATÓRIOS
==================================================

CANTO INFERIOR ESQUERDO:

Criar dois botões flutuantes separados verticalmente:

1. Cookies
2. Acessibilidade

Esses dois botões devem utilizar LIQUID GLASS LEVE.

Características:
- formato circular;
- fundo translúcido;
- backdrop-blur moderado;
- borda fina;
- sombra muito discreta;
- ícone central;
- tooltip no hover.

Não exagerar no glassmorphism.

BOTÃO DE COOKIES:
Ao clicar:
- abrir pequena caixa;
- explicar resumidamente o uso de cookies;
- botões "Aceitar" e "Preferências";
- estilo liquid glass leve;
- visual profissional.

BOTÃO DE ACESSIBILIDADE:
Ao clicar:
mostrar pequeno painel com opções como:
- aumentar fonte;
- diminuir fonte;
- alto contraste;
- tons de cinza;
- destacar links;
- fonte legível;
- resetar configurações.

CANTO INFERIOR DIREITO:

Botão flutuante do WhatsApp:
- círculo;
- verde do WhatsApp;
- ícone;
- discreto;
- pequena animação somente no hover;
- abrir conversa em nova aba.

Também adicionar o botão/widget de V-Libras seguindo padrão de acessibilidade, sem conflitar visualmente com WhatsApp.

Organizar a posição dos elementos para que:
- não se sobreponham;
- não escondam textos;
- funcionem bem no mobile.

==================================================
8. FOOTER
==================================================

Criar footer completo, moderno e organizado.

Estrutura sugerida:

COLUNA 1
Logo
Descrição curta da instituição.

COLUNA 2
Institucional
- Quem Somos
- Equipe
- Transparência

COLUNA 3
Conteúdo
- Projetos
- Notícias
- Galeria

COLUNA 4
Contato
- endereço;
- telefone;
- e-mail.

COLUNA 5
Redes sociais
- Instagram
- Facebook
- YouTube
- LinkedIn, caso exista
- WhatsApp

Adicionar:
- Política de Privacidade
- Termos de Uso
- copyright

Não transformar o footer em uma área gigantesca.

Pode utilizar textura ou composição gráfica urbana muito discreta no background.

==================================================
9. PÁGINA INICIAL
==================================================

A Home deve ser uma apresentação completa da organização e funcionar como GUIA para todas as demais páginas.

Não quero simplesmente vários cards empilhados.

Cada seção precisa possuir identidade própria.

------------------------------------------
SEÇÃO 1 — HERO PRINCIPAL
------------------------------------------

Hero grande, impactante e editorial.

Utilizar imagem fotográfica realista relacionada ao Hip Hop:
- roda de breaking;
- apresentações;
- juventude;
- DJs;
- MCs;
- manifestações culturais;
- oficinas;
- ocupação cultural do território;
- comunidade.

Imagem preferencialmente horizontal e cinematográfica.

Aplicar overlay escuro para garantir legibilidade.

Exemplo de composição:

pequeno label:
PONTO DE CULTURA • HIP HOP • TERRITÓRIO

Título grande:
"Cultura que nasce da rua e transforma territórios."

Texto:
Uma breve apresentação institucional explicando o trabalho do Ponto de Cultura.

Botões:
[Conheça nossa história]
[Conheça os projetos]

Pode haver um pequeno elemento gráfico lateral:
- linhas;
- equalizador;
- coordenadas fictícias do território;
- palavra CULTURA;
- pequenos símbolos.

Não exagerar.

------------------------------------------
SEÇÃO 2 — QUEM SOMOS
------------------------------------------

Layout assimétrico.

De um lado:
fotografia vertical ou composição com duas fotografias.

Do outro:
label
QUEM SOMOS

Título:
"Arte, formação e transformação social através do Hip Hop"

2 ou 3 parágrafos curtos.

Adicionar botão:
Conheça nossa trajetória →

Incluir pequenos números institucionais, por exemplo:
+10 anos
+X participantes
+X ações realizadas

Os números devem ser facilmente editáveis.

------------------------------------------
SEÇÃO 3 — NOSSA ATUAÇÃO
------------------------------------------

Apresentar grandes áreas de atuação.

Criar cards DIFERENTES dos cards convencionais.

Exemplos:
- Formação cultural
- Hip Hop
- Educação
- Cultura urbana
- Ações sociais
- Território e comunidade

Cada card pode utilizar:
- número;
- ícone;
- forma geométrica;
- microfotografia;
- detalhes gráficos.

No desktop, montar composição editorial em grid, não simplesmente 6 caixas iguais.

------------------------------------------
SEÇÃO 4 — PROJETOS
------------------------------------------

Título:
"Projetos que colocam a cultura em movimento"

Mostrar os três projetos.

Cada projeto deve possuir:
- imagem;
- categoria;
- título;
- pequeno resumo;
- botão/ver projeto;
- elemento visual próprio.

Evitar três cards idênticos.

Pode criar:
Projeto 1 maior
Projetos 2 e 3 menores lateralmente.

------------------------------------------
SEÇÃO 5 — CULTURA HIP HOP
------------------------------------------

Criar seção visual forte.

Apresentar:
MC
DJ
Breaking
Graffiti

Pode utilizar quatro blocos ou composição horizontal.

Cada elemento:
ícone/símbolo gráfico;
nome;
descrição curta.

Criar como linguagem visual sofisticada, não como material escolar.

------------------------------------------
SEÇÃO 6 — TERRITÓRIO EM MOVIMENTO
------------------------------------------

Grande faixa visual usando foto de atividade comunitária.

Título:
"Da rua para a comunidade. Da comunidade para o mundo."

Texto curto.

Pode possuir estatísticas ou palavras:
Cultura
Identidade
Formação
Pertencimento
Transformação

------------------------------------------
SEÇÃO 7 — NOTÍCIAS
------------------------------------------

Título:
"Últimas notícias"

Mostrar 3 notícias recentes.

Card:
imagem grande;
tag;
data;
título;
descrição curta;
"Ler notícia →"

As imagens devem ser protagonistas.

Adicionar:
Ver todas as notícias →

------------------------------------------
SEÇÃO 8 — GALERIA
------------------------------------------

Prévia visual da galeria.

Composição estilo mosaico editorial:
- uma foto grande;
- algumas pequenas.

Título:
"Histórias registradas em imagens"

Botão:
Explorar galeria →

------------------------------------------
SEÇÃO 9 — TRANSPARÊNCIA
------------------------------------------

Criar seção institucional mais sóbria.

Label:
COMPROMISSO INSTITUCIONAL

Título:
"Transparência também faz parte da nossa cultura."

Texto explicativo.

Links rápidos:
- documentos institucionais;
- certificados;
- reconhecimentos;
- relatórios;
- portfólios.

Botão:
Acessar transparência →

------------------------------------------
SEÇÃO 10 — CTA FINAL
------------------------------------------

Não criar CTA genérico.

Criar uma seção visual inspirada no Hip Hop.

Pode utilizar:
- formas diagonais;
- grande fotografia em preto e branco;
- recorte com cor da marca;
- textura sutil;
- palavra CULTURA em outline ao fundo.

Título:
"Faça parte desse movimento."

Texto:
Conheça nossos projetos, acompanhe nossas ações e fortaleça a cultura produzida no território.

Botões:
[Conheça nossos projetos]
[Entre em contato]

==================================================
10. PÁGINA QUEM SOMOS
==================================================

ROTA:
/quem-somos

------------------------------------------
HERO
------------------------------------------

Manter padrão visual das páginas internas.

Não fazer hero gigantesco.

Utilizar:
label
QUEM SOMOS

Título:
"Uma história construída com cultura, território e participação."

Descrição curta.

Pode usar fotografia ou composição gráfica no lado direito.

------------------------------------------
APRESENTAÇÃO
------------------------------------------

Criar seção centralizada inicialmente:

Título:
"Conheça nossa história"

Texto introdutório.

Depois criar composição com:
- fotografia;
- texto;
- destaque de frase institucional.

------------------------------------------
HISTÓRIA
------------------------------------------

Criar linha do tempo visual.

Exemplo:
2016
Fundação

2018
Expansão das atividades

2020
Novos formatos

2023
Reconhecimento

2026
Novos projetos

Os dados são mockados/editáveis.

A timeline não deve parecer um componente genérico.

Utilizar:
- números grandes;
- linha;
- pequenos elementos gráficos urbanos.

------------------------------------------
MISSÃO, VISÃO E VALORES
------------------------------------------

Criar cards visualmente diferenciados.

Não utilizar três quadrados simples iguais.

Exemplo:
MISSÃO:
card vertical com recorte.

VISÃO:
card largo.

VALORES:
composição com palavras-chave.

Valores:
- Cultura
- Diversidade
- Respeito
- Participação
- Educação
- Território
- Transformação social

------------------------------------------
HIP HOP COMO FERRAMENTA
------------------------------------------

Criar seção editorial explicando a relação entre:
Hip Hop
Educação
Cultura
Juventude
Território

------------------------------------------
CTA FINAL
------------------------------------------

Manter o mesmo padrão visual forte da Home.

==================================================
11. PÁGINA EQUIPE
==================================================

ROTA:
/quem-somos/equipe

Hero padrão.

Depois:

Título centralizado:
"Quem faz acontecer"

Texto de apresentação.

Criar grid de equipe.

Cards profissionais:
- fotografia;
- nome;
- função;
- pequena descrição;
- redes sociais opcionais.

Os cards podem possuir pequenos detalhes relacionados à linguagem Hip Hop, porém discretos.

Hover:
- pequena elevação;
- leve movimento na imagem;
- linha ou detalhe da cor institucional.

Não criar animações excessivas.

Adicionar seção final:
"Uma construção coletiva"

Texto sobre colaboradores, voluntários e parceiros.

CTA final.

==================================================
12. PÁGINA TRANSPARÊNCIA
==================================================

ROTA:
/quem-somos/transparencia

Esta página deve transmitir MUITA CREDIBILIDADE.

A estética deve ser mais institucional do que as demais páginas, mantendo detalhes da identidade Hip Hop.

------------------------------------------
HERO
------------------------------------------

Label:
TRANSPARÊNCIA

Título:
"Responsabilidade, organização e transparência."

Descrição curta.

------------------------------------------
SEÇÃO INTRODUTÓRIA
------------------------------------------

Layout em duas colunas.

Coluna esquerda:
label:
COMPROMISSO INSTITUCIONAL

Título:
"Nosso jeito de fazer"

Coluna direita:
texto institucional explicando que a atuação comunitária também é construída com responsabilidade, organização e transparência.

Utilizar texto semelhante conceitualmente a:

"Acreditamos que uma atuação comunitária forte também se constrói com responsabilidade, organização e transparência."

Explicar que esta página reúne documentos, certificados, reconhecimentos, portfólios e registros institucionais.

------------------------------------------
ACERVO INSTITUCIONAL
------------------------------------------

Centralizar:

ícone pequeno
ACERVO

Título:
"Acervo institucional"

Texto:
"Acesse documentos, certificados, reconhecimentos, portfólios e registros organizados por categoria para facilitar a consulta pública."

Abaixo criar ACCORDIONS grandes e elegantes.

Categorias:

Documentos oficiais e institucionais
Certificados
Reconhecimentos
Portfólios
Relatórios
Registros de apresentações
Registros de oficinas
Materiais gráficos
Imprensa

Cada accordion:
- ícone;
- nome;
- contador, ex.: "(15 documentos)";
- seta para abrir.

Ao abrir:
mostrar tabela/listagem contendo:
Nome do documento
Ano
Tipo
Botão visualizar
Botão baixar

Visual extremamente limpo.

==================================================
13. PÁGINA PROJETOS
==================================================

ROTA:
/projetos

Hero padrão.

Título:
"Projetos"

Texto:
Conheça as iniciativas que unem cultura, formação, arte, território e transformação social.

Criar uma apresentação editorial dos três projetos.

Não utilizar três cards completamente iguais.

Cada projeto:
- foto;
- nome;
- área;
- descrição;
- status opcional;
- botão "Conhecer projeto".

Adicionar seção sobre:
"Como desenvolvemos nossos projetos"

Etapas:
Escuta
Planejamento
Formação
Realização
Registro
Impacto

Representar em fluxo visual.

Adicionar CTA final.

==================================================
14. TRÊS PÁGINAS INDIVIDUAIS DE PROJETOS
==================================================

Criar:
Projeto 1
Projeto 2
Projeto 3

Todas devem seguir estrutura consistente, mas possuir variações visuais suficientes para não parecerem cópias.

------------------------------------------
HERO DO PROJETO
------------------------------------------

Imagem grande relacionada ao projeto.

Label:
PROJETO

Nome do projeto.

Descrição.

Informações rápidas:
Público
Área
Local
Situação

------------------------------------------
SOBRE O PROJETO
------------------------------------------

Título:
"Sobre o projeto"

Texto detalhado.

Criar composição com fotografia e texto.

------------------------------------------
O QUE ACONTECE NO PROJETO
------------------------------------------

Criar cards temáticos.

IMPORTANTE:
Quero cards bonitos e diferentes, com referências VISUAIS AO ARTESANATO quando o conteúdo do projeto envolver produção artesanal.

Esses cards podem ter:
- bordas orgânicas;
- pequenos recortes;
- textura semelhante a papel;
- formas inspiradas em etiquetas artesanais;
- contornos;
- fotografias de detalhe;
- ícones lineares.

Mas manter acabamento profissional.

Criar exemplos editáveis de tipos de artesanato:
- pintura;
- customização;
- acessórios;
- trabalhos manuais;
- arte em tecido;
- produção decorativa.

Cada card:
nome;
descrição;
imagem ou detalhe gráfico.

Se determinado projeto não for de artesanato, permitir substituir facilmente os cards por outras oficinas/modalidades.

------------------------------------------
METODOLOGIA
------------------------------------------

Criar seção com etapas ou pilares.

Exemplo:
01 — Aprender
02 — Experimentar
03 — Criar
04 — Compartilhar

------------------------------------------
IMPACTO
------------------------------------------

Apresentar indicadores:

+XX participantes
+XX oficinas
+XX atividades
XX anos

Dados mockados.

------------------------------------------
GALERIA DO PROJETO
------------------------------------------

Título:
"Registros do projeto"

Grid/masonry com imagens.

Ao clicar:
abrir lightbox.

Possibilitar:
imagem anterior
imagem seguinte
fechar

------------------------------------------
DEPOIMENTO
------------------------------------------

Criar uma área opcional para depoimento.

Não fazer card genérico de testimonial.

Pode utilizar uma grande aspas gráfica no background.

------------------------------------------
CTA FINAL DO PROJETO
------------------------------------------

Quero um CTA FINAL BONITO E COM IDENTIDADE HIP HOP.

Utilizar:
- fotografia;
- recorte diagonal;
- linhas;
- formas;
- palavras em outline;
- pequenos símbolos urbanos.

Título:
"A cultura continua quando a gente participa."

Botões:
[Conheça outros projetos]
[Fale com a gente]

==================================================
15. PÁGINA NOTÍCIAS
==================================================

ROTA:
/noticias

Quero estrutura semelhante conceitualmente a um portal institucional moderno.

------------------------------------------
HERO
------------------------------------------

Hero interno padronizado.

Label:
NOTÍCIAS

Título:
"Histórias, ações e acontecimentos"

Descrição:
Acompanhe projetos, eventos, parcerias, atividades e novidades do Ponto de Cultura.

------------------------------------------
FILTROS
------------------------------------------

Logo após o hero, criar linha organizada com:

ESQUERDA:
tags/categorias

Todas
Evento
Institucional
Formação
Ação Social
Parceria
Projeto

As tags devem utilizar LIQUID GLASS LEVE.

Características:
- formato pill;
- borda fina;
- fundo levemente translúcido;
- blur discreto;
- seleção ativa com fundo sólido da identidade;
- sem efeito chamativo.

DIREITA:
barra pequena de busca.

Placeholder:
"Buscar notícias..."

Não criar barra gigantesca.

Adicionar ícone de lupa.

No mobile:
categorias podem rolar horizontalmente;
busca fica abaixo.

------------------------------------------
GRID DE NOTÍCIAS
------------------------------------------

3 colunas desktop.
2 tablet.
1 mobile.

Cada card:
imagem 16:10 aproximadamente;
tag;
data;
título;
resumo;
"Ler notícia →"

Card com:
- borda delicada;
- raio moderado;
- sem sombra pesada;
- imagem grande.

Hover:
imagem faz zoom de aproximadamente 1.02;
seta se move alguns pixels.

------------------------------------------
PAGINAÇÃO
------------------------------------------

Após o grid:

1 2 3 4 5 6 7 8 9 10

Adicionar:
←
→

PAGINAÇÃO COM LIQUID GLASS LEVE.

Página ativa:
fundo sólido.

Outras:
transparência leve.

Criar estados de hover.

==================================================
16. PÁGINA INDIVIDUAL DA NOTÍCIA
==================================================

ROTA:
/noticias/:slug

------------------------------------------
HERO DA NOTÍCIA
------------------------------------------

Utilizar a própria imagem da notícia como background.

Aplicar overlay escuro.

No conteúdo:

← Voltar para Notícias

tag
data

Título grande da notícia

Resumo curto opcional.

Manter legibilidade máxima.

------------------------------------------
CONTEÚDO
------------------------------------------

Criar container de leitura com largura controlada.

Não deixar o texto ocupar toda a largura da tela.

Tipografia confortável.

Permitir:
- parágrafos;
- subtítulos;
- listas;
- citações;
- imagens;
- legendas.

------------------------------------------
GALERIA DE FOTOS DA NOTÍCIA
------------------------------------------

Após o texto:

Título:
"Galeria de fotos"

Criar grid visual.

Exemplo:
1 imagem maior
4 menores

ou masonry.

Ao clicar:
abrir lightbox.

Não criar uma nova página para essa galeria.

------------------------------------------
COMPARTILHAR
------------------------------------------

Após a galeria criar:

"Compartilhe esta notícia"

Botões:
WhatsApp
Facebook
LinkedIn
Copiar link

Todos com LIQUID GLASS LEVE.

Cada botão:
ícone + nome.

Ao copiar:
mostrar feedback:
"Link copiado!"

Não utilizar botões exageradamente grandes.

------------------------------------------
NOTÍCIAS RELACIONADAS
------------------------------------------

Título:
"Você também pode gostar"

Mostrar 3 notícias relacionadas.

Cards menores que os da página principal.

==================================================
17. PÁGINA GALERIA
==================================================

ROTA:
/galeria

NÃO criar página de álbum.
NÃO criar subpágina para galeria.

Toda a experiência deve acontecer nesta mesma página.

------------------------------------------
HERO
------------------------------------------

Label:
GALERIA

Título:
"Memórias que contam nossa história"

Texto curto.

------------------------------------------
SELETOR DE ANOS
------------------------------------------

Criar uma linha horizontal com anos:

2026
2025
2024
2023
2022
2021
2020
2019
2018
2017
2016

O ano ativo possui destaque sólido.

Os outros:
pill outline.

Visual limpo.

Em telas pequenas:
scroll horizontal.

------------------------------------------
CONTEÚDO DO ANO
------------------------------------------

Ao selecionar um ano, atualizar dinamicamente o conteúdo abaixo.

Exemplo:

[2025 ativo]

Título grande:
"1ª Mostra Arte e Educação – Dia das Mães"

linha decorativa curta abaixo do título.

Depois:
galeria de fotos.

Não precisa exibir cada álbum em uma subpágina.

Se houver mais de um evento naquele ano:

Título:
1ª Mostra Arte e Educação – Dia das Mães
[fotos]

espaço

Título:
Festival de Hip Hop
[fotos]

espaço

Título:
Oficina de Breaking
[fotos]

------------------------------------------
GRID DE FOTOS
------------------------------------------

Criar grid editorial responsivo.

Desktop:
4 colunas ou masonry.

Fotos:
- cantos levemente arredondados;
- proporções variadas;
- boa distribuição;
- evitar espaços vazios estranhos.

Hover:
- zoom extremamente leve;
- pequeno overlay;
- ícone de ampliar.

Clique:
abrir LIGHTBOX.

No lightbox:
- foto grande;
- fechar;
- anterior;
- próxima;
- contador, ex.: 04 / 18;
- legenda opcional.

==================================================
18. PÁGINA CONTATO
==================================================

ROTA:
/contato

Hero padrão.

Depois criar seção:

Título centralizado:
"Vamos conversar?"

Texto:
Entre em contato para saber mais sobre projetos, ações, parcerias, oficinas e atividades culturais.

Criar layout em duas colunas.

COLUNA 1:
Informações:
Endereço
E-mail
Telefone
WhatsApp
Horário de atendimento

Redes sociais.

COLUNA 2:
Formulário:
Nome
E-mail
Telefone
Assunto
Mensagem

Checkbox:
"Li e concordo com a Política de Privacidade."

Botão:
Enviar mensagem

Não inserir mapa.

Criar uma segunda seção:
"Encontre a gente nas redes"

Cards ou links de:
Instagram
Facebook
YouTube
WhatsApp

CTA final opcional.

==================================================
19. HERO DAS PÁGINAS INTERNAS
==================================================

Criar um padrão consistente de hero para:
- Quem Somos
- Equipe
- Transparência
- Projetos
- Notícias
- Galeria
- Contato
- Política de Privacidade
- Termos de Uso

Não quero cada página com um hero completamente diferente.

Características:
- altura moderada;
- muito espaço visual, mas não exagerado;
- label pequeno;
- título;
- descrição;
- detalhe gráfico Hip Hop;
- possibilidade de fotografia em algumas páginas.

Evitar breadcrumbs excessivos.

==================================================
20. POLÍTICA DE PRIVACIDADE E TERMOS
==================================================

Criar páginas com:
- hero padrão;
- sem botões no hero;
- conteúdo com ótima legibilidade;
- índice lateral ou superior;
- títulos claros;
- largura de leitura confortável.

==================================================
21. IMAGENS
==================================================

Utilize imagens temporárias relacionadas ao universo REAL do Hip Hop.

Priorizar imagens com:
- apresentações culturais;
- breaking;
- DJs;
- MCs;
- graffiti;
- oficinas;
- adolescentes e jovens participando de atividades culturais;
- eventos comunitários;
- rodas culturais;
- atividades educativas;
- ocupação de espaços públicos;
- coletivos;
- encontros;
- expressões urbanas.

Evitar:
- imagens genéricas de empresários;
- banco de imagens corporativo tradicional;
- pessoas de terno;
- imagens caricatas do Hip Hop;
- excesso de poses de rappers americanos;
- armas;
- drogas;
- estética de criminalidade;
- imagens estereotipadas.

A comunicação deve apresentar o Hip Hop como:
cultura,
arte,
formação,
identidade,
território,
expressão,
comunidade
e transformação social.

==================================================
22. DIREÇÃO DE ARTE
==================================================

Quero que o site tenha momentos visualmente marcantes.

Utilizar alternância entre:

SEÇÕES CLARAS
background off-white;
textos escuros;
muita organização.

SEÇÕES ESCURAS
preto/grafite;
fotografias;
elementos coloridos da identidade.

Isso cria ritmo ao longo da navegação.

Os elementos Hip Hop devem aparecer principalmente em:
- divisores;
- cantos;
- linhas;
- texturas;
- ícones;
- molduras;
- background typography;
- recortes;
- pequenos grafismos.

Não aplicar elementos simplesmente por decoração.

==================================================
23. CARDS
==================================================

IMPORTANTE:
NÃO reutilizar exatamente o mesmo card em todo o site.

Criar famílias de componentes diferentes para:

Card de notícia
Card de projeto
Card da equipe
Card de atuação
Card de artesanato
Card institucional
Card de rede social

Manter consistência de design, mas permitir variações.

Evitar:
- sombra pesada;
- borda muito grossa;
- raio de 30/40px em tudo;
- cards gigantescos;
- muito espaço vazio interno.

==================================================
24. LIQUID GLASS
==================================================

Utilizar liquid glass APENAS onde solicitado ou onde fizer sentido.

Principalmente:
- categorias das notícias;
- paginação;
- botões de compartilhamento;
- controles flutuantes de cookies;
- acessibilidade;
- pequenos controles especiais.

Características:
background com transparência discreta;
backdrop blur;
borda fina;
sombra mínima.

Não transformar o site inteiro em glassmorphism.

==================================================
25. ANIMAÇÕES
==================================================

Criar animações leves e sofisticadas.

Permitido:
- fade;
- translate de poucos pixels;
- reveal ao scroll;
- zoom muito leve de imagens;
- movimento discreto em setas;
- animações de elementos gráficos.

Evitar:
- elementos pulando;
- textos entrando de todos os lados;
- animações lentas;
- parallax pesado;
- efeitos que prejudiquem acessibilidade.

Respeitar:
prefers-reduced-motion.

==================================================
26. RESPONSIVIDADE
==================================================

Testar cuidadosamente:

Desktop grande
1440px+

Notebook
1024–1366px

Tablet
768px

Mobile
375–430px

No mobile:
- evitar textos gigantes;
- nenhuma rolagem horizontal acidental;
- tags de notícias podem rolar horizontalmente;
- anos da galeria podem rolar horizontalmente;
- cards tornam-se 1 coluna;
- botões não devem ultrapassar a tela;
- controles flutuantes precisam permanecer acessíveis;
- galerias devem continuar visualmente interessantes.

==================================================
27. ACESSIBILIDADE
==================================================

Aplicar:
- contraste adequado;
- alt em imagens;
- aria-label quando necessário;
- navegação por teclado;
- focus-visible;
- headings hierarquicamente corretos;
- labels nos formulários;
- botões com área clicável adequada;
- sem depender exclusivamente de cores;
- suporte a prefers-reduced-motion.

==================================================
28. SEO
==================================================

Preparar:
- title individual;
- meta description;
- Open Graph;
- estrutura semântica;
- URLs amigáveis;
- headings corretos;
- textos de imagem;
- dados estruturados quando fizer sentido.

Para notícias:
Article schema.

Para organização:
Organization schema.

==================================================
29. CONTEÚDO MOCKADO
==================================================

Crie conteúdo fictício de demonstração, mas realista.

Não utilize:
"Lorem ipsum".

Escreva textos institucionais coerentes relacionados a:
- cultura Hip Hop;
- formação;
- oficinas;
- juventude;
- território;
- comunidade;
- educação;
- apresentações;
- projetos;
- transformação social.

Crie ao menos:
- 9 notícias mockadas;
- 3 projetos;
- 6 integrantes na equipe;
- fotografias mockadas para vários anos da galeria;
- 5 categorias de documentos na Transparência.

==================================================
30. DETALHES IMPORTANTES DE UX
==================================================

Adicionar:
- estado de hover;
- estado de focus;
- estado ativo;
- transições;
- skeleton ou placeholder se necessário;
- mensagem de nenhum resultado na busca de notícias;
- mensagem se determinada categoria estiver vazia;
- feedback de link copiado;
- feedback do formulário;
- navegação entre páginas funcionando.

Ao clicar no logo:
voltar para Home.

Links externos:
target="_blank" quando apropriado.

==================================================
31. PADRÃO DE ESPAÇAMENTO
==================================================

Não quero um site excessivamente espaçado.

Há uma diferença entre "sofisticado" e "vazio".

Utilizar espaçamento generoso, porém controlado.

Desktop:
sections aproximadamente 80–110px de padding vertical conforme o conteúdo.

Não utilizar 160–200px entre seções sem necessidade.

Cards:
padding proporcional.

Textos:
largura máxima para manter legibilidade.

==================================================
32. RESULTADO VISUAL ESPERADO
==================================================

O visitante deve sentir que está entrando em um projeto que representa:

HIP HOP
CULTURA
COMUNIDADE
MOVIMENTO
IDENTIDADE
TERRITÓRIO
PROFISSIONALISMO

O site deve transmitir a energia visual do Hip Hop sem perder a organização institucional.

Pense em um encontro entre:
- site de organização cultural;
- editorial contemporâneo;
- movimento Hip Hop;
- instituição profissional;
- fotografia documental;
- design urbano moderno.

Quero uma experiência que provoque curiosidade.

A pessoa deve entrar na Home, ver o primeiro bloco e querer descobrir:
quem são,
o que fazem,
quais projetos realizam,
as notícias,
as fotos,
a história
e os documentos institucionais.

==================================================
33. ORIENTAÇÃO ESPECÍFICA PARA O DESIGN
==================================================

NÃO entregue uma primeira versão genérica para depois "refinarmos".

Já construa desde o início:
- hierarquia tipográfica bem resolvida;
- navbar finalizada;
- footer finalizado;
- padrão dos heroes;
- responsividade;
- estados de interação;
- componentes flutuantes;
- filtros;
- busca;
- paginação;
- lightbox;
- accordions;
- cards diferenciados;
- CTA final;
- páginas institucionais;
- páginas internas;
- conteúdo mockado.

Antes de finalizar qualquer página, verifique visualmente:
1. se parece profissional;
2. se existe identidade Hip Hop sem caricatura;
3. se os espaços não estão exagerados;
4. se os títulos estão proporcionais;
5. se os cards não são grandes demais;
6. se a navegação está clara;
7. se há coerência com as demais páginas;
8. se a versão mobile continua boa.

==================================================
34. RESUMO DA EXPERIÊNCIA VISUAL DE CADA REFERÊNCIA
==================================================

Como você não consegue visualizar minhas referências originais, considere estas descrições:

REFERÊNCIA DE NOTÍCIAS:
Imagine uma página institucional muito clara, com fundo quase branco. No topo do conteúdo existe uma sequência horizontal de filtros arredondados como "Todas", "Evento", "Institucional", "Ação Social" e "Parceria". No lado direito há uma barra pequena de pesquisa. Abaixo há três cards grandes de notícias em linha, cada um com fotografia ocupando aproximadamente metade superior, categoria e data em pequeno texto colorido, título forte, descrição e link. Quero essa organização, mas reinterpretada com identidade Hip Hop.

REFERÊNCIA DE GALERIA:
Imagine uma fileira horizontal de anos em pills — 2025, 2024, 2023, 2022 etc. O ano selecionado possui fundo escuro. Logo abaixo aparece um grande título do evento, uma linha pequena colorida e uma grade de fotografias. Quero esse princípio: ano → título do evento → fotografias, tudo na mesma página.

REFERÊNCIA DE TRANSPARÊNCIA:
Imagine uma página extremamente limpa. Primeiro há uma seção em duas colunas: à esquerda um pequeno label "Compromisso institucional" e um grande título; à direita, texto explicando transparência e responsabilidade. Depois existe uma área central intitulada "Acervo institucional", seguida de grandes linhas/accordions contendo categorias de documentos. Quero essa lógica visual profissional.

REFERÊNCIA DA NOTÍCIA INDIVIDUAL:
Imagine um hero horizontal usando a própria fotografia da notícia em toda a largura. Há uma camada escura sobre a imagem. Por cima ficam o botão para voltar, categoria, data, título da matéria e uma pequena descrição. Logo abaixo começa o texto em um container centralizado e confortável para leitura. Quero essa organização.

REFERÊNCIAS DE HIP HOP:
Imagine uma Home com fotografia urbana cinematográfica ocupando toda a tela, montanhas/cidade/comunidade ao fundo, personagem ligado ao Hip Hop em primeiro plano e forte composição gráfica. Outra referência utiliza fundo preto, detalhes em verde vibrante, linhas diagonais repetidas e grandes títulos editoriais. Quero aproveitar a energia, contraste, geometria e expressividade dessas referências SEM copiar a estética literalmente e SEM prejudicar a credibilidade institucional.

==================================================
35. ÚLTIMA REGRA
==================================================

Construa o site inteiro como um sistema visual único.

Não trate cada página como projeto separado.

Os mesmos princípios de:
tipografia,
cores,
buttons,
radius,
containers,
espaçamento,
header,
footer,
heroes,
ícones
e microinterações
devem permanecer consistentes.

Ao mesmo tempo, cada página deve possuir personalidade suficiente para não parecer repetitiva.

O resultado final precisa parecer um projeto profissional desenvolvido especificamente para um Ponto de Cultura de Hip Hop, e não um template genérico que apenas recebeu algumas imagens de Hip Hop.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/369d4889-23af-4600-a7f0-cda410ffbae8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
