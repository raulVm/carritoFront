<template>
    <q-card-section>
        <div class="row ">
            <q-card class="my-card col-4" flat bordered v-for="(dataPro) in dataProductos"
                  :key="dataPro.id"
                  once
                  transition="scale">
                <q-card-section class="row">
                    <q-img
                        class="rounded-borders col-4"
                        src="img/canastaCompra.webp"
                    />
                    <div class="col-8 text-right">
                        <div class="text-subtitle2">{{ dataPro.nombre }}</div>
                        <div class="text-overline">Folio: {{ dataPro.folio }}</div>
                    </div>
                </q-card-section>
                <q-card-section>
                    <div class="col-12 text-caption text-grey  ">
                        {{ dataPro.descripcion }}
                    </div>
                </q-card-section>
                <q-card-section>
                    <div class="col-6 text-left">
                        <div class="text-subtitle2">PRECIO: ${{ dataPro.precio }}</div>
                    </div>
                    <div class="col-6 text-right">
                        <q-btn color="white"  outline rounded text-color="black" @click="cargarCarrito(JSON.parse(JSON.stringify(dataPro)))" label="Seleccionar" />
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </q-card-section>
</template>
<script>
    import{ defineComponent } from 'vue';
    import axios from 'axios';
    import { useQuasar } from 'quasar';
    import store from '../../store/tienda';
    export default defineComponent({
        name: 'productosComponent',
        data () {
            return {
                dataProductos: [],
                carrito: [],
            }
        },
        mounted (){
            this.datosProducto();
        },
        methods: {
            datosProducto (){
                axios.get('http://127.0.0.1:8000/api/producto').then(res=>{
                    this.dataProductos = res.data;
                    this.setup();
                });
            },
            cargarCarrito (producto){
                const conteo = store.dispatch('agregarCarrito',producto);
            },
            setup () {
                const $q = useQuasar()
                return {
                showNotif () {
                    $q.notify({
                    message: 'Se agrego correctamente el producto',
                    icon: 'announcement'
                    })
                }
                }
            },
        }
    })
</script>