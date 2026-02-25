import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    try {
        // Only allow GET requests if needed, but here we just increment on any request
        const views = await kv.incr('portfolio_views');

        // Return early if no JSON needed, but for the API, return JSON
        return res.status(200).json({ views });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to update views' });
    }
}
