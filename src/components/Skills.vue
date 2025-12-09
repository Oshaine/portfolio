<template>
  <section class="py-24 bg-gray-900 relative overflow-hidden" id="skills">
    <!-- Minimal Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs font-medium uppercase tracking-wider mb-4 border border-gray-700">
          Technical Expertise
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-3">
          Skills & Technologies
        </h2>
        <p class="text-gray-400 text-sm">Swipe or use arrows to explore</p>
      </div>
      
      <!-- Slider Container -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Navigation Arrows -->
        <button 
          @click="previousSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 w-10 h-10 md:w-12 md:h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-primary-500 hover:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
          :class="{ 'opacity-40 cursor-not-allowed': currentSlide === 0 }"
          :disabled="currentSlide === 0"
        >
          <i class="fas fa-chevron-left text-sm"></i>
        </button>
        
        <button 
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 w-10 h-10 md:w-12 md:h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-primary-500 hover:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm"
          :class="{ 'opacity-40 cursor-not-allowed': currentSlide >= maxSlides }"
          :disabled="currentSlide >= maxSlides"
        >
          <i class="fas fa-chevron-right text-sm"></i>
        </button>
        
        <!-- Slider Wrapper -->
        <div class="overflow-hidden mx-12 md:mx-16">
          <div 
            class="flex transition-transform duration-700 ease-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div 
              v-for="(category, index) in skillCategories" 
              :key="index"
              class="min-w-full px-3"
            >
              <!-- Modern Card -->
              <div class="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-10 hover:border-gray-600 transition-all duration-500">
                <!-- Category Header -->
                <div class="flex items-center gap-4 mb-8 pb-6 border-b border-gray-700/50">
                  <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-navy-800 rounded-lg flex items-center justify-center text-white text-lg">
                    <i :class="category.icon"></i>
                  </div>
                  <h3 class="text-2xl font-semibold text-white">
                    {{ category.title }}
                  </h3>
                </div>
                
                <!-- Skills Grid -->
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div 
                    v-for="(skill, skillIndex) in category.skills" 
                    :key="skillIndex"
                    class="group"
                  >
                    <div class="bg-gray-900/50 border border-gray-700/30 rounded-xl p-5 text-center hover:border-primary-500/50 hover:bg-gray-800/50 transition-all duration-300">
                      <!-- Skill Icon/Logo -->
                      <div class="text-4xl text-gray-300 mb-3 group-hover:text-primary-400 transition-colors duration-300 flex items-center justify-center h-12">
                        <!-- Use logo SVG if available, otherwise use icon -->
                        <div v-if="skill.logoSvg" v-html="skill.logoSvg" class="w-10 h-10 flex items-center justify-center"></div>
                        <i v-else :class="skill.icon"></i>
                      </div>
                      <!-- Skill Name -->
                      <span class="block text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                        {{ skill.name }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Minimal Slider Indicators -->
        <div class="flex justify-center items-center gap-2 mt-10">
          <button
            v-for="(category, index) in skillCategories"
            :key="index"
            @click="goToSlide(index)"
            class="transition-all duration-300 rounded-full"
            :class="currentSlide === index 
              ? 'w-8 h-2 bg-gradient-to-r from-primary-500 to-navy-800' 
              : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>
        
        <!-- Slide Counter -->
        <div class="text-center mt-6">
          <span class="text-gray-500 text-sm">
            {{ currentSlide + 1 }} / {{ skillCategories.length }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      currentSlide: 0,
      skillCategories: [
        {
          title: 'Languages & Frameworks',
          icon: 'fas fa-code',
          skills: [
            { name: 'JavaScript', icon: 'fab fa-js' },
            { name: 'Vue.js', icon: 'fab fa-vuejs' },
            { name: 'React', icon: 'fab fa-react' },
            { name: 'Node.js', icon: 'fab fa-node-js' },
            { name: 'Flutter', icon: 'fas fa-mobile-alt' },
            { name: 'Dart', icon: 'fas fa-code' }
          ]
        },
        {
          title: 'Databases',
          icon: 'fas fa-database',
          skills: [
            { name: 'MongoDB', icon: 'fas fa-database' },
            { name: 'MySQL', icon: 'fas fa-database' },
            { name: 'Firebase', icon: 'fas fa-fire' }
          ]
        },
        {
          title: 'Cloud & DevOps',
          icon: 'fas fa-cloud',
          skills: [
            { name: 'AWS', icon: 'fab fa-aws' },
            { name: 'Linux', icon: 'fab fa-linux' },
            { name: 'GitHub Actions', icon: 'fab fa-github' }
          ]
        },
        {
          title: 'Design Tools',
          icon: 'fas fa-palette',
          skills: [
            { name: 'Figma', icon: 'fab fa-figma' },
            { name: 'Adobe XD', icon: 'fas fa-palette' }
          ]
        },
        {
          title: 'AI Technologies',
          icon: 'fas fa-robot',
          skills: [
            { 
              name: 'OpenAI API', 
              logoSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.2812 12.2627C22.2812 18.4877 17.3062 23.4627 11.0812 23.4627C4.85625 23.4627 -0.11875 18.4877 -0.11875 12.2627C-0.11875 6.03774 4.85625 1.06274 11.0812 1.06274C17.3062 1.06274 22.2812 6.03774 22.2812 12.2627Z" fill="#40A585"/><path d="M11.0812 12.2627C11.0812 15.4127 8.55625 17.9377 5.40625 17.9377C2.25625 17.9377 -0.11875 15.4127 -0.11875 12.2627C-0.11875 9.11274 2.25625 6.58774 5.40625 6.58774C8.55625 6.58774 11.0812 9.11274 11.0812 12.2627Z" fill="white"/></svg>'
            },
            { 
              name: 'Gemini', 
              logoSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L13.09 8.26L19 2L13.09 15.74L12 22L10.91 15.74L5 2L10.91 8.26L12 2Z" fill="#4285F4"/></svg>'
            },
            { name: 'Embeddings', icon: 'fas fa-project-diagram' },
            { name: 'Prompt Engineering', icon: 'fas fa-keyboard' },
            { name: 'Intelligent Automation', icon: 'fas fa-cogs' }
          ]
        }
      ]
    }
  },
  computed: {
    maxSlides() {
      return this.skillCategories.length - 1;
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.maxSlides) {
        this.currentSlide++;
      }
    },
    previousSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    goToSlide(index) {
      this.currentSlide = index;
    }
  },
  mounted() {
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    const slider = this.$el.querySelector('.overflow-hidden');
    
    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };
    
    const handleSwipe = () => {
      if (touchEndX < touchStartX - 50) {
        this.nextSlide();
      }
      if (touchEndX > touchStartX + 50) {
        this.previousSlide();
      }
    };
    
    if (slider) {
      slider.addEventListener('touchstart', handleTouchStart);
      slider.addEventListener('touchend', handleTouchEnd);
    }
    
    this.$once('hook:beforeDestroy', () => {
      if (slider) {
        slider.removeEventListener('touchstart', handleTouchStart);
        slider.removeEventListener('touchend', handleTouchEnd);
      }
    });
  }
}
</script>

<style scoped>
/* Smooth transitions */
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
