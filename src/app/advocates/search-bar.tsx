"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filterTerm = searchParams.get("filter") ?? "";

  const handleChange = (term: string): void => {
    const query = term === '' ? term : "?" + setSearch(term);
    router.push(pathname + query);
  }

  const setSearch = useCallback(
    (value: string): string => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("filter", value);
      return params.toString();
    }, [searchParams]
  )

  return (
    <div className="flex flex-col flex-1 gap-3 w-1/3">
      <Label htmlFor="search-input">Search for an advocate</Label>
      <div className="flex gap-6">
        <Input
          type="text"
          id="search-input"
          value={filterTerm}
          onChange={({ target }) => handleChange(target.value)}
        />
        <Button
          onClick={() => handleChange("")}
          variant="outline"
          >
            Reset Search
        </Button>
      </div>
    </div>
  )
}