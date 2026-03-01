require('dotenv').config();
const { drizzle } = require('drizzle-orm/postgres-js');
const postgres = require('postgres');
const dns = require('dns');

// Force IPv4 to prevent connection timeouts on IPv6-only environments resolving to Supabase
dns.setDefaultResultOrder('ipv4first');

async function main() {
    console.log("Starting migration...");

    // Pass direct options to avoid URL parsing issues with special characters
    const queryClient = postgres({
        host: 'db.nvbhccjkzrzcjhvxhmvv.supabase.co',
        port: 5432,
        database: 'postgres',
        username: 'postgres',
        password: '@Alive_8838746347',
        ssl: 'require',
        max: 1
    });

    const db = drizzle(queryClient);

    const query = `
    create table if not exists public.user_quiz_scores (
        id uuid default gen_random_uuid() primary key,
        user_id uuid references auth.users not null,
        course_id text not null,
        topic_id text not null,
        score integer not null,
        total integer not null,
        completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
        unique(user_id, course_id, topic_id)
    );

    alter table public.user_quiz_scores enable row level security;

    drop policy if exists "Users can view their own quiz scores" on public.user_quiz_scores;
    create policy "Users can view their own quiz scores" 
        on public.user_quiz_scores for select 
        using (auth.uid() = user_id);

    drop policy if exists "Users can insert their own quiz scores" on public.user_quiz_scores;
    create policy "Users can insert their own quiz scores" 
        on public.user_quiz_scores for insert 
        with check (auth.uid() = user_id);

    drop policy if exists "Users can update their own quiz scores" on public.user_quiz_scores;
    create policy "Users can update their own quiz scores" 
        on public.user_quiz_scores for update 
        using (auth.uid() = user_id);
    `;

    try {
        await queryClient.unsafe(query);
        console.log("Successfully ran schema updates!");
    } catch (e) {
        console.error("Error executing query:", e);
    } finally {
        await queryClient.end();
    }
}

main();
