create extension if not exists pgcrypto;

-- Profile info: photo, bio, etc.
create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  tagline text,
  bio text,
  location text,
  avatar_url text,
  created_at timestamptz not null default now()
);

-- Athletic / other achievements shown on the profile
create table public.achievements (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  icon text,
  achieved_on date,
  description text,
  created_at timestamptz not null default now()
);
create index achievements_profile_id_idx on public.achievements(profile_id);

-- Schools / colleges (shared reference list, not per-profile)
create table public.schools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text
);

-- A profile's education history at a school (LinkedIn-style entry)
create table public.education (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  school_id uuid not null references public.schools(id) on delete cascade,
  program text,
  start_date date,
  end_date date,
  activities text
);
create index education_profile_id_idx on public.education(profile_id);
create index education_school_id_idx on public.education(school_id);

-- Teams within a school (e.g. "Georgetown Crew")
create table public.teams (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  name text not null,
  sport text
);
create index teams_school_id_idx on public.teams(school_id);

-- Team roster: which profiles belong to which team
create table public.team_memberships (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  team_id uuid not null references public.teams(id) on delete cascade,
  role text,
  start_date date,
  end_date date
);
create index team_memberships_profile_id_idx on public.team_memberships(profile_id);
create index team_memberships_team_id_idx on public.team_memberships(team_id);

-- Work experience entries
create table public.work_experience (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  company text not null,
  title text not null,
  start_date date,
  end_date date,
  description text
);
create index work_experience_profile_id_idx on public.work_experience(profile_id);

-- One-way follows. "Friends" = mutual follows (A follows B and B follows A),
-- computed from this table rather than stored separately. If/when we add
-- mutual friend requests, this table becomes the "accepted" edge and we'd
-- add a separate pending-request table in front of it.
create table public.follows (
  follower_id uuid not null references public.profiles(id) on delete cascade,
  following_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_id, following_id),
  check (follower_id <> following_id)
);
create index follows_following_id_idx on public.follows(following_id);

-- RLS: public read for now (profiles are meant to be visible, like LinkedIn).
-- No write policies yet, so inserts/updates only happen via the SQL editor
-- (service role bypasses RLS) until auth + write policies are built.
alter table public.profiles enable row level security;
alter table public.achievements enable row level security;
alter table public.schools enable row level security;
alter table public.education enable row level security;
alter table public.teams enable row level security;
alter table public.team_memberships enable row level security;
alter table public.work_experience enable row level security;
alter table public.follows enable row level security;

create policy "Public read profiles" on public.profiles for select using (true);
create policy "Public read achievements" on public.achievements for select using (true);
create policy "Public read schools" on public.schools for select using (true);
create policy "Public read education" on public.education for select using (true);
create policy "Public read teams" on public.teams for select using (true);
create policy "Public read team_memberships" on public.team_memberships for select using (true);
create policy "Public read work_experience" on public.work_experience for select using (true);
create policy "Public read follows" on public.follows for select using (true);
