export class CarrinhoDeCompras {
    private produtos: Produto[] = [];

    inserirProdutos(...produtos: Produto[]): void {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }

    quantidade(): number {
        return this.produtos.length;
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}

export class Produto {
    constructor(
        public nome: string,
        public preco: number,
    ) {}
}

const produto1 = new Produto('Camiseta', 40);
const produto2 = new Produto('Chocolate', 50);
const produto3 = new Produto('Caneta', 20);

const carrinhoDeCompras = new CarrinhoDeCompras();

carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidade());
