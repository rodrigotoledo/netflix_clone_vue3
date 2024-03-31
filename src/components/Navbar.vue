<script>
import { ref, onMounted } from 'vue';
import NavbarSearch from './NavbarSearch.vue';
import NavbarAlert from './NavbarAlert.vue';
import NavbarChangeUser from './NavbarChangeUser.vue';

export default {
  components: { NavbarSearch, NavbarAlert, NavbarChangeUser },
  data() {
    return {
      showDropdown: true,
    };
  },
  methods: {
    logout() {
      // Lógica de logout aqui
    },
  },
  setup() {
    const scrolled = ref(false);

    // Função para observar a rolagem da página
    const handleScroll = () => {
      if (window.scrollY > 20) {
        scrolled.value = true;
      } else {
        scrolled.value = false;
      }
    };

    // Adicionar um ouvinte de rolagem após o componente ser montado
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    return {
      scrolled,
    };
  },
};
</script>


<template>
  <div id="navbar" :class="{ 'bg-black': scrolled, 'bg-opacity-60': !scrolled }" class="p-4 fixed w-full top-0 flex justify-between items-center text-white px-10 transition-all duration-1000">
    <div class="flex items-center space-x-6">
      <div class="mr-4">
        <router-link to="/" class="text-white text-2xl font-bold"><img class="h-10" src="@/assets/logo-netflix.png" alt="Netflix Logo" /></router-link>
      </div>
      <router-link to="/" class="text-white hover:text-gray-300">Home</router-link>
      <router-link to="/series" class="text-white hover:text-gray-300">Series</router-link>
      <router-link to="/movies" class="text-white hover:text-gray-300">Movies</router-link>
      <router-link to="/latest" class="text-white hover:text-gray-300">Latest</router-link>
      <router-link to="/top-rated" class="text-white hover:text-gray-300">Top Rated</router-link>
    </div>

    <div class="flex items-center space-x-4">
      <NavbarSearch />
      <router-link to="/" class="text-white hover:text-gray-300 text-sm">Change To Kids</router-link>
      <NavbarAlert />
      <NavbarChangeUser />
    </div>
  </div>
</template>


