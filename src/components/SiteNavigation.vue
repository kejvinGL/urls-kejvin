<template>
  <header class="sticky top-0 bg-urlS-primary shadow-lg">
    <nav class="navbar items-center gap-4 text-white py-6">
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3 flex-1">
          <a class="btn btn-ghost normal-case text-xl" @click="refreshPage"
            ><i class="fa-solid fa-bolt text-2xl"></i>URL Shortener</a
          >
        </div>
      </RouterLink>
      <div class="flex gap-3 flex-1 justify-end">
        <i
          class="fa-solid fa-circle-info text-xl px-5 hover:text-urlS-secondary"
          @click="toggleModal"
        ></i>
      </div>
      <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
        <div class="text-white">
          <h1 class="text-2xl mb-1">About:</h1>
          <p class="mb-4">
            This website allow you to create shorter urls of a website of your
            choosing.
          </p>
          <h2 class="text-2xl">How it works:</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              Insert the long URL which you want to shorten, then click the plus
              (+) symbol
            </li>
            <li>
              The website with show up on the list along with the shortened
              version.
            </li>
          </ol>

          <h2 class="text-2xl">Removing an URL</h2>
          <p>
            You can delete the shortened versions by clicking the trashcan
            symbol.
          </p>
        </div>
      </BaseModal>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import BaseModal from "./BaseModal.vue";
import { ref } from "vue";

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
const refreshPage = () => {
  window.location.reload();
};
</script>
