const hamster = document.querySelector('div.hamster'),
    counter = document.querySelector('div.counter h3');

time = 10;

const catchHamster = () => {
    counter.textContent++
    if (counter.textContent <= 9) {

        time--;
        hamster.style.animationDuration = time + "s";
    } else {

        time = 1;
    }

}


hamster.addEventListener('click', catchHamster)