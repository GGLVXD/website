// @ts-nocheck
export async function load() {
  const modules = import.meta.glob('./posts/*.svx'); 
  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const { metadata } = await resolver(); 
      const slug = path.split('/').pop().replace('.svx', ''); 
      return { ...metadata, slug }; 
    })
  );

  return {
    posts: posts.sort((a, b) => new Date(b.date) - new Date(a.date)) 
  };
}
