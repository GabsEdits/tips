<script setup lang="ts">
import { useData, Content } from "vitepress";
import ArticlesList from "./components/ArticlesList.vue";
import Article from "./components/Article.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, theme } = useData();

const navigation = theme.value.nav || [];
</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <main
      class="mx-auto mt-[5%] mb-[2%] max-w-[65rem] w-[60vw] max-[600px]:w-[90vw] grow"
    >
      <div v-if="frontmatter.layout == 'home'">
        <h1 class="text-center font-black text-4xl mb-5">
          {{ site.title }}
        </h1>
        <p class="text-center">{{ site.description }}</p>
        <ArticlesList />
      </div>
      <div v-else>
        <Article />
      </div>
    </main>
    <nav
      class="flex items-center gap-3 sticky bottom-0 backdrop-blur-sm bg-opacity-50 bg-zinc-50 dark:bg-zinc-900 border-t border-t-zinc-200 dark:border-t-zinc-700 px-8 py-3 justify-between w-full z-10"
    >
      <ul class="flex items-center justify-end gap-3 list-none mr-8 m-0">
        <li v-for="item in navigation" class="font-medium text-sm">
          <a :href="item.link">{{ item.text }}</a>
        </li>
      </ul>
      <span class="text-sm opacity-80 font-medium"
        >© {{ new Date().getFullYear() }}
        <a :href="theme.author.link" class="underline">{{
          theme.author.name
        }}</a></span
      >
    </nav>
  </div>
</template>
