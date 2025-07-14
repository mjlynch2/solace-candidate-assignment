"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdvocateDto } from "./models/advocate.model";
import { Badge } from "@/components/ui/badge";

export default function AdvocateCard({ advocate }: { advocate: AdvocateDto }) {
  // TODO: Handle phone numbers that may not be 10 digits
  function formatPhoneNumber(phone: number): string {
    const match = phone.toString().match(/^(\d{3})(\d{3})(\d{4})$/);
    return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phone.toString();
  }
  return (
    <Card className="w-1/5">
      <CardHeader>
        <CardTitle>{advocate.firstName} {advocate.lastName}, {advocate.degree}</CardTitle>
        <CardDescription>
          <p className="text-sm italic">{advocate.yearsOfExperience} years of experience</p>
          <p>{advocate.city} | {formatPhoneNumber(advocate.phoneNumber)}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl">Specialties</h3>
          {advocate.specialties.map((s, index) => (
            <Badge variant="outline" key={index}>{s}</Badge>
          ))}
      </CardContent>
    </Card>
  )
}