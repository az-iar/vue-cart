<template>
    <div class="container cart mx-auto w-2/3">
        <div class="flex">
            <div v-if="!cartItems.length" class="w-full cart-item bg-white p-3 mb-2 shadow text-center">
                <p>You have no item in cart</p>
            </div>
            <div class="w-2/3" v-if="cartItems.length">
                <CartItem v-for="item in cartItems" :item="item"/>
            </div>
            <div class="w-1/3 pl-3" v-if="cartItems.length">
                <div class="grand-total text-right p-3 bg-white ml-auto shadow">
                    <div class="flex mb-4">
                        <div class="text-right w-2/3">Subtotal(RM)</div>
                        <div class="w-1/3">{{ cartItemsSubTotal }}</div>
                    </div>
                    <div class="flex mb-4">
                        <div class="text-right w-2/3">GST 6%(RM)</div>
                        <div class="w-1/3">{{ cartItemsTax }}</div>
                    </div>
                    <div class="flex mb-4">
                        <div class="text-right w-2/3 font-bold">GRAND TOTAL(RM)</div>
                        <div class="w-1/3">{{ cartItemsGrandTotal }}</div>
                    </div>
                    <button class="block w-full bg-green hover:bg-green-dark text-white p-3 mx-auto rounded font-bold uppercase"
                            type="button" @click="addToCart(product)">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    import CartItem from '@/components/cart/Item.vue';

    export default {
        components: {
            CartItem
        },
        computed: {
            ...mapGetters(['cartItems', 'cartItemsSubTotal', 'cartItemsTax', 'cartItemsGrandTotal'])
        }
    }
</script>