<template>
  <div class="q-pa-md">
    <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">folio</th>
                <th scope="col">precio</th>
            </tr>
            </thead>
            <tbody >
              <tr  v-for="item in this.data" :key="item.id"
                    :item="item">
                <th scope="row">{{item.id}}</th>
                <td>{{item.nombre}}</td>
                <td>{{item.folio}}</td>
                <td>${{item.precio}}</td>
              </tr>
            </tbody>
      </table>
  </div>
</template>
<script>
    import{ defineComponent } from 'vue';
    export default defineComponent({
        name: 'compraComponent',
        props:{
          carrito:{ type: Array}
        },
        data () {
            return {
             data:[]
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
            this.data = this.carrito;
            console.log(this.carrito);
           },
        }
    })
</script>