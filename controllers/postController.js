export const createPost = async (req, res, next) => {
    try {
        const { userId } = req.body.user;
        const { description, image } = req.body;

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message })

    }
};