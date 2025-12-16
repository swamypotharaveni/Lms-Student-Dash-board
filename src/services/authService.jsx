import api from "./api";

export const LoginUser = async (data) => {
    try {
        const response = await api.post('accounts/login/', data);
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log("response", response)
        return response.data

    } catch (error) {

        if (error.response && error.response.data.error) {
            throw new Error(error.response.data.error);
        } else {
            throw new Error("Something went wrong. Please try again.");
        }


    }

}