export enum OrderStatus {
  Pending,
  Accept,
  Reject,
}
export const toFormData = (response: any) => {
  let formData = new FormData();

  for (let key of Object.keys(response)) {
    let item: any = response[key as keyof typeof response];
    if (item) {
      if (Array.isArray(item)) {
        for (let itemIndex in item) {
          if (
            typeof item[itemIndex] === "object" &&
            !item[itemIndex]?.lastModifiedDate
          ) {
            for (let subKey in item[itemIndex]) {
              formData.append(
                `${key}[${itemIndex}].${subKey}`,
                item[itemIndex][subKey]
              );
            }
          } else {
            formData.append(key, item[itemIndex]);
          }
        }
      } else if (
        typeof response[key] === "object" &&
        !response[key]?.lastModifiedDate
      ) {
        for (let subKey in response[key]) {
          formData.append(`${key}.${subKey}`, response[key][subKey]);
        }
      } else {
        formData.append(key, item || "");
      }
    }
  }
  return formData;
};

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
