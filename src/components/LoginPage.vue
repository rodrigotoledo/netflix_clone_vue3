<template>
  <div class="login-page p-0 m-0 h-screen w-screen flex justify-center">
    <div class="w-[60%] md:w-[80%]">

      <div class="header px-12 md:px-24 pt-10">
          <img class="w-40" src="@/assets/logo-netflix.png" alt="Logo" />
      </div>
      <div class="content flex justify-center">

        <div class="login-form p-10 bg-black bg-opacity-60 w-fit">
          <!-- Logo -->
          <h1 class="text-3xl font-bold mb-4 text-white">Entrar</h1>
          <!-- Form -->
          <form @submit.prevent="login">
            <input type="email" placeholder="Email" v-model="email" class="input-field mb-4 w-full bg-transparent border-white border-2 p-2 text-white placeholder-white" />
            <input type="password" placeholder="Senha" v-model="password" class="input-field mb-4 w-full bg-transparent border-white border-2 p-2 text-white placeholder-white" />
            <button type="submit" class="bg-red-500 text-white py-2 px-4  hover:bg-red-600 transition duration-300 w-full">Entrar</button>
          </form>
          <div class="flex justify-center my-2">
            <a href="#" class="text-sm text-white ali">Esqueceu a senha?</a>
          </div>
          <p class="mt-4 text-white">Novo por aqui? <a href="#" class="text-white font-bold">Assine agora.</a></p>
        </div>
      </div>
    </div>
  </div>
  <footer class="absolute bottom-0 w-screen flex justify-center bg-black bg-opacity-50 text-white py-40">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-12 md:px-24 w-[60%] md:w-[80%]">
      <div class="flex flex-col space-y-4">
        <p class="font-bold">Dúvidas? Ligue 0800 591 2876</p>
        <a href="#" class="text-white underline">Perguntas frequentes</a>
        <a class="text-white underline">Preferências de cookies</a>
      </div>
      <div class="flex flex-col space-y-4">
        <a href="#" class="text-white underline">Central de Ajuda</a>
        <a href="#" class="text-white underline">Informações corporativas</a>
      </div>
      <div class="flex flex-col space-y-4">
        <a href="#" class="text-white">Termos de Uso</a>
      </div>
    </div>
  </footer>
</template>

<script>

</script>
<style scoped>
.login-page {
  background-image: url("@/assets/bg-login.jpg");
  background-size: cover;

}
</style>
