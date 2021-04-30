<template>
  <div class="welcome">
    <div class="animation">
      <!-- <img src="../assets/Welcome-vid.gif"/> -->
    </div>
    <img class="bg" src="../assets/Welcome.png" />

    
  </div>
  
</template>

<script>

export default {


};
</script>

<style>
.welcome {
  display: flex;
  height: 35em;
  width: auto;
  align-content: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10em;
}

@media (max-width: 800px) {
  .welcome {
    height: 20em;
    margin-top: 15em;
  }
}

/* .animation{
  display: flex;
  height: 45em;
  width: auto;
  align-content: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
} */

</style>