import { useState } from "react";

export const UseCategory = (category: string) => {
  const [result, setResult] = useState<string>("");
  console.log(category, "sshhhhhhs");

  //   switch (category) {
  //     case "ALL": {
  //       setResult(str);
  //       break;
  //     }
  //     case "PENDING": {
  //       setResult(str);
  //       break;
  //     }
  //     case "SOLVED": {
  //       setResult(str);
  //       break;
  //     }
  //     default:
  //       console.log("error");
  //   }

  return result;
};
