import { Router } from "express";
import CarController from "../controllers/CarController";
const carsRouter = Router();
const carController = new CarController();

/**
 * @swagger
 * 
 * components:
 *   schemas:
 *     RequestCar:
 *       type: object
 *       properties:
 *         maker: 
 *           type: string
 *           description: Car manufacturer
 *         modelName: 
 *           type: string
 *           description: Car model
 *         year: 
 *           type: string
 *           description: Car year of manufacture
 *         color: 
 *           type: string
 *           description: Car color
 *         monthly: 
 *           type: number
 *           description: Car monthly subscription price
 *         available: 
 *           type: Date
 *           description: ISO Date When the car is available for booking
 *       example:
 *         maker: BMW
 *         modelName: Series3
 *         year: 2021
 *         color: White
 *         monthly: 20
 *         available: 2021-04-29T00:00:00.000Z
 *     ResponseCar:
 *       allOf:
 *         - $ref: '#/components/schemas/RequestCar'
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: Auto-generated car identifier
 *           example:
 *             _id: 60833d32c4eb310019adb95a
 */

/**
 * @swagger
 *
 * /cars:
 *   get:
 *     summary: Returns a list of cars filtered by availability and sorted by price from lowest to highest
 *     parameters: 
 *       - name: page
 *         in: query
 *         required: false
 *         description: The page to fetch
 *         example: 1
 *         schema:
 *           type: string
 *       - name: limit
 *         in: query
 *         required: false
 *         description: The limit of results to return
 *         example: 10
 *         schema:
 *           type: string
 *       - name: sort
 *         in: query
 *         required: false
 *         description: The type of sorting
 *         example: year,desc
 *         schema:
 *           type: string
 *       - name: maker
 *         in: query
 *         required: false
 *         description: The car manufacturer
 *         example: BMW
 *         schema:
 *           type: string
 *       - name: color
 *         in: query
 *         required: false
 *         description: The car color
 *         example: White
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Car object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseCar'
 */
carsRouter.get("/", carController.list);

/**
 * @swagger
 *
 * /cars:
 *   post:
 *     summary: Creates a new car and returns the created car information
 *     requestBody:
 *       description: Car payload
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              $ref: '#/components/schemas/RequestCar'
 *     responses:
 *       '200':
 *         description: Car object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseCar'
 */
carsRouter.post("/", carController.create);

/**
 * @swagger
 *
 * /cars/:id:
 *   put:
 *     summary: Updates a car
 *     parameters: 
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of the car
 *         example: 608096ba9979fd9e3cbf65a5
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Car payload
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              $ref: '#/components/schemas/ResponseCar'
 *     responses:
 *       '200':
 *         description: Car object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseCar'
 */
carsRouter.put("/:id", carController.update);

/**
 * @swagger
 *
 * /cars/:id:
 *   delete:
 *     summary: Deletes a car
 *     parameters: 
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of the car
 *         example: 608096ba9979fd9e3cbf65a5
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Car object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseCar'
 */
carsRouter.delete("/:id", carController.delete);

export default carsRouter;