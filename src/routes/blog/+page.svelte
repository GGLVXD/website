<script>
    export let data;
    const { posts } = data;
  </script>
  
  <h1>Blog Posts</h1>
  
  <ul>
    {#each posts as { title, slug, date, description }}
      <li>
        <a href={`/blog/${slug}`}>
          <h2>{title}</h2>
          <p>{description}</p>
          <small>Published on {date}</small>
        </a>
      </li>
    {/each}
  </ul>
  