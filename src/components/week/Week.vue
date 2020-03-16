<template>
  <div class="week">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" v-for="day in days" v-bind:key="day">{{day}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(hour, hIndex) in hours" v-bind:key="hour">
          <th scope="row" class="hour-row">
            <span
              v-if="hIndex > 0"
              class="hour-label"
            >{{ [ String(hour), "HH" ] | moment("HH:mm") }}</span>
          </th>
          <td
            class="event-row"
            scope="col"
            v-for="day in days"
            v-bind:key="day"
            @click="handleEventRowClick(day, hour)"
          ></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  data: () => {
    return {
      days: [],
      hours: []
    };
  }
})
export default class Week extends Vue {
  days: string[] = [];
  hours: string[] = [];
  mounted() {
    this.hours = this.generateHours();

    // format the hours

    this.days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
  }

  handleEventRowClick(day: string, hour: string) {
    console.log(`Creating an event for ${day} at ${hour}`);
  }

  /**
   * Generate a list of hours
   */
  private generateHours(): string[] {
    const hours = [];
    const rawHours = new Array(24);
    for (let hIndex = 0; hIndex < rawHours.length; hIndex++) {
      hours.push(("0" + hIndex).substr(-2));
    }

    return hours;
  }
}
</script>

<style lang="sass" src="./week.scss"></style>