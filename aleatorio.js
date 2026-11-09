const nomes = ["Dra. Beatriz", "Dr. Gabriel", "Veterinária Camila", "Dr. Rodrigo", "Dra. Mariana", "Veterinário Lucas"];

export function aleatorio(Lista) {
    const posicao = Math.floor(Math.random() * Lista.length);
    return Lista[posicao];
}

export const nome = aleatorio(nomes);
