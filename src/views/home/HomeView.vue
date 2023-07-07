<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <h1>This is Home</h1>
    <nav>
      <ul>
        <li>
          <RouterLink to="/home/homes">Home1</RouterLink>
        </li>
        <li>
          <RouterLink to="/home/homess">Home2</RouterLink>
        </li>
      </ul>
    </nav>
    <RouterView />
  </main>
</template>
