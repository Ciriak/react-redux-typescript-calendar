<template>
  <div class="calendar">
    <cld-header />
    <p>Calendar</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/header/Header.vue";
import VueRouter from "vue-router";
import "bootstrap/dist/js/bootstrap.bundle";
import Component from "vue-class-component";

@Component({
  components: {
    cldHeader: Header
  }
})
export default class App extends Vue {
  constructor() {
    super();
  }
}
</script>