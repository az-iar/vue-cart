<template>
    <div class="btn-counter flex">
        <button class="block flex-1 bg-green hover:bg-green-dark text-white p-3 rounded-l font-bold uppercase"
                @click="decrement">
            -
        </button>
        <input type="text" v-model="currentValue" class="block text-center">
        <button class="block flex-1 bg-green hover:bg-green-dark text-white p-3 rounded-r font-bold uppercase"
                @click="increment">
            +
        </button>
    </div>
</template>
<script>
    export default {
        props: {
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            value: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                currentValue: 0
            }
        },
        watch: {
            currentValue(newVal, oldVal) {
                let val = parseInt(newVal);

                if (val == '' || val.length == 0 || isNaN(val)) {
                    this.currentValue = 0;
                } else if (val > this.max) {
                    this.currentValue = parseInt(oldVal);

                    return;
                } else if (parseInt(newVal) < this.min) {
                    this.currentValue = parseInt(oldVal);

                    return;
                } else {
                    this.currentValue = val;
                }
            }
        },
        methods: {
            increment() {
                if (this.currentValue < this.max) {
                    this.currentValue += 1;
                    this.$emit('increment', this.currentValue);
                    this.$emit('input', this.currentValue)
                }
            },
            decrement() {
                if (this.currentValue > this.min) {
                    this.currentValue -= 1;
                    this.$emit('decrement', this.currentValue);
                    this.$emit('input', this.currentValue)
                }
            }
        },
        mounted() {
            this.currentValue = this.value;
        }
    }
</script>