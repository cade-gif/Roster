-- Sample data for exploring the schema. Safe to re-run: delete-then-insert.
delete from public.follows;
delete from public.work_experience;
delete from public.team_memberships;
delete from public.education;
delete from public.achievements;
delete from public.teams;
delete from public.schools;
delete from public.profiles;

-- Schools
insert into public.schools (id, name, logo_url) values
  ('10000000-0000-0000-0000-000000000001', 'Georgetown University', null),
  ('10000000-0000-0000-0000-000000000002', 'Phillips Academy', null),
  ('10000000-0000-0000-0000-000000000003', 'University of Michigan', null),
  ('10000000-0000-0000-0000-000000000004', 'Duke University', null);

-- Profiles
insert into public.profiles (id, full_name, tagline, bio, location, avatar_url, gender, show_gender) values
  ('20000000-0000-0000-0000-000000000001', 'Cade Rutkoske', 'Coxswain • Georgetown Crew • Class of 2030', 'International Business and Politics student. Coxswain for Georgetown Crew, previously captained Varsity Crew at Phillips Academy.', 'Washington, D.C.', null, 'male', true),
  ('20000000-0000-0000-0000-000000000002', 'Felix Marino', 'Rower • Georgetown Crew', 'Computer science major who rows in the 2-seat. Always looking for a good boathouse playlist recommendation.', 'Washington, D.C.', null, 'male', true),
  ('20000000-0000-0000-0000-000000000003', 'Mia Reyes', 'Guard • Phillips Academy Basketball', 'Point guard, senior year. Committed to playing D1 next fall.', 'Andover, MA', null, 'female', true),
  ('20000000-0000-0000-0000-000000000004', 'Abi Torres', 'Student • Georgetown SFS', 'Studying international politics, interning in research this summer.', 'Washington, D.C.', null, 'female', true),
  ('20000000-0000-0000-0000-000000000005', 'Jordan Park', 'Coxswain • Michigan Rowing', 'Sport management major. Coxed the varsity 8+ to a conference title last spring.', 'Ann Arbor, MI', null, 'male', true),
  ('20000000-0000-0000-0000-000000000006', 'Sam Kim', 'Forward • Duke Basketball', 'Economics major, student assistant coach on the side.', 'Durham, NC', null, 'male', true);

-- Teams
insert into public.teams (id, school_id, name, sport) values
  ('30000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', 'Georgetown Crew', 'Rowing'),
  ('30000000-0000-0000-0000-000000000002', '10000000-0000-0000-0000-000000000002', 'Phillips Academy Basketball', 'Basketball'),
  ('30000000-0000-0000-0000-000000000003', '10000000-0000-0000-0000-000000000003', 'Michigan Rowing', 'Rowing'),
  ('30000000-0000-0000-0000-000000000004', '10000000-0000-0000-0000-000000000004', 'Duke Basketball', 'Basketball');

-- Team memberships (the roster)
insert into public.team_memberships (profile_id, team_id, role, start_date, end_date) values
  ('20000000-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000001', 'Coxswain', '2026-06-01', null),
  ('20000000-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000001', 'Rower', '2026-06-01', null),
  ('20000000-0000-0000-0000-000000000003', '30000000-0000-0000-0000-000000000002', 'Guard', '2023-09-01', '2026-05-01'),
  ('20000000-0000-0000-0000-000000000005', '30000000-0000-0000-0000-000000000003', 'Coxswain', '2024-09-01', null),
  ('20000000-0000-0000-0000-000000000006', '30000000-0000-0000-0000-000000000004', 'Forward', '2023-09-01', null);

-- Education
insert into public.education (profile_id, school_id, program, start_date, end_date, activities) values
  ('20000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', 'International Business and Politics', '2026-06-01', null, 'Varsity Crew'),
  ('20000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000002', 'High School Diploma', '2023-09-01', '2026-05-01', 'Captain of Varsity Crew, Varsity Basketball, Editor of school newspaper'),
  ('20000000-0000-0000-0000-000000000002', '10000000-0000-0000-0000-000000000001', 'Computer Science', '2026-06-01', null, 'Varsity Crew'),
  ('20000000-0000-0000-0000-000000000003', '10000000-0000-0000-0000-000000000002', 'High School Diploma', '2023-09-01', '2026-05-01', 'Varsity Basketball, Student Government'),
  ('20000000-0000-0000-0000-000000000004', '10000000-0000-0000-0000-000000000001', 'School of Foreign Service', '2025-09-01', null, null),
  ('20000000-0000-0000-0000-000000000005', '10000000-0000-0000-0000-000000000003', 'Sport Management', '2024-09-01', null, 'Varsity Rowing'),
  ('20000000-0000-0000-0000-000000000006', '10000000-0000-0000-0000-000000000004', 'Economics', '2023-09-01', null, 'Varsity Basketball');

-- Achievements
insert into public.achievements (profile_id, title, icon, achieved_on, description) values
  ('20000000-0000-0000-0000-000000000001', 'Team Captain', '⛵', '2026-05-01', 'Elected captain of Phillips Academy Varsity Crew'),
  ('20000000-0000-0000-0000-000000000001', 'Regional Champion', '🥇', '2025-05-01', 'Won the New England Championship regatta'),
  ('20000000-0000-0000-0000-000000000002', 'All-League Selection', '🏅', '2025-11-01', null),
  ('20000000-0000-0000-0000-000000000003', 'League MVP', '🏆', '2025-03-01', 'Named MVP of the Andover basketball league'),
  ('20000000-0000-0000-0000-000000000005', 'Rookie of the Year', '🌟', '2024-12-01', 'Michigan Rowing rookie of the year'),
  ('20000000-0000-0000-0000-000000000006', 'All-American', '🏀', '2025-04-01', null);

-- Work experience
insert into public.work_experience (profile_id, company, title, start_date, end_date, description) values
  ('20000000-0000-0000-0000-000000000001', 'Local Boathouse', 'Rowing Instructor', '2025-06-01', '2025-08-01', 'Taught a summer rowing camp for youth ages 10-14'),
  ('20000000-0000-0000-0000-000000000003', 'City Recreation Dept', 'Basketball Camp Counselor', '2025-06-01', '2025-08-01', null),
  ('20000000-0000-0000-0000-000000000004', 'Palantir Technologies', 'Research Fellow', '2025-06-01', null, 'Summer research fellowship'),
  ('20000000-0000-0000-0000-000000000006', 'Duke Athletics', 'Student Assistant Coach', '2025-09-01', null, null);

-- Follows: some mutual pairs (= "friends"), some one-way
insert into public.follows (follower_id, following_id) values
  ('20000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000002'),
  ('20000000-0000-0000-0000-000000000002', '20000000-0000-0000-0000-000000000001'),
  ('20000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000004'),
  ('20000000-0000-0000-0000-000000000004', '20000000-0000-0000-0000-000000000001'),
  ('20000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000005'),
  ('20000000-0000-0000-0000-000000000003', '20000000-0000-0000-0000-000000000001'),
  ('20000000-0000-0000-0000-000000000002', '20000000-0000-0000-0000-000000000003'),
  ('20000000-0000-0000-0000-000000000005', '20000000-0000-0000-0000-000000000006'),
  ('20000000-0000-0000-0000-000000000006', '20000000-0000-0000-0000-000000000005'),
  ('20000000-0000-0000-0000-000000000004', '20000000-0000-0000-0000-000000000003');
