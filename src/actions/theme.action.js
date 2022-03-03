import axios from 'axios';

export const GET_THEME = "GET_THEME";

export const getTheme = () => {
    return(dispatch) => {
        return axios
        .get(`http://localhost:5100/theme`)
        
        .then((res)=>{ 
        dispatch({ type: GET_THEME, payload: res.data });
    })
    .catch((err) => console.log(err));
};

};