<template>
  <div>
    <CategoryDDLComponent></CategoryDDLComponent>
    <graphComponent></graphComponent>
  </div>
</template>

<script>
import CategoryDDLComponent from "../components/category-ddl/category-ddl.component";
import graphComponent from "../components/graph/graph.component";

export default {
  name: "graphPage",

  components: {
    CategoryDDLComponent,
    graphComponent
  },

  data() {
    return {};
  },

  methods: {}
};
</script>