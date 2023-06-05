<template>
    <div>
    <div class="d-flex justify-content-between align-items-start w-100">
        <filterComponent @key-search="searchCountry"></filterComponent>
    
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" 
            v-if="isPreDisable" 
            @click="onPrePag">
                <a class="page-link" href="#">{{ '<<' }}</a>
            </li>
    
            <li 
            class="page-item" 
            v-for="(num,index) in pageNum" 
            :key="index" 
            @click="paginatPagNumber(num)">
                <a class="page-link" href="#">{{ num }}</a>
            </li>
    
            <li 
            class="page-item"
            v-if="isNextDisable"
            @click="onNextPag"
            >
                <a class="page-link" href="#">{{ '>>' }}</a>
            </li>
          </ul>
        </nav>
    </div>

    <table 
    id="example" 
    class="table table-striped dt-responsive nowrap" 
    style="width:100%">
        <thead>
            <tr>
                <th class="text-left align-text-top" >#N</th>
                <th class="text-left align-text-top">Flag</th>
                <th class="text-left align-text-top">Country name</th>
                <th class="text-left align-text-top">Country native name</th>
                <th class="text-left align-text-top">Alternative Country Name </th>
                <th class="text-left align-text-top">Country code (cca2)</th>
                <th class="text-left align-text-top">Country code (cca3)</th>
                <th class="text-left align-text-top">Country Calling Codes</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(country,index) in getAllCountry" :key="index">
                <td v-if="(index+1) >= startIndexCurrentPag && (index+1) <= endIndexCurrentPag" class="text-left">{{ index+1 }}</td>
                <td v-if="(index+1) >= startIndexCurrentPag && (index+1) <= endIndexCurrentPag" class="text-left"><img :src="country.flags.png ?? ''" width="100" alt=""></td>
                <td v-if="(index+1) >= startIndexCurrentPag && (index+1) <= endIndexCurrentPag" class="text-left">
                    <modalPopup :Country="oneCountry">
                        <template v-slot:country-name>
                            <a @click="propCountryToModal(country)" href="" class="text-decoration-none text-dark text-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">{{country.name.official ?? ''}}</a>
                        </template>
                    </modalPopup>
                </td>
                <td v-if="(index+1) >= startIndexCurrentPag && (index+1) <= endIndexCurrentPag" class="text-left">{{ getNativeName(country.name.nativeName) ?? ''}}</td>
                <td v-if="(index+1) >= startIndexCurrentPag && (index+1) <= endIndexCurrentPag" class="text-left">{{ country.altSpellings[2] ?? '' }}</td>
                <td v-if="(index+1) >= startIndexCurrentPag && (index+1) <= endIndexCurrentPag" class="text-left">{{ country.cca2 }}</td>
                <td v-if="(index+1) >= startIndexCurrentPag && (index+1) <= endIndexCurrentPag" class="text-left">{{ country.cca3 }}</td>
                <td v-if="(index+1) >= startIndexCurrentPag && (index+1) <= endIndexCurrentPag" class="text-left">{{ countryCode(country.idd.root,country.idd.suffixes) }}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>
<style scoped>
.page-link{
    color: #ff1584;
}
</style>

<script>
import filterComponent from '../card-component/filter-component.vue';
import modalPopup from '../modal-component/modal-component.vue'
export default {
    components:{
        filterComponent,
        modalPopup
    },
    props:{
        allCountries:Array
    },
    data(){
        return{
            countriesInformation:[],
            startIndexCurrentPag:1,
            endIndexCurrentPag:25,
            pageNum:[1,2,3],
            keySearch:'',
            oneCountry:{},
        }
    },
    computed:{
        isPreDisable(){
            if(this.pageNum[0] === 1){
                return false;
            }
            return true
        },
        isNextDisable(){
            if(this.allCountries!== null && this.pageNum[2] === (this.allCountries.length/25)){
                return false;
            }
            return true
        },
        getAllCountry(){
            return this.countriesInformation.filter(country=>{
                return country.name.official.toLowerCase().indexOf(this.keySearch.toLowerCase()) > -1
            })
        },
    },
    methods:{
        increaseOrDecreasePageNum(keyword){
            let newArr = []
            if(keyword === 'increase'){
                for (let num in this.pageNum){
                    if((this.pageNum[num]*25)<this.allCountries.length){
                        num = this.pageNum[num] + 1
                        newArr.push(num)
                    }
                }
               
            }else{
                for (let num in this.pageNum){
                    if(this.pageNum[num]>0 && this.pageNum[0]>0){
                        num = this.pageNum[num] - 1
                    }
                    newArr.push(num)
                }
            }
            if(newArr.length===3){
                    this.pageNum = newArr;
                }
        },
        onNextPag(){
            if(this.endIndexCurrentPag < this.allCountries.length){
                this.startIndexCurrentPag = this.endIndexCurrentPag+1;
                this.endIndexCurrentPag +=25 
                this.increaseOrDecreasePageNum('increase')
            }
        },
        onPrePag(){
            if(this.endIndexCurrentPag > 25){
                this.startIndexCurrentPag -= 25;
                this.endIndexCurrentPag -= 25
                this.increaseOrDecreasePageNum('decrease')
            }
        },
        paginatPagNumber(pagNumber){
            this.endIndexCurrentPag = 25*pagNumber
            this.startIndexCurrentPag = this.endIndexCurrentPag -25
        }, 
        searchCountry(keyword){
            this.keySearch = keyword
        },
        propCountryToModal(country){
            this.oneCountry = country;
            console.log(this.oneCountry);
        },
        getNativeName(object){
            let result = ''
            for (let key in object){
                result+=object[key].official+"\n"
            }
            return result;
        },
        countryCode(root,suffixe){
            if( suffixe !== undefined && root !== undefined){
                return root+suffixe
            }
            return ''
        },
    },
    beforeUpdate(){
        this.countriesInformation = this.allCountries;
    }

}
</script>