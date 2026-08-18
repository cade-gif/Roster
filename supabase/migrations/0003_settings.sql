-- Account-level preferences, separate from public profile data.
-- One settings row per profile (profile_id is the primary key, not a
-- separate id, since the relationship is strictly one-to-one).
create table public.settings (
  profile_id uuid primary key references public.profiles(id) on delete cascade,
  language text not null default 'en'
);

-- No public read policy: settings are personal/account-level, not meant
-- to be visible to other users. Only accessible via the SQL editor until
-- real auth exists and we can write a "read/write only your own row" policy.
alter table public.settings enable row level security;
