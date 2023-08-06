<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-urlS-primary">
    <createUrl />
    <urlTable />
  </div>
</template>
<script setup>
import { ref } from "vue";
import createUrl from "../components/createUrl.vue";
import urlTable from "../components/urlTable.vue";
</script>
