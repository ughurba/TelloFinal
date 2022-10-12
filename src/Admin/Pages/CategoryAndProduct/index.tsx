import {
  GridActionsCellItem,
  GridCellEditCommitParams,
  GridColumns,
  GridRowId,
  MuiBaseEvent,
  MuiEvent,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";

import { Button } from "Admin/Components/Shared/Button";
import { DataTable } from "Admin/Components/Shared/DataTable";
import { Flex } from "Components/shared";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useCreateCategoryMutation,
  useGetCategoryAndBrandAllQuery,
  useRemoveCategoryMutation,
  useUpdateCategoryMutation,
} from "services/adminServices/categoryServices";
import styled from "styled-components";
import { IBrand, ICategory } from "types";
import { toast } from "react-toastify";
import { BasicModalDialog } from "Admin/Components/Shared/Modal";

export const Wrapper = styled.div``;
export const WrapperCategoryTable = styled.div`
  width: 55%;
`;
export const WrapperBrandTable = styled.div`
  width: 45%;
`;
export const CategoryAndBrand = () => {
  const { data } = useGetCategoryAndBrandAllQuery();
  const [removeCategory, { isSuccess: removeIsSuccsesCate }] =
    useRemoveCategoryMutation();
  const [postCategory, { error, isSuccess }] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [categoryRows, setRowsCategory] = useState<ICategory[]>(
    data?.categories ? data?.categories : []
  );
  const [brandRows, setBrandRows] = useState<IBrand[]>(
    data?.brands ? data?.brands : []
  );

  const handlePostCreateCategory = (value: any) => {
    postCategory(value);
  };
  const { t } = useTranslation();
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
        console.log(cate);

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
      removeCategory({ id: id });
      setTimeout(() => {
        setRowsCategory((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );
  const deleteBrand = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setBrandRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );
  const CategoryColumns = useMemo<GridColumns<CategoryRow>>(
    () => [
      { field: "id", headerName: t("id"), width: 80 },
      { field: "title", headerName: t("Title"), editable: true, width: 330 },
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
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteCategory(params.id)}
          />,
        ],
      },
    ],
    [deleteCategory, categoryRows]
  );
  const BrandColumns = useMemo<GridColumns<BrandRow>>(
    () => [
      { field: "id", headerName: t("id"), width: 80 },
      { field: "name", headerName: t("Name"), width: 450 },
    ],
    [deleteBrand, data?.brands]
  );
  useEffect(() => {
    if (removeIsSuccsesCate) {
      toast.success("category silindi");
    }
  }, [removeIsSuccsesCate]);
  useEffect(() => {
    if (error) {
      if ("data" in error) {
        //@ts-ignore
        toast.error(error.data);
      }
    }
  }, [error]);
  useEffect(() => {
    if (isSuccess) {
      toast.success("category elave edildi");
    }
  }, [isSuccess]);
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
          <Button btnName="Create Brand" />
          <DataTable rows={brandRows} columns={BrandColumns} />
        </WrapperBrandTable>
      </Flex>
    </Wrapper>
  );
};
