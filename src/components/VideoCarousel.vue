<template>
  <div class="w-full relative mt-2">
    <Carousel :transition="500" :itemsToShow="5" :itemsToScroll="1" :wrapAround="true" snapAlign="start" class="bg-transparent">
      <Slide v-for="(movie, index) in movies" :key="index">
        <div class="h-40 box relative" @mouseover="toggleOverlay(index)" @mouseleave="toggleOverlay(index)">
          <div :style="{ backgroundImage: `url('${movie.thumbnail}')` }" :alt="movie.title" class="h-full w-60 rounded-md relative">
            <div class="absolute inset-0 flex items-center pl-10 text-white bg-opacity-60 hover:bg-opacity-80 transition duration-300 ease-in-out">
              <h2 class="text-lg font-semibold">{{ movie.title }}</h2>
            </div>
            
          </div>
          <div class="overlay" :class="{ active: showOverlay[index] }">
            <div class="overlay-content">
              <img :src="movie.thumbnail" alt="Thumbnail" class="w-full h-auto" />
              <div class="bg-gray-900 p-2 text-white">
                <h2 class="text-lg font-semibold text-white">{{ movie.title }}aaa</h2>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation>
          <template #next>
            <ChevronRight fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
          </template>
          <template #prev>
            <ChevronLeft fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
          </template>
        </Navigation>
      </template>
    </Carousel>
  </div>
</template>


<script setup>
  import { ref, toRefs } from 'vue'
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
  import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
  const { movies } = defineProps(['movies']);
  const showOverlay = ref(Array(movies.length).fill(false));

  function toggleOverlay(index) {
    showOverlay.value[index] = !showOverlay.value[index];
  }
</script>