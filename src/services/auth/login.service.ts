import {client} from '../axios'
import paths from '../paths'
function LoginRequest(params: LoginRequest) async {
    return await client.request(paths.auth.login)
}