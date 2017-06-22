<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Message></Message>
    <WatchList></WatchList>
    <News></News>
  </div>
</template>

<script>
//Impoerted Components
import Message from './components/Message';
import WatchList from './components/WatchList';
import News from './components/News';

export default {
  name: 'app',
  components: {
    Message,
    WatchList,
    News
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
  background-color: black;
}
</style>
