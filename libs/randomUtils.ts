export function getRandomInt(min, max){

    return Math.floor(Math.random()* (max-min+1))+min;
}

export function getrandomText(){

    const randomText = Math.random().toString(36).substring(2,9).toUpperCase();
    return randomText;
}