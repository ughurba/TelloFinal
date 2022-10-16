import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const useError = (
  error: Partial<FetchBaseQueryError | SerializedError | undefined>
) => {
  useEffect(() => {
    if (error) {
      if ("data" in error) {
        //@ts-ignore
        toast.error(error.data);
      }
    }
  }, [error]);
};
