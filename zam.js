const maas = Number(prompt("lutfen maasinizi girin"));
const minimummaas = 5500;
const artanmaas = maas >= minimummaas ? maas * 1.1 : maas * 1.5;
console.log("maas:", maas, "artanmaas", Math.trunc(artanmaas));
