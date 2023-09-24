import CustomChart from "@/components/chart/CustomChart";
import Filter from "@/components/filter/Dropdown";
import Pagination from "@/components/pagination/Pagination";
import Search from "@/components/search/Search";
import CustomTable from "@/components/table/CustomTable";
import { getProduct } from "@/utils/api";
import { filters, tHeadProducts } from "@/utils/helper";

export default async function Home({searchParams}) {

  const products = await getProduct(searchParams.skip, searchParams.search);

  return (
    <main className="min-h-screen w-full p-5 ">
      <div className="flex flex-col gap-5">
        <CustomChart products={products?.data} />

        <div className="flex gap-5 flex-col md:flex-row md:self-end">
          <Search />
          {/* <div className="flex">
          {
            filters.map((item, i) => (
              <Filter items={item} key={item.id} />
              ))
            }
          </div> */}
        </div>
          <CustomTable products={products?.data} tHead={tHeadProducts}  />
        <div className="self-end">
          <Pagination data={...products?.data} />
        </div>
      </div>
    </main>
  );
}
