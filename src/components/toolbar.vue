<template>
    <nav>
        <v-app-bar class="secondary" app>
            <v-app-bar-nav-icon
                @click="drawer = !drawer"
            >
            </v-app-bar-nav-icon>
            <v-app-bar-title>
                Dutify
            </v-app-bar-title>
            <v-spacer></v-spacer>

            <v-btn>
                <span>Sign Out</span>
                <v-icon right>
                    mdi-exit-to-app
                </v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer
            app
            v-model="drawer"
            class="primary"
        >
        <v-layout column align-center class='mt-4'>

            <v-flex class="text-center">
              <v-avatar size="100" color="grey lighten-2">
                <img src="/download.jpg"/>
              </v-avatar>
              <p class="white--text text-subtitle-1 mt-1 text-center">hanane</p>
            </v-flex>

            <v-flex>
                <popup/>
            </v-flex>
        </v-layout>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import popup from './popup.vue'
export default {
    data() {
        return {
            drawer: false,
            links: [
                {text: 'Dashboard', icon: 'mdi-view-dashboard', route: './'},
                {text: 'My Projects', icon: 'mdi-folder', route: './projects'},
                {text: 'Team', icon: 'mdi-account', route: './team'}
            ]
        }
    },
    components: {
        popup
    }
}
</script>

<style>

</style>