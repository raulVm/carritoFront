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
    import { defineComponent } from 'vue'
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
                // this.$store.dispatch("auth/login",{
                //     usuario: this.usuario,
                //     password: this.password
                // })
                // .then( (res) => {
                //     this.$store.commit("auth/setToken", res.data.access_token);
                //     this.$store.commit("auth/setLogginIn", true);
                //     localStorage.setItem('access_token', JSON.stringify(res.data.access_token))
                //     localStorage.setItem('expires_at', JSON.stringify(res.data.expires_at))
                //     localStorage.setItem('name', JSON.stringify(res.data.name))
                //     this.$router.push("mandamientos");
                // })
                // .catch( (e) => {
                //     this.loading = false;
                //     this.error = e.response.data.message;
                // })
                // .then( () => {
                //     this.loading = false;
                // })
                }
            }
    })
</script>