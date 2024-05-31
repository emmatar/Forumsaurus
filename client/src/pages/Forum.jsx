import { useQuery } from '@apollo/client';

import ForumList from '../components/ForumList';
import ForumPost from '../components/ForumPost/Post';

import { QUERY_POSTS } from '../utils/queries';

const Forum = () => {
	const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

	return (
		<main>
			<div className='flex-row justify-center'>
				<div className='col-12 col-md-10 my-3'>
					{loading ? <div>Loading...</div> : <ForumList posts={posts} onClick={() => {}} />}
{/* 					<ForumPost
						key={post.id}
						post={post}
					/>
 */}				</div>
			</div>
		</main>
	);
};

export default Forum;