<template>
    <div class="mx-1 w-25">
        <div class="input-group">
            <div class="form-outline">
                <input type="search" id="form1" class="form-control" v-model="keySearch" @input="searchingCountryName"/>
            </div>
            <button type="button" class="btn my-btn rounded mx-1">
                Search
            </button>
        </div>
    </div>
</template>
<style scoped>
    .my-btn{
            border: 1px solid #ff1584;
            color: #ff1584;
        }
    #form1{
        border: 1px solid #ff1584;
    }
</style>
<script>

export default {
    emits: ['key-search'],
    props:{
        allCountries:Object
    },
    data() {
        return {
            keySearch: '',
        }
    },
    methods: {
        searchingCountryName(){
           this.$emit('key-search',this.keySearch)
        },
    },
}

</script>
