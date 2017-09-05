var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor((Math.random() * 100))
 var newItem = { [item]: itemPrice }
 cart = [...cart, newItem]
 console.log(item + ' has been added to your cart.')
 return cart
}

function viewCart() {
  if (!cart.length) {
    console.log('Your shopping cart is empty.')
    return cart
  }
  var itemsAndPrices = []
  for (var i = 0; i < cart.length; i++) {
    itemsAndPrices.push('${cart[i].key} at $${cart.}')
  }
  console.log('In your cart, you have '+ ${itemsAndPrices.join(', ')}'.')
  return cart
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  if (!item) {
    return 'That item is not in your cart.'
  }
  var eachItem = new Object()
  for (var i = 0; i < cart.length; i++) {
    eachItem = cart[i]
    if (Object.keys(eachItem) === item) {
      delete cart[i]
    }
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
