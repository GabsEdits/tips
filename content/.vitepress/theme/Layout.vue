<script setup lang="ts">
import { useData, Content } from "vitepress";
import ArticlesList from "./components/ArticlesList.vue";
import Article from "./components/Article.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, theme, page } = useData();

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
      <div v-if="frontmatter.layout == 'post'">
        <Article />
      </div>
      <div v-if="page.isNotFound">
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-center font-black text-6xl animate-pulse mb-0">404</h1>
          <p class="text-center font-bold">Page not found</p>
          <p class="text-center">The page you are looking for does not exist.</p>
          <img
            src="https://http.cat/images/404.jpg"
            alt="404"
            class="w-1/2 h-auto mt-5"
            />
        </div>
        <footer class="text-center my-10 hover:scale-500">
          <a
            href="/"
            class="p-2 dark:bg-zinc-800 bg-zinc-200 rounded-md transition-transform no-underline"
            >⬅ Back home</a
          >
        </footer>
      </div>
      <div v-else-if="!frontmatter.layout">
        <Content />
        <footer class="text-center my-10 hover:scale-500">
          <a
            href="/"
            class="p-2 dark:bg-zinc-800 bg-zinc-200 rounded-md transition-transform"
            >⬅ Back home</a
          >
        </footer>
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
