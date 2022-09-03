<template>
  <div>
    <router-link class="link" :to="{ path: '/' }">empty</router-link>
  </div>
  <div>
    <router-link class="link" :to="{ name: '5000' }">5000 items</router-link>
  </div>
  <div>
    <router-link class="link" :to="{ name: '10000' }">10000 items</router-link>
  </div>
  <div>
    <router-link class="link" :to="{ name: '20000' }">20000 items</router-link>
  </div>
  <div>
    <router-view />
  </div>
</template>

<style>
.link {
  color: #444;
}
.link.router-link-active {
  color: #22f;
}
</style>