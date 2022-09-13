<template>
  <div class="q-pa-md">
    <q-markup-table flat bordered>
      <thead  class="bg-teal">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Folio</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Acciones</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
        <tbody >
          <tr  v-for="item in this.data" :key="item.id"
            :item="item">
            <th class="text-center">{{item.id}}</th>
            <td class="text-center">{{item.nombre}}</td>
            <td class="text-center">{{item.folio}}</td>
            <td class="text-center">${{item.precio}}</td>
            <td class="text-center">{{item.cantidad}}</td>
            <td class="text-center">
              <button class="btn btn-info btn-sm" @click="aumentar(item.id)">
                +
              </button>
              <button class="btn btn-danger btn-sm" @click="disminuir(item.id)">
                -
              </button>
            </td>
            <td class="text-center">${{item.precio * item.cantidad}}</td>
          </tr>
        </tbody>
        <tfooter>
          <th scope="row" colspan="2">Total productos</th>
          <td>{{totalCantidad}}</td>
          <td class="font-weight-bold">$ <span>{{totalPrecio}}</span></td>
        </tfooter>
      </q-markup-table>
      <button class="btn btn-dark" @click="comprar(this.data)">Comprar</button>
  </div>
</template>
<script>
    import{ defineComponent, computed } from 'vue';
    import store from '../../store/tienda';
    import axios from 'axios';
    export default defineComponent({
        name: 'compraComponent',
        data () {
            return {
             data:[],
             totalCantidad: computed(() => store.getters.totalCantidad),
             totalPrecio: computed(() => store.getters.totalPrecio)
            }
        },
        mounted() {
          this.gatDatos();
        },
        methods: {
          getSelectedString () {
            return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
          },
          gatDatos (){
           const carrito = JSON.parse(JSON.stringify(store.state.carrito));
           this.data = Object(carrito).filter(Boolean);
           },
          aumentar (id){
            // const aumentar = id => {store.commit('aumentar', id)}
            return store.commit('aumentar', id);
          },
          disminuir (id){
            const disminuir = id => {store.commit('disminuir', id)}
            return (disminuir);
          },
          comprar (producto){
           
          },
          setup () {
                const $q = useQuasar()
                return {
                showNotif () {
                    $q.notify({
                    message: 'La compra se hizo exitosamente',
                    icon: 'announcement'
                    })
                }
                }
            },
        }
      })
</script>