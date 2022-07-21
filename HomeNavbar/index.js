
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
 
 let exploreCompany = [
        {
            title:"MNCs",
            para:"1.3K+ are actively hiring",
            img1:"https://img.naukimg.com/logo_images/groups/v1/869714.gif",
            img2:"https://img.naukimg.com/logo_images/groups/v1/233026.gif",
            img3:"https://img.naukimg.com/logo_images/groups/v1/52702.gif",
            img4:"https://img.naukimg.com/logo_images/groups/v1/235458.gif"
        },
        {
            title:"Fortune 500",
            para:"84 are actively hiring",
            img1:"https://img.naukimg.com/logo_images/groups/v1/3208.gif",
            img2:"https://img.naukimg.com/logo_images/groups/v1/255972.gif",
            img3:"https://img.naukimg.com/logo_images/groups/v1/142780.gif",
            img4:"https://img.naukimg.com/logo_images/groups/v1/1320206.gif"

        },
        {
            title:"Unicorns",
            para:"67 are actively hiring",
            img1:"https://img.naukimg.com/logo_images/groups/v1/1879652.gif",
            img2:"https://img.naukimg.com/logo_images/groups/v1/1205138.gif",
            img3:"https://img.naukimg.com/logo_images/groups/v1/1221608.gif",
            img4:"https://img.naukimg.com/logo_images/groups/v1/1194340.gif"

        },
        {
            title:"Startups",
            para:"185 are actively hiring",
            img1:"https://img.naukimg.com/logo_images/groups/v1/2519816.gif",
            img2:"https://img.naukimg.com/logo_images/groups/v1/3059420.gif",
            img3:"https://img.naukimg.com/logo_images/groups/v1/4599509.gif",
            img4:"https://img.naukimg.com/logo_images/groups/v1/1694498.gif"
        }
       
 ];


 nagaraju1(exploreCompany);
 function nagaraju1(data){
    data.forEach(function(ele){
        let dabba = document.createElement("div");

        let title = document.createElement("h3");
        title.innerText = ele.title;

        let para = document.createElement("p");
        para.innerText = ele.para;

        let img1 = document.createElement("img");
        img1.setAttribute("src",ele.img1);

        let img2 = document.createElement("img");
        img2.setAttribute("src",ele.img2);

        let img3 = document.createElement("img");
        img3.setAttribute("src",ele.img3);

        let img4 = document.createElement("img");
        img4.setAttribute("src",ele.img4);

        dabba.append(title,para,img1,img2,img3,img4);
        document.querySelector("#eight").append(dabba)
    })
 };


 let featuredCompany=[
    {
        img1:"https://img.naukimg.com/logo_images/groups/v2/240936.gif",
        title:"JPMorgan Chase Bank",
        rating:"⭐4.2 (3.4K+ reviews)",
        para:"Leader in financial services.",
        btn:"View jobs",
    },
    {
        img1:"https://img.naukimg.com/logo_images/groups/v2/9558.gif",
        title:"Nagarro",
        rating:"⭐4.4 (2.2K+ reviews)",
        para:"Leader in digital product engineering.",
        btn:"View jobs"
    },
    {
        img1:"https://img.naukimg.com/logo_images/groups/v2/13832.gif",
        title:"Infosys",
        rating:"⭐4.0 (25.8K+ reviews)",
        para:"Global leader in next-gen digital services",
        btn:"View jobs"
    },
    {
        img1:"https://img.naukimg.com/logo_images/groups/v2/4156.gif",
        title:"Cognizant",
        rating:"⭐4.0 (26.8K+ reviews)",
        para:"Leading ITeS company with global presence.",
        btn:"View jobs"
    },
    {
        img1:"https://img.naukimg.com/logo_images/groups/v2/41608.gif",
        title:"Wipro",
        rating:"⭐3.9 (25.5K+ reviews)",
        para:"Leading technology services & consulting.",
        btn:"View jobs"

    }
 ];

 nagaraju2(featuredCompany);
 
 function nagaraju2(data){
  
    data.forEach(function(ele){

        let dabba = document.createElement("div");
        

        let one = document.createElement("img");
        one.setAttribute('src',ele.img1);

        let two = document.createElement("h2");
        two.innerText = ele.title;

        let three = document.createElement("p");
        three.innerText = ele.rating;

        let four = document.createElement("h5");
        four.innerText = ele.para;

        let five = document.createElement("h4");
        five.innerText = ele.btn;
        

        dabba.append(one,two,three,four,five);
        document.querySelector("#ten").append(dabba);
    })     
 }


