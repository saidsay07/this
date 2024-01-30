function hello() {
    // Просто this выводит window
    console.log("person", this)
}

const person = {
    name: "Said",
    age: 16,
    // Вызывает object person
    sayHello: hello,
    // Вызывает взависимости от состаяние bind
    sayHelloWindow: hello.bind(this),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: "Elena",
    age: 25
}

// Вызывает logInfo с обьекта lena(bind надо вызывать)
person.logInfo.bind(lena, "Frontend", "+996 708 88 26 68")()
// Вызывает logInfo с обьекта lena(call самовызывающий)
person.logInfo.call(lena, "Frontend", "+996 708 88 26 68")
// Вызывает logInfo с обьекта lena(apply самовызывающий)
person.logInfo.apply(lena, ["Frontend", "+996 708 88 26 68"])

// Практика по prototype и this
Array.prototype.multiplyBy = function (n) {
    return this.map((item) => {
        return item * n
    })
}

console.log([1,2,3,4,5].multiplyBy(5))