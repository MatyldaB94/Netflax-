export function truncate(string, maxLength) {
    if (string.length < maxLength) {
        return string
    }
    return string.substring(0, maxLength) + "..."
}

export function getRandomArrayElement(array) {
    const arrayLength = array.length
    if (arrayLength === 0) {
        console.error("can not get random element of empty element")
    }
    const randomNumber = Math.random()
    const randomArrayIdex = Math.floor(randomNumber * arrayLength)

    return array[randomArrayIdex]
}

// wygenerowaliśmy generyczne metody, które mogą być użyte  wielu miejscach(komponentach) w kodzie.
// 