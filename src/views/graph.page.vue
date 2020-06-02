<template>
  <div>
    <CategoryDDLComponent @onCategorySelection="collectSelectedDetails"></CategoryDDLComponent>
    <graphComponent :graphData="selectedDetails"></graphComponent>
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
    return {
      selectedDetails: {}
    };
  },

  methods: {
    collectSelectedDetails(payload) {
      this.selectedDetails = payload;
    }
  }
};
</script>