

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

    card.addEventListener('click', () => {
        localStorage.setItem('Conteudo', conteudo.id)
    })
    
    return card
}

// function Card({ conteudo }) {
//     return (
//       <div className="card">
//         <Image src={conteudo.imagem} alt={conteudo.titulo} />
//         <h2>{conteudo.titulo}</h2>
//         <p>{conteudo.descricao}</p>
//       </div>
//     );
//   }

//   function ListaDeCards() {
//     const [conteudo, setConteudos] = useState([]);
  
//     useEffect(() => {
//       // Função para buscar os dados da API
//       const fetchData = async () => {
//         const response = await fetch('http://localhost:8080/v1/Lotus/conteudo/gestante');
//         const data = await response.json();
//         setConteudos(data.conteudo);
//       };
  
//       fetchData();
//     }, []);
  
//     return (
//       <div className="card-list">
//         {conteudo.map((conteudo) => (
//           <Card key={conteudo.id} conteudo={conteudo} />
//         ))}
//       </div>
//     );
//   }
  
//   export default ListaDeCards;

// const gerarCard = document.getElementById('todosCards')
// const card = criarCard(conteudo)
// gerarCard.appendChild(card)

// import React, { useEffect, useState } from 'react';

// const Card = ({ conteudo }) => {
//     return (
//         <div className="h-64 w-[400px] bg-white rounded-2xl shadow-lg aspect-video">
//             <div className="h-[80%] rounded-2xl bg-pink-300 overflow-hidden">
//                 <img
//                     className="h-full w-full object-cover"
//                     src={conteudo.foto_capa}
//                     alt={conteudo.titulo_conteudo}
//                 />
//             </div>
//             <p className="font-Inter font-medium text-xl text-gray-3 p-4">
//                 {conteudo.titulo_conteudo}
//             </p>
//         </div>
//     );
// };

// const ConteudoList = () => {
//     const [conteudos, setConteudos] = useState([]);

//     const getContentAll = async () => {
//         const url = `http://localhost:8080/v1/Lotus/conteudo/gestante`;
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             setConteudos(data.conteudo);
//         } catch (error) {
//             console.error('Error fetching content:', error);
//         }
//     };

//     useEffect(() => {
//         getContentAll();
//     }, []);

//     return (
//         <div className="flex flex-wrap gap-4">
//             {conteudos.map((conteudo) => (
//                 <Card key={conteudo.id} conteudo={conteudo} />
//             ))}
//         </div>
//     );
// };

// export default ConteudoList;


