<template>
  <header 
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isSticky ? 'bg-white shadow-lg py-4' : 'bg-transparent py-5'
    ]"
  >
    <nav class="container mx-auto px-4 flex justify-between items-center">
      <a 
        href="#home" 
        class="hover:scale-105 transition-transform duration-300 flex items-center"
      >
        <Logo :isSticky="isSticky" />
      </a>
      
      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="item in menuItems" :key="item.name">
          <a 
            :href="item.href" 
            :class="[
              'font-medium text-sm relative transition-colors duration-300',
              isSticky ? 'text-gray-800' : 'text-white'
            ]"
            @click="closeMenu"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-navy-800 transition-all duration-300 hover:w-full"></span>
          </a>
        </li>
      </ul>
      
      <!-- Mobile Menu Toggle -->
      <button 
        @click="toggleMenu"
        class="md:hidden flex flex-col gap-1.5 z-50"
        :class="isSticky ? 'text-gray-800' : 'text-white'"
      >
        <span 
          :class="[
            'w-6 h-0.5 bg-current transition-all duration-300',
            menuOpen ? 'rotate-45 translate-y-2' : ''
          ]"
        ></span>
        <span 
          :class="[
            'w-6 h-0.5 bg-current transition-all duration-300',
            menuOpen ? 'opacity-0' : 'opacity-100'
          ]"
        ></span>
        <span 
          :class="[
            'w-6 h-0.5 bg-current transition-all duration-300',
            menuOpen ? '-rotate-45 -translate-y-2' : ''
          ]"
        ></span>
      </button>
    </nav>
    
    <!-- Mobile Menu -->
    <div 
      :class="[
        'fixed top-0 left-0 w-full h-screen bg-white transform transition-transform duration-300 z-40 md:hidden',
        menuOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <div class="flex flex-col items-center justify-center h-full gap-8">
        <a 
          v-for="item in menuItems" 
          :key="item.name"
          :href="item.href" 
          class="text-2xl font-medium text-gray-800 hover:text-primary-600 transition-colors duration-300"
          @click="closeMenu"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: 'NavBar',
  components: {
    Logo
  },
  data() {
    return {
      isSticky: false,
      menuOpen: false,
      menuItems: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Beats', href: '#beats' },
        { name: 'Contact', href: '#contact' },
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 50;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
}
</script>
