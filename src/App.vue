<template>
  <div id="app">
   <HeaderTop></HeaderTop>
    <router-view/>
  </div>
</template>

<script>
import HeaderTop from './components/Header'
export default {
  name: 'App',
  components:{
    HeaderTop 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
