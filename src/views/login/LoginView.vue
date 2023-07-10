<script setup lang="ts"></script>
<template>
  <div class="flex h-screen w-screen">
    <div class="h-full w-1/3 flex justify-center items-center bg-bg-yellow-fanuc">
      <img src="@/assets/image/fanuc.png" alt="FANUC" width="90" />
    </div>
    <div class="flex justify-center items-center h-full w-2/3 bg-surface-bright-light">
      <div class="text-center h-5/6 w-1/2 bg-surface-container-light rounded-3xl p-4">
        <h1 class="mt-32 text-primary-light font-bold text-4xl font-fin tracking-wider">LOGIN</h1>
        <p class="mt-5 text-primary-light text-base font-fin">
          Please input your username and password
        </p>
        <div class="p-0 w-3/4 h-12 bg-surface-variant-light mx-auto rounded-t-md">
          <div class="w-5 h-full bg-black"></div>
          <input
            type="text"
            placeholder="Username"
            class="w-full h-full px-4 focus:ring-0 focus:outline-none"
          />
        </div>
      </div>
    </div>
  </div>
</template>
