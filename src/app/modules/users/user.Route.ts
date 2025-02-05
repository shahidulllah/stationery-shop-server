import express from 'express';
import { deleteUser, getAllUsers, updateUserRole } from './user.controller';

const router = express.Router();

router.get('/', getAllUsers);
router.put('/:userId/role', updateUserRole);
router.delete('/:userId', deleteUser);

export default router;
