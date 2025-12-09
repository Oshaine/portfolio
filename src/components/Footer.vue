<template>
  <footer class="bg-gray-900 text-white py-20" id="contact">
    <div class="container mx-auto px-4">
      <!-- Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <!-- Contact Info -->
        <div>
          <h3 class="text-2xl font-bold mb-6">Get In Touch</h3>
          <p class="text-gray-400 leading-relaxed mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div class="space-y-4">
            <a 
              href="mailto:oshaine429smith@gmail.com" 
              class="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-primary-400">
                <i class="fas fa-envelope"></i>
              </div>
              <span>oshaine429smith@gmail.com</span>
            </a>
            <a 
              href="tel:+18764297967" 
              class="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-primary-400">
                <i class="fas fa-phone"></i>
              </div>
              <span>+1 (876) 429-7967</span>
            </a>
            <div class="flex items-center gap-4 text-gray-300">
              <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-primary-400">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <span>Mandeville, Manchester, Jamaica</span>
            </div>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-2xl font-bold mb-6">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a 
                :href="link.href" 
                class="text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-2"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Social & Beat Store -->
        <div>
          <h3 class="text-2xl font-bold mb-6">Connect With Me</h3>
          <p class="text-gray-400 leading-relaxed mb-6">
            Connect with me on social media or explore my beat store for music production work.
          </p>
          
          <!-- Social Links -->
          <div class="flex flex-wrap gap-4 mb-6">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              target="_blank" 
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-primary-600 hover:to-navy-800 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
          
          <!-- Beat Store Link -->
          <a 
            href="https://oxs_beats.beatstars.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-navy-800 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <i class="fas fa-music"></i> Visit Beat Store
          </a>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="border-t border-gray-800 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} Oshaine X Smith. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      quickLinks: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Beats', href: '#beats' },
      ],
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com/Oshaine', icon: 'fab fa-github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'fab fa-linkedin-in' },
        { name: 'Twitter', url: 'https://twitter.com/oxs_beats', icon: 'fab fa-twitter' },
        { name: 'Instagram', url: 'https://www.instagram.com/oshainesmith/', icon: 'fab fa-instagram' },
        { name: 'Facebook', url: 'https://www.facebook.com/oshaine.smith/', icon: 'fab fa-facebook-f' },
        { name: 'YouTube', url: 'https://youtube.com/c/OXSBeats', icon: 'fab fa-youtube' },
      ]
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>
