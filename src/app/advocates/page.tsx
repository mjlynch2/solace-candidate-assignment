import { AdvocateDto } from "./models/advocate.model";

export default async function Home() {
  const response: Response = await fetch(`${process.env.BASE_PATH}/api/advocates`)
  const { data: advocates}: { data: AdvocateDto[] } = await response.json()

  // const [advocates, setAdvocates] = useState([]);
  // const [filteredAdvocates, setFilteredAdvocates] = useState([]);

  // useEffect(() => {
  //   console.log("fetching advocates...");
  //   fetch("/api/advocates").then((response) => {
  //     response.json().then((jsonResponse) => {
  //       setAdvocates(jsonResponse.data);
  //       setFilteredAdvocates(jsonResponse.data);
  //     });
  //   });
  // }, []);

  // const onChange = (e) => {
  //   const searchTerm = e.target.value;

  //   document.getElementById("search-term").innerHTML = searchTerm;

  //   console.log("filtering advocates...");
  //   const filteredAdvocates = advocates.filter((advocate) => {
  //     return (
  //       advocate.firstName.includes(searchTerm) ||
  //       advocate.lastName.includes(searchTerm) ||
  //       advocate.city.includes(searchTerm) ||
  //       advocate.degree.includes(searchTerm) ||
  //       advocate.specialties.includes(searchTerm) ||
  //       advocate.yearsOfExperience.includes(searchTerm)
  //     );
  //   });

  //   setFilteredAdvocates(filteredAdvocates);
  // };

  // const onClick = () => {
  //   console.log(advocates);
  //   setFilteredAdvocates(advocates);
  // };

  return (
    <div className="mx-auto w-full min-[1800px]:max-w-[1536px]">
      <div className="flex-1 py-6">
        <h1 className="text-4xl font-bold py-3">Solace Advocates</h1>
        <br />
        <br />
        {/* <div>
          <p>Search</p>
          <p>
            Searching for: <span id="search-term"></span>
          </p>
          <input style={{ border: "1px solid black" }} onChange={onChange} />
          <button onClick={onClick}>Reset Search</button>
        </div> */}
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Degree</th>
              <th>Specialties</th>
              <th>Years of Experience</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {advocates.map((advocate) => {
              return (
                <tr key={advocate.id}>
                  <td>{advocate.firstName}</td>
                  <td>{advocate.lastName}</td>
                  <td>{advocate.city}</td>
                  <td>{advocate.degree}</td>
                  <td>
                    {advocate.specialties.map((s, index) => (
                      <div key={index}>{s}</div>
                    ))}
                  </td>
                  <td>{advocate.yearsOfExperience}</td>
                  <td>{advocate.phoneNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
