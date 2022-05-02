function myClock() {
    // Chama o objeto Date() e atribui ele à variável(relogio)
    let relogio = new Date();
    // Seleciona os elementos HTML e atribui os valores que é extraído do objeto Date()
    document.querySelector('.hours').innerHTML = String(relogio.getHours()).padStart(2,'0');
    document.querySelector('.minutes').innerHTML = String(relogio.getMinutes()).padStart(2,'0');
    document.querySelector('.seconds').innerHTML = String(relogio.getSeconds()).padStart(2,'0');
    
    //Vetor para descrever os dias da semana e os meses por extenso
    let diaSemana = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
    let mes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

    // Seleciona o campo que vai mostrar a data atual por extenso e atribui os valores que vem das variáveis acima.
    document.querySelector('.horaDescrita').innerHTML = `${diaSemana[relogio.getDay()]}, ${relogio.getDate()} de ${mes[relogio.getMonth()]} de ${relogio.getFullYear()}`;
}

setInterval(myClock,500);// chama a função a cada 1s