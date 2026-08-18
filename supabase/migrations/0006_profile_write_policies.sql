-- Lets a logged-in user create and edit their own profile row.
-- auth.uid() is the current user's id from their session; comparing it to
-- the row's id is the standard pattern for "only you can touch your data."
create policy "Users can insert own profile" on public.profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);
