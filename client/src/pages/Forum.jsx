import { useQuery } from '@apollo/client';

import ForumList from '../components/ForumList';

import { QUERY_PROFILES } from '../utils/queries';

const Forum = () => {
const { loading, data } = useQuery(QUERY_PROFILES);
const profiles = data?.profiles || [];

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
        </div>
      </div>
    </main>
  );
};

export default Forum;
