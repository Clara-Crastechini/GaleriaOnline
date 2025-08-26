import "./Galeria.css";
import React, { useEffect, useState } from 'react'
import icon from "../../assets/img/upload.svg"
import Botao from "../../components/botao/Botao";
import Card from "../../components/card/Card";
import Home from "../home/Home";
import api from "../../Services/services";


const Galeria = () => {

    const [cards, setCards] = useState([]);
    const [imagem, setImagem] = useState(null);
    const [nomeImagem, setNomeImagem] = useState("")

    async function listarCards() {
        try {
            // me manda as informacoes
            const resposta = await api.get("Imagem");
            // console.log(resposta.data);
            setCards(resposta.data);
        } catch (error) {
            console.error("Erro ao listar: ", error);
            alert("Erro ao listar!")
        }
    }

    async function cadastrarCard(e) {
        e.preventDefault();
        if (imagem && nomeImagem) {
            try {
                // FormData e uma interface que permite acrescentar dados ao formulario
                const formData = new FormData();
                // append: anexar/acrescentar/adicionar
                formData.append("Nome", nomeImagem);
                formData.append("Arquivo", imagem);


                await api.post("Imagem/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });

                alert("Imagem cadastrada!")

            } catch (error) {
                alert("Nao foi possivel realizar o cadastro")
            }
        } else {
            alert("Preencha os campo de nome e imagem")
        }
    }


    async function editarCard(id, nomeAntigo) {
    
            const novoNome = prompt("Digite o novo nome da imagem", nomeAntigo);

            const inputArquivo = document.createElement("input");
            inputArquivo.type = "file";
            // Aceita imagens independente das extensoes
            inputArquivo.accept = "image/*";
            inputArquivo.style = "display: none";

            // define o que acontecer quando o usuario selecionar um arquivo
            inputArquivo.onchange = async (e) => {
                const novoArquivo = e.target.files[0];

                const formData = new FormData();

                // adicionar o novo nome no formData:
                formData.append("Nome", novoNome);
                formData.append("Arquivo", novoArquivo);

                if (formData) {
                    try {
                        await api.put(`Imagem/${id}`,formData,{
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        })


                        alert("Deu certo")
                        listarCards();
                    } catch (error) {
                        alert("Nao foi possivel alterar o card!")
                        console.log(error);

                    }
                }
            };
            inputArquivo.click();

    }

    async function excluirCard(id) {
        try {
            await api.delete(`Imagem/${id}`)
            alert("excluido!")
        } catch (error) {
            alert("Erro ao excluir card!");
            console.error(error);

        }
    }

    useEffect(() => {
        listarCards()
    })



    return (
        <>
            <h1 className="tituloGaleria">Galeria Online</h1>

            <form className="formulario" onSubmit={cadastrarCard}>
                <div className="campoNome">
                    <label>Nome</label>
                    <input type="text" className="inputNome" onChange={(e) => setNomeImagem(e.target.value)} value={nomeImagem} />
                </div>
                <div className="campoImagem">
                    <label className="arquivoLabel">
                        <i>
                            <img src={icon} alt="Icone de upload de imagem" />
                        </i>
                        <input type="file" className="arquivoInput" onChange={(e) => setImagem(e.target.files[0])} />
                    </label>
                </div>
                <Botao nomeBotao="Cadastrar" />
            </form>
            <div className="campoCards">
                {cards.length > 0 ? (

                    cards.map((e) => (
                        <Card
                            key={e.id}
                            tituloCard={e.nome}
                            imgCard={`https://localhost:7155/${e.caminho.replace("wwwroot/", "")}`}
                            funcEditar={() => editarCard(e.id, e.nome)}
                            funcExcluir={() => excluirCard(e.id)} />
                    ))
                ) : <p>Nenhum card cadastrado.</p>}

            </div>

        </>
    )
}

export default Galeria;