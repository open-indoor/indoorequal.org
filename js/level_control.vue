<template>
  <div class="mapboxgl-ctrl pt-2">
    <v-btn
      v-for="level in levels"
      :class="{ 'black--text': level !== value }"
      :color="level == value ? 'primary' : 'white'"
      fab
      dark
      class="button d-block mb-2"
      @click="setLevel(level)"
    >
      {{ level }}
    </v-btn>
  </div>
</template>

<script>
import { $helpers } from 'vue-mapbox/dist/vue-mapbox.umd.js';

export default {
  mixins: [$helpers.asControl],

  inject: ['openindoor'],

  props: {
    value: {
      type: String,
      required: true
    },
  },

  data() {
    return {
      levels: []
    };
  },

  mounted() {
    this.control = this;
    this.$_addControl();
    this.levels = this.openindoor.levels;
    this.openindoor.setLevel(this.value);
    this.openindoor.on('levelchange', (level) => this.$emit('input', level));
    this.openindoor.on('levelschange', (levels) => this.levels = levels);
  },

  methods: {
    onAdd() {
      return this.$el;
    },

    onRemove() {
      this.$el.remove();
    },

    setLevel(level) {
      this.openindoor.setLevel(level);
    }
  }
};
</script>

<style scoped>
.mapboxgl-ctrl {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  width: 90px;
}
.button {
  margin: 0 auto;
}
</style>
