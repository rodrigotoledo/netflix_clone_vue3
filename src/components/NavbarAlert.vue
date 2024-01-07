<script setup>
  import BellAlertOutline from 'vue-material-design-icons/BellAlertOutline.vue';
</script>

<template>
  <div class="relative">
    <BellAlertOutline fillColor="#FFFFFF" :size="28" class="cursor-pointer" />
    <span class="absolute cursor-pointer top-[-5px] right-[-5px] bg-red-600 text-white font-bold rounded-full w-4 h-4 flex items-center justify-center text-sm">
      5
    </span>
  </div>
</template>

