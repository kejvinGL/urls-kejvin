<script>
import axios from "axios";
export default {
  name: "createUrl",
  data() {
    return {
      longUrl: "",
    };
  },
  methods: {
    async shorten() {
      const response = await axios.post(
        "https://urls-kejvin-server-f69fa1281575.herokuapp.com/api/url/shorten",
        {
          longUrl: this.longUrl,
        }
      );
      window.location.reload();
    },
  },
};
</script>
<template>
  <main class="flex justify-center items-center">
    <div class="pt-4 mb-8 w-4/5">
      <form @submit.prevent="shorten" class="form flex px-2">
        <input
          type="url"
          name="url"
          id="url"
          required
          placeholder="Insert Long Url"
          v-model="longUrl"
          class="input input-bordered max-w-xspy-2 mx-0 px-4 text-left w-11/12 bg-transparent"
        />
        <button class="btn btn-outline mx-3" type="submit">
          <i
            class="fa-solid text-white fa-plus text-3xl hover:text-urlS-secondary"
          ></i>
        </button>
      </form>
    </div>
  </main>
</template>
