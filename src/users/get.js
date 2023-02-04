/**
 * @api {get} /v1/users/:id Get
 * @apiName Get
 * @apiGroup Users
 * @apiVersion 1.0.0
 * @apiDescription Obtener información del usuario.
 * @apiPermission Root, Administrador, Cliente
 * 
 * @apiParam {String} id Id unico del usuario.
 *
 * @apiHeader {String} Authorization Token Bearer.
 *
 * @apiSuccessExample Success:
 *     HTTP/1.1 200 OK
 *     {
 *         "user": {
 *             "id": "36866b40-a0e4-11ed-be80-87a6daf5deaa",
 *             "email": "admin@vortexdevops.com",
 *             "phone": "1234567890",
 *             "createdAt": "2023-01-31T22:39:17.939Z",
 *             "updatedAt": "2023-01-31T22:39:18.158Z",
 *             "profile": {
 *                 "id": "94f8a3e4-558c-41f0-ad8d-2bd8ebde43c2",
 *                 "name": "Vortex",
 *                 "lastName": "Dev Ops",
 *                 "fullName": "Vortex Dev Ops",
 *                 "createdAt": "2023-01-31T22:39:18.138Z",
 *                 "updatedAt": "2023-01-31T22:39:18.138Z"
 *             },
 *             "roles": [
 *                 {
 *                     "id": "1f34f210-a0e2-11ed-b16b-f79849cd9fd9",
 *                     "name": "Administrador",
 *                     "slug": "administrador",
 *                     "description": null,
 *                     "createdAt": "2023-01-31T22:39:17.802Z",
 *                     "updatedAt": "2023-01-31T22:39:17.802Z"
 *                 }
 *             ]
 *         }
 *     }
 */