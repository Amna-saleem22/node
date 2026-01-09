import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controller/userController.js';

const router = express.Router();

// CREATE
router.post("/users", createUser);

// READ
router.get("/users", getUsers);
router.get("/users/:id", getUserById);

// UPDATE
router.put("/users/:id", updateUser);

// DELETE
router.delete("/users/:id", deleteUser);

export default router;
