import {createClient} from '@supabase/supabase-js'


const mockData = {
    "repository": {
        "id": 426820139,
        "user_id": 57568598,
        "issues": 21,
        "stars": 67,
        "watchers": 67,
        "subscribers": 6,
        "is_fork": false,
        "created_at": "2021-11-11T00:23:13",
        "updated_at": "2022-05-20T23:21:16",
        "pushed_at": "2022-05-20T22:18:24",
        "last_fetched_contributors_at": "1970-01-01T00:00:00",
        "name": "hot",
        "full_name": "open-sauced/hot",
        "description": "🍕The site that recommends the hottest projects on GitHub.",
        "language": "TypeScript",
        "license": "MIT",
        "url": "https://hot.opensauced.pizza"
    },
    "error": null
}

export async function prerender() {
    const supabase = createClient(
        "https://lkkownkrbkmblczeoyqb.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyNDU2MTc0LCJleHAiOjE5NTgwMzIxNzR9.c6nlkT05GnNacQ6OYuGcjBsILmGsSDwEEtN2zZVXFgY");

    const {data: repositories, error} = await supabase
    .from('repos')
    .select('full_name')

    const urls = repositories.map(({full_name}) => `/repos/${full_name}`)
    return urls
}

export async function onBeforeRender(pageContext) {
    const supabase = createClient(
        "https://lkkownkrbkmblczeoyqb.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyNDU2MTc0LCJleHAiOjE5NTgwMzIxNzR9.c6nlkT05GnNacQ6OYuGcjBsILmGsSDwEEtN2zZVXFgY");

    const {routeParams} = pageContext;
    const {owner, name} = routeParams;
    const {data: repository, error} = await supabase
    .from('repos')
    .select('*')
    .eq('full_name', `${owner}/${name}`)
    .limit(1)
    .single()

    
    return {
        pageContext:{
            pageProps: {repository, error: error},
        }
    }
}

//export const passToClient = ['data']

