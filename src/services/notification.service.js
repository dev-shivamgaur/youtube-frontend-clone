import axios from "axios"
const serverUrl = import.meta.env.VITE_BACKEND_SERVER_URL;
const getNotificationCount = async(id, type = "UPLOAD", entityType ="VIDEO" ) =>{
    if (!id) {
        console.log("Id is required");
        return;
    }
    try {
        const res = await axios.get(`${serverUrl}/api/v1/users/get-notification-count/${id}?type=${type}&entityType=${entityType}`,
            {
                withCredentials: true,
            }
        )
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getNotification = async(id, type = "UPLOAD", entityType ="VIDEO", page =1, limit = 2 ) => {
    if (!id) {
        console.log("Id is required");
        return;
    }

    try {
        const res = await axios.get(`${serverUrl}/api/v1/users/get-notification/${id}?type=${type}&entityType=${entityType}&page=${page}&limit=${limit}`,
            {
                withCredentials: true,
            }
        );
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const addNotification = async (id, type = "UPLOAD", entityId, entityType = "VIDEO", title = "", message = "", thumbnail = "", senderAvatar = "" ) => {
    if (!id) {
       console.log("Id is required");
       return; 
    }

    try {
        const res = await axios.post(`${serverUrl}/api/v1/users/add-notification/${id}`,
            {
                type, entityId, entityType, title, message, thumbnail, senderAvatar
            },
            {
                withCredentials: true,
            }
        );

        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export {
    getNotification,
    getNotificationCount,
    addNotification
}