<template>
    <div class="col-md-3 p-1">
        <div class="card">
            <img :src="this.countries.flags.png" class="w-100 card-img-top" height="200" alt="" srcset="">
            <div class="card-footer text-start">
              <div class="col-md-12 company-height text-truncate">
                  <a href="#" class="h5 text-decoration-none text-truncate" rel="noopener noreferrer">{{ countries.name.official }}</a>
              </div>
              <button class="btn my-btn col-md-6">View more-></button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            countries:Object,
        },
    }
</script>
<style scoped>
    .my-btn{
        border: 1px solid #ff1584;
        color: #ff1584;
    }
    .company-height{
        height: 50px;
    }
</style>