import { useEffect, useState } from 'react'
import './styles.css'
import Card from '../../components/Card'


export default function ApiRickAndMorty() {
    const [conteudo, setConteudo] = useState(<>Carregando</>)

    function carregarTodosOsPersonagens(){
        // carregar todos os personagens da API do rick and morty - com o fetch
        return { info: {}, results: mockResult }
    }

    function listarPersonagens(){
        // const api = carregarTodosOsPersonagens()
        // // const result = api.result

        const { info, results } = carregarTodosOsPersonagens()

        return results.map(personagem => <Card key={personagem.id} data={personagem} />)
    }

    useEffect(() => {
        function getConteudo(){
            setConteudo(listarPersonagens())
        }

        getConteudo()
    }, [])
    
    return (
        <div className='lista-principal'>
            { conteudo }
        </div>
    )
}