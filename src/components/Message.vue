<template>
    <div class="msg">
        <h4>{{ heading }}</h4>
        <h5>{{ platform }}</h5>
        <hr>
    </div>
</template>

<script>
export default {
    name:'msg',
    data(){
        return {
            // Header message for application
            heading: 'VueJs APP',
            platform: 'NASDAQ Stock Trading Platform'
        }
    }
}
</script>

<style>
hr {
    border: 0;
    border-top: 1px solid grey;
    margin: 6px;
}
h4,h5 {
    margin : 2px;
}
</style>