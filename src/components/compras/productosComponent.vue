<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card col-4" flat bordered>
            <q-card-section class="row">
                <q-img
                    class="rounded-borders col-4"
                    src="img/canastaCompra.webp"
                />
                <div class="col-8 text-right">
                    <div class="text-subtitle2">NOMBRE DEL PRODUCTO</div>
                    <div class="text-overline">Folio:</div>
                </div>
            </q-card-section>
            <q-card-section>
                <div class="col-12 text-caption text-grey  ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </q-card-section>
            <q-card-section>
                <div class="col-6 text-left">
                    <div class="text-subtitle2">PRECIO: $0</div>
                </div>
                <div class="col-6 text-right">
                    <q-btn color="white"  outline rounded text-color="black" label="Añadir" />
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>
<script>
    import{ defineComponent } from 'vue';
    export default defineComponent({
        name: 'productosComponent',
        data () {
            
        }
    })
</script>