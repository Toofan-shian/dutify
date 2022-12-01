<template>
  <div class="team">
    <h1 class='text-center'>Team</h1>

    <v-container class="my-5 px-4">
      
      <v-layout row>
        <v-flex xs12 sm6 md4 lg2 v-for="member in teamMembers" :key="member.name">
          <v-card class="text-center ma-2 pa-2">
            <v-responsive class="pt-2">
              <v-avatar size="100" class="" color="grey lighten-2">
                <img :src="member.avatar"/>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="text-h6">{{member.name}}</div>
              <div class="grey--text">{{member.role}}</div>
            </v-card-text>
            <v-card-actions class="d-flex row justify-start pa-3">
              <v-btn  text class="text-lowercase" color="grey">
                <v-icon left small>mdi-message</v-icon>
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
        {name: 'asghar', role: 'chaghagh', avatar: '/avatar-1.png'},
        {name: 'toofan', role: 'koskhol', avatar: '/avatar-2.png'},
        {name: 'azie', role: 'lashi', avatar: '/avatar-3.png'},
        {name: 'mojtaba', role: 'web developer', avatar: '/avatar-4.png'},
        {name: 'sudabe', role: 'amre be maruf', avatar: '/avatar-5.png'},
        {name: 'hanane', role: 'nahi az monkar', avatar: '/download.jpg'}
      ]
    }
  }
}
</script>
