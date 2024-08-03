<script setup></script>
<template>
  <section id="section-notes-container" class="grid font-iosevkaext text-white">
    <RouterView />
  </section>
</template>
<style scope>
#table-of-contents {
  padding-top: 4rem;
  padding-bottom: 4rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    padding-bottom: 1.5rem;
  }
  ul {
    list-style-position: outsite;
    padding-bottom: 1.125rem;
    li {
      font-weight: 700;
    }
    li {
      ul {
        padding-left: 3ch;
        li {
          font-weight: 500;
        }
      }
    }
  }
}

.outline-2 {
  padding-bottom: 1.5rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    padding-bottom: 1.125rem;
  }
}
#section-notes-container {
  word-wrap: break-word;
  white-space: per-line;
}
table {
  margin-top: 1.125rem;
  margin-bottom: 1.125rem;
  overflow-x: auto;
  width: 100v;
  tr {
    border-bottom: 1px solid;
  }
}
</style>
