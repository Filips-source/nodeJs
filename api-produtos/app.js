import { resolve } from "node:path";
import { criarCatalogoArquivo } from "./catalogo/catalogoArquivo.js";
import { carregarAmbiente, exibirDiagnostico } from "./config/ambiente.js";
import { formatarMoeda } from "./utils/formatarMoeda.js";

function resumirProduto(produto) {
  return {
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco,
    precoFormatado: formatarMoeda(produto.preco),
    estoque: produto.estoque,
    categoria: produto.categoria,
    valorEmEstoque: produto.calcularValorEmEstoque(),
    valorEmEstoqueFormatado: formatarMoeda(produto.calcularValorEmEstoque()),
  };
}

async function executar() {
  try {
    const configuracao = carregarAmbiente(process.argv[2]);

    const comando = process.argv[3] || 'listar';
    const caminhoPadrao = resolve(import.meta.dirname, 'data/produtos.json');
    const caminhoCatalogo = process.env.CATALOGO_ARQUIVO || caminhoPadrao;
    const catalogo = criarCatalogoArquivo(caminhoCatalogo);

    
      
  } catch (erro) {
    console.error(erro.message);
    process.exitCode = 1;
  }
}
executar();
