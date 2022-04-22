<template>
  <div class="skills" id="skills">
    <div class="heading white pt-5">
      <h2>Skills</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="card col-md">
          <b-card title="Skills" class="skills-card">
            <b-card-text>
              <ul v-for="(skill, index) in skills" :key="index">
                <i class="fa fa-check"></i
                >{{skill}}
              </ul>
            </b-card-text>
          </b-card>
        </div>
        <div class="card col-md">
          <b-card title="Tools">
            <b-card-text>
              <ul v-for="(tool, index) in tools" :key="index">
                <i class="fas fa-check"></i
                >{{tool}}
              </ul>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Skills',
  data(){
    return{
      skills:[
'HTML','CSS/SCSS', 'JavaScript', 'PHP', 'Laravel', 'Vue.js', 'Nuxt.js', 'NodeJs', 'Flutter', 'Dart', 'Cordova'
      ],
      tools: [],
    }
  }
}
</script>