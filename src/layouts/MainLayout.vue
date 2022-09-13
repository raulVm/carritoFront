<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-grey-3" style="height: 100px">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar style="height: 100px; width: 150px;">
            <img src="img/logo1.png">
          </q-avatar>
        </q-toolbar-title>
        <q-btn flat round dense icon="shopping_cart" @click="compras()" size="1.4em" color="black">
          <q-tooltip class="bg-teal text-body2" :offset="[10, 10]">
            Carrito de compra
          </q-tooltip>
        </q-btn>
        <q-btn flat round dense icon="storefront" size="1.4em" color="black"  @click="product()">
          <q-tooltip class="bg-teal text-body2" :offset="[10, 10]">
            Lista productos
          </q-tooltip>
        </q-btn>
        <q-btn-dropdown
          class="glossy"
          color="teal"
          auto-close 
          rounded
          split
          icon="account_circle"
          :label=' this.nombre '
        >
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Correo:</div>
              <div class="text-h6 q-mb-md">{{ this.email }}</div>
            </div>

            <q-separator vertical inset class="q-mx-lg" />

            <div class="column items-center">
              <q-icon name="account_circle" color="teal" size="4rem" />
              <div class="text-subtitle1 q-mt-md q-mb-xs">{{ this.nombre }}</div>

              <q-btn
                color="primary"
                label="Cerrar sesión"
                push
                size="sm"
                @click="sesion = true"
                v-close-popup
              />
            </div>
          </div>
        </q-btn-dropdown>
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
    nombre: '',
    email: ''
  }),
  mounted(){
    this.datosLongin();
  },
  methods: {
    datosLongin(){
      this.nombre = localStorage.getItem('name').replace(/['"]+/g, '')
      this.email = localStorage.getItem('email').replace(/['"]+/g, '')
    },
    compras(){
      this.$router.push('/compra')
    },
    product (){
      this.$router.push('/productos')
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
