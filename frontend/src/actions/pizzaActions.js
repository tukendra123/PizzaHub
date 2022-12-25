import axios from 'axios'

export const getAllPizzas = () => async dispatch => {
    
    dispatch({type: "GET_PIZZAS_REQUEST" });

    try {

        const res = await axios.get('/api/pizzas/getpizzas')
        dispatch({type: "GET_PIZZAS_SUCCESS", payload : res.data});

    } catch(err) {

        dispatch({type: "GET_PIZZAS_FAIL", payload : err });

    }

}

