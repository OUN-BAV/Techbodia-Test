<template>
    <div class="row">
        <div class="col-md-3 mx-1 my-2">
            <select2Component v-model="myValue" :options="myOptions" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" placeholder="select country name"/>
        </div>
    </div>
</template>
<script>
import select2Component from 'vue3-select2-component'

export default {
    components: {select2Component},
    props:{
        allCountries:Object
    },
    data() {
        return {
            myValue: '',
            myOptions: [] // or [{id: key, text: value}, {id: key, text: value}]
        }
    },
    methods: {
        myChangeEvent(val){
            console.log(val);
        },
        mySelectEvent({id, text}){
            console.log({id, text})
        },
        allOption(){
           for (let country in this.allCountries){
               this.myOptions.push(this.allCountries[country].name.official);
           }
        }
    },
    mounted(){
        this.allOption()
    }

}

</script>
