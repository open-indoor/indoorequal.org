<template>
  <v-autocomplete
    v-model="selected"
    :items="items"
    :loading="isLoading"
    :search-input.sync="search"
    :error="!!error"
    :placeholder="$t('search')"
    hide-no-data
    hide-details
    no-filter
    dense
    background-color="white"
    prepend-inner-icon="mdi-magnify"
    class="geocoder"
  />
</template>

<script>
import { mapTilerApiKey } from '../config.json';

export default {
  data() {
    return {
      isLoading: false,
      items: [],
      search: '',
      selected: null,
      error: null
    };
  },
  watch: {
    search(val) {
      if (!val) return;
      this.error = null;
      this.isLoading = true;

      fetch(`https://api.maptiler.com/geocoding/${this.search}.json?key=${mapTilerApiKey}`)
        .then(res => res.json())
        .then(body => {
          this.items = body.features.map((feature) => {
            return {
              text: feature.place_name,
              value: feature.bbox
            };
          });
        })
        .catch(err => {
          this.error = err;
        })
        .finally(() => (this.isLoading = false))
    },
    selected(val) {
      this.$emit('select', val);
    }
  }
}
</script>
