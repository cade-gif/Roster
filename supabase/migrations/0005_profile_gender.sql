alter table public.profiles add column gender text;
alter table public.profiles add column gender_other_detail text;
alter table public.profiles add column show_gender boolean not null default true;

-- Backfill existing seed profiles so gender can be made required below.
update public.profiles set gender = 'male' where id = '20000000-0000-0000-0000-000000000001'; -- Cade Rutkoske
update public.profiles set gender = 'male' where id = '20000000-0000-0000-0000-000000000002'; -- Felix Marino
update public.profiles set gender = 'female' where id = '20000000-0000-0000-0000-000000000003'; -- Mia Reyes
update public.profiles set gender = 'female' where id = '20000000-0000-0000-0000-000000000004'; -- Abi Torres
update public.profiles set gender = 'male' where id = '20000000-0000-0000-0000-000000000005'; -- Jordan Park
update public.profiles set gender = 'male' where id = '20000000-0000-0000-0000-000000000006'; -- Sam Kim

alter table public.profiles add constraint profiles_gender_check check (gender in ('male', 'female', 'other'));
alter table public.profiles alter column gender set not null;
