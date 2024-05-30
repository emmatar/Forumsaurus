const db = require("../config/connection");
const { Profile, Post } = require("../models");
const cleanDB = require("./cleanDB");
const profileSeeds = require("./profileSeeds.json");

db.once("open", async () => {
  await cleanDB("Profile", "profiles");
  await cleanDB("Post", "posts");


  for (const { profile, posts } of profileSeeds) {
    let postIds = [];
    for (const post of posts) {
      const { _id } = await Post.create(post);
      postIds.push(_id);
    }
    await Profile.create({ ...profile, posts: postIds });
  }

  console.log("all done!");
  process.exit(0);
});
