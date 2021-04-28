<template>
  <div class="button-container">
    <div class="all-buttons">
      <div class="button red-btn">
        <router-link class="resume" to="/Resume">Resume</router-link>
      </div>
      &nbsp;&nbsp;
      <div class="button org-btn">
        <router-link class="music" to="/music">Music</router-link>
      </div>
      &nbsp;&nbsp;
      <div class="button-center">
        <router-link to="/">Patrick Talley</router-link>
      </div>
      <div class="button blue-btn">
        <a
          href="https://github.com/PatTalley?tab=repositories"
          target="_blank"
          class="github"
          >Git Hub</a
        >
      </div>
      &nbsp;&nbsp;
      <div class="button purp-btn">
        <router-link class="about" to="/about">About</router-link>
      </div>
    </div>
    <!-- <responsive-title>
      {{ displayText }}
    </responsive-title> -->
  </div>
</template>

<script>
export default {
  computed: {
    displayText() {
      return this.$mq === "mobile"
        ? "You are on a mobile device"
        : "You are on a larger device";
    },
  },
  name: "Banner",
  props: {
    msg: String,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Prata&family=Roboto&display=swap");

@media (max-width: 800px) {
  .button-center {
    height: 10em;
    width: 10em;
  }
  .button-container {
    flex-direction: column;
    height: 10em;
    width: 10em;
    margin-left: auto;
    margin-right: auto;
  }
  .all-buttons {
    flex-direction: row;
  }
}

body {
  transition: all 0.3s;
  background-color: #f2f7fd;
}



a {
  text-decoration: none;
}
a:visited {
  color: rgb(78, 77, 77);
}

.button-center {
  font-family: prata;
}

.all-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: abel;
  font-size: 30px;
}

.button {
  width: 180px;
  height: 70px;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin-top: 2rem;
  margin-bottom: 5rem;
  margin-left: 2em;
  margin-right: 2em;
  cursor: pointer;
  transition: all 0.3s;
}

.button-center {
  font-size: 80px;
  height: 150px;
  text-shadow: 0px 12px 15px rgba(68, 69, 70, 0.37); 
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(255, 255, 255, 0.555);
}

.button-container{
  /* background-color: rgba(197, 217, 230, 0.555); */
  background-color: rgba(1#dce5f0);
  box-shadow: inset 0px 0px 10px 9px rgba(153, 171, 192, 0.192)
}

.red-btn {
  -webkit-box-shadow: 0px 20px 20px -17px rgba(255, 16, 39, 0.5);
  -moz-box-shadow: 0px 20px 20px -17px rgba(255, 16, 39, 0.5);
  box-shadow: 0px 20px 20px -17px rgba(255, 16, 39, 0.5);
}

.red-btn:hover {
  -webkit-box-shadow: 0px 20px 35px -16px rgba(255, 16, 39, 0.57);
  -moz-box-shadow: 0px 20px 35px -16px rgba(255, 16, 39, 0.57);
  box-shadow: 0px 20px 35px -16px rgba(255, 16, 39, 0.57);

  background-color: darken(#fafafa, 2%);
  transform: translateY(-5px);
  transition: all 0.3s;
}

.org-btn {
  -webkit-box-shadow: 0px 20px 20px -17px rgba(255, 153, 0, 0.884);
  -moz-box-shadow: 0px 20px 20px -17px rgba(255, 153, 0, 0.89);
  box-shadow: 0px 20px 20px -17px rgba(255, 153, 0, 0.897);
}

.org-btn:hover {
  -webkit-box-shadow: 0px 20px 35px -16px rgba(255, 153, 0, 0.897);
  -moz-box-shadow: 0px 20px 35px -16px rgba(255, 153, 0, 0.897);
  box-shadow: 0px 20px 35px -16px rgba(255, 153, 0, 0.897);

  background-color: darken(#fafafa, 2%);
  transform: translateY(-5px);
  transition: all 0.3s;
}

.blue-btn {
  -webkit-box-shadow: 0px 20px 20px -17px rgba(0, 111, 255, 0.53);
  -moz-box-shadow: 0px 20px 20px -17px rgba(0, 111, 255, 0.53);
  box-shadow: 0px 20px 20px -17px rgba(0, 111, 255, 0.53);
}

.blue-btn:hover {
  -webkit-box-shadow: 0px 20px 35px -16px rgba(0, 111, 255, 0.65);
  -moz-box-shadow: 0px 20px 35px -16px rgba(0, 111, 255, 0.65);
  box-shadow: 0px 20px 35px -16px rgba(0, 111, 255, 0.65);

  background-color: darken(#fafafa, 2%);
  transform: translateY(-5px);
  transition: all 0.3s;
}

.purp-btn {
  -webkit-box-shadow: 0px 20px 20px -17px rgba(89, 0, 255, 0.53);
  -moz-box-shadow: 0px 20px 20px -17px rgba(89, 0, 255, 0.53);
  box-shadow: 0px 20px 20px -17px rgba(89, 0, 255, 0.53);
}

.purp-btn:hover {
  -webkit-box-shadow: 0px 20px 35px -16px rgba(89, 0, 255, 0.53);
  -moz-box-shadow: 0px 20px 35px -16px rgba(89, 0, 255, 0.53);
  box-shadow: 0px 20px 35px -16px rgba(89, 0, 255, 0.53);

  background-color: darken(#fafafa, 2%);
  transform: translateY(-5px);
  transition: all 0.3s;
}

.resume {
  text-shadow: 0px 0px 45px rgba(255, 16, 39, 0.5);
}

.music {
  text-shadow: 0px 0px 45px rgba(255, 159, 16, 0.53);
}

.github {
  text-shadow: 0px 0px 45px rgba(0, 111, 255, 0.53);
}

.about {
  text-shadow: 0px 0px 45px rgba(89, 0, 255, 0.53);
}


</style>
