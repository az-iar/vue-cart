<template>
    <div class="home">
        <ProductList></ProductList>
    </div>
</template>

<script>
    import ProductList from '@/components/catalog/List.vue'

    export default {
        name: 'home',
        components: {
            ProductList
        }
    }
</script>
