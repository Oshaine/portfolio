<template>
  <div id="app" class="min-h-screen">
    <NavBar />
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Header from "./components/Header.vue";
import Home from "./views/Home.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Header,
    Home,
    Footer,
  },
};
</script>

<style>
/* Fallback styles in case Tailwind doesn't load */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Inter', 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  width: 100%;
}

/* Ensure content is visible even without Tailwind */
section {
  display: block;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
