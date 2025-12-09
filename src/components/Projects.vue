<template>
  <section class="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="projects">
    <!-- Background Effects -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-navy-800 rounded-full blur-3xl"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          Portfolio
        </span>
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
          Featured <span class="bg-gradient-to-r from-primary-600 to-navy-800 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A curated collection of innovative solutions and creative implementations
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="group relative flex"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Card Container -->
          <div 
            :class="[
              'relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex w-full h-[450px] shadow-lg',
              project.linkIcon === 'fab fa-google-play' ? 'flex-col md:flex-row' : 'flex-col'
            ]"
          >
            <!-- For Apps: Content on Left, Image on Right -->
            <template v-if="project.linkIcon === 'fab fa-google-play'">
              <!-- Project Content (Left Side) -->
              <div class="flex-1 p-6 flex flex-col justify-center bg-white z-10 h-full">
                <div class="mb-4">
                  <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {{ project.title }}
                  </h3>
                  <div class="w-10 h-0.5 bg-gradient-to-r from-primary-600 to-navy-800 rounded-full mb-4"></div>
                </div>
                <p class="text-gray-700 leading-relaxed mb-4 text-sm line-clamp-4">
                  {{ project.description }}
                </p>
                <a 
                  :href="project.link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-navy-800 text-white font-medium rounded-lg hover:from-primary-500 hover:to-navy-700 transition-all duration-300 group/link w-fit text-sm"
                >
                  <span>{{ project.linkText }}</span>
                  <i :class="[project.linkIcon, 'transform group-hover/link:translate-x-1 transition-transform duration-300 text-xs']"></i>
                </a>
              </div>
              
              <!-- Project Image Slider (Right Side) -->
              <div class="relative w-full md:w-1/2 h-full overflow-hidden bg-gray-100 flex-shrink-0">
                <div class="relative w-full h-full">
                  <div 
                    class="flex transition-transform duration-500 ease-in-out h-full"
                    :style="{ transform: `translateX(-${project.currentImageIndex * 100}%)` }"
                  >
                    <div 
                      v-for="(img, imgIndex) in project.images" 
                      :key="imgIndex"
                      class="w-full h-full flex-shrink-0 relative"
                      style="min-width: 100%;"
                    >
                      <img 
                        :src="img" 
                        :alt="`${project.title} - Image ${imgIndex + 1}`" 
                        class="w-full h-full object-cover"
                        style="display: block;"
                      />
                    </div>
                  </div>
                  
                  <button 
                    v-if="project.images.length > 1"
                    @click.stop="previousImage(index)"
                    class="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                    :aria-label="'Previous image'"
                  >
                    <i class="fas fa-chevron-left text-xs"></i>
                  </button>
                  <button 
                    v-if="project.images.length > 1"
                    @click.stop="nextImage(index)"
                    class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                    :aria-label="'Next image'"
                  >
                    <i class="fas fa-chevron-right text-xs"></i>
                  </button>
                  
                  <div 
                    v-if="project.images.length > 1"
                    class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                  >
                    <button
                      v-for="(img, imgIndex) in project.images"
                      :key="imgIndex"
                      @click.stop="goToImage(index, imgIndex)"
                      class="h-1.5 rounded-full transition-all duration-300"
                      :class="project.currentImageIndex === imgIndex ? 'bg-white w-6' : 'bg-white/50 w-1.5'"
                      :aria-label="`Go to image ${imgIndex + 1}`"
                    ></button>
                  </div>
                </div>
              </div>
            </template>
            
            <!-- For Websites: Image on Top, Content on Bottom -->
            <template v-else>
              <!-- Project Image Slider (Top) -->
              <div class="relative w-full h-56 overflow-hidden bg-gray-100 flex-shrink-0">
                <div class="relative w-full h-full">
                  <div 
                    class="flex transition-transform duration-500 ease-in-out h-full"
                    :style="{ transform: `translateX(-${project.currentImageIndex * 100}%)` }"
                  >
                    <div 
                      v-for="(img, imgIndex) in project.images" 
                      :key="imgIndex"
                      class="w-full h-full flex-shrink-0 relative"
                      style="min-width: 100%;"
                    >
                      <img 
                        :src="img" 
                        :alt="`${project.title} - Image ${imgIndex + 1}`" 
                        class="w-full h-full object-cover"
                        style="display: block;"
                      />
                    </div>
                  </div>
                  
                  <button 
                    v-if="project.images.length > 1"
                    @click.stop="previousImage(index)"
                    class="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                    :aria-label="'Previous image'"
                  >
                    <i class="fas fa-chevron-left text-xs"></i>
                  </button>
                  <button 
                    v-if="project.images.length > 1"
                    @click.stop="nextImage(index)"
                    class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                    :aria-label="'Next image'"
                  >
                    <i class="fas fa-chevron-right text-xs"></i>
                  </button>
                  
                  <div 
                    v-if="project.images.length > 1"
                    class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                  >
                    <button
                      v-for="(img, imgIndex) in project.images"
                      :key="imgIndex"
                      @click.stop="goToImage(index, imgIndex)"
                      class="h-1.5 rounded-full transition-all duration-300"
                      :class="project.currentImageIndex === imgIndex ? 'bg-white w-6' : 'bg-white/50 w-1.5'"
                      :aria-label="`Go to image ${imgIndex + 1}`"
                    ></button>
                  </div>
                </div>
              </div>
              
              <!-- Project Content (Bottom) -->
              <div class="flex-1 p-6 flex flex-col justify-between bg-white z-10 h-full">
                <div>
                  <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {{ project.title }}
                  </h3>
                  <div class="w-10 h-0.5 bg-gradient-to-r from-primary-600 to-navy-800 rounded-full mb-4"></div>
                  <p class="text-gray-700 leading-relaxed mb-4 text-sm line-clamp-4">
                    {{ project.description }}
                  </p>
                </div>
                <a 
                  :href="project.link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-navy-800 text-white font-medium rounded-lg hover:from-primary-500 hover:to-navy-700 transition-all duration-300 group/link w-fit text-sm"
                >
                  <span>{{ project.linkText }}</span>
                  <i :class="[project.linkIcon, 'transform group-hover/link:translate-x-1 transition-transform duration-300 text-xs']"></i>
                </a>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      autoSlideIntervals: {},
      projects: [
        {
          title: 'Bazzaar E-commerce Platform',
          description: 'Online marketplace connecting producers, retailers, and consumers. Features product listings, search functionality, user interactions, and seamless transactions. A vibrant community platform for discovering and sharing experiences.',
          images: [
            require('../assets/images/bazzaarhome.png'),
            require('../assets/images/bazzaarlogin.png')
          ],
          currentImageIndex: 0,
          technologies: [],
          link: 'https://bazzaar.net/',
          linkText: 'Visit Website',
          linkIcon: 'fas fa-external-link-alt'
        },
        {
          title: 'LifeRxMD - Lifestyle Tracker',
          description: 'Health and wellness mobile application for tracking medications, recording doses, and receiving personalized notifications. Features reminder system, progress tracking, and user-friendly interface designed to keep users motivated on their wellness journey.',
          images: [
            require('../assets/images/LifeRxMD.png'),
            require('../assets/images/LifeRxMD2.png'),
            require('../assets/images/LifeRxMd3.png')
          ],
          currentImageIndex: 0,
          technologies: [],
          link: 'https://play.google.com/store/apps/details?id=com.liferxmd.app',
          linkText: 'View on Play Store',
          linkIcon: 'fab fa-google-play'
        },
        {
          title: 'ShotsMate',
          description: 'Health tracking mobile application helping users manage medications and doses with personalized notifications. Features secure tracking, progress monitoring, and intuitive interface designed to help users stay on top of their wellness journey.',
          images: [
            require('../assets/images/ShotsMate.png'),
            require('../assets/images/ShotsMate2.png'),
            require('../assets/images/ShotsMate3.png')
          ],
          currentImageIndex: 0,
          technologies: [],
          link: 'https://play.google.com/store/apps/details?id=com.shotmate.app&hl=en',
          linkText: 'View on Play Store',
          linkIcon: 'fab fa-google-play'
        },
        {
          title: 'LogisticsPlug',
          description: 'Comprehensive logistics management platform with real-time package tracking, admin dashboard, and customer portal. Features barcode scanning, delivery requests, invoice management, and multi-branch support for seamless logistics operations.',
          images: [
            require('../assets/images/LogisticsPlug.png'),
            require('../assets/images/LogisticsPlug1.png'),
            require('../assets/images/image.png')
          ],
          currentImageIndex: 0,
          technologies: [],
          link: 'https://logisticsplug.com/',
          linkText: 'Visit Website',
          linkIcon: 'fas fa-external-link-alt'
        },
        {
          title: 'Polaris Travel & Placements Services',
          description: 'Cultural exchange platform enabling students and young adults to work and experience life in the United States through J1 programs. Features program registration, visa support, and comprehensive participant management.',
          images: [
            require('../assets/images/Polaris.png'),
            require('../assets/images/Polaris2.png')
          ],
          currentImageIndex: 0,
          technologies: [],
          link: 'https://polarisja.com/',
          linkText: 'Visit Website',
          linkIcon: 'fas fa-external-link-alt'
        },
        {
          title: 'Honey Bun Foundation Training Calendar',
          description: 'Training management system for capacity building programs supporting Small and Medium Enterprises. Enables scheduling, tracking, and management of business development training sessions.',
          images: [
            require('../assets/images/honeybun.png')
          ],
          currentImageIndex: 0,
          technologies: [],
          link: 'http://calendar.thehoneybunfoundation.com/',
          linkText: 'Visit Website',
          linkIcon: 'fas fa-external-link-alt'
        },
        {
          title: 'Honey Bun Foundation Gap App',
          description: 'Business diagnostic mobile application helping MSMEs identify improvement areas. Features monthly surveys, progress tracking, and connects businesses with training and funding resources.',
          images: [
            require('../assets/images/GapApp.png')
          ],
          currentImageIndex: 0,
          technologies: [],
          link: 'https://play.google.com/store/apps/details?id=com.honeybun.gapapp',
          linkText: 'View on Play Store',
          linkIcon: 'fab fa-google-play'
        }
      ]
    }
  },
  mounted() {
    // Start auto-slide for all projects with multiple images
    this.projects.forEach((project, index) => {
      if (project.images.length > 1) {
        this.startAutoSlide(index);
      }
    });
  },
  beforeDestroy() {
    // Clear all intervals
    Object.values(this.autoSlideIntervals).forEach(interval => {
      if (interval) {
        clearInterval(interval);
      }
    });
  },
  methods: {
    nextImage(projectIndex) {
      const project = this.projects[projectIndex];
      if (project.currentImageIndex < project.images.length - 1) {
        project.currentImageIndex++;
      } else {
        project.currentImageIndex = 0;
      }
      // Reset auto-slide timer
      this.resetAutoSlide(projectIndex);
    },
    previousImage(projectIndex) {
      const project = this.projects[projectIndex];
      if (project.currentImageIndex > 0) {
        project.currentImageIndex--;
      } else {
        project.currentImageIndex = project.images.length - 1;
      }
      // Reset auto-slide timer
      this.resetAutoSlide(projectIndex);
    },
    goToImage(projectIndex, imageIndex) {
      this.projects[projectIndex].currentImageIndex = imageIndex;
      // Reset auto-slide timer
      this.resetAutoSlide(projectIndex);
    },
    startAutoSlide(projectIndex) {
      const project = this.projects[projectIndex];
      if (project.images.length <= 1) return;
      
      // Clear existing interval if any
      if (this.autoSlideIntervals[projectIndex]) {
        clearInterval(this.autoSlideIntervals[projectIndex]);
      }
      
      this.autoSlideIntervals[projectIndex] = setInterval(() => {
        if (project.currentImageIndex < project.images.length - 1) {
          project.currentImageIndex++;
        } else {
          project.currentImageIndex = 0;
        }
      }, 4000); // Change image every 4 seconds
    },
    resetAutoSlide(projectIndex) {
      if (this.autoSlideIntervals[projectIndex]) {
        clearInterval(this.autoSlideIntervals[projectIndex]);
      }
      this.startAutoSlide(projectIndex);
    }
  }
}
</script>
