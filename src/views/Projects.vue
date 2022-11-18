<template>
  <div class="projects">
    <h1>proj</h1>

    <v-container class="my-5 px-4">
      
        <v-expansion-panels popout>
            <v-expansion-panel v-for="project in myProjects" >
                <v-expansion-panel-header>
                    {{project.title}}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card flat>
                        <v-card-text>
                            <div class="grey--text caption mb-1">due by: {{project.due}}</div>
                            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolore maiores aliquam est omnis, voluptate accusamus assumenda. Atque facere delectus aperiam voluptatibus sequi ut, veritatis blanditiis sint officiis nobis repellendus?</div>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

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
        {title: 'quit smoking', person: "toofan's Life", due: '11th aug 2022', status: 'completed'},
        {title: 'learn git', person: 'Toofan', due: '1st jan 2019', status: 'ongoing' },
            ]
        }
    },
    computed: {
        myProjects() {
            return this.projects.filter( i => i.person == 'Toofan')
        }
    }
}
</script>
