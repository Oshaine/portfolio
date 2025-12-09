<template>
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-500 via-navy-800 to-navy-900" id="home" style="padding-top: 80px;">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Gradient Radial Circles -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-navy-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-300/10 rounded-full blur-3xl"></div>
      
      <!-- Tech Code Brackets -->
      <div class="absolute top-20 left-10 text-white/10 font-mono text-6xl font-bold rotate-12" style="font-family: 'Courier New', monospace;" v-html="'&#123;'"></div>
      <div class="absolute bottom-20 right-10 text-white/10 font-mono text-6xl font-bold -rotate-12" style="font-family: 'Courier New', monospace;" v-html="'&#125;'"></div>
      <div class="absolute top-1/3 right-20 text-white/10 font-mono text-4xl font-bold" style="font-family: 'Courier New', monospace;">
        &lt;/&gt;
      </div>
      
      <!-- Circuit Lines -->
      <svg class="absolute inset-0 w-full h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 200 Q 300 100, 500 200 T 900 200" stroke="white" stroke-width="2" fill="none" />
        <path d="M200 400 Q 400 300, 600 400 T 1000 400" stroke="white" stroke-width="2" fill="none" />
        <path d="M50 600 Q 250 500, 450 600 T 850 600" stroke="white" stroke-width="2" fill="none" />
      </svg>
      
      <!-- Code Syntax Elements -->
      <div class="absolute top-1/4 left-1/4 text-white/5 font-mono text-xs md:text-sm opacity-50" style="font-family: 'Courier New', monospace;">
        const developer = true;
      </div>
      <div class="absolute bottom-1/4 right-1/4 text-white/5 font-mono text-xs md:text-sm opacity-50" style="font-family: 'Courier New', monospace;" v-html="'function create() &#123;'"></div>
      <div class="absolute top-2/3 left-1/3 text-white/5 font-mono text-xs md:text-sm opacity-50" style="font-family: 'Courier New', monospace;">
        return innovation;
      </div>
      
      <!-- Hexagonal Tech Shapes -->
      <svg class="absolute top-1/4 right-1/4 w-16 h-16 opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="white" stroke-width="2"/>
      </svg>
      <svg class="absolute bottom-1/3 left-1/4 w-12 h-12 opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="white" stroke-width="2"/>
      </svg>
      
      <!-- Binary Code Pattern -->
      <div class="absolute top-1/2 right-10 text-white/5 font-mono text-xs opacity-30" style="font-family: 'Courier New', monospace; writing-mode: vertical-rl;">
        01001000 01100101 01101100 01101100 01101111
      </div>
      
      <!-- Grid Pattern Overlay -->
      <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
      
      <!-- Tech Nodes/Connectors -->
      <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full border-2 border-white/20"></div>
      <div class="absolute top-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full border-2 border-white/20"></div>
      <div class="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/30 rounded-full border-2 border-white/20"></div>
      <div class="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white/30 rounded-full border-2 border-white/20"></div>
    </div>

    <div class="container mx-auto px-4 py-20 relative z-20" style="display: block; width: 100%; max-width: 1200px; margin: 0 auto; padding: 80px 20px;">
      <div class="max-w-4xl mx-auto">
        <!-- Hero Text -->
        <div class="text-center relative z-20" style="opacity: 1; visibility: visible;">
          <h1 class="text-2xl md:text-3xl font-medium text-white mb-2" style="color: white !important;">Hello, I'm</h1>
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white" style="color: white !important;">
            Oshaine X Smith
          </h2>
          <h3 class="text-2xl md:text-3xl font-semibold text-white mb-6 min-h-[50px]" style="color: white !important;">
            <span class="text-yellow-300" id="typing-text" style="color: #fbbf24 !important;">Full Stack Developer</span>
            <span class="text-yellow-300 animate-pulse" style="color: #fbbf24 !important;">|</span>
          </h3>
          <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed" style="color: rgba(255, 255, 255, 0.9) !important;">
            Crafting beautiful web experiences and mobile applications with modern technologies.
            Also passionate about music production and beat composition.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mb-10 justify-center relative z-20">
            <a 
              href="https://drive.google.com/file/d/1ceVvvz-qE9C543Kt_-ZdzaotB9krgMmY/view?usp=sharing" 
              target="_blank" 
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-600 hover:to-navy-800 hover:text-white"
            >
              <i class="fas fa-download"></i> Download Resume
            </a>
            <a 
              href="#projects" 
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-navy-800 transform hover:-translate-y-1 transition-all duration-300"
            >
              <i class="fas fa-code"></i> View Projects
            </a>
          </div>
          
          <!-- Social Links -->
          <div class="flex gap-4 justify-center relative z-20">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              target="_blank" 
              :aria-label="social.name"
              class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-lg shadow-md hover:bg-white hover:text-primary-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <a href="#about" class="flex flex-col items-center gap-2 text-white animate-bounce">
        <span class="w-1 h-8 bg-white rounded"></span>
        <span class="w-1 h-8 bg-white rounded"></span>
        <span class="w-1 h-8 bg-white rounded"></span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com/Oshaine', icon: 'fab fa-github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'fab fa-linkedin-in' },
        { name: 'Twitter', url: 'https://twitter.com/oxs_beats', icon: 'fab fa-twitter' },
        { name: 'Instagram', url: 'https://www.instagram.com/oshainesmith/', icon: 'fab fa-instagram' },
      ],
      titles: ['Full Stack Developer', 'Mobile App Developer', 'Music Producer'],
      currentIndex: 0,
      charIndex: 0,
    }
  },
  mounted() {
    this.initTypingEffect();
  },
  methods: {
    initTypingEffect() {
      const typingElement = document.getElementById('typing-text');
      if (!typingElement) return;
      
      const type = () => {
        if (this.charIndex < this.titles[this.currentIndex].length) {
          typingElement.textContent = this.titles[this.currentIndex].substring(0, this.charIndex + 1);
          this.charIndex++;
          setTimeout(type, 100);
        } else {
          setTimeout(() => {
            this.charIndex = 0;
            this.currentIndex = (this.currentIndex + 1) % this.titles.length;
            type();
          }, 2000);
        }
      };
      
      setTimeout(type, 1000);
    }
  }
}
</script>

<style scoped>
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.bg-gradient-radial {
  background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
}

/* Ensure content is visible */
section {
  position: relative;
}

.container {
  position: relative;
  z-index: 20;
}
</style>
