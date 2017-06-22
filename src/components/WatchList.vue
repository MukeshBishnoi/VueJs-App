<template>
    <div class="demo">
        <h3>Watch List</h3>
        <demo-grid
            :data="gridData"
            :columns="gridColumns">
        </demo-grid>
    </div>
</template>

<script>
export default {
    name: 'demo',
    data(){
        return {
            //watchList data have been picked from store
            gridColumns: this.$store.state.Columns,
            gridData: this.$store.state.Data
        }
    },
    components: {'demo-grid' : {
        template:
            `<table>
                <thead>
                    <tr>
                        <th v-for="key in columns"
                        @click="sortBy(key)"
                        :class="{ active: sortKey == key }">
                        {{ key | capitalize }}
                        <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                        </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="entry in filteredData">
                        <td v-for="key in columns">
                        {{entry[key]}}
                        </td>
                    </tr>
                </tbody>
            </table>`,
        props: {
            data: Array,
            columns: Array
        },
        data: function () {
            var sortOrders = {}
            this.columns.forEach(function (key) {
            sortOrders[key] = 1
            })
            return {
            sortKey: '',
            sortOrders: sortOrders
            }
        },
        computed: {
            filteredData: function () {
            var sortKey = this.sortKey
            var order = this.sortOrders[sortKey] || 1
            var data = this.data
            if (sortKey) {
                data = data.slice().sort(function (a, b) {
                a = a[sortKey]
                b = b[sortKey]
                return (a === b ? 0 : a > b ? 1 : -1) * order
                })
            }
            return data
            }
        },
        filters: {
            // Filter to make table headerss in capital letter
            capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
            }
        },
        methods: {
            //methods to sort data with respective columns
            sortBy: function (key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
            }
        }
    }}
}
</script>

<style>
th.active {
  color: red;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.6;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid black;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid black;
}
</style>
