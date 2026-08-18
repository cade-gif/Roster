-- Posts / activity feed. Images, tagged colleges, likes, and comments are
-- each "many per post," so they get their own tables rather than columns.
create table public.posts (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  caption text,
  link_url text,
  created_at timestamptz not null default now()
);
create index posts_profile_id_idx on public.posts(profile_id);

-- Images attached to a post (a post can have more than one)
create table public.post_images (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  image_url text not null,
  position int not null default 0
);
create index post_images_post_id_idx on public.post_images(post_id);

-- Colleges/teams tagged on a post
create table public.post_schools (
  post_id uuid not null references public.posts(id) on delete cascade,
  school_id uuid not null references public.schools(id) on delete cascade,
  primary key (post_id, school_id)
);
create index post_schools_school_id_idx on public.post_schools(school_id);

-- Likes
create table public.post_likes (
  post_id uuid not null references public.posts(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (post_id, profile_id)
);
create index post_likes_profile_id_idx on public.post_likes(profile_id);

-- Comments
create table public.post_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);
create index post_comments_post_id_idx on public.post_comments(post_id);
create index post_comments_profile_id_idx on public.post_comments(profile_id);

alter table public.posts enable row level security;
alter table public.post_images enable row level security;
alter table public.post_schools enable row level security;
alter table public.post_likes enable row level security;
alter table public.post_comments enable row level security;

create policy "Public read posts" on public.posts for select using (true);
create policy "Public read post_images" on public.post_images for select using (true);
create policy "Public read post_schools" on public.post_schools for select using (true);
create policy "Public read post_likes" on public.post_likes for select using (true);
create policy "Public read post_comments" on public.post_comments for select using (true);
