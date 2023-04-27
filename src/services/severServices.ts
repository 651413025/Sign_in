import { SignIn } from "@/models/signin.model";
import httpClient from "@/utils/httpClient";

type SignInProps = {
    username: string
    password: string
}
export const signIn = async(Credential:SignInProps):Promise<SignIn> => {
    const {data: response} = await httpClient.post<SignIn>('/auth', Credential)
    return response

}
export const signOut = async (): Promise<void> => {
    await httpClient.post('auth/logout',null)
}