/* function Stack(){
    var items = []
    this.push = function(element){
        items.push(element)
    }
    this.pop = function(){
        return items.pop()
    }
    this.peek = function(){
        return items[items.length - 1]
    }
    this.isEmpty = function(){
        return items.length === 0
    }
    this.clear = function(){
        items = []
    }
    this.size = function(){
        return items.length
    }
    this.print = function(){
    console.log(items.toString())
    }
}

 */

/* function dec2Bin(decNumber){
    var restStack = [],
    rest,
    binaryString = ''

    while(decNumber > 0){
        rest = Math.floor(decNumber % 2)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / 2)
    }

    while(restStack.length > 0) {
        binaryString += restStack.pop().toString()
    }
    return binaryString
}

console.log(dec2Bin(25)) */

function baseConverter(decNumber, base) {
    var restStack = [],
    rest,
    baseString = '',
    digits = '0123456789ABCDEF'

    while(decNumber > 0){
        rest = Math.floor(decNumber % base)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / base)
    }

    while(restStack.length > 0) {
        baseString += digits[restStack.pop()]
    }

    return baseString
}

console.log(baseConverter(123, 16))