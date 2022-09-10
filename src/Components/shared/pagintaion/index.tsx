import Pagination from "@mui/material/Pagination";
import * as React from "react";
import { styled as MuiStyled } from "@mui/material/styles";
import { ChangeEvent, FC } from "react";

export const StyledPagination = MuiStyled(Pagination)`
 display:flex;
 align-items: center;
 justify-content: center;
 padding:15px 0px;

`;
// interface Props {
//   data: IGoods[];
//   page: number;
//   onChange: (ev: ChangeEvent<unknown>, value: number) => void;
// }
//
// export const MyPagintaion: FC<Props> = ({ data, page, onChange }) => {
//   const calculatePaginationCount = () => {
//     const count = data.length / 6;
//     return Math.round(count);
//   };
//   return (
//     <StyledPagination
//       page={page}
//       onChange={onChange}
//       count={calculatePaginationCount()}
//       color="secondary"
//     />
//   );
// };
