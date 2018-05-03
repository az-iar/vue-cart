<template>
    <div class="product-list container mx-auto flex flex-wrap">
        <div class="w-1/4 p-4" v-for="product in products">
            <item :key="product.id" :product="product"></item>
        </div>
    </div>
</template>
<script>
    import Item from '@/components/products/ListItem.vue';

    export default {
        name: 'ProductList',
        components: {
            Item
        },
        data() {
            return {
                products: [
                    {id: 1, name: 'Apple', price: '1.00'},
                    {id: 2, name: 'Coconut', price: '4.00'},
                    {id: 3, name: 'Pineapple', price: '5.00'},
                    {id: 4, name: 'Grapes', price: '15.00'},
                    {id: 5, name: 'Banana', price: '3.00'},
                    {id: 6, name: 'Pear', price: '3.00'},
                    {id: 7, name: 'Orange', price: '3.00'},
                ]
            }
        }
    }
</script>