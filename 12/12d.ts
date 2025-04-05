function sortArray<T extends string | number>(arr: T[]): T[] {
    return arr.slice().sort((a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return a - b;
      } else {
        return a.toString().localeCompare(b.toString());
      }
    });
  } 
  const numberArray: number[] = [5, 2, 9, 1, 7];
  const stringArray: string[] = ["banana", "apple", "cherry", "date"];
  
  const sortedNumbers = sortArray(numberArray);
  const sortedStrings = sortArray(stringArray);
  
  console.log("Sorted Numbers:", sortedNumbers);
  console.log("Sorted Strings:", sortedStrings);