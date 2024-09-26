

// CONTENT
export async function getContentAll() {

    const url = `http://localhost:8080/v1/Lotus/conteudo/gestante` 
    const response = await fetch(url)
    const data = await response.json()
    return data.conteudo
}

const criarCard = (conteudo) => {
    const card = document.createElement('div')
    card.className =  'h-64 w-[400px] bg-white rounded-2xl shadow-lg aspect-video'

    const cardFoto = document.createElement('div')
    cardFoto.className = 'h-[80%] rounded-2xl bg-pink-300'

    const foto = document.createElement('div')
    foto.className = 'h-full w-full'

    card.src = conteudo.foto_capa

    const titulo = document.createElement('p')
    titulo.className = 'font-Inter font-medium text-xl text-gray-3 p-4'
    titulo.innerHTML = `${conteudo.titulo_conteudo}` 

    // card.addEventListener('click', () => {
    //     localStorage.setItem('Conteudo', conteudo.id)
    // })
    

    
    return card
}

const gerarCard = document.getElementById('todosCards')
const card = criarCard(conteudo)
gerarCard.appendChild(card)

