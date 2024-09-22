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
        class="rounded-3xl border-2 border-zinc-200 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800"
      />
    </div>
    <div class="mb-10 text-sm">
      <button
        @click="filterPosts('')"
        id="all-tags"
        class="mx-1 mb-1 rounded-3xl border-2 border-zinc-200 bg-zinc-100 px-2 py-1 font-bold transition-colors hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      >
        All
      </button>
      <button
        v-for="tag in uniqueTags"
        :key="tag"
        @click="filterPosts(tag)"
        class="mx-1 mb-1 rounded-3xl border-2 border-zinc-200 bg-zinc-100 px-2 py-1 transition-colors hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      >
        {{ tag }}
      </button>
    </div>
    <div class="post-container">
      <article
        v-for="post in filteredPosts"
        :key="post.title"
        class="mb-2 max-w-full rounded-xl border-2 border-zinc-200 bg-zinc-50 p-10 dark:border-zinc-700 dark:bg-zinc-900"
      >
        <h3
          class="mb-3 mt-0 text-2xl font-extrabold no-underline hover:underline"
        >
          <a
            :href="`posts/${post.title
              .toLowerCase()
              .replace(/\s+/g, '-')}.html`"
            class="mb-3 mt-0 text-2xl font-extrabold hover:underline dark:text-zinc-50"
            >{{ post.title }}</a
          >
        </h3>
        <p>{{ post.description }}</p>
        <div class="flex justify-between">
          <div class="mt-5 text-sm opacity-60">
            <span class="font-bold">Published on: </span>
            <time class="font-medium">{{ post.date }}</time>
            <span v-if="post.author">
              <span> · </span>
              <span class="font-bold">Author: </span>
              <span class="font-medium">{{ post.author }}</span>
            </span>
          </div>
          <div class="mt-5 text-right text-sm">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="mx-1 mb-1 rounded-3xl border-2 border-zinc-300 bg-zinc-200 px-2 py-1 transition-colors hover:bg-zinc-400 dark:border-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              >{{ tag }}</span
            >
          </div>
        </div>
      </article>

      <div v-if="filteredPosts?.length === 0" class="mt-5 text-center">
        <h2 class="text-2xl font-bold">No posts found.</h2>
      </div>
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
