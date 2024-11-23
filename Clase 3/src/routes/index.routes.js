import { Router } from "express"; 
import userRoutes from './user.routes.js'; // Import user routes

const router = Router(); // Create router 

router.use('/user', userRoutes); // Use user routes
// ! http://localhost:3000/api/user
export default router; // Export router
