<template>
  <section class="py-24 bg-gray-800 relative overflow-hidden" id="services">
    <!-- Minimal Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900/50 to-gray-800"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 bg-gray-900 text-gray-300 rounded-full text-xs font-medium uppercase tracking-wider mb-4 border border-gray-700">
          What I Do
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-3">
          Services
        </h2>
        <p class="text-gray-400 text-sm">Comprehensive solutions for your digital needs</p>
      </div>
      
      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="group"
        >
          <!-- Modern Card -->
          <div class="h-full bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-gray-600 transition-all duration-500 flex flex-col">
            <!-- Icon -->
            <div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-navy-800 rounded-xl flex items-center justify-center text-white text-xl mb-5 group-hover:scale-110 transition-transform duration-300">
              <i :class="service.icon"></i>
            </div>
            
            <!-- Content -->
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                {{ service.title }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          title: 'Web Development',
          description: 'Full-stack web applications built with modern frameworks. Scalable, performant, and user-focused solutions.',
          icon: 'fas fa-laptop-code'
        },
        {
          title: 'Mobile Development',
          description: 'Cross-platform mobile apps that deliver native performance. From concept to deployment on iOS and Android.',
          icon: 'fas fa-mobile-alt'
        },
        {
          title: 'Music Production',
          description: 'Professional beat creation and audio production. Crafting original compositions across diverse musical styles.',
          icon: 'fas fa-headphones-alt'
        },
        {
          title: 'UI/UX Design',
          description: 'User-centered design that combines aesthetics with functionality. Creating intuitive digital experiences.',
          icon: 'fas fa-palette'
        },
        {
          title: 'AI Integration',
          description: 'Intelligent automation and AI-powered features. Enhancing applications with smart capabilities and workflows.',
          icon: 'fas fa-robot'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Smooth transitions */
</style>

