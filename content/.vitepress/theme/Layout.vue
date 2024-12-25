<script setup lang="ts">
import { useData, Content } from "vitepress";
import ArticlesList from "./components/ArticlesList.vue";
import Article from "./components/Article.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, theme, page } = useData();

const navigation = theme.value.nav || [];
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <main
      class="mx-auto mb-[2%] mt-[5%] w-[60vw] max-w-[65rem] grow max-[600px]:w-[90vw]"
    >
      <div v-if="frontmatter.layout == 'home'">
        <h1 class="mb-5 text-center text-4xl font-black">
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
          <h1 class="mb-0 animate-pulse text-center text-6xl font-black">
            404
          </h1>
          <p class="text-center font-bold">Page not found</p>
          <p class="text-center">
            The page you are looking for does not exist.
          </p>
          <img
            src="https://http.cat/images/404.jpg"
            alt="404"
            class="mt-5 h-auto w-1/2"
          />
        </div>
        <footer class="hover:scale-500 my-10 text-center">
          <a
            href="/"
            class="rounded-md bg-zinc-200 p-2 no-underline transition-transform dark:bg-zinc-800"
            >⬅ Back home</a
          >
        </footer>
      </div>
      <div v-else-if="!frontmatter.layout">
        <Content />
        <footer class="hover:scale-500 my-10 text-center">
          <a
            href="/"
            class="rounded-md bg-zinc-200 p-2 transition-transform dark:bg-zinc-800"
            >⬅ Back home</a
          >
        </footer>
      </div>
    </main>
    <nav
      class="sticky bottom-0 z-10 flex w-full items-center justify-between gap-3 border-t border-t-zinc-200 bg-zinc-50 bg-opacity-50 px-8 py-3 backdrop-blur-sm dark:border-t-zinc-700 dark:bg-zinc-900"
    >
      <ul class="m-0 mr-8 flex list-none items-center justify-end gap-3">
        <li v-for="item in navigation" class="text-sm font-medium">
          <a :href="item.link">{{ item.text }}</a>
        </li>
      </ul>
      <span class="text-sm font-medium opacity-80"
        >© {{ new Date().getFullYear() }}
        <a :href="theme.author.link" class="underline">{{
          theme.author.name
        }}</a></span
      >
    </nav>
  </div>
</template>
