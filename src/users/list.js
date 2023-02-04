/**
 * @api {get} /v1/users/ List
 * @apiName List
 * @apiGroup Users
 * @apiVersion 1.0.0
 * @apiDescription Mostrar una lista de usuarios.
 * @apiPermission Root, Administrador, Cliente
 *
 * @apiHeader {String} Authorization Token Bearer.
 *
 * @apiSuccessExample Success:
 *     HTTP/1.1 200 OK
 *     {
 *         "users": [
 *             {
 *                 "id": "d6934380-9aca-11ed-9a73-ad2ecd89790f",
 *                 "email": "albersanmar4@gmail.com",
 *                 "phone": "2222062058",
 *                 "createdAt": "2023-01-31T22:39:17.939Z",
 *                 "updatedAt": "2023-01-31T22:39:18.153Z",
 *                 "profile": {
 *                     "id": "f7eaa8c3-e03d-4904-a987-2e4717bea4e0",
 *                     "name": "Alberto",
 *                     "lastName": "Sánchez Martínez",
 *                     "fullName": "Alberto Sánchez Martínez",
 *                     "createdAt": "2023-01-31T22:39:18.138Z",
 *                     "updatedAt": "2023-01-31T22:39:18.138Z"
 *                 },
 *                 "roles": [
 *                     {
 *                         "id": "276d9720-a0e2-11ed-b16b-f79849cd9fd9",
 *                         "name": "Cliente",
 *                         "slug": "cliente",
 *                         "description": null,
 *                         "createdAt": "2023-01-31T22:39:17.802Z",
 *                         "updatedAt": "2023-01-31T22:39:17.802Z"
 *                     }
 *                 ]
 *             },
 *             {
 *                 "id": "36866b40-a0e4-11ed-be80-87a6daf5deaa",
 *                 "email": "admin@vortexdevops.com",
 *                 "phone": "1234567890",
 *                 "createdAt": "2023-01-31T22:39:17.939Z",
 *                 "updatedAt": "2023-01-31T22:39:18.158Z",
 *                 "profileId": "94f8a3e4-558c-41f0-ad8d-2bd8ebde43c2",
 *                 "profile": {
 *                     "id": "94f8a3e4-558c-41f0-ad8d-2bd8ebde43c2",
 *                     "name": "Vortex",
 *                     "lastName": "Dev Ops",
 *                     "fullName": "Vortex Dev Ops",
 *                     "createdAt": "2023-01-31T22:39:18.138Z",
 *                     "updatedAt": "2023-01-31T22:39:18.138Z"
 *                 },
 *                 "roles": [
 *                     {
 *                         "id": "1f34f210-a0e2-11ed-b16b-f79849cd9fd9",
 *                         "name": "Administrador",
 *                         "slug": "administrador",
 *                         "description": null,
 *                         "createdAt": "2023-01-31T22:39:17.802Z",
 *                         "updatedAt": "2023-01-31T22:39:17.802Z"
 *                     }
 *                 ]
 *             }
 *         ]
 *     }
 */