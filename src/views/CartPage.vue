<template>
  <div class="q-pa-md row justify-center item-center">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <q-table
        dense
        title="View Cart"
        :rows="allItems"
        :columns="columns"
        :editable="true"
        row-key="name"
      >
        <template v-slot:body-cell-image="props">
          <img
            class="q-mt-md"
            :src="props.row.img"
            style="width: 50px; height: 50px"
            alt="Custom Image"
          />
        </template>
        <template v-slot:body-cell-delete="props">
          <q-btn
            class="q-mb-lg"
            icon="delete"
            round
            dense
            color="negative"
            @click="deleteRow(props.row.id)"
          />
        </template>
        <template v-slot:body-cell-count="props">
          <q-td key="name" :props="props">
            {{ props.row.count }}
            <q-popup-edit v-model="props.row.count" v-slot="scope">
              <q-input
                v-model.number="scope.value"
                dense
                autofocus
                type="number"
                @keyup.enter="scope.set()"
                min="1"
                max="10"
              />
            </q-popup-edit>
          </q-td>
        </template>
      </q-table>

      <q-card class="my-card text-black q-mt-lg">
        <q-card-section class="row justify-evenly">
          <div class="text-h6">Total Quantity : {{ items }}</div>
          <div class="text-h6">Grand Total : Rs {{ total }}</div>
          <q-btn class="q-mb-lg" label="BUY NOW" dense color="blue" />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CartPage",
  data() {
    return {
      allItems: [],
      columns: [
        {
          name: "id",
          required: true,
          label: "ProductID",
          align: "left",
          field: (row) => row.id,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "title",
          align: "left",
          label: "Item",
          field: "title",
          editable: true,
        },
        { name: "image", align: "left", label: "", field: "thumbnail" },
        {
          name: "count",
          label: "Quantity",
          field: "count",
          align: "left",
          editable: true,
          formatter: (val) => parseInt(val),
        },
        { name: "price", label: "Price/Item", field: "price", align: "left" },
        { name: "delete", label: "", field: "delete", align: "left" },
      ],
    };
  },
  created() {
    this.allItems = this.cart;
  },
  computed: {
    ...mapState("cartModule", ["cart"]),
    items() {
      let sum = 0;
      this.cart.forEach((each) => {
        sum = sum + Number(each.count);
      });
      return sum;
    },
    total() {
      let total = 0;
      this.cart.forEach((each) => {
        total = total + each.price * each.count;
      });
      return parseFloat(total).toFixed(2);
    },
  },
  methods: {
    ...mapMutations("cartModule", ["DEL_ITEM"]),
    deleteRow(id) {
      this.DEL_ITEM(id);
    },
    onChangeQuantity(id, quantity) {
      console.log(id, quantity);
    },
  },
};
</script>
