document.addEventListener('DOMContentLoaded', function() {
    const escalarButton = document.querySelector('.btn-primary');
    const cancelarButton = document.querySelector('.btn-secondary'); 
    const jogadorSelect = document.getElementById('jogador');
    const numeroCamisaSelect = document.getElementById('numero-camisa');
    const posicaoSelect = document.getElementById('posicao');
    const numerosJogadoresContainer = document.querySelector('.numeros-jogadores');

    escalarButton.addEventListener('click', function() {
        const jogador = jogadorSelect.value;
        const numeroCamisa = numeroCamisaSelect.value;
        const posicao = posicaoSelect.value;

        if (jogador && numeroCamisa && posicao) {
            const numeroJogador = document.createElement('span');
            numeroJogador.classList.add('numero');
            numeroJogador.style.position = 'absolute';
            numeroJogador.style.color = 'black';
            numeroJogador.style.fontSize = '70px';
            numeroJogador.style.fontWeight = 'bold';
            numeroJogador.style.textAlign = 'center';
            numeroJogador.dataset.numero = numeroCamisa; 

            switch (posicao) {
                case 'Goleiro':
                    numeroJogador.style.top = '10%';
                    numeroJogador.style.left = '50%';
                    break;
                case 'Lateral Direito':
                    numeroJogador.style.top = '20%';
                    numeroJogador.style.left = '80%';
                    break;
                case 'Zagueiro 1':
                    numeroJogador.style.top = '30%';
                    numeroJogador.style.left = '40%';
                    break;
                case 'Zagueiro 2':
                    numeroJogador.style.top = '30%';
                    numeroJogador.style.left = '60%';
                    break;
                case 'Lateral Esquerdo':
                    numeroJogador.style.top = '20%';
                    numeroJogador.style.left = '20%';
                    break;
                case 'Volante':
                    numeroJogador.style.top = '50%';
                    numeroJogador.style.left = '50%';
                    break;
                case 'Meia Ofensivo':
                    numeroJogador.style.top = '60%';
                    numeroJogador.style.left = '50%';
                    break;
                case 'Meia Central':
                    numeroJogador.style.top = '50%';
                    numeroJogador.style.left = '40%';
                    break;
                case 'Atacante 1':
                    numeroJogador.style.top = '70%';
                    numeroJogador.style.left = '40%';
                    break;
                case 'Atacante 2':
                    numeroJogador.style.top = '70%';
                    numeroJogador.style.left = '60%';
                    break;
                default:
                    break;
            }

            numeroJogador.textContent = numeroCamisa;
            numerosJogadoresContainer.appendChild(numeroJogador);
        } else {
            alert('Por favor, selecione um jogador, número e posição.');
        }
    });

    cancelarButton.addEventListener('click', function() {
        const numeroCamisa = numeroCamisaSelect.value; 
        const jogadorRemover = Array.from(numerosJogadoresContainer.children).find(child => child.dataset.numero === numeroCamisa);

        if (jogadorRemover) {
            numerosJogadoresContainer.removeChild(jogadorRemover); 
        } else {
            alert('Jogador não encontrado no campo.');
        }
    });
});