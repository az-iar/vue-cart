<template>
    <div class="product-list-item shadow p-3 text-center bg-white rounded">
        <img src="http://via.placeholder.com/500" alt="" class="mb-2 w-full">
        <h1 class="mb-4 text-2xl">{{ product.name }}</h1>
        <p class="mb-3">{{ formattedPrice }}</p>
        <Counter @increment="increment" @decrement="decrement" :value="itemCount"/>
    </div>
</template>
<script>
    import {mapMutations, mapGetters} from 'vuex';
    import Counter from '@/components/buttons/Counter';

    export default {
        components: {Counter},
        props: {
            product: {
                required: true,
                type: Object
            }
        },
        computed: {
            ...mapGetters(['cartItems']),
            formattedPrice() {
                return 'RM' + this.product.price;
            },
            itemCount() {
                let productInCart = this.cartItems.find(item => {
                    return item.id == this.product.id;
                });

                return productInCart ? productInCart.count : 0;
            }
        },
        methods: {
            ...mapMutations(['addToCart']),
            increment(count) {
                this.addToCart(Object.assign(this.product, {count: count}));
            },
            decrement(count) {
                this.addToCart(Object.assign(this.product, {count: count}));
            }
        }
    }
</script>