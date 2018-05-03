<template>
    <div class="product-list-item shadow p-3 text-center bg-white rounded">
        <img src="http://via.placeholder.com/500" alt="" class="mb-2 w-full">
        <h1 class="mb-4 text-2xl">{{ product.name }}</h1>
        <p class="mb-3">{{ formattedPrice }}</p>
        <button class="block w-full bg-green hover:bg-green-dark text-white p-3 mx-auto rounded font-bold uppercase"
                type="button" @click="addToCart(product)">
            Add To Cart
        </button>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex';

    export default {
        props: {
            product: {
                required: true,
                type: Object
            }
        },
        computed: {
            formattedPrice() {
                return 'RM' + this.product.price;
            }
        },
        methods: mapMutations(['addToCart'])
    }
</script>