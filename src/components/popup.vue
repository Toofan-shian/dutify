<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="red lighten-2 mb-2"
            dark
            v-on="on"
          >
            Click Me
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="text-h5 grey lighten-2 justify-center py-4">
            <span>

                Add A New Project
            </span>
          </v-card-title>
  
          <v-card-text>
            <v-form>
                <v-text-field
                label="Title"
                prepend-inner-icon="mdi-folder"
                v-model="title"
                ></v-text-field>

                <v-textarea
                label="info"
                prepend-inner-icon="mdi-pencil"
                v-model="info"
                >
                </v-textarea>
                <v-btn class="success mx-0" @click="atSubmit">Add Project</v-btn>
            </v-form>
          </v-card-text>

        </v-card>

      </v-dialog>
    </div>
  </template>

  <script>
  export default {
    data () {
      return {
        dialog: false,
        title: '',
        info: ''
      }
    },
    methods: {
        atSubmit() {
            console.log(this.title, this.info)
        }
    }
  }
</script>