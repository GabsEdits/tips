<template>
  <div class="mt-5 dark:text-zinc-50">
    <noscript>
      <small>To use the filter you need JavaScript to be enabled.</small>
    </noscript>
    <div class="mb-5 text-center">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search posts..."
        class="px-4 py-1 border-2 border-zinc-200 rounded-3xl dark:border-zinc-700 dark:bg-zinc-800"
      />
    </div>
    <div class="mb-10 text-sm">
      <button
        @click="filterPosts('')"
        id="all-tags"
        class="px-2 py-1 bg-zinc-100 border-2 transition-colors hover:bg-zinc-200 border-zinc-200 dark:border-zinc-700 mx-1 rounded-3xl font-bold dark:bg-zinc-900 dark:hover:bg-zinc-800 mb-1"
      >
        All
      </button>
      <button
        v-for="tag in uniqueTags"
        :key="tag"
        @click="filterPosts(tag)"
        class="px-2 py-1 bg-zinc-100 border-2 transition-colors hover:bg-zinc-200 border-zinc-200 dark:border-zinc-700 mx-1 rounded-3xl dark:bg-zinc-900 dark:hover:bg-zinc-800 mb-1"
      >
        {{ tag }}
      </button>
    </div>
    <div class="post-container">
      <article
        v-for="post in filteredPosts"
        :key="post.title"
        class="p-10 max-w-full rounded-xl bg-zinc-50 border-2 border-zinc-200 dark:border-zinc-700 mb-2 dark:bg-zinc-900"
      >
        <h3
          class="font-extrabold text-2xl mb-3 mt-0 hover:underline no-underline"
        >
          <a
            :href="`posts/${post.title
              .toLowerCase()
              .replace(/\s+/g, '-')}.html`"
            class="font-extrabold text-2xl mb-3 mt-0 hover:underline dark:text-zinc-50"
            >{{ post.title }}</a
          >
        </h3>
        <p>{{ post.description }}</p>
        <div class="justify-between flex">
          <div class="text-sm mt-5 opacity-60">
            <span class="font-bold">Published on: </span>
            <time class="font-medium">{{ post.date }}</time>
            <span v-if="post.author">
              <span> · </span>
              <span class="font-bold">Author: </span>
              <span class="font-medium">{{ post.author }}</span>
            </span>
          </div>
          <div class="text-right mt-5 text-sm">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="px-2 py-1 bg-zinc-200 border-2 transition-colors hover:bg-zinc-400 border-zinc-300 dark:border-zinc-600 mx-1 rounded-3xl dark:bg-zinc-800 dark:hover:bg-zinc-700 mb-1"
              >{{ tag }}</span
            >
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { data as posts } from "../posts.data.mts";
import { computed, ref } from "vue";

const selectedTag = ref(null);
const searchQuery = ref("");

const allTags = computed(() => {
  return posts.reduce((tags, post) => {
    return tags.concat(Array.isArray(post.tags) ? post.tags : [post.tags]);
  }, []);
});

const uniqueTags = computed(() => {
  const tags = [...new Set(allTags.value)];
  return tags.filter((tag) => tag !== "");
});

const filteredPosts = computed(() => {
  return selectedTag.value === null
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
      )
    : posts.filter(
        (post) =>
          (Array.isArray(post.tags)
            ? post.tags.includes(selectedTag.value)
            : post.tags === selectedTag.value) &&
          post.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
      );
});

function filterPosts(tag: string) {
  selectedTag.value = tag === "" ? null : tag;
}
</script>
