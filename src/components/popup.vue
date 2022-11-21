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
            Add Project
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="text-h5 grey lighten-2 justify-center py-4">
            <span>
                Add A New Project
            </span>
          </v-card-title>
  
          <v-card-text>
            <v-form ref="form">
                <v-text-field
                label="Title"
                prepend-inner-icon="mdi-folder"
                v-model="title"
                :rules="formRules"
                ></v-text-field>

                <v-textarea
                label="info"
                :rules="formRules"
                prepend-inner-icon="mdi-pencil"
                v-model="info"
                >
                </v-textarea>

                <v-menu>
                    <template v-slot:activator="{on}">
                        <v-text-field
                        label="Due By"
                        v-on="on"
                        prepend-inner-icon="mdi-calendar-range"
                        :value="date"
                        >
                        </v-text-field>
                    </template>

                    <v-date-picker
                    v-model="date"
                    ></v-date-picker>

                </v-menu>

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
        info: '',
        date: null,
        formRules: [
            v => v.length >= 3 || 'at least 3 charecter'
        ]
      }
    },
    methods: {
        atSubmit() {
            if (this.$refs.form.validate()){
                console.log(this.title, this.info)
            }
        }
    },
    computed: {

    }
  }
</script>