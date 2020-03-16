<template>
  <div class="calendar">
    <cld-header />
    <week />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/header/Header.vue";
import Week from "./components/week/Week.vue";
import VueRouter from "vue-router";
import "bootstrap/dist/js/bootstrap.bundle";
import Component from "vue-class-component";

@Component({
  components: {
    cldHeader: Header,
    week: Week
  }
})
export default class App extends Vue {
  constructor() {
    super();
  }
}
</script>