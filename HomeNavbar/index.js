
let CompaniesNames = [
    {
        img:"https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg",
        name:"Remote"
    },
    {
        img:"https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg",
        name:"MNC"
    },
    {
        img:"https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg",
        name:"startup"
    },
    {
        img:"https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg",
        name:"Banking & Finance"
    },
    {
        img:"https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg",
        name:"Analytics"
    },
    {
        img:"https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg",
        name:"HR"
    },
    {
        img:"https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg",
        name:"Software & IT"
    },
    {
        img:"https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg",
        name:"Data Science"
    },
    {
        img:"https://static.naukimg.com/s/0/0/i/trending-naukri/supplychain.svg",
        name:"Supply Chain"
    },
    {
        img:"https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg",
        name:"Sales"
    },
    {
        img:"https://static.naukimg.com/s/0/0/i/trending-naukri/freshers.svg",
        name:"Fresher"
    },
];
nagaraju(CompaniesNames);
 function nagaraju(data){
    data.forEach(function(ele){

        var box = document.createElement("div");

        var box1 = document.createElement("div");

        var okati = document.createElement("img");
        // okati.setAttribute("id","okatiImg")
        okati.setAttribute("src",ele.img);

        var box2 = document.createElement("div");
        var rendu = document.createElement("h4");
         box.setAttribute("id","box")
        rendu.innerText=ele.name;

        box1.append(okati);
        box2.append(rendu);
        box.append(box1,box2)
        // box.append(okati,rendu);
        document.querySelector("#sixth").append(box)
    })
 };
 

