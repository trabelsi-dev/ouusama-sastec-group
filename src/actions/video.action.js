import axios from 'axios';

export const GET_VIDEO = "GET_VIDEO";

export const getVideo = () => {
    return(dispatch) => {
        return axios
        .get(`http://localhost:5000/video`)
        .then((res)=>{ 
        dispatch({ type: GET_VIDEO, payload: res.data });
    })
    .catch((err) => console.log(err));
};

};

     



