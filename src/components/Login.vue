<template>
    <div class="q-gutter-md row">
        <q-img
            src="img/logo1.png"
            style="position:absolute; z-index: -1; height: 100vh; width; 100vh;"
        ></q-img>

        <div class="window-height window-width row justify-center items-center fixed-center">
            <div class="">
            <div class="row">

            </div>
            <div class="row">
                <q-card square bordered class="q-pa-md shadow-9" style="width: 375px;">
                <q-card-section>
                    <p class="q-pa-sm text-teal">Ingrese sus credenciales</p>
                    <q-banner
                        v-if="!!error"
                        class="text-white text-center bg-negative"
                        rounded
                    >
                        {{ error }}
                    </q-banner><br>
                    <q-form class="q-gutter-md" @submit="login()">
                    <q-input
                        square filled
                        v-model="usuario"
                        type="text"
                        label="Ingresa tu usuario *"
                        :rules="[
                        val => val && val.length > 0 || 'Porfavor ingrese su usuario'
                        ]"/>

                    <q-input
                        square filled
                        v-model="password"
                        type="password"
                        label="Ingresa tu contraseña *"
                        :rules="[
                        val => val !== null && val !== '' || 'Porfavor ingrese su contraseña'
                        ]"/>

                        <q-btn type="submit" unelevated color="primary" size="md" label="Ingresar" />
                    </q-form>
                </q-card-section>

                </q-card>
            </div>
            </div>
        </div>

        </div>
</template>
<script>
    import { defineComponent } from 'vue';
    import axios from 'axios';
    // import { instance } from "boot/axios";
    export default defineComponent({
        name: 'Login',
        data() {
                return {
                usuario: '',
                password: '',
                loading: false,
                error: ''
                }
            },
            methods: {
                login() {
                    this.loading = true;
                    const data = {
                        email: this.usuario,
                        password: this.password
                    }
                    axios.post('http://127.0.0.1:8000/api/login',
                    {headers: {
                        'Content-Type': 'application/json',
                       ' X-Requested-With':'XMLHttpRequest'
                    }, email: this.usuario, password: this.password}).then((res)=>{
                        localStorage.setItem('access_token', JSON.stringify(res.data.success.token))
                        localStorage.setItem('name', JSON.stringify(res.data.success.name))
                        localStorage.setItem('email', JSON.stringify(res.data.success.email))
                        localStorage.setItem('id', JSON.stringify(res.data.success.id))
                        this.$router.push("productos");
                    }).catch( (e) => {
                        this.loading = false;
                        this.error = e.response.data.message;
                    })
                    .then( () => {
                        this.loading = false;
                    });
                }
            }
    })
</script>