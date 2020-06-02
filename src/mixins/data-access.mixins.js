export const dataAccessMixins = {
  methods: {
    extractDataFromJSON(json, filterParams) {
      let result = [];
      json.records.forEach(item => {
        if (item[filterParams]) {
          let subArr = [];
          subArr.push(item.date);
          subArr.push(item[filterParams])
          result.push(subArr);
        }
      })
      return result;
    }
  }
}