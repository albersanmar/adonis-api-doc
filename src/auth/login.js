/**
 * @api {post} /v1/auth/login Login
 * @apiName Login
 * @apiGroup Auth
 * @apiVersion 1.0.0
 * @apiDescription Iniciar sesión del usuario.
 *
 * @apiBody {String} email Email del usuario.
 * @apiBody {String} password  Password del usuario.
 *
 * @apiSuccessExample Success:
 *     HTTP/1.1 200 OK
 *     {
 *         "type": "bearer",
 *         "token": "MQ.S21IG8MDtBdtasfVn082De3oj7Ip0_yhFvBnY5YrlQparCgLvAdsxZgRjl2M"
 *     }
 */