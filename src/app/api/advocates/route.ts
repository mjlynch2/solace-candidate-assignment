import { AdvocateDto, toDto } from "@/app/advocates/models/advocate.model";
import db from "../../../db";
import { advocates, GetAdvocate } from "../../../db/schema";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const filter = request.nextUrl.searchParams.get('filter');
  
  //TODO: pass filters to database for improved performance
  const data: GetAdvocate[] = await db.select().from(advocates);
  const advocateData: AdvocateDto[] = data.map(a => toDto(a));
  
  if (filter == null || filter === '') {
    return Response.json({ data: advocateData });
  } else {
    const filteredAdvocates = filterAdvocates(advocateData, filter.toLowerCase());
    return Response.json({ data: filteredAdvocates });
  }
}

const filterAdvocates = (data: AdvocateDto[], term: string): AdvocateDto[] => {
  return data.filter(a => {
    return (
      a.firstName.toLowerCase().includes(term) ||
      a.lastName.toLowerCase().includes(term) ||
      a.city.toLowerCase().includes(term) ||
      a.degree.toLowerCase().includes(term) ||
      a.specialties.some((s) =>
        s.toLowerCase().includes(term.toLowerCase())) ||
      a.yearsOfExperience.toString() === term
    );
  })
}
