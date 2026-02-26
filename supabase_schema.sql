-- SQL commands to create the LMS schema in Supabase using the SQL Editor

-- 1. Create the `user_progress` table
create table public.user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  course_id text not null, -- e.g. 'html', 'css', 'python'
  topic_id text not null, -- e.g. 'html_home', 'python_intro'
  completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Prevent duplicate entries for the same user, course, and topic
  unique(user_id, course_id, topic_id)
);

-- 2. Set up RLS (Row Level Security)
alter table public.user_progress enable row level security;

-- Policy: Users can only see their own progress
create policy "Users can view their own progress" 
  on public.user_progress for select 
  using (auth.uid() = user_id);

-- Policy: Users can only insert their own progress
create policy "Users can insert their own progress" 
  on public.user_progress for insert 
  with check (auth.uid() = user_id);

-- Policy: Users can delete their own progress
create policy "Users can delete their own progress" 
  on public.user_progress for delete 
  using (auth.uid() = user_id);
