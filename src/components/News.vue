<template>
    <div class="demo">
        <h3>News</h3>
        <table>
            <thead>
                <tr>
                    <th>News</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in newsData">{{entry.newsfeed}}</tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'demo',
    data () {
        return {
            newsData: this.$store.state.newsData
        }
    }
}
</script>

<style>
h3 {
    margin: 0 0 10px 0;
    padding: 3px;
    font-size: 13px;
    background-color: #191919;
    color: #fff;
    text-align: left;
}
table {
    margin: 10px;
    border: 2px solid #191919;
    border-radius: 3px;
    width : 700px
}
th, td {
    padding: 5px;
}
th {
    background: #A3A3A3;
    color : black;
}
tr:nth-child(odd) {
    background:  #191919;
}
</style>
