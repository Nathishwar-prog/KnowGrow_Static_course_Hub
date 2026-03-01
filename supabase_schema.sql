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

-- 3. Create the `user_quiz_scores` table
create table public.user_quiz_scores (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  course_id text not null,
  topic_id text not null,
  score integer not null,
  total integer not null,
  completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Prevent duplicate entries for the same user, course, and topic (we update existing row)
  unique(user_id, course_id, topic_id)
);

-- 4. Set up RLS for user_quiz_scores
alter table public.user_quiz_scores enable row level security;

create policy "Users can view their own quiz scores" 
  on public.user_quiz_scores for select 
  using (auth.uid() = user_id);

create policy "Users can insert their own quiz scores" 
  on public.user_quiz_scores for insert 
  with check (auth.uid() = user_id);

create policy "Users can update their own quiz scores" 
  on public.user_quiz_scores for update 
  using (auth.uid() = user_id);
