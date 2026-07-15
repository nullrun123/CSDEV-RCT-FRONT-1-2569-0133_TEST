import { API_CSKMITL } from '$env/static/private';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, fetch }) => {
    const { id } = params;
    
    try {
        const res = await fetch(`${API_CSKMITL}/api/emoji/${id}`);
        
        if (!res.ok) {
            throw error(res.status, 'Failed to fetch emoji image');
        }

        // Return the image data directly to the browser
        return new Response(res.body, {
            headers: {
                'Content-Type': res.headers.get('Content-Type') || 'image/png',
                'Cache-Control': 'public, max-age=3600'
            }
        });
    } catch (e) {
        console.error("Error proxying image:", e);
        throw error(500, 'Internal Server Error');
    }
};
