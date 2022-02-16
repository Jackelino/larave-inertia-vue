<template>
  <Welcome>
    <Head title="Welcome" />
    <div>
      <h1> contadorr: {{ contador }}</h1>
    </div>
  </Welcome>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Welcome from "../layouts/Welcome.vue";
import { Head } from "@inertiajs/inertia-vue3";
export default {
  name: "Register",
  components: {
    Welcome,
    Head,
  },
  computed: {
    ...mapState(['contador']),
  }
};
</script>

<style>
</style>