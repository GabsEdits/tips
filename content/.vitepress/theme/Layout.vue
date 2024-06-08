<script setup lang="ts">
import { useData, Content } from "vitepress";
import ArticlesList from "./components/ArticlesList.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, theme } = useData();

const navigation = theme.value.nav || [];
</script>

<template>
  <header>
    <nav class="text-center max-w-[100px] mx-auto my-8">
      <ul class="justify-between flex items-center list-none">
        <li v-for="item in navigation">
          <a :href="item.link">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
  </header>
  <main
    class="mx-auto mt-[5%] mb-[2%] max-w-[65rem] w-[60vw] max-[600px]:w-[90vw]"
  >
    <div v-if="frontmatter.layout == 'home'">
      <h1
        class="text-center font-black text-4xl mb-5 text-black dark:text-white"
      >
        {{ site.title }}
      </h1>
      <p class="text-center">{{ site.description }}</p>
      <ArticlesList />
    </div>
    <div v-else>
      <h1
        class="text-center font-black text-4xl mb-5 text-black dark:text-white"
      >
        {{ frontmatter.title }}
      </h1>
      <Content />
      <footer class="text-center my-10">
        <a
          href="/"
          class="p-2 dark:bg-zinc-800 bg-zinc-200 rounded-md hover:scale-200 transform transition-transform"
          >⬅ Back to home</a
        >
      </footer>
    </div>
  </main>
</template>
