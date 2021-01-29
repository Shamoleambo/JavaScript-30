//Declaração das funções

function tocarSomAddPlaying(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!key) return //Filtra somente as teclas que irão ter um trecho musical associado

    key.classList.add('playing');
    audio.play();
}
function removerPlayingFimAnimacao(e) {
    if (e.propertyName != "transform") return
    e.target.classList.remove('playing');
}

//Escutar os eventos

window.addEventListener('keydown', tocarSomAddPlaying);
window.addEventListener('transitionend', removerPlayingFimAnimacao);