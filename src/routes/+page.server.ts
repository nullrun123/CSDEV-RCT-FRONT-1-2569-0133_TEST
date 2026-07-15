import type { PageServerLoad } from "./$types"
import { API_CSKMITL } from "$env/static/private"


export const load: PageServerLoad = async ({ fetch }) => {
    try {
        const res = await fetch(`${API_CSKMITL}/api/emoji`);

        if (!res.ok) {
            console.error(`API returned ${res.status}: ${res.statusText}`);
            return { emojidata: [] };
        }

        const data = await res.json();
        return {
            emojidata: data
        };
    } catch (e) {
        console.error("Error fetching emoji data:", e);
        return {
            emojidata: []
        };
    }
};