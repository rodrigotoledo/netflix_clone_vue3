<template>
  <div>
    <div class="space-x-6 flex flex-row">
      <router-link to="/">
        <Facebook fillColor="#FFFFFF" :size="30" class="cursor-pointer" />
      </router-link>
      <router-link to="/">
        <Instagram fillColor="#FFFFFF" :size="30" class="cursor-pointer" />
      </router-link>
      <router-link to="/">
        <Twitter fillColor="#FFFFFF" :size="30" class="cursor-pointer" />
      </router-link>
      <router-link to="/">
        <Youtube fillColor="#FFFFFF" :size="30" class="cursor-pointer" />
      </router-link>
    </div>
    <div class="space-x-32 text-gray-400 flex flex-row text-sm">
      <div class="space-y-4 flex flex-col mt-4">
        <router-link to="/">Auto-Description</router-link>
        <router-link to="/">Relationship with Investors</router-link>
        <router-link to="/">Legal Notices</router-link>
      </div>

      <div class="space-y-4 flex flex-col mt-4">
        <router-link to="/">Help Center</router-link>
        <router-link to="/">Careers</router-link>
        <router-link to="/">Cookie Preferences</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Facebook from 'vue-material-design-icons/Facebook.vue';
  import Instagram from 'vue-material-design-icons/Instagram.vue';
  import Twitter from 'vue-material-design-icons/Twitter.vue';
  import Youtube from 'vue-material-design-icons/Youtube.vue';
</script>