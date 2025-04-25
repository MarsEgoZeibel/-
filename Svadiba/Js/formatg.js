const TOKEN = '8155254598:AAGdVCsk4YjRtIPFNPSnCitA9ayhi2rLhJU';
const CHAT_ID = '-4762403835';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const succes = document.querySelector('.succes');


document.getElementById('form').addEventListener('submit', function(e){

    e.preventDefault();

    let message = 'Заявка с сайта \n' + 'Имя: ' + this.name.value + '\n' + 'Email: ' + this.email.value + '\n' + 'Телефон: ' + this.phone.value;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        //Сообщение доставлено
        succes.classList.remove('disp');
    })
    .catch((err) =>{
        //Сообщение не дошло
        console.warn(err); 
    })
    .finally(() =>{
        //В любом вариянте
        console.log('Скрипт выполнен')
    })
})