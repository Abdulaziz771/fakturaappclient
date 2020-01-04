<template>
  <div>
    <div id="signbar-button" :class="{ openSignbarButton : isActive }">
      <button>C</button>
    </div>
    <div>
      <div id="signbar" :class="{ openSignbar : isActive }">
          <input type="number" v-model="urlbody" >
        <button @click="tet"></button>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'RightSidebar',
      data() {
        return {
            isActive: true,
            urlHead: 'http://localhost:3000/posts/',
            urlbody: null,
            url: ''
        }
      },
      methods: {
          tet() {
              this.url = this.urlHead.concat(this.urlbody);

              axios.delete(this.url)

                  .then((r) => {
                      console.log(r)
                  })
          }
      },
      created() {

      }
  }
</script>
<style scoped lang="scss">
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
    overflow-y: hidden;
    transition: 0.3s ease;
  }
</style>
