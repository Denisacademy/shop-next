"use client";
import {
  usePathname,
  useSearchParams,
  useRouter,
  redirect,
} from "next/navigation";
import { Input } from "../ui/input";
import { ChangeEvent, useEffect, useState } from "react";

// async function NavSearch(props: {
//   searchParams: Promise<{
//     query?: string;
//     page?: string;
//   }>;
// }) {
//   const searchParams = await props.searchParams;
//   const query = searchParams?.query || "";
//   const page = Number(searchParams?.page);
//   console.log("params", searchParams);
//   return (
//     <Input
//       type="search"
//       placeholder="search product..."
//       className="max-w-xs dark:bg-muted"
//     />
//   );
// }
function NavSearch() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );
  const { replace } = useRouter();

  // const query = searchParams?.query || "";
  // const page = Number(searchParams?.page);
  // console.log("NavSearch-params", searchParams);

  const handleSearch = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const params = new URLSearchParams(searchParams);

    const term = e.target.value;
    if (term) {
      params.set("search", term);
      setSearch(term);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
    // redirect(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (searchParams.get("search")) {
      console.log("lol");
    } else {
      console.log("effect", searchParams);
      setSearch("");
    }
  }, [searchParams.get("search")]);
  return (
    <Input
      type="search"
      placeholder="search product..."
      className="max-w-xs dark:bg-muted"
      onChange={(e) => handleSearch(e)}
      value={search}
      defaultValue={searchParams.get("search")?.toString()}
    />
  );
}

export default NavSearch;
