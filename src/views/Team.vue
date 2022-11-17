<template>
  <div class="team">
    <h1>team</h1>

    <v-container class="my-5 px-4">
      
      <v-layout row>
        <v-flex xs12 sm6 md4 lg2 v-for="member in teamMembers" :key="member.name">
          <v-card class="text-center ma-2 pa-2">
            <v-responsive min-height="100" >
              img goes here 
            </v-responsive>
            <v-card-text>
              <div class="text-h6">{{member.name}}</div>
              <div class="grey--text">{{member.role}}</div>
            </v-card-text>
            <v-card-actions class="d-flex row justify-start pa-3">
              <v-btn  text class="text-lowercase" color="grey">
                <v-icon left small>mdi-email</v-icon>
                <span>send a massage</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>


export default {

  data() {
    return {
      teamMembers: [
        {name: 'asghar', role: 'chaghagh'},
        {name: 'toofan', role: 'koskhol'},
        {name: 'azie', role: 'lashi'},
        {name: 'mojtaba', role: 'web developer'},
        {name: 'sudabe', role: 'amre be maruf'},
        {name: 'hanane', role: 'nahi az monkar'}
      ]
    }
  }
}
</script>
