import type {UseFetchOptions} from 'nuxt/app'
import {useRequestHeaders} from "nuxt/app";
 
export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {}
 
  const token = useCookie('XSRF-TOKEN');
 
  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string;
  }
 
  if (process.server) { //Permitir que el usuario no se borre al refrescar la pagina. Hacer uso de la cookie.
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
        referer: "http://localhost:3000",
    }
  }
 
  return useFetch("http://localhost:8000" + path, {
    credentials: "include",
    watch: false, //evitar enviar solicitud cada vez que se escribe en uno de los inputs del formulario login.
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  });
}