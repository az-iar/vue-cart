<template>
    <div class="cart-item bg-white p-3 mb-2 shadow">
        <div class="flex">
            <img src="http://via.placeholder.com/500" alt="" width="100" height="100" class="mr-3">
            <div class="details flex-1 text-left">
                <h2 class="text-xl mb-2">{{ item.name }}</h2>
                <p>RM {{ item.price }}</p>
            </div>
            <div class="quantity w-1/5">
                {{ item.count }}
            </div>
            <div class="subtotal w-1/5">
                RM {{ item.price * item.count }}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            item: {
                required: true,
                type: Object
            }
        }
    }
</script>