<template>
  <footer class="bg-[#0d1117] border-t border-gray-800 text-gray-400 py-10">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h4 class="text-xl font-semibold mb-4 text-white">Contato</h4>

      <p class="mb-2">
        <strong class="text-gray-300">Telefone:</strong> (27) 98851-5951
      </p>
      <p class="mb-6">
        <strong class="text-gray-300">E-mail:</strong> farlley@fultora.com
      </p>

      <div class="flex justify-center gap-6 mb-6 text-gray-400 text-sm">
        <router-link to="/contato" class="hover:text-blue-400 transition"
          >Contato</router-link
        >
        <router-link to="/servcesterm" class="hover:text-blue-400 transition"
          >Termos de Servicos</router-link
        >
        <router-link to="/privacidade" class="hover:text-blue-400 transition"
          >Política de Privacidade</router-link
        >
      </div>

      <p class="text-gray-600 text-sm">
        © 2025 Fultora IA — Todos os direitos reservados.
      </p>
    </div>
  </footer>
</template>
