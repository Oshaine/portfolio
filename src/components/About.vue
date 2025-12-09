<template>
  <section class="py-24 bg-gray-50" id="about">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-5 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
          Get to know me
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">About Me</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-primary-600 to-navy-800 mx-auto rounded"></div>
      </div>
      
      <!-- About Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Image -->
        <div class="flex justify-center lg:justify-start" data-aos="fade-right" data-aos-duration="800">
          <div class="relative">
            <div class="absolute -bottom-5 -left-5 w-full h-full border-4 border-primary-500 rounded-2xl"></div>
            <img 
              :src="require('../assets/images/profile_pic_1.jpg')" 
              alt="Oshaine X Smith" 
              class="w-full max-w-md rounded-2xl shadow-2xl relative z-10"
            />
            <div class="absolute bottom-5 left-5 bg-white px-6 py-4 rounded-full shadow-lg flex items-center gap-3 z-20">
              <i class="fas fa-code text-primary-600 text-xl"></i>
              <span class="font-semibold text-primary-600">5+ Years Experience</span>
            </div>
          </div>
        </div>
        
        <!-- Text Content -->
        <div data-aos="fade-left" data-aos-duration="800">
          <div class="mb-8">
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              I'm Oshaine X Smith, a 
              <span class="bg-gradient-to-r from-primary-600 to-navy-800 bg-clip-text text-transparent">Full Stack Developer</span> 
              & 
              <span class="bg-gradient-to-r from-primary-600 to-navy-800 bg-clip-text text-transparent">Music Producer</span>
            </h3>
            <p class="text-gray-600 leading-relaxed mb-4 text-lg">
              I'm an innovative and passionate developer who brings creativity and technical expertise 
              to web and mobile development. A graduate of Northern Caribbean University with a 
              Bachelor of Science in Computer Information Systems, I specialize in building modern, 
              scalable applications using cutting-edge technologies.
            </p>
            <p class="text-gray-600 leading-relaxed text-lg">
              Beyond coding, I'm also a beat composer and music producer, creating beats across 
              multiple genres. This creative side enhances my problem-solving approach and brings 
              a unique perspective to my development work.
            </p>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mb-8">
            <div 
              v-for="(stat, index) in stats" 
              :key="index"
              class="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              data-aos="zoom-in"
              :data-aos-delay="index * 100"
            >
              <div class="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-navy-800 bg-clip-text text-transparent mb-2">
                {{ stat.number }}
              </div>
              <div class="text-sm text-gray-600 font-semibold uppercase tracking-wide">
                {{ stat.label }}
              </div>
            </div>
          </div>
          
          <!-- Education -->
          <div class="p-6 bg-white rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="400">
            <h4 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <i class="fas fa-graduation-cap text-primary-600"></i>
              Education
            </h4>
            <div>
              <h5 class="text-lg font-semibold text-gray-800 mb-1">
                Bachelor of Science in Computer Information Systems
              </h5>
              <p class="text-gray-600">Northern Caribbean University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      stats: [
        { number: '20+', label: 'Projects Completed' },
        { number: '5+', label: 'Years Experience' },
        { number: '10+', label: 'Technologies' },
      ]
    }
  }
}
</script>
