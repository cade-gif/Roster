-- Adds a fourth gender option. Postgres check constraints can't be altered
-- in place, so this drops and recreates it with the same name.
alter table public.profiles drop constraint profiles_gender_check;
alter table public.profiles add constraint profiles_gender_check
  check (gender in ('male', 'female', 'other', 'prefer_not_to_say'));
