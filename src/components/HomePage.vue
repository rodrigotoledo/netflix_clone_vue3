
<script setup>
  import { onBeforeMount, ref } from 'vue';
  import Navbar from '@/components/Navbar.vue';
  import VideoCarousel from '@/components/VideoCarousel.vue';
  import Footer from '@/components/Footer.vue';
  import Play from 'vue-material-design-icons/Play.vue';
  import InformationOutline from 'vue-material-design-icons/InformationOutline.vue';

  const releaseMovies = ref([]);
  const topRatedMovies = ref([]);
  const releaseMovie = ref(null);
  const dataLoaded = ref(false);
  const apiUrl = process.env.API_URL;

  const fetchData = async () => {
    try {
      console.log(`${apiUrl}/movies/release`)
      const responseRelease = await fetch(`${apiUrl}/movies/release`);
      const responseTopRated = await fetch(`${apiUrl}/movies/top-rated`);

      if (responseRelease.ok) {
        releaseMovies.value = await responseRelease.json();
        releaseMovie.value = releaseMovies.value[0];
        dataLoaded.value = true;
      } else {
        console.error('Error releaseMovies API');
      }

      if (responseTopRated.ok) {
        topRatedMovies.value = await responseTopRated.json();
      } else {
        console.error('Error topRatedMovies API');
      }

    } catch (error) {
      console.error('Error from API:', error);
    }
  };

  onBeforeMount(async () => {
    await fetchData();
  });
</script>

<template>
  <div class="w-full bg-gray-900">
    <div v-if="dataLoaded">

      <div
        v-if="releaseMovie.thumbnail"
        class="h-screen bg-cover bg-center"
        :style="{ backgroundImage: `url('${releaseMovie.thumbnail}')` }"
      >
        <Navbar class="z-50" />
        <div class="absolute inset-0 flex flex-col items-start justify-center text-white px-10 w-2/4">
          <div>
            <h1 class="text-8xl font-bold text-shadow-md">{{ releaseMovie.title }}</h1>
            <p class="text-xl text-shadow-md">{{ releaseMovie.description }}</p>
            <div class="w-fit mt-2 flex flex-row space-x-4">
              <router-link to="/" class="text-black whitespace-nowrap flex flow-row items-center bg-white hover:bg-gray-200 p-2 rounded-md font-medium px-4">
                <Play fillColor="#000000" :size="30" class="cursor-pointer" />
                Watch Now
              </router-link>
              <router-link to="/" class="text-white whitespace-nowrap flex flow-row items-center bg-[#4d6f79] bg-opacity-80 hover:bg-opacity-90 p-2 rounded-md font-medium px-4">
                <InformationOutline fillColor="#FFFFFF" :size="30" class="cursor-pointer" />
                More Information
              </router-link>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-b h-20 from-transparent to-gray-900 bottom-0 absolute w-full"></div>
        <div class="bottom-0 absolute px-10 text-shadow-md">
          <h1 class="text-xl font-bold text-white">Top Rated</h1>
        </div>
      </div>
      <div class="relative z-0 px-10">
        <VideoCarousel :movies="topRatedMovies" />
        <h1 class="text-xl font-bold text-white mt-10">Release</h1>
        <VideoCarousel :movies="releaseMovies" />
        <Footer class="py-20 pb-10 px-20" />
      </div>


    </div>
    <div v-else class="absolute bg-[#141414] inset-0 flex items-center justify-center text-white">
      <p>Loading...</p>
    </div>
  </div>
</template>
