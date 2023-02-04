/**
 * @api {post} /v1/auth/register Register
 * @apiName Register
 * @apiGroup Auth
 * @apiVersion 1.0.0
 * @apiDescription Registrar un nuevo usuario cliente.
 *
 * @apiBody {String} email Email del usuario.
 * @apiBody {String} password Contraeña del usuario.
 * @apiBody {String} phone Telefono del usuario.
 * @apiBody {String} name Nombre(s) del usuario.
 * @apiBody {String} lastName Apellidos del usuario.
 *
 * @apiSuccessExample Success:
 *     HTTP/1.1 200 OK
 *     {
 *          "user": {
 *              "email": "albersanmar4@gmail.com",
 *              "phone": "2222062058",
 *              "name": "Alberto",
 *              "lastName": "Sánchez Martínez",
 *              "id": "17b08a50-9a6a-11ed-ad1c-2f4aa0ba3f00",
 *              "fullName": "Alberto Sánchez Martínez",
 *              "createdAt": "2023-01-22T15:33:18.262Z",
 *              "updatedAt": "2023-01-22T15:33:18.262Z"
 *          }
 *      }
 */