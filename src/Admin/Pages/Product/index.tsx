import { AddProduct } from "Admin/Components/Shared/AddProduct";
import { useGetBrandAndCategoryIdQuery } from "services/adminServices";

export const Product = () => {
  const { data, isLoading, isSuccess } = useGetBrandAndCategoryIdQuery();

  return (
    <div>
      {!isLoading ? <AddProduct data={data} /> : <div>loading....</div>}
    </div>
  );
};
