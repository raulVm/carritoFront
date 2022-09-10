<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-grey-3" style="height: 100px">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar style="height: 100px; width: 150px;">
            <img src="img/logo1.png">
          </q-avatar>
        </q-toolbar-title>
        <q-btn flat round dense icon="shopping_cart" size="1.4em" color="black"></q-btn>
        <q-btn flat round dense icon="account_circle" size="2em" color="teal"  @click="sesion = true">  {{ this.nombre }}</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-dialog v-model="sesion" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="logout" color="primary" text-color="white" />
          <span class="q-ml-sm">CERRAR SESIÓN.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Acepto" color="primary" @click="logout" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';
export default defineComponent({
  name: 'MainLayout',
  data: () => ({
    loading: false,
    nombre: ''
  }),
  mounted(){
    this.datosLongin();
  },
  methods: {
    datosLongin(){
      this.nombre = localStorage.getItem('name').replace(/['"]+/g, '')
    },
  logout() {
      this.loading = true;
      axios.get('http://127.0.0.1:8000/api/logout')
        .then((res) => {
          localStorage.removeItem('access_token');
          localStorage.removeItem('name');
          this.$router.push("/login");
        })
        .catch((res) => {
          // this.$store.commit("auth/resetState");
        })
        .then(() => {
          this.loading = false;
        });
    },
  },
})
</script>
