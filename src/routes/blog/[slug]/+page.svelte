<script>
  export let data;
  const { post, metadata } = data;
</script>

<article>
  <h1>{metadata.title}</h1>
  <small>Published on {metadata.date}</small>
  <div>
    <svelte:component this={post} />
  </div>
</article>
