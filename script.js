const relogio = document.querySelector('.relogio');
function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-Br', {
        hour12:false,
        timeZone: 'UTC'
    });
}

let segundos = 0;
let timer;


function startTimer(){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos)
    }, 1000);
}
function stopTimer() {
    relogio.classList.add('pausado');
    clearInterval(timer);
}
function resetTimer() {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
}



