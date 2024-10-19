// @ts-nocheck
export async function load({ params }) {
    const { slug } = params;
    try {
      const post = await import(`../posts/${slug}.svx`);
      return {
        post: post.default, 
        metadata: post.metadata 
      };
    } catch (error) {
      console.error('Post not found:', error);
      throw error(404, 'Post not found');
    }
  }
  