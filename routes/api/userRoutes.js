const router = require("express").Router();

const {
    getAllUsers,
    createNewUser,
    getUsersById,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createNewUser);
router.route('/:userId').get(getUsersById)
.put(updateUser)
.delete(deleteUser);
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend)


module.exports = router;