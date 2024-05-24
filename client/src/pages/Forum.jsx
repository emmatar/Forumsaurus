import { useQuery } from '@apollo/client';

import ForumList from '../components/ForumList';

import { QUERY_PROFILES } from '../utils/queries';

import { DELETE_COMMENT } from '../utils/mutations';
import { ADD_POST} from '../utils/mutations';
import { DELETE_POST } from '../utils/mutations';
import { useState, useEffect } from 'react';

const [addPost] = useMutation(ADD_POST);
const handleAddPost = async () => {
  try {
    // Call the addPost mutation with the necessary variables
    await addPost({
      variables: { postId: postId },
    });

  } catch (error) {
    console.error(error);
  }
};


const [deletePost] = useMutation(DELETE_POST);
const handleDeletePost = async (postId) => {
  try {
    await deletePost({
      variables: { postId: postId },
    });
    // After deleting the post, you may want to refetch the profile data to update the UI
  } catch (error) {
    console.error(error);
  }
};

const Forum = () => {
const { loading, data } = useQuery(QUERY_PROFILES);
const profiles = data?.profiles || [];

return (
  <main>
    <div className="flex-row justify-center">
      <div className="col-12 col-md-10 my-3">
        <button onClick={() => handleAddPost(postId)}>Add Post</button>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ForumList
            posts={profiles}
            title="Recent Posts:"
            handleDeletePost={handleDeletePost}
          />
        )}
      </div>
    </div>
  </main>
);
};

export default Forum;
