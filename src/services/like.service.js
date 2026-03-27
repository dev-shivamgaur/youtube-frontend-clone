import axios from "axios"

const serverUrl = import.meta.env.VITE_BACKEND_SERVER_URL;

const toggleUserReaction = async (videoId, userReaction) => {

    if (!videoId) {
        console.log("Videoid is required")
    }
    try {
        const res = await axios.post(
            `${serverUrl}/api/v1/users/v/toggle-like/${videoId}`,
            {
                userReaction,
                
            },
            {
                withCredentials: true,
            }
        );
        return res
    } catch (error) {
        return error

    }
}

const toggleUserReactionForComment = async (commentId,videoId, userReaction) => {

    if (!commentId) return;

    try {
        const res = await axios.post(`${serverUrl}/api/v1/users/c/toggle-like/${commentId}`, {
            userReaction,
            videoId,
        }, 
        {
            withCredentials: true,
        }
        )

        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        return error

    }
}

const userVideoReactionStatus = async (videoId) => {
    if (!videoId) {
        console.log("Videoid is required")
    }
    try {
        const res = await axios.get(`${serverUrl}/api/v1/users/v/get-status/${videoId}`,
            {
                withCredentials: true,
            }
        )
        return res?.data?.data;
    } catch (error) {
        console.log(error);
        return error

    }
}

const userCommentReactionStatus = async(videoId) => {
    try {
        const res = await axios.get(`${serverUrl}/api/v1/users/c/get-status/${videoId}`,{
            withCredentials:true,
        })
        return res.data.data;
    } catch (error) {
        console.log(error)
        return error

    }
}

export {
    toggleUserReaction,
    toggleUserReactionForComment,
    userVideoReactionStatus,
    userCommentReactionStatus
}