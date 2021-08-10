<template>
    <q-bar class="q-electron-drag">
    <q-icon name="laptop_chromebook" />
    <div>Google Chrome</div>

    <q-space />

    <q-btn dense flat icon="minimize" @click="minimize" />
    <q-btn dense flat icon="crop_square" @click="toggleMaximize" />
    <q-btn dense flat icon="close" @click="closeApp" />
  </q-bar>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WindowFrame',
  setup() {
    function minimize () {
      if (process.env.MODE === 'electron') {
        window.WindowAPI.minimize()
      }
    }

    function toggleMaximize () {
      if (process.env.MODE === 'electron') {
        window.WindowAPI.toggleMaximize()
      }
    }

    function closeApp () {
      if (process.env.MODE === 'electron') {
        window.WindowAPI.close()
      }
    }

    return { minimize, toggleMaximize, closeApp }
  }
})
</script>
