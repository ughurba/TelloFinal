import Swal from "sweetalert2";

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
