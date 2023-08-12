<template>
  <div class="login-view">
    <div class="rectangle-262"></div>

    <button type="button" class="button" @click="onLogin">LOGIN</button>


    <div class="login2">Hi! if you want login?</div>

  </div>
</template>

<script>
/* Code generated with AutoHTML Plugin for Figma */

export default {
methods: {
    onLogin:  function () {
      
  
          location.href = '#/login';
      }
    },
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
.login-view * {
  box-sizing: border-box;
}
.login-view {
  background: #ffffff;
  width: 390px;
  height: 844px;
  position: relative;
  overflow: hidden;
}

.login2 {
  color: #143b22;
  text-align: center;
  font: 700 20px 'Roboto', sans-serif;
  position: center;
  left: calc(50% - 35px);
  top: 479px;
}



.button {
  position: absolute;
  left: 40px;
  top: 100px;
  overflow: visible;
  background: #251083;
  border-radius: 22px;
  width: 310px;
  height: 45px;
  font-size: 15pt;
  color: white;
  position: relative;
  border: none;
  cursor: pointer;
}

</style>
