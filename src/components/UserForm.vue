<template>
  <div class="login-container">
    <div class="login-box">
      <div class="pica-logo">
        <!-- pica logo or icon -->
        <img src="../assets/pica.gif" alt="pica Logo">
      </div>
      <h1 class="large-heading">Add Pica Account</h1>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="username" class="label-large">Username</label>
          <input type="text" id="username" v-model="userData.username" class="form-control">
        </div>
        <div class="form-group">
          <label for="password" class="label-large">Password</label>
          <input type="password" id="password" v-model="userData.password" class="form-control">
        </div>
        <!-- 错误提示 -->
        <p v-if="responseMessage" class="error-message">{{ responseMessage }}</p>
        <button type="submit" class="btn btn-primary">Add</button>
      </form>
    </div>
  </div>
</template>


<script>

import axios from "axios";

export default {
  data() {
    return {
      userData: {
        username: "",
        password: ""
      },
      responseMessage: ""
    };
  },
  methods: {
    async registerUser() {
      const apiUrl = '/api/user'; // 将此处替换为您的API主机和端点URL

      axios.post(apiUrl, this.userData, {
        withCredentials: true,  // 启用跨域凭据
        headers: {
          'Content-Type': 'application/json'
        }
      })
          .then(response => {
            if (response.status === 201) {
              this.responseMessage = "User added successfully";
            }
          })
          .catch(error => {
            console.error(error);
            if (error.response.status === 401) {
              this.responseMessage = "Password Error";
            } else {
              this.responseMessage = "An error occurred";
            }
          });
    }
  }
};
</script>


<style scoped>
/* 弹窗动画效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* 弹窗样式 */
.result-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.large-heading {
  font-size: 50px; /* 增大标题的字体大小 */
}

/* 增大标签的字体大小 */
.label-large {
  font-size: 30px;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f6f8fa;
}

.login-box {
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 12px; /* 增大边框圆角 */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1); /* 增大阴影 */
  max-width: 1000px; /* 增大最大宽度 */
  padding: 30px; /* 增大内边距 */
  text-align: center;
}

.error-message {
  color: #C30C24; /* 央视红色 */
  font-size: 30px; /* 字体大小增大 */
}

.pica-logo {
  margin-bottom: 30px; /* 增大间距 */
}

.form-group {
  margin-bottom: 30px; /* 增大间距 */
}

.form-control {
  width: 100%;
  padding: 15px; /* 增大内边距 */
  border: 2px solid #d1d5da; /* 增大边框宽度 */
  border-radius: 12px; /* 增大边框圆角 */
  outline: none;
}

.btn-primary {
  width: 100%;
  padding: 15px; /* 增大内边距 */
  background-color: #0366d6;
  color: #ffffff;
  border: none;
  border-radius: 12px; /* 增大边框圆角 */
  cursor: pointer;
  font-size: 24px
}

a {
  font-size: 24px; /* 增大字体大小 */
  color: #0366d6;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

