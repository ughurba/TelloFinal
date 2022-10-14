import { Center } from "@mantine/core";
import { IconPhoto } from "@tabler/icons";
import { FC } from "react";
interface Props {
  item: string;
}
export const PhotoUpload: FC<Props> = ({ item }) => {
  return (
    <Center
      inline
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[1],
        fontSize: theme.fontSizes.xs,
        padding: "3px 7px",
        borderRadius: theme.radius.sm,
      })}
    >
      <IconPhoto size={14} style={{ marginRight: 5 }} />
      <span
        style={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          maxWidth: 200,
          display: "inline-block",
        }}
      >
        {item}
      </span>
    </Center>
  );
};
