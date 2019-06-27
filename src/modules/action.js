const Types = {
    CREATE_POST: "CREATE_POST",
    UPDATE_POST: "UPDATE_POST",
  };
  // actions
  const updatePost = post => ({
    type: Types.UPDATE_POST,
    payload: post
  });

  const createPost = post => ({
    type: Types.CREATE_POST,
    payload: post
  });

  
  export default {
    updatePost,
    createPost,
    Types
  };