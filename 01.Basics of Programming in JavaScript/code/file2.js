// re-paratice all concepts 
// variable can store some infromation
// we can use that infromation later
// we can change that infromation according to need!

// #1 Declare variable using var
// #2 More about variable
// #3 Let
// #4 Const

var studentName = "alock";
var studentId = 1000002134;
var studentFavCourseName = "Operating system";
var studentCityName = "Noida";
var studentPinCode = "271191";

// print the data
console.log(studentName);
console.log(studentId);
console.log(studentFavCourseName);
console.log(studentCityName);
console.log(studentId);

// Var -> global scope variable,re-assign possible
// Let,const -> Local scope variable
// cosnt -> fix varaible you can not modify the const variable,can't re-assign the varaible, if you are using const varaible to declare the variable in javascript

var schoolName = "GovernmentIC";
schoolName = "PrivateIC";
console.log(schoolName);

const dataSeries = 101010010;
// dataSeries = 19191919;
console.log(dataSeries);
// output-
// assignment to constant variable.
// not possible to re-assign the const variable
// most of developer used const varaible as fixed size

// how to store the data of table

let tabletName = "Acer One 8";
let tabletCamera = "Rear 8MP,front 2MP";
let tabletCpuSpeed = "2.0GHz";
let tabletMicroSIM = "TF card x1";
let tabletRam = "3GB ram,32 rom";
let tabletBatteryPower = "5100mh";
let tabletSpecification = ["BT 5.0", "Wifi 0.2", "Made in india", "Acer One"];
console.log(tabletSpecification);

// better way to store the data into object (key,value pair)

const tabletDatas = {
  tabletName: "Acer One 8",
  tabletCamera: "Rear 8MP,front 2MP",
  tabletCpuSpeed: "2.0GHz",
  tabletMicroSIM: "TF card x1",
  tabletRam: "3GB ram,32 rom",
  tabletBatteryPower: "5100mh",
  tabletSpecification: ["BT 5.0", "Wifi 0.2", "Made in india", "Acer One"],
};
console.log(tabletDatas);

/* {
  tabletName: 'Acer One 8',
  tabletCamera: 'Rear 8MP,front 2MP',
  tabletCpuSpeed: '2.0GHz',
  tabletMicroSIM: 'TF card x1',
  tabletRam: '3GB ram,32 rom',
  tabletBatteryPower: '5100mh',
  tabletSpecification: [ 'BT 5.0', 'Wifi 0.2', 'Made in india', 'Acer One' ]
}
*/

// --> Problem statement 
// consider collection of data is present into the tabletDatas, how to store the all data,we can use the array of object

const collectionTabletDatas = [
  {
    tabletName: "Acer One 8",
    tabletCamera: "Rear 8MP,front 2MP",
    tabletCpuSpeed: "2.0GHz",
    tabletMicroSIM: "TF card x1",
    tabletRam: "3GB ram,32 rom",
    tabletBatteryPower: "5100mh",
    tabletSpecification: ["BT 5.0", "Wifi 0.2", "Made in india", "Acer One"],
  },
  {
    tabletName: "HP",
    tabletCamera: "Rear 8MP,front 2MP",
    tabletCpuSpeed: "2.0GHz",
    tabletMicroSIM: "TF card x1",
    tabletRam: "3GB ram,32 rom",
    tabletBatteryPower: "5100mh",
    tabletSpecification: ["BT 5.0", "Wifi 0.2", "Made in india", "HP"],
  },
  {
    tabletName: "Nokia One 8",
    tabletCamera: "Rear 8MP,front 2MP",
    tabletCpuSpeed: "2.0GHz",
    tabletMicroSIM: "TF card x1",
    tabletRam: "3GB ram,32 rom",
    tabletBatteryPower: "5100mh",
    tabletSpecification: ["BT 5.0", "Wifi 0.2", "Made in india", "Nokia One"],
  },
];

console.log(collectionTabletDatas[0]);
console.log(collectionTabletDatas[1]);
console.log(collectionTabletDatas[2]);

