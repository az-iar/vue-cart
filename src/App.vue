<template>
    <div id="app">
        <div id="nav">
            <img src="./assets/supplycart.svg" alt="" class="block mx-auto mb-4">
            <router-link to="/">
                Home
            </router-link>
            |
            <router-link to="/cart">
                My Cart({{ cartItemsCount}})
            </router-link>
        </div>
        <router-view/>
        <footer class="my-6 text-center">
            <div class="copyright text-sm text-grey-dark">Copyright &copy; 2018 Azri Ismail</div>
        </footer>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters(['cartItemsCount'])
        }
    }
</script>
<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
