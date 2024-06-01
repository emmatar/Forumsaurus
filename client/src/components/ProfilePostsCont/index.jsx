import { ProfilePosts } from "../../components/ProfileLists";

const ProfilePostsCont = ({ posts }) => {
  return (
    <div className="d-flex flex-column flex-row pl-0 mt-1 gap-4 pb-5 align-items-center justify-content-center">
      <div className="list-group w-100 conatiner-fluid">
        <ProfilePosts posts={posts} />
      </div>
    </div>
  );
};

export default ProfilePostsCont;
