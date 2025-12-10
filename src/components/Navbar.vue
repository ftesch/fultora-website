<template>
  <header class="w-full bg-[#0d1117] border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- LOGO -->
      <router-link to="/" class="flex items-center gap-3">
        <img
          src="/assets/FultoraIAIdentidade.png"
          alt="Fultora IA"
          class="h-10 w-auto rounded-md"
        />
        <span class="text-2xl font-bold text-blue-400">Fultora IA</span>
      </router-link>

      <!-- MENU -->
      <nav class="hidden md:flex gap-6 text-gray-300 text-lg">
        <router-link class="hover:text-blue-400 transition" to="/"
          >Início</router-link
        >
        <router-link class="hover:text-blue-400 transition" to="/contato"
          >Contato</router-link
        >
      </nav>
    </div>
  </header>
</template>
