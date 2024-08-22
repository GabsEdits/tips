<template>
  <article>
    <header class="mb-10">
      <small class="text-center block">
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
        :class="`text-center font-extrabold text-5xl mb-2 dark:text-${
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
      <p class="text-center dark:text-zinc-400 text-zinc-700">
        {{ frontmatter.description }}
      </p>
      <hr class="my-5" />
    </header>
    <Content />
    <footer class="text-center my-10 hover:scale-500">
      <a
        href="/"
        class="p-2 dark:bg-zinc-800 bg-zinc-200 rounded-md transition-transform"
        >⬅ Back home</a
      >
    </footer>
  </article>
</template>

<script setup lang="ts">
import { useData, Content } from "vitepress";

const { frontmatter, theme } = useData();
</script>
