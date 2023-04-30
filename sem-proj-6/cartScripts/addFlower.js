function addFlower(id) {
  console.log(id)
  if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', id)
  }
  else {
    let cart = [];
    cart.push(id + ',')
    cart += localStorage.getItem('cart')

    localStorage.setItem('cart', cart)

    //localStorage.clear()
  }
  console.log(localStorage)

}