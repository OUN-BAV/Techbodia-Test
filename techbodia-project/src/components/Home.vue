<template>
  <div class="container bg-light p-3">
    
    <div class="row">
    <tableComponent :allCountries="allCountries"></tableComponent>
    </div>
  </div>
</template>
<style>
  .page-link .page-item{
    color: #ff1584;
  }
</style>

<script>
import tableComponent from './datatable-component/datatable-component.vue';
import axios from 'axios';
import { ref } from 'vue';
import "vue-awesome-paginate/dist/style.css";
export default {
  name: 'HelloWorld',
  components:{
    tableComponent,
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
