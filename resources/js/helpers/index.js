export function capitalizeEachWord(value) {
    if (!value) return '';

    /* Each Word Capitalization */
    const words = value.split("-");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
}
