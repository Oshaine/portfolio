<template>
  <div class="py-24 bg-gray-900" id="beats">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <span class="inline-block px-5 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
          Music Production
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Beats</h2>
        <div class="w-20 h-1 bg-white mx-auto rounded"></div>
      </div>
      <div class="rounded-2xl overflow-hidden shadow-2xl">
        <iframe 
          src="https://player.beatstars.com/?storeId=97742" 
          width="100%" 
          height="800"
          class="w-full"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player'
}
</script>
