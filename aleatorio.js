const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda", "Gustavo", "Gabriel"];

export function aleatorio(Lista) {
    const posicao = Math.floor(Math.random() * Lista.length);
    return Lista[posicao];
  }

export const nome = aleatorio(nomes);