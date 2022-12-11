import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://soajjjdiddwilodlfhug.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvYWpqamRpZGR3aWxvZGxmaHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA2MzE3NTksImV4cCI6MTk4NjIwNzc1OX0.d2qz1VZwmGFq7kRwRo1TvmPkjW5BkT4S2qXXM9BRYFQ';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

export function VideoService() {
    return {
        getAllVideos() {
            return supabaseClient.from('video')
                .select('*');
        },
        createVideo(video) {
            return supabaseClient.from('video').insert({
                titulo: video.titulo,
                url: video.url,
                thumb: video.thumb,
                playlist: video.playlist
            })
        }
    }
}