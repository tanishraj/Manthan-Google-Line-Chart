<template>
  <div>
    <div class="select-box">
      <div class="select-box__current" tabindex="1">
        <div class="select-box__value">
          <input
            class="select-box__input"
            type="radio"
            id="0"
            :value="''"
            name="option"
            title="Select option"
            checked="checked"
            @change="customMethod"
          />
          <p class="select-box__input-text">Select option</p>
        </div>
        <div class="select-box__value">
          <input
            class="select-box__input"
            type="radio"
            id="1"
            :value="'clickThruRate'"
            name="option"
            title="Page Clickthru Rate"
            @change="customMethod"
          />
          <p class="select-box__input-text">Page Clickthru Rate</p>
        </div>
        <div class="select-box__value">
          <input
            class="select-box__input"
            type="radio"
            id="2"
            :value="'sales'"
            name="option"
            title="Overall Sales"
            @change="customMethod"
          />
          <p class="select-box__input-text">Overall Sales</p>
        </div>
        <div class="select-box__value">
          <input
            class="select-box__input"
            type="radio"
            id="3"
            :value="'pageViews'"
            name="option"
            @change="customMethod"
            title="Page Views"
          />
          <p class="select-box__input-text">Page Views</p>
        </div>
        <div class="select-box__value">
          <input
            class="select-box__input"
            type="radio"
            id="4"
            :value="'orders'"
            name="option"
            title="Overall Orders"
            @change="customMethod"
          />
          <p class="select-box__input-text">Overall Orders</p>
        </div>
        <img
          class="select-box__icon"
          src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>
      <ul class="select-box__list">
        <li>
          <label class="select-box__option" for="1" aria-hidden="aria-hidden">Page Clickthru Rate</label>
        </li>
        <li>
          <label class="select-box__option" for="2" aria-hidden="aria-hidden">Overall Sales</label>
        </li>
        <li>
          <label class="select-box__option" for="3" aria-hidden="aria-hidden">Page Views</label>
        </li>
        <li>
          <label class="select-box__option" for="4" aria-hidden="aria-hidden">Overall Orders</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import apiData from "../../data/realData.js";
import { dataAccessMixins } from "../../mixins/data-access.mixins";

export default {
  name: "categoryDdl",

  mixins: [dataAccessMixins],

  data() {
    return {
      selectedOptionDetails: {},
      dataFromJSON: apiData
    };
  },

  methods: {
    customMethod(event) {
      this.selectedOptionDetails["graphTitle"] = event.target.value;
      this.selectedOptionDetails["lineChartTitle"] = event.target.title;
      this.selectedOptionDetails["dataItems"] = this.extractDataFromJSON(
        this.dataFromJSON,
        event.target.value
      );
      this.$store.dispatch("updateGraphData", {
        ...this.selectedOptionDetails
      });
    }
  },

  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "./category-ddl.style.scss";
</style>