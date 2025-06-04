<template>
  <article>
    <header class="mb-10">
      <small class="block text-center">
        <time>
          {{
            new Date(frontmatter.date).toLocaleDateString(
              theme.locale || "en-US",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
              },
            )
          }}</time
        >
        <span v-if="frontmatter.author" class="opacity-70">
          &middot; by {{ frontmatter.author }}</span
        >
      </small>
      <small class="block text-center opacity-65"> </small>
      <h1
        :class="`mb-2 text-center text-5xl font-extrabold dark:text-${
          ['red', 'blue', 'green', 'yellow', 'purple'][
            Math.floor(Math.random() * 5)
          ]
        }-100 text-${
          ['red', 'blue', 'green', 'yellow', 'purple'][
            Math.floor(Math.random() * 5)
          ]
        }-500`"
      >
        {{ frontmatter.title }}
      </h1>
      <p class="text-center text-zinc-700 dark:text-zinc-400">
        {{ frontmatter.description }}
      </p>
      <hr class="my-5" />
    </header>
    <Content />
    <footer class="hover:scale-500 my-10 text-center">
      <a
        href="/"
        class="rounded-md bg-zinc-200 p-2 transition-transform dark:bg-zinc-800"
        >⬅ Back home</a
      >
    </footer>
  </article>
</template>

<script setup lang="ts">
import { useData, Content } from "vitepress";

const { frontmatter, theme } = useData();
</script>
