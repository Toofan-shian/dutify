<template>
    <nav>
        <v-app-bar class="red" app>
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
            class="indigo"
        >
            <p>Test</p>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
        }
    }
}
</script>

<style>

</style>