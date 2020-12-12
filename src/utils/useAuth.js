
import Cookies from 'js-cookie'
import store from "redux/store"


export default function useAuth(props) {

    const handleOnMount = async () => {
        const token = Cookies.get('token')
        if (token) {
            try {
                const response = await fetch("https://konrad-mleczko.herokuapp.com/", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: "include",
                })
                const data = await response.json()
                if (data.status === 200) {
                    store.dispatch({ type: "LOGIN" })
                }
            }
            catch (err) {
                console.log(err);
            }
        }

    }

    const handleLogIn = async (req) => {
        try {
            const res = await fetch("https://konrad-mleczko.herokuapp.com/", {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    { accessToken: req.accessToken, userID: req.userID }
                ),
                credentials: "same-origin",
                crossorigin: true,
            })
            const data = await res.json()
            if (data.status === 200) {
                Cookies.set('token', data.token, { expires: 1 })
                store.dispatch({ type: "LOGIN" })
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleLogOut = () => {
        Cookies.remove('token')
        store.dispatch({ type: "LOGOUT" })
    }



    return { handleLogIn, handleLogOut, handleOnMount };
}



