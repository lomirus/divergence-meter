import { sleep } from "./lib.js"
import { bgm, defaultText, interval } from "./init.js"

const hendouritsu = document.querySelector("main");

hendouritsu.textContent = defaultText;
hendouritsu.setAttribute("data-text", defaultText);

async function play() {
    const measureTimer = setInterval(() => {
        const text = (Math.random() * 5).toFixed(6).toString();
        hendouritsu.textContent = text;
        hendouritsu.setAttribute("data-text", text);
    }, 50)
    const stableTimer = setInterval(() => {
        hendouritsu.style.transform = `translate(${(Math.random() - 0.5) * 10}%, ${(Math.random() - 0.5) * 10}%)`
    }, 50)

    await sleep(interval.measure);
    clearInterval(measureTimer);

    await sleep(interval.stable);
    clearInterval(stableTimer);
    hendouritsu.style.transform = "none"
}

async function init() {
    bgm.play()
    while (true) {
        play()
        await sleep(interval.total);
    }
}

document.onclick = () => {
    document.onclick = null
    init()
}
