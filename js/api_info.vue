<template>
  <sub-sidebar
    :title="$t('sidebar.api.title')"
    @close="$emit('close')"
  >
    <div class="px-4 pt-4">
      <p>{{ $t('sidebar.api.subtitle') }}</p>
      <v-card
        color="primary"
        dark
        href="https://openindoor.io/"
        target="_blank"
        rel="noopener"
      >
        <v-card-title>{{ $t('sidebar.api.openindoor.title') }}</v-card-title>
        <v-card-subtitle>{{ $t('sidebar.api.openindoor.subtitle') }}</v-card-subtitle>
        <v-card-actions>
          <v-btn text>{{ $t('sidebar.api.openindoor.cta') }}</v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        color="secondary"
        dark
        class="mt-4"
        href="https://github.com/open-indoor/mapbox-gl-openindoor"
        target="_blank"
        rel="noopener"
      >
        <v-card-title>{{ $t('sidebar.api.mapboxgl.title') }}</v-card-title>
        <v-card-subtitle>{{ $t('sidebar.api.mapboxgl.subtitle') }}</v-card-subtitle>
        <v-card-actions>
          <v-btn text>{{ $t('sidebar.api.mapboxgl.cta') }}</v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        color="blue darken-3"
        dark
        class="mt-4"
        href="https://openindoor.com/schema"
        target="_blank"
        rel="noopener"
      >
        <v-card-title>{{ $t('sidebar.api.schema.title') }}</v-card-title>
        <v-card-subtitle>{{ $t('sidebar.api.schema.subtitle') }}</v-card-subtitle>
        <v-card-actions>
          <v-btn text>{{ $t('sidebar.api.schema.cta') }}</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </sub-sidebar>
</template>

<script>
import SubSidebar from './sub_sidebar';

export default {
  components: { SubSidebar },
};
</script>

<style scoped>
.text-pre {
  white-space: pre-line;
}
</style>
