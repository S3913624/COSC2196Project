<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>    
      <q-toolbar class="q-electron-drag">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Group 404 Tools
        </q-toolbar-title>
        <div class="electron-only">

          <q-space />
          
          <q-btn dense flat icon="minimize" @click="minimize" />
          <q-btn dense flat icon="crop_square" @click="toggleMaximize" />
          <q-btn dense flat icon="close" @click="closeApp" />
        </div>  
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1 q-electron-drag--exception"
      
    >
      <q-list>
        <q-list separator>
          <q-item to="/" exact active-class="nav-active">
            <q-item-section avatar><q-icon color="primary" name="home"/></q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>

          <q-item to="iec60751" active-class="nav-active">
            <q-item-section avatar><q-icon color="primary" name="calculate"/></q-item-section>
            <q-item-section>IEC60751 Calculator</q-item-section>
          </q-item>
        </q-list>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    const leftDrawerOpen = ref(false)

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

    return {
      minimize,
      toggleMaximize,
      closeApp,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style>
.nav-active{
  background:gray;
}
</style>