function addFlower(id) {
    let cart = []
       cart= JSON.parse(localStorage.getItem('cart'))
    let flag = true
    let temp = 0;
    if (cart === null) {
        cart = []
    } else {

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
                temp = Number(cart[i].count);
                cart[i].count = temp + 1

                localStorage.setItem('cart',JSON.stringify(cart))
                flag = false
                break
            }
        }
    }


    if (flag) {
        console.log(1)
        let flower = flowers[id]

        temp = Number(flower.count);
        flower.count = 1
        cart[cart.length] = (flower)

        localStorage.setItem('cart', JSON.stringify(cart))

    }
    console.log(localStorage)


}