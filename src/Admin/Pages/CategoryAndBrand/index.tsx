import {
  GridActionsCellItem,
  GridCellEditCommitParams,
  GridColumns,
  GridRowId,
  MuiBaseEvent,
  MuiEvent,
} from "@mui/x-data-grid";
import { DataTable } from "Admin/Components/Shared/DataTable";
import { Flex } from "Components/shared";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useCreateBrandMutation,
  useCreateCategoryMutation,
  useGetCategoryAndBrandAllQuery,
  useRemoveBrandMutation,
  useRemoveCategoryMutation,
  useUpdateCategoryMutation,
  useUpdateBrandMutation,
} from "services/adminServices/categoryAndBrandServices";
import { IBrand, ICategory } from "types";
import { BasicModalDialog } from "Admin/Components/Shared/Modal";
import { useSuccess } from "Hooks/useSuccess";
import { WrapperCategoryTable, Wrapper, WrapperBrandTable } from "./style";
import { useError } from "Hooks/useError";
import { Tooltip } from "@mui/material";
import Swal from "sweetalert2";
import { TableButtons } from "Admin/Components/Shared/TableButtons";

const CategoryAndBrand = () => {
  const { t } = useTranslation();
  const { data } = useGetCategoryAndBrandAllQuery();
  const [removeCategory, { isSuccess: removeIsSuccesCate }] =
    useRemoveCategoryMutation();
  const [postCategory, { error, isSuccess: createSuccessCate }] =
    useCreateCategoryMutation();
  const [
    updateCategory,
    { isSuccess: updateSuccessCate, error: updateErrorCate },
  ] = useUpdateCategoryMutation();

  ///brand requests
  const [
    postBrand,
    { isSuccess: createSuccessBrand, error: brandCreateError },
  ] = useCreateBrandMutation();
  const [removeBrand, { isSuccess: removeSuccessBrand }] =
    useRemoveBrandMutation();
  const [
    updateBrand,
    { isSuccess: updateSuccsessBrand, error: brandUpdateError },
  ] = useUpdateBrandMutation();

  const [categoryRows, setRowsCategory] = useState<ICategory[]>(
    data?.categories ? data?.categories : []
  );
  const [brandRows, setBrandRows] = useState<IBrand[]>(
    data?.brands ? data?.brands : []
  );

  const handlePostCreateCategory = (value: any) => {
    postCategory(value);
  };
  const handlePostCreateBrand = (value: any) => {
    postBrand({
      name: value,
    });
  };

  type CategoryRow = ICategory;
  type BrandRow = IBrand;
  const handleRowEditCommit = useCallback(
    (params: GridCellEditCommitParams, event: MuiEvent<MuiBaseEvent>) => {
      if (params.field === "title") {
        updateCategory({
          id: params.id,
          Title: params.value,
        });
      } else {
        const cate = categoryRows.find((x) => x.id === params.id);

        if (cate) {
          updateCategory({
            id: params.id,
            Title: cate?.title,
            isActive: params.value,
          });
        }
      }
    },
    [categoryRows]
  );
  const handleRowEditBrand = useCallback(
    (params: GridCellEditCommitParams) => {
      updateBrand({ id: params.id, name: params.value });
    },
    [brandRows]
  );

  useEffect(() => {
    if (data?.categories) {
      setRowsCategory(data?.categories);
    }
    if (data?.brands) {
      setBrandRows(data.brands);
    }
  }, [data?.brands, data?.categories]);

  const deleteCategory = useCallback(
    (id: GridRowId) => () => {
      Swal.fire({
        title: t("AreYouSure"),
        text: t("YouWontbeAbleToRevertThis"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: t("YesDeletIt"),
      }).then((result) => {
        if (result.isConfirmed) {
          removeCategory({ id: id });
          setTimeout(() => {
            setRowsCategory((prevRows) =>
              prevRows.filter((row) => row.id !== id)
            );
          });
        }
      });
    },
    [t]
  );
  const deleteBrand = useCallback(
    (id: GridRowId) => () => {
      Swal.fire({
        title: t("AreYouSure"),
        text: t("YouWontbeAbleToRevertThis"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: t("YesDeletIt"),
      }).then((result) => {
        if (result.isConfirmed) {
          removeBrand({ id: id });
          setTimeout(() => {
            setBrandRows((prevRows) => prevRows.filter((row) => row.id !== id));
          });
        }
      });
    },
    [t]
  );
  const CategoryColumns = useMemo<GridColumns<CategoryRow>>(
    () => [
      { field: "id", headerName: t("id"), width: 80 },
      { field: "title", headerName: t("Title"), editable: true, width: 280 },
      {
        field: "isActive",
        headerName: t("isActive"),
        type: "singleSelect",
        valueOptions: ["true", "false"],
        editable: true,
        width: 100,
      },
      {
        field: "actions",
        type: "actions",
        width: 100,
        getActions: (params) => [
          <Tooltip title={t("RemoveCategory")}>
            <GridActionsCellItem
              icon={<TableButtons onRemoveBtn={true} />}
              label="Delete"
              onClick={deleteCategory(params.id)}
            />
          </Tooltip>,
        ],
      },
    ],
    [deleteCategory, categoryRows]
  );
  const BrandColumns = useMemo<GridColumns<BrandRow>>(
    () => [
      { field: "id", headerName: t("id"), width: 80 },
      { field: "name", headerName: t("Name"), editable: true, width: 380 },
      {
        field: "actions",
        type: "actions",
        width: 100,
        getActions: (params) => [
          <Tooltip title={t("RemoveBrand")}>
            <GridActionsCellItem
              icon={<TableButtons onRemoveBtn={true} />}
              label="Delete"
              onClick={deleteBrand(params.id)}
            />
          </Tooltip>,
        ],
      },
    ],
    [deleteBrand, brandRows]
  );
  //category
  useSuccess(removeIsSuccesCate, "CategoryDeletedSuccessfully");
  useSuccess(createSuccessCate, "CategoryAddedSuccessfully");
  useSuccess(updateSuccessCate, "CategoryUpdatedCuccsessufully");
  useError(error);
  useError(updateErrorCate);
  //brands
  useSuccess(createSuccessBrand, "BrandAddedSuccessfully");
  useSuccess(removeSuccessBrand, "BrandDeletedSuccessfully");
  useSuccess(updateSuccsessBrand, "BrandUpdatedCuccsessufully");
  useError(brandCreateError);
  useError(brandUpdateError);

  return (
    <Wrapper>
      <Flex>
        <WrapperCategoryTable>
          <BasicModalDialog
            btnName="Create Category"
            title="Cretae Category"
            label="Category Title"
            isCheck={true}
            postFn={handlePostCreateCategory}
          />
          <DataTable
            rows={categoryRows}
            handleRowEditCommit={handleRowEditCommit}
            columns={CategoryColumns}
          />
        </WrapperCategoryTable>
        <WrapperBrandTable>
          <BasicModalDialog
            btnName="Create Brand"
            title="Cretae Brand"
            label="Brand Title"
            postFn={handlePostCreateBrand}
          />
          <DataTable
            rows={brandRows}
            handleRowEditCommit={handleRowEditBrand}
            columns={BrandColumns}
          />
        </WrapperBrandTable>
      </Flex>
    </Wrapper>
  );
};
export default CategoryAndBrand;
