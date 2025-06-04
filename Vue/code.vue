<div id="app">
  <h2>Fruit List:</h2>
  <ul>
    <!-- Use v-for to loop through the fruits array -->
    <li v-for="fruit in fruits" :key="fruit">
      {{ fruit }}
    </li>
  </ul>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<script>
  const app = Vue.createApp({
    data() {
      return {
        // Array of fruits
        fruits: ["Apple", "Banana", "Cherry", "Mango", "Orange"],
      };
    },
  });

  app.mount("#app");
</script>
