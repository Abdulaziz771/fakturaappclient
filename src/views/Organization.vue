<template>
    <div class="content-body">
      <div class="table-body">
        <div class="container">
          <b-row class="mb-3">
            <b-col md="4" class="current-card">
              <div class="card">
                <div class="orgonization-title text-center">
                  <p class="p-3 m-0 bg-light">Организация</p>
                </div>
                <div class="orgonization-body p-4">
                  <p>
                    <CheckIcon class="icon"></CheckIcon>
                    <span class="pl-2">Владелец: Жамщид Космиов</span>
                  </p>
                  <p>
                    <CheckIcon class="icon"></CheckIcon>
                    <span class="pl-2">ИНН: 302563857</span>
                  </p>
                  <p>
                    <CheckIcon class="icon"></CheckIcon>
                    <span class="pl-2">Организация: Corporation</span>
                  </p>
                </div>
              </div>
            </b-col>
            <b-col md="4" >
              <div class="card">
                <div class="orgonization-title text-center">
                  <p class="p-3 m-0 bg-light">Организация</p>
                </div>
                <div class="orgonization-body p-4">
                  <p>
                    <CheckIcon class="icon"></CheckIcon>
                    <span class="pl-2">Владелец: Жамщид Космиов</span>
                  </p>
                  <p>
                    <CheckIcon class="icon"></CheckIcon>
                    <span class="pl-2">ИНН: 302563857</span>
                  </p>
                  <p>
                    <CheckIcon class="icon"></CheckIcon>
                    <span class="pl-2">Организация: Corporation</span>
                  </p>
                </div>
              </div>
            </b-col>
            <b-col md="4">
              <div class="card">
                <div class="orgonization-title text-center">
                  <p class="p-3 m-0 bg-light">Организация</p>
                </div>
                <div class="orgonization-body p-4">
                  <p>
                    <CheckIcon class="icon"></CheckIcon>
                    <span class="pl-2">Владелец: Жамщид Космиов</span>
                  </p>
                  <p>
                    <CheckIcon class="icon"></CheckIcon>
                    <span class="pl-2">ИНН: 302563857</span>
                  </p>
                  <p>
                    <CheckIcon class="icon"></CheckIcon>
                    <span class="pl-2">Организация: Corporation</span>
                  </p>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col md="4">
              <div class="card">
                <div class="orgonization-title text-center">
                  <p class="p-3 m-0 bg-light">Организация</p>
                </div>
                <div class="orgonization-body p-4">
                  <p>
                    <CheckIcon class="icon"></CheckIcon>
                    <span class="pl-2">Владелец: Жамщид Космиов</span>
                  </p>
                  <p>
                    <CheckIcon class="icon"></CheckIcon>
                    <span class="pl-2">ИНН: 302563857</span>
                  </p>
                  <p>
                    <CheckIcon class="icon"></CheckIcon>
                    <span class="pl-2">Организация: Corporation</span>
                  </p>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
</template>
<script>
    import {
        CheckIcon
    } from 'vue-feather-icons'

    export default {
        name: 'organization',
        components: {
            CheckIcon
        }
    }
</script>

<style lang="scss">
.current-card .card .orgonization-title p{
  background-color: #2d9c00 !important;
  color: white;
}

.current-card .card .orgonization-title p::before{
  content: " Текущая ";
}
</style>
