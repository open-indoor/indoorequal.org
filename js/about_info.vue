<template>
  <sub-sidebar
    :title="$t('sidebar.about.title')"
    @close="$emit('close')"
  >
    <v-list>
      <v-list-item
        href="https://2metz.fr"
        target="_blank"
        rel="noopener"
      >
        <v-list-item-icon>
          <v-icon>mdi-link</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ $t('sidebar.about.created_by') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        href="https://www.linkedin.com/in/clement-igonet"
        target="_blank"
        rel="noopener"
      >
        <v-list-item-icon>
          <v-icon>mdi-twitter</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>@francois2metz</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        href="https://github.com/open-indoor"
        target="_blank"
        rel="noopener"
      >
        <v-list-item-icon>
          <v-icon>mdi-github</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>GitHub</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </sub-sidebar>
</template>

<script>
import SubSidebar from './sub_sidebar';

export default {
  components: { SubSidebar },
};
</script>
