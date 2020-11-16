<template>
  <section class="about" id="about">
    <div class="heading">
      <h2>About Me</h2>
    </div>
    <div class="content">
      <vue-aos animation-class="fadeIn animated">
        <div>
          <img src="../assets/images/profile_pic.jpg" class="img" />
        </div>
      </vue-aos>
      <div class="contentbox">
        <p>
          Oshaine X Smith is a young software developer aiming to be inspired,
          innovative and brings life to software development. Also, I am a
          student at Northern Caribbean University
          <br />
          pursuing a Batchelor of Science in Computer Information Systems.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import VueAos from "vue-aos";

export default {
  components: { VueAos },
};
</script> 