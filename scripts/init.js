const isRealSekaisen = window.location.search === "?1.048596";

const bgm = new Audio(`./audio/${isRealSekaisen ? "hacking_to_the_gate" : "believe_me"}.mp3`);
bgm.loop = true;

const defaultText = isRealSekaisen ? "1.048596" : "0.000000";

const interval = isRealSekaisen ? {
    measure: 1800,
    stable: 600,
    total: 3000
} : {
    measure: 1800,
    stable: 600,
    total: 3750
}

export {
    bgm, defaultText, interval
}