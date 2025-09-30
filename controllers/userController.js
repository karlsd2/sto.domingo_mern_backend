import userService from "../services/userService.js";

export const getUsers = async (req, res) => {
    try{
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json(({ message: error.message }));
}

}

export const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json(({ message: error.message }));
    }

}
