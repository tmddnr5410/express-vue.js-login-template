<template>
  <div class="login-view">
    <div class="rectangle-262"></div>

    <button type="button" class="button" @click="onLogin">LOGIN</button>

    <div class="login2">LOGIN</div>

    <div class="input id">
      <input
        id="uid"
        type="text"
        name="uid"
        placeholder="User Name"
        maxlength="16"
      />
    </div>

    <div class="input password">
      <input
        type="password"
        id="pw"
        name="password"
        placeholder="Password"
        maxlength="32"
      />
    </div>



  </div>
</template>
<script>
/* Code generated with AutoHTML Plugin for Figma */
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
  name: 'LogInPage',
  components: {
    RouterLink,
  },
  props: {},
  data() {
    
  },
  methods: {
    onLogin: async function () {
      const uid = document.getElementById('uid');
      console.log(uid.value);
      const password = document.getElementById('pw');

      let res = await axios({
        method: 'POST',
        url: 'api/login',
        data: {
          uid: uid.value,
          password: password.value,
        },
      }).then((res) => {
        console.log(res.data);

        if (res.data.success) {
          
          alert("로그인 성공 ");
          location.href = '#/';
        } else {
          alert(res.data.msg);
        }
      });
    },
  },
};
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
.rectangle-262 {
  border-radius: 22px;
  border-style: solid;
  border-color: #fbdc71;
  border-width: 1.5px;
  width: 310px;
  height: 45px;
  position: absolute;
  left: 40px;
  top: 590px;
}
.group-120 {
  position: absolute;
  left: 40px;
  top: 659px;
  overflow: visible;
}

.login2 {
  color: #143b22;
  text-align: left;
  font: 700 20px 'Roboto', sans-serif;
  position: absolute;
  left: calc(50% - 35px);
  top: 479px;
}

.input {
  border-radius: 22px;
  border-style: solid;
  border-color: #fbdc71;
  border-width: 1.5px;
  width: 310px;
  height: 45px;
  position: absolute;
  left: 40px;
  top: 529px;
}

.input > input {
  width: 100%;
  background: none;
  border: none;
  outline: none;
  font-family: 'Nanum Gothic', sans-serif;
  opacity: 0.7;
  padding-left: 60px;
  padding-top: 11px;
  font-size: 15px;
}

.find-my-id {
  color: #143b22;
  text-align: left;
  font: 400 14px 'Noto Sans', sans-serif;
  text-decoration: underline;
  position: absolute;
  left: 79px;
  top: 714px;
}
.find-my-pw {
  color: #143b22;
  text-align: left;
  font: 400 14px 'Noto Sans', sans-serif;
  text-decoration: underline;
  position: absolute;
  left: 166px;
  top: 714px;
}
.sign-up {
  color: #143b22;
  text-align: left;
  font: 400 14px 'Noto Sans', sans-serif;
  text-decoration: underline;
  position: absolute;
  left: 262px;
  top: 714px;
}
.click-here-if-you-are-manager {
  color: #143b22;
  text-align: left;
  font: 400 14px 'Noto Sans', sans-serif;
  text-decoration: underline;
  position: absolute;
  left: 167px;
  top: 795px;
}
.vector {
  position: absolute;
  left: 65px;
  top: 604px;
  overflow: visible;
}

.id {
  position: absolute;
  left: 40px;
  top: 529px;
  overflow: visible;
}
.password {
  position: absolute;
  left: 40px;
  top: 590px;
  overflow: visible;
}
.button {
  position: absolute;
  left: 40px;
  top: 659px;
  overflow: visible;
  background: #24128c;
  border-radius: 22px;
  width: 310px;
  height: 45px;
  font-size: 15pt;
  color: white;
  position: relative;
  border: none;
  cursor: pointer;
}

.vector2 {
  position: absolute;
  left: 65px;
  top: 543px;
  overflow: visible;
}
.gro-11111-2 {
  border-radius: 20px;
  width: 150px;
  height: 150px;
  position: absolute;
  left: 120px;
  top: 169px;
}
</style>
