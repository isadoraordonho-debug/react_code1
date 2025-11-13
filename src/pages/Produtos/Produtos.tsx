import './Produtos.css';
import banner_1 from '../../assets/imgs/banner.png';
import banner_2 from '../../assets/imgs/banner2.png';
import banner_3 from '../../assets/imgs/banner3.png';
// import choc_belga from '../../assets/imgs/choc-belga.png';
// import choc_cenoura from '../../assets/imgs/cenoura-choc.png';
// import choc_ninho_morango from '../../assets/imgs/choc-ninho-morango.png';
// import choc_ninho from '../../assets/imgs/choc-ninho.png';
// import choc_oreo from '../../assets/imgs/choc-oreo.png';
// import choc_pistache from '../../assets/imgs/choc-pistache.png';
import whatsapp from '../../assets/whatsapp.png';
import { useEffect, useState } from 'react';
import type { Bolo } from '../../types/Bolo';
import { getBolos } from '../../services/bolosService';
import CardProduto from '../../Components/CardProduto';



export default function Produtos() {

    const [bolos, setBolos] = useState<Bolo[]>([]);


    const fecthBolos = async () => {
        try {
            const dados = await getBolos();
            console.log("Dados retornados da API: ", dados);
            setBolos(dados);
        } catch (error) {
            console.error("Erro ao executar getBolos: ", error)

        }
    }

    useEffect(() => {
        fecthBolos();

    }, [])

    return (
        <main>


            <section className=".container_produtos">
                <h1 className="acessivel">produtos de chocolate</h1>
                <div className="titulo">
                    <span>Chocolate</span>
                    <hr />
                </div>

                <section className="cards">

                    {
                        bolos.map((b: Bolo) => (
                            <CardProduto
                                nome={b.nome}
                              descricao={b.descricao[0]}
                                preco={b.preco}
                                imagem={b.imagens[0]}
                                peso={b.peso}
                            />

                        ))
                    }

                </section>
            </section>

            <a className="whatsapp" href="https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."
                target="_blank">
                <img src={whatsapp} alt="icone do whatsapp" />
            </a>
        </main>

    )
}
