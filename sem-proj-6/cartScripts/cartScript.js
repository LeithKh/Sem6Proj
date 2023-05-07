function empty(){
    const div = document.createElement('div')
    const emptyCart = document.createElement('h1')
    emptyCart.textContent = 'Cart is empty :c'
    div.appendChild(emptyCart)
    cartDiv.appendChild(div)
}

const cartDiv = document.getElementById('cart');
let cart = JSON.parse(localStorage.getItem('cart'))
if (cart === null||cart.length==0) {
    empty()
}
else {
    let totalPrice = 0;
    console.log(cart)
    for (let flower in cart) {

        const div = document.createElement('div')
        const deleteButton = document.createElement('button')
        deleteButton.textContent = "delete"
        deleteButton.id = "delButton"
        deleteButton.style = "font-size: 4vw;"
        deleteButton.onclick = function () {
            cartDiv.removeChild(div)
           cart=cart.filter(function (obj) {
               console.log('cart'+obj.id+" flower"+flower.id)
               return obj.id!=cart[flower].id

           })
            localStorage.setItem('cart', JSON.stringify(cart))
            console.log(cart)
            if(cart.length==0){
                empty()
            }
        }
        let countFlower = document.createElement('h2')
        countFlower.textContent = "amount: "+cart[flower].count
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
        plusButton.onclick=function (){
            cart[flower].count += 1
            countFlower.textContent = "amount: "+cart[flower].count
        localStorage.setItem('cart',JSON.stringify(cart))
        }

        // minus button
        const minusButton = document.createElement('button')
        minusButton.textContent = '-'
        minusButton.style = "font-size: 4vw;"
        minusButton.id = "minusButton"
        minusButton.onclick = function () {
            if (cart[flower].count === 1) {
                cartDiv.removeChild(div)
                cart=cart.filter(function (obj) {
                    console.log('cart'+obj.id+" flower"+flower.id)
                    return obj.id!=cart[flower].id

                })} else {
                cart[flower].count -= 1
                countFlower.textContent = "amount: "+cart[flower].count

            }
            localStorage.setItem('cart',JSON.stringify(cart))
            if(cart.length==0){
               empty()
            }
        }

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
        
        //total price counter
        totalPrice += cart[flower].price * cart[flower].count;

    }
    console.log(totalPrice);
    let priceShow = document.createElement('h1')
    priceShow.textContent = "Total price: "+totalPrice;
    cartDiv.appendChild(priceShow);
    
    const buyNow = document.createElement('button')
    buyNow.textContent = 'Place an order'
    buyNow.id = "buyNowButton"
    cartDiv.appendChild(buyNow);
}
;