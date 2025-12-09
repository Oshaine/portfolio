<template>
  <svg 
    :width="width" 
    :height="height" 
    viewBox="0 0 140 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    class="logo-svg"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#6366f1" stop-opacity="1" />
        <stop offset="100%" stop-color="#1e3a8a" stop-opacity="1" />
      </linearGradient>
    </defs>
    
    <!-- Opening bracket -->
    <text 
      x="0" 
      y="24" 
      font-family="'Inter', 'Poppins', sans-serif" 
      font-size="20" 
      font-weight="600" 
      :fill="isSticky ? 'url(#logoGradient)' : '#ffffff'"
    >
      &lt;
    </text>
    
    <!-- Logo text -->
    <text 
      x="18" 
      y="24" 
      font-family="'Inter', 'Poppins', sans-serif" 
      font-size="20" 
      font-weight="700" 
      :fill="isSticky ? 'url(#logoGradient)' : '#ffffff'"
    >
      O.X.S
    </text>
    
    <!-- Closing bracket -->
    <text 
      x="78" 
      y="24" 
      font-family="'Inter', 'Poppins', sans-serif" 
      font-size="20" 
      font-weight="600" 
      :fill="isSticky ? 'url(#logoGradient)' : '#ffffff'"
    >
      /&gt;
    </text>
  </svg>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    width: {
      type: [String, Number],
      default: 140
    },
    height: {
      type: [String, Number],
      default: 32
    },
    isSticky: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
.logo-svg {
  display: block;
}
</style>

