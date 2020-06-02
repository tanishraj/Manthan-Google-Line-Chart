<template>
  <div>
    <CategoryDDLComponent></CategoryDDLComponent>
    <graphComponent></graphComponent>
  </div>
</template>

<script>
import CategoryDDLComponent from "../components/category-ddl.component";
import graphComponent from "../components/graph.component";

export default {
  name: "graphPage",

  components: {
    CategoryDDLComponent,
    graphComponent
  },

  data() {
    return {};
  }
};
</script>