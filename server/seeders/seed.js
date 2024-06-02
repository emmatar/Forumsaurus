const db = require("../config/connection");
const { Profile, Post } = require("../models");
const cleanDB = require("./cleanDB");
const profileSeeds = require("./profileSeeds.json");

db.once("open", async () => {
  await cleanDB("Profile", "profiles");
  await cleanDB("Post", "posts");

  for (const prof of profileSeeds) {
   
    const newProfile = await Profile.create({ ...prof.profile });
    const newProfilePosts = []
    for (const post of prof.posts){
      const newPost = await Post.create({...post,profile: newProfile._id });
      newProfilePosts.push(newPost)

    }
    newProfile.posts = newProfilePosts.map((p)=>p._id)
    newProfile.save()
  }

  console.log("all done!");
  process.exit(0);
});
