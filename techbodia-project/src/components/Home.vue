<template>
  <div class="container bg-light p-3">
    
    <div class="row">
      <filterComponent :allCountries="allCountries"></filterComponent>
      <VueAwesomePaginate
      :total-items="50"
      :items-per-page="5"
      :max-pages-shown="5"
      v-model="currentPage"
      :on-click="onClickHandler"
    />
      
      <cardComponent v-for="(counties, id) in allCountries" :countries="counties" :key="id"></cardComponent>
    </div>
  </div>
</template>
<style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>

<script>
import cardComponent from './card-component/card-component.vue';
import filterComponent from './card-component/filter-component.vue';
import axios from 'axios';
import { ref } from 'vue';
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
export default {
  name: 'HelloWorld',
  components:{
    cardComponent,
    filterComponent,
    VueAwesomePaginate
  },
  props: {
    msg: String
  },
  data(){
    return{
      allCountries:null,
      currentPage:ref(1),
      lengthCounties:null
    }
  },
  methods:{
    async getAllCounties(){
      await axios.get('https://restcountries.com/v3.1/all').then(res=>{
        this.allCountries = res.data
        this.lengthCounties = this.allCountries.length
    })
    },
    onPageChange(newPage) {
      this.currentPage.value = newPage;
  }
  },
  mounted(){
    this.getAllCounties()
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
    --main-color:#ff1584;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
