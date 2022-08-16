const caesarCipher = (str) => {
    let arr = []

    for(let i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i))
    }

    let newArr = []

    arr.forEach(el => {
        if(el > 109 && el <= 122) {
            newArr.push(97 + (el + 13) - 123)
        } else if(el > 77 && el <= 90) {
            newArr.push(65 + (el + 13) - 91)
        } else if((el >64 && el <= 77) || (el > 96 && el <= 109)) {
            newArr.push(el + 13)
        } else {
            newArr.push(el)
        }
        
    })

    return String.fromCharCode(...newArr);
}

export default caesarCipher