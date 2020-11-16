<template>
  <div id="app">
    <NavBar />
    <Header />
    <!-- <router-view /> -->
    <Home />
    <Footer />
  </div>
</template>

<script>
import NavBar from "../src/components/NavBar";
import Header from "../src/components/Header";
import Home from "../src/views/Home";
import Footer from "../src/components/Footer";

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

