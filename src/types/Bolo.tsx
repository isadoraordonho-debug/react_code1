export interface Bolo {
    nome: string;  
    descricao: string[];
    id: string | undefined;
    categorias: string [], 
    imagens: string[];
    preco: number;
    peso: number | null
}