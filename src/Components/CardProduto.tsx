import type { CardProdutoProps } from '../types/CardProdutoProps';
import './CardProduto.css';
import bolo_default from '../assets/imgs/bolo-default.png'
import { formatosService } from '../services/formatosServices';

export default function CardProduto({ nome, descricao, preco, imagem, id, peso }: CardProdutoProps) {


    return (
        <div className="card_produto">
            <img key={id} src={(imagem.length > 0 ) ? `http://localhost:3000/static/${imagem}` : bolo_default} alt="Uma fatia de bolo de chocolate belga" />
            <h2>{nome}</h2>
            <p>{(descricao.length > 0) ? descricao : "Descrição não informada"}</p>
            <div>
                <span>{formatosService.PrecoBR(preco)}</span>
                <span>{(peso != null)  ? formatosService.PesoEmKg 
                (peso) : "quantidade não informada"} </span>
            </div>
        </div>
    )
}
