<script setup>
const dataModel = ref()

function copy() {
  let data = GetData(JSON.parse(dataModel.value))
  
  if (process.client) navigator.clipboard.writeText(JSON.stringify(data, null, 2));

  console.log(data)
}
</script>


<template>
  <v-textarea
  v-model="dataModel"
  label="Data"
  auto-grow
  rows="1"
  row-height="15"
  ></v-textarea>
  
  <br>
  
  <v-btn @click="copy" block color="primary" variant="tonal">Copy</v-btn>
</template>

<style lang="scss" scoped>

</style>