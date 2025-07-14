import AdvocateCard from "./advocate-card";
import { AdvocateDto } from "./models/advocate.model";
import SearchBar from "./search-bar";

export default async function Home({ searchParams = { filter: ""} }: { searchParams: { filter: string } }) {
  const filter = searchParams.filter;
  const basePath = `${process.env.BASE_PATH}/api/advocates`;
  const path = filter == null ? basePath : `${basePath}?filter=${filter}` 
  const response: Response = await fetch(path);
  // Todo: Error boundaries for failed fetches
  const { data: advocates}: { data: AdvocateDto[] } = await response.json();

  if (advocates == null || advocates.length === 0) {
    return <PageLayout>
      <div>
        No results found.
      </div>
    </PageLayout>
  }

    return (
      <PageLayout>
        <div className="flex flex-wrap gap-3">
          {advocates.map((advocate) => (
            <AdvocateCard key={advocate.id} advocate={advocate} />
          ))}
        </div>
      </PageLayout>
    );
}

function PageLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto w-full min-[1800px]:max-w-[1536px]">
        <div className="flex flex-col p-6 gap-5">
          <h1 className="text-4xl font-bold py-3">Solace Advocates</h1>
          <SearchBar />
          {children}
        </div>
      </div>
  )
}