import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: {
            items: []
        }
    },
    mutations: {
        addToCart(state, product) {
            // check product exists in cart
            let items = state.cart.items;
            let itemIndex = items.findIndex(item => {
                return item.id == product.id;
            });
            // if exists, increment the count
            if (itemIndex != -1) {
                items = items.map((item, index) => {
                    if (index === itemIndex) {
                        return Object.assign(item, {count: item.count + 1})
                    }

                    return item;
                })
            }
            // else, add product to cart
            else {
                items.push(Object.assign(product, {count: 1}))
            }

            state.cart.items = items;
        }
    },
    actions: {},
    getters: {
        cartItems: state => {
            return state.cart.items;
        },
        cartItemsCount: state => {
            return state.cart.items.length;
        },
        cartItemsSubTotal: state => {
            return state.cart.items.reduce((carry, item) => {
                return carry + (parseFloat(item.price) * item.count);
            }, 0).toFixed(2)
        },
        cartItemsTax: state => {
            return (state.cart.items.reduce((carry, item) => {
                return carry + (parseFloat(item.price) * item.count);
            }, 0).toFixed(2) * 0.06).toFixed(2)
        },
        cartItemsGrandTotal: state => {
            return (state.cart.items.reduce((carry, item) => {
                return carry + (parseFloat(item.price) * item.count);
            }, 0).toFixed(2) * 1.06).toFixed(2)
        }
    }
})
