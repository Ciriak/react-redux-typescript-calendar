<template>
  <div class="cld-header">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="/assets/img/favicon.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt
        />
        Calendar
      </a>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Header extends Vue {
  mounted() {}
}
</script>

<style lang="sass" src="./header.scss"></style>