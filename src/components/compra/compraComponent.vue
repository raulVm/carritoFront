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
          <th scope="row" colspan="2">Total compra:</th>
          <td>{{totalCantidad}}</td>
          <td class="font-weight-bold">$ <span>{{totalPrecio}}</span></td>
        </tfooter>
      </q-markup-table>
      <button class="btn btn-dark" @click="comprar(totalPrecio,totalCantidad)">Comprar</button>
  </div>
  <q-dialog v-model="guardado" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="logout" color="primary" text-color="white" />
          <span class="q-ml-sm">Compra realizada.</span>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>
<script>
    import{ defineComponent, computed } from 'vue';
    import store from '../../store/tienda';
    import { useQuasar, Notify } from 'quasar';
    import axios from 'axios';

    export default defineComponent({
        name: 'compraComponent',
        data () {
            return {
             data:[],
             totalCantidad: 0,
             totalPrecio: 0
            }
        },
        mounted() {
          this.gatDatos();
        },
        methods: {
          gatDatos (){
           const carrito = JSON.parse(JSON.stringify(store.state.carrito));
           this.data = Object(carrito).filter(Boolean);
           this.totalCantidad = computed(() => store.getters.totalCantidad);
           this.totalPrecio = computed(() => store.getters.totalPrecio);
           },
          aumentar (id){
            store.commit('aumentar', id);;
            return this.gatDatos ();

          },
          disminuir (id){
            store.commit('disminuir', id);
            return this.gatDatos ();
          },
          comprar (totalPrecio,totalCantidad){
            const carrito = JSON.parse(JSON.stringify(store.state.carrito));
            const arrayCarrito = Object(carrito).filter(Boolean);
            const idProducto = [];
            arrayCarrito.forEach((data) => {
              idProducto.push(data.id);
            })
            const data = {
              idProducto: JSON.stringify(idProducto).slice(1, -1),
              total: totalPrecio,
              cantidad: totalCantidad,
              idUsuario: parseInt(localStorage.id)
            }
            axios.post('http://127.0.0.1:8000/api/saveCompra',{headers: {
                'Content-Type': 'application/json',
                ' X-Requested-With':'XMLHttpRequest'
              }, idProducto: JSON.stringify(idProducto).slice(1, -1), total: totalPrecio,
              cantidad: totalCantidad, idUsuario: parseInt(localStorage.id)}).then(res=>{
                Notify.create({
                  message: res.data,
                  color: 'primary',
                })
                console.log(res.data);
            });
          },
        }
      })
</script>