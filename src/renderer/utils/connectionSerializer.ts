export const serializeConnection = (host: string) => encodeURIComponent(btoa(host))
export const deserializeConnection = (host: string) => atob(decodeURIComponent(host))