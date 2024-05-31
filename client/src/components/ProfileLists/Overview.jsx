import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ProfilePosts from './Posts';
import ProfileComments from './Comments';


const ProfileOverview = () => {

    return (
        <>
            <ProfilePosts />
            <ProfileComments />
        </>
    )
}

export default ProfileOverview;