import { useQuery } from '@apollo/client';

import ForumList from '../components/ForumList';
import ForumPost from '../components/ForumPost/Post';

import { QUERY_PROFILES } from '../utils/queries';

const Forum = () => {
const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];
  
  const post = {
    id: 1,
    author: 'Test Author',
    title: 'Test Title',
    body: 'Test Body',
    rawrs: 0,
    comments: [
      {
        id: 1,
        author: 'Me',
        body: 'I really like what you said.',
        reply: 'ReplyBody',
        createdOn: '1d'
      },
      {
        id: 2,
        author: 'You',
        body: 'I did not like what I saw here at all.',
        reply: 'ReplyBody',
        createdOn: '1d'
      },
    ],
    createdOn: '1d'
  }

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ForumList
              posts={''}
              title="Recent Posts:"
            />
          )}
        <ForumPost key={post.id} post={ post } />
        </div>
      </div>
    </main>
  );
};

export default Forum;