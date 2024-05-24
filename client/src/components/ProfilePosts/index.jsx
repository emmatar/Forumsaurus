import { Link } from "react-router-dom";

const ProfilePosts = ({profile}) => {
    return (
        <div>
          {!profile?.posts?.length && (
            <h2>
              No Posts Yet
            </h2>
          )}
          {profile?.posts?.map((post) => (
            <div key={post?._id}>
              <Link to={`/posts/${post?._id}`}>
              </Link>
            </div>
          ))}
        </div>
      )
}

export default ProfilePosts;