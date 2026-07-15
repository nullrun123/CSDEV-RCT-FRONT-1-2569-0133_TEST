// // src/lib/server/emoji.ts
// import { API_CSKMITL } from "$env/static/private";

// export const getimage = async (id: string) => {
//     const res = await fetch(`${API_CSKMITL}/api/emoji/${id}`);
//     const data = await res.blob();
//     const url = URL.createObjectURL(data);
//     return url;
// };