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
                        <div class="text-subtitle2">{{ dataPro.nombrePro }}</div>
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
                        <div class="text-subtitle2">PRECIO: {{ dataPro.precio }}</div>
                    </div>
                    <div class="col-6 text-right">
                        <q-btn color="white"  outline rounded text-color="black" label="Añadir" />
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </q-card-section>
</template>
<script>
    import{ defineComponent } from 'vue';
    export default defineComponent({
        name: 'productosComponent',
        data () {
            return {
            dataProductos: [
                {   
                    id: 1,
                    nombrePro:'Pan Bimbo',
                    folio: 'x23',
                    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    precio:'$34'
                },
                {
                    id: 2,
                    nombrePro:'Sabritas',
                    folio: 'x23fser',
                    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    precio:'$20'
                },
                {
                    id: 3,
                    nombrePro:'Suavicremas',
                    folio: 'x2awqq3',
                    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    precio:'$43'
                },
                {
                    id: 4,
                    nombrePro:'Maruchaan',
                    folio: 'sdasdx23',
                    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    precio:'$13'
                },
            ],
            }
        },
        mounted (){
            this.datosProducto();
        },
        methods: {
            datosProducto (){
                this.dataProductos;
            }
        }
    })
</script>