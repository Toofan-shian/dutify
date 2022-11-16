import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1422db',   //dark-blue
                secondary: '#12AD27', //green
                accent: '#DBCD14',    //dark-golden
                warning: '#DB1422',   //reddish
                info: '#7CC0F4',      //lighter-blue
            }
        }
    }
});
