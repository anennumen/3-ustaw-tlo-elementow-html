console.log('WARSZTAT - Ustaw tło elementów HTML');

const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
    console.log(p2);
   
    p1.classList.add('bg-red');
    p2.classList.add('bg-yellow');


    //p1.classList.toggle('bg-red'); - inna metoda zamiast ,,add,,
    //p2.classList.toggle('bg-yellow');

    //p1.style.backgroundColor = 'red'; - nie stosować tej metody !
    //p2.style.backgroundColor = 'yellow';
}


let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click', setBackground);