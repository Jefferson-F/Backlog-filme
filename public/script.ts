interface Filme{
    id: number;
    titulo: string;
    diretor: string;
    genero: string;
    ano: number;
}

const apiURL = 'http://localhost:3000';

async function buscarFilmes(): Promise<Filme[]>{
    const response = await fetch(apiURL);
    if(!response.ok){
        throw new Error('Erro ao buscar filmes');
    }
    return response.json();
}

async function renderizarFilmes() {
    try {
        const filmes = await buscarFilmes();
        const lista = document.getElementById('lista-filmes') as HTMLUListElement;
        lista.innerHTML = '';
        filmes.forEach(
            (filmes) => {
                const item = document.createElement('li');
                item.textContent = `${filmes.titulo} - ${filmes.diretor} - ${filmes.genero} - ${filmes.ano}`;

            }
        )
    } catch (error) {
        
    }
    
}