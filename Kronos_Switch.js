// module.exports = {
//     name: "Kronos Switch",
//     version: "1.0.0",
//     author: "BudgetArms",
//     description: "Switches to a FFA Lobby on F4 press",
//     locations: ["game"],
//     settings: {
//         Kronos_Switch: {
//             name: "Kronos_Switch",
//             id: "Kronos_Switch",
//             cat: "Interface",
//             type: "checkbox",
//         },
//     },
// 	run: () => {
// 		window.addEventListener("keydown", (e) => {
//             if (e.key === "F4") {
// 				console.log('Switching');
// 				document.getElementById('menuBtnBrowser').addEventListener("click", () => setTimeout(function() {document.querySelector("#serverHolder > div:nth-child(1)").click(); document.querySelector(`#serverHolder > div.menuSelectorHolder > div:nth-child(3)`).click()}, 500));
// 				function Click() {
// 					document.getElementById('menuBtnBrowser').click();
// 				}
// 				Click();
// 		  }
// 		});
// 	}
// }
// // I used NullDev's and ando's code to figure out a way to make this work