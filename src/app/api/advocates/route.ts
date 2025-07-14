import { AdvocateDto, toDto } from "@/app/advocates/models/advocate.model";
import db from "../../../db";
import { advocates, GetAdvocate } from "../../../db/schema";

export async function GET() {
  const data: GetAdvocate[] = await db.select().from(advocates);
  const advocateData: AdvocateDto[] = data.map(a => toDto(a));
  return Response.json({ data: advocateData });
}
