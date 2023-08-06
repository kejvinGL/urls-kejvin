<script>
import axios from "axios";
import SiteNavigation from "./components/SiteNavigation.vue";
import createUrl from "./components/createUrl.vue";
import urlTable from "./components/urlTable.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    createUrl,
    urlTable,
    SiteNavigation,
    RouterView,
  },
};
</script>
<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-urlS-primary">
    <SiteNavigation />
    <RouterView />
    <createUrl />
    <urlTable />
  </div>
</template>
<style lang="scss" scoped></style>
