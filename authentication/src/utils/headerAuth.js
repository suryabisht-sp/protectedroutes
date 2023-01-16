import { getToken } from "./request"

const HeaderAuth = () => {
    // console.log("toekn",getToken())
    return {
        Headers: {
            Authorization: "bearer" + getToken(),
        }
    }
}

export default HeaderAuth;