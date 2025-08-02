import User from "../database/users.js";

const userModel={
    checkUserExist: async (userEmail) => {
        const result=await User.find({email:userEmail});
        return result.length?true:false;
    },
    registerUser : async (userData) => {
        const result = await User.create(userData);
        return result;
    },
    loginUser : async (userData) => {
        const [result] = await User.find({ email: userData.email });
        return result.password===userData.password;
    }
}
export default userModel;