const cartDiv = document.getElementById('cart');
let mas = []
mas = localStorage.getItem('cart')
let cart = []
let counts = new Map()

for (let i = 0; i < mas.length; i++) {
    let count = 0
    for (let j = 0; j < flowers.length; j++) {


        if (flowers[j].id === mas[i]) {
            if (counts.get(mas[i]) === undefined) {
                cart.push(flowers[j])
                counts.set(mas[i], 1)
            }
            else {
                let temp = counts.get(mas[i])
                temp += 1
                counts.set(mas[i], temp)
            }
        }
    }
}

if (cart === null) {
    const div = document.createElement('div')
    const emptyCart = document.createElement('h1')
    emptyCart.textContent = 'Cart is empty'
    div.appendChild(emptyCart)
    cartDiv.appendChild(div)
} else {

    for (let flower in cart) {

        const div = document.createElement('div')
        const deleteButton = document.createElement('button')
        deleteButton.textContent = "delete"
        deleteButton.id = "delButton"
        deleteButton.style = "font-size: 4vw;"
        deleteButton.onclick = function () {
            if (counts.get(cart[flower]) === 1) {
                cartDiv.removeChild(div)
            }

            let flowers = []
            count = 0
            let newFlowers = []
            flowers = localStorage.getItem('cart')
            for (let i = 0; i < flowers.length; i++) {
                if ((flowers[i] !== flower || count == 1) && flowers[i] != ',')
                    newFlowers.push(flowers[i])
                else if (flowers[i] !== ',') {
                    count = 1
                }
            }
            localStorage.setItem('cart', newFlowers)
            console.log(flowers)
            console.log(newFlowers)
            document.location.href = '../cart.html'
        }
        const countFlower = document.createElement('h2')
        countFlower.textContent = counts.get(cart[flower].id)
        const flImg = document.createElement('img')
        flImg.src = cart[flower].img
        const name = document.createElement('h1')
        name.textContent = cart[flower].name
        const price = document.createElement('h2')
        price.textContent = `${cart[flower].price}£`

        // plus button
        const plusButton = document.createElement('button')
        plusButton.textContent = '+'
        plusButton.style = "font-size: 4vw;"
        plusButton.id = "plusButton"

        // minus button
        const minusButton = document.createElement('button')
        minusButton.textContent = '-'
        minusButton.style = "font-size: 4vw;"
        minusButton.id = "minusButton"

        const dividerElems = document.createElement('p')
        dividerElems.textContent = '.'

        div.appendChild(name)
        div.appendChild(price)
        div.appendChild(flImg)
        div.appendChild(deleteButton)
        div.appendChild(countFlower)
        div.appendChild(plusButton)
        div.appendChild(minusButton)
        div.appendChild(dividerElems)
        cartDiv.appendChild(div)
    }
}
;