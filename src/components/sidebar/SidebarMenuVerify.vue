<template>
  <div>
    <b-list-group>

      <ChevronLeftIcon class="chevronLeftIcon cursor-pointer" @click="emitEvent"></ChevronLeftIcon>

      <router-link class="router-link" :to="{name: 'document-verify'}">
        Проверить подпись документа
      </router-link>
    </b-list-group>
  </div>
</template>
<script>

    import {
        ChevronLeftIcon

    } from 'vue-feather-icons'

    export default {
        name: 'sidebar-menu-verify',
        components: {
            ChevronLeftIcon
        },
        methods: {
            emitEvent() {
                this.$emit('changeShow', true)
            }
        }
    }
</script>
