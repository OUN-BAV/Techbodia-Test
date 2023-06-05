<template>
    <div>
        <slot name="country-name">
    
        </slot>
        <div class="modal modal-lg fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Country Details Information</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="col-md-12">
                            <div class="card p-1 text-center">
                                <div class="card-body">
                                    <img :src="flag" class="w-75" alt="">
                                </div>
                                <h6 class="fw-bold">{{ officialName.toUpperCase() }}</h6>
                                <div class="row text-left">
                                    <p>
                                        <strong>Country Code : </strong>
                                        {{ countryCode }}
                                        <br>
                                        <strong>Country Comon Name : </strong>
                                        {{ commonName }}
                                        <br>
                                        <strong>Capital : </strong>
                                        {{ countyCapital }}
                                        <br>
                                        <strong>Region : </strong>
                                        {{ Region }}
                                        <br>
                                        <strong>Languages : </strong>
                                        {{ countyLanguages }}
                                    </p>
                                </div>
                               
                            </div>
                        </div>
                        
                        <div class="mt-2 col-md-12">
                            <p v-if="description">
                                <strong>Flag Description :</strong>
                                {{ description }}
                            </p>
                        </div>
                        <div class="mt-2 col-md-12 text-center">
                            <p v-if="CoatOfArms">
                                <strong>COAT OF ARM</strong>
                                <br>
                                <img :src="CoatOfArms??''" class="w-50" alt="">
                            </p>
                        </div>
                        <div class="col-md-12 text-center">
                            <div class="embed-responsive embed-responsive-16by9">
                                <strong>Map :</strong>
                                <iframe title="google map" :src="countryMaping" width="100%" height="100%" frameborder="1" style="border:0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        Country:Object
    },
    data(){
        return {
            countryInfo:{},
            flag:'',
            officialName:'',
            root:'',
            suffixes:'',
            commonName:'',
            description:'',
            capitals:'',
            Region:'',
            Languages:'',
            countryMaping:'',
            CoatOfArms:''
        }
    },
    computed:{
        imageFlag(){
            return this.countryInfo.flags
        },
        countryCode(){
            if( typeof this.suffixe !== undefined && typeof this.root !== undefined){
                return this.root+this.suffixes
            }
            return '';
        },
        countyCapital(){
            let result = ''
            for (let campital in this.capitals){
                result+=this.capitals[campital]+' '
            }
            return result;
        },
        countyLanguages(){
            let result = ''
            for (let campital in this.Languages){
                console.log(campital);
                result+=this.capitals+' '
            }
            return result;
        }
    },
    methods:{
        formartData(){
            console.log(Object.keys(this.Country).length);
            if(Object.keys(this.Country).length !== 0){
                this.countryInfo = this.Country;
                this.flag = this.countryInfo.flags.png;
                this.officialName = this.countryInfo.name.official;
                console.log(this.countryInfo.idd.root !== undefined);
                if(this.countryInfo.idd.root !== undefined && this.countryInfo.idd.suffixes[0] !== undefined){
                    this.root = this.countryInfo.idd.root;
                    this.suffixes = this.countryInfo.idd.suffixes[0];
                }
                this.commonName = this.countryInfo.name.common;
                this.description = this.countryInfo.flags.alt;
                this.capitals = this.countryInfo.capital;
                this.Region = this.countryInfo.region;
                this.Languages = this.countryInfo.languages;
                this.countryMaping = this.countryInfo.maps.googleMaps;
                this.CoatOfArms = this.countryInfo.coatOfArms.png;
            }
        }
    },
    beforeUpdate(){
       this.formartData()
    }
}
</script>