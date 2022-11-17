<template>
  <div class="dashboard">
    <h1 >Dash</h1>

    <v-container class="my-5">

      <v-card v-for="project in projects" :key="project.title" >

        <v-layout row wrap :class="`ma-0 project pa-5 ${project.status}`">

          <v-flex xs12 md6>
            <div class="caption grey--text">Title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
          <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div>{{ project.status }}</div>
          </v-flex>

        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      projects: [
        {title: 'learn vuetify', person: 'Toofan', due: '1st jan 2019', status: 'ongoing' },
        {title: 'find a girlfriend', person: "Toofan's Dick", due: 'right now', status: 'over-due'},
        {title: 'find a job', person: "toofan's pocket", due: '1st may 2023', status: 'ongoing'},
        {title: 'quit smoking', person: "toofan's Life", due: '11th aug 2022', status: 'completed'}
      ]
    }
  }
}
</script>

<style>

.project.completed {
  border-left: 4px solid green;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.over-due {
  border-left: 4px solid tomato;
}
</style>