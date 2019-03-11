<template>
    <div>
         <router-view></router-view>
         
    </div>
    
</template>

<script>
import Profile from './dashboard/Profile'
import Dashboard from './dashboard/Dashboard'
export default {
    components:{Profile,Dashboard}
}
</script>

<style>

</style>
