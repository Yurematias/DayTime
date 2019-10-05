<template>
  <div id="app">
    <h1>Calculadora</h1>
    <Calculator short />
    <!-- dependendo do atributo colcoado-->
    <!-- <Calculator large /> -->
    <!-- a calculadora será exibida de forma diferente-->
    <!-- <Calculator /> -->
  </div>
</template>

<script>
import Calculator from "./main/Calculator";

export default {
  components: { Calculator }
};
</script>

<style>
* {
  font-family: monospace, Impact;
}
body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  text-align: center;
  color: white;
  background: linear-gradient(to right, #077, #004);
}
</style>