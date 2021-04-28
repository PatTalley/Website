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
  height: 45em;
  width: auto;
  align-content: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 800px) {
  .welcome {
    height: 15em;
    margin-top: 25em;
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