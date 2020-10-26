Skip to content Search or jump to… Pull requests Issues Marketplace Explore
@pisit005 Learn Git and GitHub without any code! Using the Hello World guide,
you’ll start a branch, write comments, and open a pull request. ukonw303 / gg 1
00 Code Issues Pull requests Actions Projects Wiki Security Insights
gg/layouts/default.vue @ukonw303 ukonw303 gg Latest commit 2c33c30 3 days ago
History 1 contributor 61 lines (60 sloc) 1.28 KB

<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'แบบฟอร์มการสมัคร',
          to: '/student',
        },
        {
          icon: 'mdi-account-outline',
          title: 'ข้อมูลการสมัคร',
          to: '/csstudent',
        },
      ],
    }
  },
}
</script>
© 2020 GitHub, Inc. Terms Privacy Security Status Help Contact GitHub Pricing
API Training Blog About
