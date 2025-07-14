# Thoughts & Next Steps

## Backend

- I'd have liked to implement proper filtering at the database level. Drizzle is really nice for multi-column filtering like this. We'd also want pagination.
- Caching would definitely be nice here.
- No tests at all is a big red flag, but given the time constraint I prioritized fixing bugs and improving the design over adding test containers and things like that. But that'd be my next step
- Missing types was a smell for me. Drizzle gives us lots of nice tools for this out of the box.

## Frontend

- The search bar should have a search button that, on click, pushes the query param to the router, rather than on key input, so we're not spamming requests
- Design-wise, I don't love a single text box search across multiple potential field - I find the experience to lack fluidity. I think a better approach would have been something like:
  - a text search for first name/ last name
  - ability to sort by years of experience
  - a multi-select for specialties
  - if this were a real production app, location services and a filter by proximity
- Dark mode :sunglasses:
- This is my first time using Next.js (I've used vite + react-router/ tanstack, webpack + redux, and other home-grown frameworks), so it took some time to familiarize myself with the patterns. I opted for server components because data fetching & filtering in a `useEffect` hook is a code smell for me. The file-based routing is something other tools have started to introduce and I think it makes sense, especially insofar as it creates consistency across an engineering org.

## Overall

I'm sure I missed things but it was a fun project and I'm looking forward to getting some feedback!
