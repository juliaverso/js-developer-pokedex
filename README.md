# Pokedex - Trilha JS Developer

Uma Pokedex interativa desenvolvida com HTML, CSS e JavaScript vanilla, consumindo a [PokeAPI](https://pokeapi.co/) para exibir informações dos Pokémon da primeira geração.

![Pokedex](https://img.shields.io/badge/Pok%C3%A9mon-151-red?style=for-the-badge&logo=pokemon)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Funcionalidades Adicionadas

### Organização por Cores do Arco-Íris
Os Pokémon são organizados de acordo com as cores do arco-íris, baseado no tipo primário de cada um:

- **Vermelho**: Fire, Fighting
- **Laranja/Amarelo**: Electric, Ground, Rock
- **Verde**: Grass, Bug
- **Azul**: Water, Ice
- **Roxo/Violeta**: Psychic, Poison, Dragon, Flying, Ghost
- **Rosa**: Fairy
- **Neutros**: Steel, Normal, Dark

### Sistema de Paginação
- Navegação intuitiva com botões "Anterior" e "Próximo"
- Números de página clicáveis (exibe até 5 páginas por vez)
- Indicadores visuais para páginas ocultas (...)
- Página atual destacada visualmente
- Scroll automático para o topo ao mudar de página
- Exibe 10 Pokémon por página

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização e responsividade
  - Grid Layout
  - Flexbox
  - Media Queries
  - Transitions e Animations
- **JavaScript (ES6+)**: Lógica da aplicação
  - Fetch API
  - Promises
  - Arrow Functions
  - Template Literals
  - Async/Await
- **PokeAPI**: API REST para dados dos Pokémon

## Estrutura do Projeto

```
js-developer-pokedex/
├── index.html                 # Página principal
├── README.md                  # Documentação do projeto
└── assets/
    ├── css/
    │   ├── global.css        # Estilos globais
    │   └── pokedex.css       # Estilos da Pokedex
    └── js/
        ├── main.js           # Lógica principal e paginação
        ├── poke-api.js       # Integração com PokeAPI
        └── pokemon-model.js  # Modelo de dados do Pokémon
```

## Desenvolvimento

Projeto desenvolvido como parte da **Trilha JS Developer**.

### Autor Original
Projeto base da trilha de JavaScript

