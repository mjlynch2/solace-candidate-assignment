import { GetAdvocate } from "@/db/schema"

export interface AdvocateDto {
  id: number
  firstName: string
  lastName: string
  city: string
  degree: DegreeType
  specialties: string[]
  yearsOfExperience: number
  phoneNumber: number
}

export enum DegreeType {
  MD = "MD",
  PhD = "PhD",
  MSW = "MSW"
}

export const toDto = (advocate: GetAdvocate): AdvocateDto => {
  return {
    ...advocate,
    degree: DegreeType[advocate.degree as keyof typeof DegreeType]
  }
}
