const adjectives = ["slow", "agile", "fast"];
const nouns = ["Joe", "Jack", "John"];

function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}

export function RandomNameButton(props) {

    function handleClick() {
        props.onRandomName(getRandomName);
    }

    return(
        <button type="button" onClick={handleClick}>Get random name</button>
    );
}