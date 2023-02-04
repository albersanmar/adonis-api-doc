/**
 * @api {post} /v1/users/ Create
 * @apiName Create
 * @apiGroup Users
 * @apiVersion 1.0.0
 * @apiDescription Crear un nuevo usuario.
 * @apiPermission Root, Administrador
 * 
 * @apiHeader {String} Authorization Token Bearer.
 *
 * @apiBody {String} email Email del usuario.
 * @apiBody {String} password Contraseña del usuario.
 * @apiBody {String} phone Telefono del usuario.
 * @apiBody {String} name Nombre(s) del usuario.
 * @apiBody {String} lastName Apellidos del usuario.
 * @apiBody {Array} roles Ids de los roles para el usuario.
 *
 * @apiSuccessExample Success:
 *     HTTP/1.1 200 OK
 *     {
 *         "user": {
 *             "id": "30556690-a314-11ed-8fbc-7fa7a206f049",
 *             "email": "alberto@vortexdevops.com",
 *             "phone": "1231231212",
 *             "createdAt": "2023-02-02T16:11:02.540Z",
 *             "updatedAt": "2023-02-02T16:11:02.552Z",
 *             "profile": {
 *                 "id": "306d0d40-a314-11ed-8fbc-7fa7a206f049",
 *                 "name": "Alberto",
 *                 "lastName": "Sánchez Martínez",
 *                 "fullName": "Alberto Sánchez Martínez",
 *                 "createdAt": "2023-02-02T16:11:02.549Z",
 *                 "updatedAt": "2023-02-02T16:11:02.549Z"
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