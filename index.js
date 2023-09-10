import chalk from "chalk";
import inquirer from "inquirer";
// let apilink = "https://v6.exchangerate-api.com/v6/4991e2a6bda62485a6a1b5c7/latest/PKR"
// let fetchdata =async (data:any) => {
//     let fetchdata = await fetch(data)
//     let res = await fetchdata.json()
//     return res.conversion_rates ;
// }
// let data = await fetchdata(apilink)
// let countries = Object.keys(data)
let firstcountry = await inquirer.prompt({
    message: "Converting from",
    name: "country",
    type: "list",
    choices: ["PKR", "USD", "EURO"]
});
let usermony = await inquirer.prompt({
    message: `select your amount in ${firstcountry.country}`,
    name: "rupee",
    type: "number",
});
let secondcountry = await inquirer.prompt({
    message: "converting to",
    name: "country",
    type: "list",
    choices: ["PKR", "USD", "EURO"]
});
// let cnv = `https://v6.exchangerate-api.com/v6/4991e2a6bda62485a6a1b5c7/pair/${firstcountry.country}/${secondcountry.country}`
// console.log(cnv)
// let cnvdata =async (data:any) => {
//     let cnvdata = await fetch(data)
//     let res = await cnvdata.json()
//     return res.conversion_rate ;
// }
// let cnvdatarate = await cnvdata(cnv)
// let convertedrate = usermony.rupee*cnvdatarate
// console.log(convertedrate)
if (firstcountry.country === "PKR" && secondcountry.country === "USD") {
    console.log(`US DOLLAR $:${chalk.bold.green(usermony.rupee / 306)} `);
}
else if (firstcountry.country === "USD" && secondcountry.country === "PKR") {
    console.log(`PKR RUPEE: ${chalk.bold.yellow(usermony.rupee * 306)}`);
}
else if (firstcountry.country === "PKR" && secondcountry.country === "EURO") {
    console.log(`EURO :${chalk.bold.green(usermony.rupee / 328)} `);
}
else if (firstcountry.country === "EURO" && secondcountry.country === "PKR") {
    console.log(`PKR RUPEE: ${chalk.bold.yellow(usermony.rupee * 328)}`);
}
else if (firstcountry.country === "EURO" && secondcountry.country === "USD") {
    console.log(`USD DOLLAR $ :${chalk.bold.green(usermony.rupee * 1.07)} `);
}
else if (firstcountry.country === "USD" && secondcountry.country === "EURO") {
    console.log(`EURO:${chalk.bold.green(usermony.rupee / 1.07)} `);
}
