<script>
import axios from "axios";
export default {
  name: "urlTable",
  data() {
    return {
      urls: [],
    };
  },
  methods: {
    async getUrls() {
      const response = await axios
        .get("https://urls-kejvin-server.onrender.com/api/url/")
        .then((response) => {
          this.urls = response.data;
        });
    },
    async deleteUrl(urlCode) {
      const response = await axios
        .delete(`https://urls-kejvin-server.onrender.com/${urlCode}`)
        .then((response) => {
          this.getUrls();
        });
    },
  },
  mounted() {
    this.getUrls();
  },
};
</script>
<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th class="px-4 py-2">Long URL</th>
          <th class="px-4 py-2">Short URL</th>
          <th class="px-4 py-2">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="url in urls" :key="url">
          <td>
            <a :href="url.longUrl">{{ url.longUrl }}</a>
          </td>
          <td class="text-xl text-blue-400 underline">
            <a :href="url.shortUrl">{{ url.shortUrl }}</a>
          </td>
          <td>
            <button
              class="btn btn-outline btn-error"
              @click="deleteUrl(url.urlCode)"
            >
              <i class="fa-solid fa-trash"></i>
              <label hidden></label>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
