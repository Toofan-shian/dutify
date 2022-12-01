<template>
  <div class="dashboard">
    <h1 class='text-center'>Dashboard</h1>

    <v-container class="my-5">

      <v-layout row class="mb-3 mx-0 align-center">

        <span class="grey--text mr-3">Sort:   </span>

        <v-btn text small color="grey" @click="sortBy('title')">
          <v-icon small left>mdi-folder</v-icon>
          <span class="caption text-lowercase">by project name</span>
        </v-btn>

        <v-btn text small color="grey" @click="sortBy('person')">
          <v-icon small left>mdi-account</v-icon>
          <span class="caption text-lowercase">by person</span>
        </v-btn>

      </v-layout>

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
            <v-row class="ma-0 fill-height" justify="end" align="center">
              
              <v-chip small :class="`${project.status} white--text caption justify-center`">
                {{project.status}}
              </v-chip>

            </v-row>
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
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
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
.v-chip.completed {
  background: green !important;
  min-width: 87px;
}
.v-chip.ongoing {
  background: orange !important;
  min-width: 87px;
}
.v-chip.over-due {
  background: tomato !important;
  min-width: 87px;
}


</style>