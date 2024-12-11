const collectionTabletDatas = [
  {
    tabletName: "Acer One 8",
    tabletCamera: "Rear 8MP,front 2MP",
    tabletCpuSpeed: "2.0GHz",
    tabletMicroSIM: "TF card x1",
    tabletRam: "3GB ram,32 rom",
    tabletBatteryPower: "fivemh",
    tabletSpecification: ["BT 5.0", "Wifi 0.2", "Made in india", "Acer One"],
  },
  {
    tabletName: "HP",
    tabletCamera: "Rear 8MP,front 2MP",
    tabletCpuSpeed: "2.0GHz",
    tabletMicroSIM: "TF card x1",
    tabletRam: "3GB ram,32 rom",
    tabletBatteryPower: "fivemh",
    tabletSpecification: ["BT 5.0", "Wifi 0.2", "Made in india", "HP"],
  },
  {
    tabletName: "Nokia One 8",
    tabletCamera: "Rear 8MP,front 2MP",
    tabletCpuSpeed: "2.0GHz",
    tabletMicroSIM: "TF card x1",
    tabletRam: "3GB ram,32 rom",
    tabletBatteryPower: "fivemh",
    tabletSpecification: ["BT 5.0", "Wifi 0.2", "Made in india", "Nokia One"],
  },
];

// typeof - to check the dataype
let dataTypeTabletName = typeof collectionTabletDatas[0].tabletName;
console.log(dataTypeTabletName);

// String Indexing
// Useful string methods
// Template Strings
const tabletBatteryPower = collectionTabletDatas[0].tabletBatteryPower;
console.log(tabletBatteryPower);

// String Indexing
const firstChar = tabletBatteryPower[0];
const secondChar = tabletBatteryPower[1];
const thirdChar = tabletBatteryPower[2];
console.log(firstChar, secondChar, thirdChar);

// Useful string methods
const studentName = "rahul kumar";
console.error(studentName);
console.log(studentName.length);
console.log(studentName.toUpperCase());
console.log(studentName.toLocaleLowerCase());
console.log(studentName.replace("rahul", "vijay"));
console.log(studentName.charAt(6));
console.log(studentName.substring(0, 6));
// Split a string into substrings using the specified separator and return them as an array.
console.log(studentName.split(''));
