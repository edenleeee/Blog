const Types = {
    CREATE_POST: "CREATE_POST",
  };
  // actions
  const createPost = post => ({
    type: Types.CREATE_POST,
    payload: post
  });

  
  export default {
    createPost,
    Types
  };