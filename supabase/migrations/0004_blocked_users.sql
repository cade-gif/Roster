-- Blocked users: same shape as follows (a relationship between two
-- profiles), but kept private rather than publicly readable.
create table public.blocked_users (
  blocker_id uuid not null references public.profiles(id) on delete cascade,
  blocked_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (blocker_id, blocked_id),
  check (blocker_id <> blocked_id)
);
create index blocked_users_blocked_id_idx on public.blocked_users(blocked_id);
alter table public.blocked_users enable row level security;

-- Muted users: unlike blocking, muting is one-directional and invisible to
-- the muted person - you stop seeing their content, but they aren't
-- restricted or notified. Same table shape either way.
create table public.muted_users (
  muter_id uuid not null references public.profiles(id) on delete cascade,
  muted_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (muter_id, muted_id),
  check (muter_id <> muted_id)
);
create index muted_users_muted_id_idx on public.muted_users(muted_id);
alter table public.muted_users enable row level security;

-- Notification preferences and account privacy live on settings (created in
-- 0003), since they're per-profile preferences rather than relationships.
alter table public.settings add column notify_on_like boolean not null default true;
alter table public.settings add column notify_on_comment boolean not null default true;
alter table public.settings add column notify_on_follow boolean not null default true;
alter table public.settings add column is_private boolean not null default false;

-- No public read policies on blocked_users/muted_users: who blocked or
-- muted whom should stay private. (settings already has RLS enabled with
-- no read policy, from 0003.)
