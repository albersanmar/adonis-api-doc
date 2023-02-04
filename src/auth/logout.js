/**
 * @api {post} /v1/auth/logout Logout
 * @apiName Logout
 * @apiGroup Auth
 * @apiVersion 1.0.0
 * @apiDescription Cerrar sesión del usuario logueado.
 *
 * @apiHeader {String} Authorization Token Bearer.
 *
 * @apiSuccessExample Success:
 *     HTTP/1.1 200 OK
 *     {
 *         "code": "SESSION_CLOSED",
 *         "message": "Sesión cerrada correctamente"
 *     }
 */