<script>
import axios from "axios";
import SiteNavigation from "./components/SiteNavigation.vue";
import createUrl from "./components/createUrl.vue";
import urlTable from "./components/urlTable.vue";

export default {
  name: "App",
  components: {
    createUrl,
    urlTable,
    SiteNavigation,
  },
};
</script>
<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-urlS-primary">
    <RouterView />
  </div>
</template>
<style lang="scss" scoped></style>
