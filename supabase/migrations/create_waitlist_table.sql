-- Create the waitlist table with proper security
create table if not exists waitlist (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table waitlist enable row level security;

-- Create policy for inserting (anyone can insert)
create policy "Allow public inserts to waitlist"
  on waitlist
  for insert
  with check (true);

-- Create policy for viewing (only authenticated users with proper role can view)
create policy "Allow authenticated users to view waitlist"
  on waitlist
  for select
  using (auth.role() = 'authenticated' and auth.email() in (select email from waitlist_admins));

-- Create index on email for faster lookups and uniqueness checks
create unique index waitlist_email_idx on waitlist (email); 