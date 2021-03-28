document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById('counter');
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let heart = document.getElementById('heart');
    let pause = document.getElementById('pause');
    let comments = document.getElementsByClassName('comments');
    let likes = document.getElementsByClassName('likes');
    function incrementCounter() {
        counter.innerText = parseInt(counter.innerText) + 1
    }

    let interval = setInterval(incrementCounter, 1000);

    pause.onclick = function stopCounter() {
        if (pause.innerText === "pause") {
            clearInterval(interval);
            pause.innerText = "resume";
        } 
        else {
            interval = setInterval(incrementCounter, 1000);
            pause.innerText = "pause";
        }
    }


    minus.onclick = function minusCounter() {
        let newValue = parseInt(counter.innerText) - 1;
        counter.innerText = newValue;
    }


    plus.onclick = function addCounter() {
        let newValue = parseInt(counter.innerText) + 1;
        counter.innerText = newValue;
    }

    heart.onclick = function likeNumber(counter,freq) {
        console.log(`${counter} has been liked ${freq} times.`)
    }



  });



