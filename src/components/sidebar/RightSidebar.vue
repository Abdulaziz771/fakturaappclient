<template>
  <div>
    <div id="signbar-button" :class="{ openSignbarButton : isActive }">
      <!-- <button @click="showPostsMethods"></button> -->
    </div>
    <div>
      <div id="signbar" :class="{ openSignbar : isActive }">
        <div v-if="changePanels">
          <div class="add-posts">
            <form @submit.prevent="sumbit">
              <div>
                <input type="text" placeholder="title" v-model="title">
              </div>
              <div>
                <input type="text" placeholder="body" v-model="body">
              </div>
              <div>
                <button type="submit">Create Post</button>
              </div>
            </form>
          </div>
          <div class="control-posts">
            <input type="text" v-model="showPosts">
            <!-- <h1>{{ postsCount }}</h1> -->
          </div>
          <ul>
            <!-- <li v-for="post in filternNewPosts" class='post'>
              <h2>{{ post.id }}</h2>
              <h1>{{ post.title }}</h1>
              <h2>{{ post.body }}</h2>
            </li> -->
          </ul>
        </div>
        <div v-else>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  //import {mapGetters, mapActions, mapMutations } from 'vuex'
  import axios from 'axios'
  export default {
    name: 'RightSidebar',
      data() {
        return {
            showPosts: 0,
            isActive: true,
            changePanels: false,
            title: '',
            body: ''
        }
      },
      computed: {
    //      ...mapGetters(['filternNewPosts', 'postsCount']),
      },
      methods: {
      //    ...mapActions(['getPosts']),
          //...mapMutations(['createPost']),
        //  showPostsMethods() {
          //    this.getPosts(this.showPosts)
          //},
          //sumbit() {
          //    this.createPost({
          //        title: this.title,
          //        body: this.body,
          //        id : Date.now()
          //    });
          //    this.title = this.body = ''
          //}
      },
  }
</script>
<style scoped lang="scss">
  .add-posts {
    text-align: center;
    div {
      padding: 10px 0;
    }
  }
  .control-posts {
    background: yellow;
    padding: 25px;
    text-align: center;
    input {
      background: transparent;
      border: none;
      text-align: center;
    }
    h1 {
      padding-top: 35px;
    }
  }

  .post {
    background: red;
    color: white;
    padding: 33px;
    margin-bottom: 25px;
  }

  #signbar-button {
    position: absolute;
    right: 0;
    z-index: 999;
    top: 120px;
    width: 30px;
    height: 30px;
    transition: 0.3s ease;
    button {
      height: -webkit-fill-available;
      width: 100%;
    }
  }
  .openSignbarButton {
    right: 565px !important;
  }
  .openSignbar {
    right: 15px !important;
  }
  #signbar {
    position: absolute;
    background: #5db738;
    width: 550px;
    top: 120px;
    right: -550px;
    bottom: 15px;
    z-index: 999999999;
    overflow-y: scroll;
    transition: 0.3s ease;
  }
</style>
