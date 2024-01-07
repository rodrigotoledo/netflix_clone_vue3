<script setup>
  import { ref } from 'vue';
  import EmoticonWinkOutline from 'vue-material-design-icons/EmoticonWinkOutline.vue';
  import MenuDown from 'vue-material-design-icons/MenuDown.vue';
  import MenuUp from 'vue-material-design-icons/MenuUp.vue';
  import TeddyBear from 'vue-material-design-icons/TeddyBear.vue';
  import Pencil from 'vue-material-design-icons/Pencil.vue';
  import AccountSwitchOutline from 'vue-material-design-icons/AccountSwitchOutline.vue';
  import Account from 'vue-material-design-icons/Account.vue';
  import HelpCircleOutline from 'vue-material-design-icons/HelpCircleOutline.vue';

  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>

<template>
  <div class="relative">
    <div @click="toggleMenu" class="flex flex-row items-center">
      <div class="bg-gradient-to-b from-blue-700 via-blue-500 to-blue-400 h-10 p-2 rounded-lg shadow-md">
        <EmoticonWinkOutline fillColor="#FFFFFF" :size="26" class="cursor-pointer" />
      </div>
      <MenuDown fillColor="#FFFFFF" :size="30" class="cursor-pointer" v-if="!isMenuOpen" />
      <MenuUp fillColor="#FFFFFF" :size="30" class="cursor-pointer" v-if="isMenuOpen" />
    </div>
    <div
    v-if="isMenuOpen"
    class="absolute bg-black bg-opacity-60 text-white p-2 mt-5 right-0 pr-20 space-y-2"
    >
      <router-link to="/" class="text-white hover:text-gray-300 hover:underline text-sm whitespace-nowrap flex flow-row items-center">
        <TeddyBear fillColor="#AC1849" :size="30" class="cursor-pointer mr-4 bg-white rounded-full" />
        Change to Kids
      </router-link>
      <router-link to="/" class="text-white hover:text-gray-300 hover:underline text-sm whitespace-nowrap flex flow-row items-center">
        <Pencil fillColor="#FFFFFF" :size="30" class="cursor-pointer mr-4" />
        Edit Profiles
      </router-link>
      <router-link to="/" class="text-white hover:text-gray-300 hover:underline text-sm whitespace-nowrap flex flow-row items-center">
        <AccountSwitchOutline fillColor="#FFFFFF" :size="30" class="cursor-pointer mr-4" />
        Change Profile 
      </router-link>
      <router-link to="/" class="text-white hover:text-gray-300 hover:underline text-sm whitespace-nowrap flex flow-row items-center">
        <Account fillColor="#FFFFFF" :size="30" class="cursor-pointer mr-4" />
        Account
      </router-link>
      <router-link to="/" class="text-white hover:text-gray-300 hover:underline text-sm whitespace-nowrap flex flow-row items-center">
        <HelpCircleOutline fillColor="#FFFFFF" :size="30" class="cursor-pointer mr-4" />
        Help
      </router-link>
    </div>
  </div>
</template>


