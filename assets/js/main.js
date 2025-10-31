const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;
let currentPage = 1;
let allPokemons = [];

// Rainbow color order for sorting
const typeOrder = {
    'fire': 1,
    'fighting': 2,
    'electric': 3,
    'ground': 4,
    'rock': 5,
    'grass': 6,
    'bug': 7,
    'water': 8,
    'ice': 9,
    'psychic': 10,
    'poison': 11,
    'dragon': 12,
    'flying': 13,
    'ghost': 14,
    'fairy': 15,
    'steel': 16,
    'normal': 17,
    'dark': 18
};

function sortPokemonsByRainbow(pokemons) {
    return pokemons.sort((a, b) => {
        const orderA = typeOrder[a.type] || 99;
        const orderB = typeOrder[b.type] || 99;
        return orderA - orderB;
    });
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function displayPage(page) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const pokemonsToShow = allPokemons.slice(startIndex, endIndex);
    
    pokemonList.innerHTML = pokemonsToShow.map(convertPokemonToLi).join('');
    
    updatePaginationControls(page);
}

function updatePaginationControls(page) {
    const totalPages = Math.ceil(allPokemons.length / limit);
    const paginationDiv = document.querySelector('.pagination');
    
    let paginationHTML = '';
    
    // Previous button
    if (page > 1) {
        paginationHTML += `<button onclick="goToPage(${page - 1})">« Anterior</button>`;
    }
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        paginationHTML += `<button onclick="goToPage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span class="pagination-dots">...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        if (i === page) {
            paginationHTML += `<button class="active">${i}</button>`;
        } else {
            paginationHTML += `<button onclick="goToPage(${i})">${i}</button>`;
        }
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span class="pagination-dots">...</span>`;
        }
        paginationHTML += `<button onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }
    
    // Next button
    if (page < totalPages) {
        paginationHTML += `<button onclick="goToPage(${page + 1})">Próximo »</button>`;
    }
    
    paginationDiv.innerHTML = paginationHTML;
}

function goToPage(page) {
    currentPage = page;
    displayPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadAllPokemons() {
    pokeApi.getPokemons(0, maxRecords).then((pokemons = []) => {
        allPokemons = sortPokemonsByRainbow(pokemons);
        displayPage(1);
    });
}

loadAllPokemons();