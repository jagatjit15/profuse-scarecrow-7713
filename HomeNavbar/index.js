// CompaniesNames
let CompaniesNames = [
  {
    img: "https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg",
    name: "Remote",
  },
  {
    img: "https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg",
    name: "MNC",
  },
  {
    img: "https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg",
    name: "startup",
  },
  {
    img: "https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg",
    name: "Banking & Finance",
  },
  {
    img: "https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg",
    name: "Analytics",
  },
  {
    img: "https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg",
    name: "HR",
  },
  {
    img: "https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg",
    name: "Software & IT",
  },
  {
    img: "https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg",
    name: "Data Science",
  },
  {
    img: "https://static.naukimg.com/s/0/0/i/trending-naukri/supplychain.svg",
    name: "Supply Chain",
  },
  {
    img: "https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg",
    name: "Sales",
  },
  {
    img: "https://static.naukimg.com/s/0/0/i/trending-naukri/freshers.svg",
    name: "Fresher",
  },
];
nagaraju(CompaniesNames);
function nagaraju(data) {
  data.forEach(function (ele) {
    var box = document.createElement("div");

    var box1 = document.createElement("div");

    var okati = document.createElement("img");
    // okati.setAttribute("id","okatiImg")
    okati.setAttribute("src", ele.img);

    var box2 = document.createElement("div");
    var rendu = document.createElement("h4");
    box.setAttribute("id", "box");
    rendu.innerText = ele.name;

    box1.append(okati);
    box2.append(rendu);
    box.append(box1, box2);
    // box.append(okati,rendu);
    document.querySelector("#sixth").append(box);
  });
}

// exploreCpmpany

let exploreCompany = [
  {
    title: "MNCs",
    para: "1.3K+ are actively hiring",
    img1: "https://img.naukimg.com/logo_images/groups/v1/869714.gif",
    img2: "https://img.naukimg.com/logo_images/groups/v1/233026.gif",
    img3: "https://img.naukimg.com/logo_images/groups/v1/52702.gif",
    img4: "https://img.naukimg.com/logo_images/groups/v1/235458.gif",
  },
  {
    title: "Fortune 500",
    para: "84 are actively hiring",
    img1: "https://img.naukimg.com/logo_images/groups/v1/3208.gif",
    img2: "https://img.naukimg.com/logo_images/groups/v1/255972.gif",
    img3: "https://img.naukimg.com/logo_images/groups/v1/142780.gif",
    img4: "https://img.naukimg.com/logo_images/groups/v1/1320206.gif",
  },
  {
    title: "Unicorns",
    para: "67 are actively hiring",
    img1: "https://img.naukimg.com/logo_images/groups/v1/1879652.gif",
    img2: "https://img.naukimg.com/logo_images/groups/v1/1205138.gif",
    img3: "https://img.naukimg.com/logo_images/groups/v1/1221608.gif",
    img4: "https://img.naukimg.com/logo_images/groups/v1/1194340.gif",
  },
  {
    title: "Startups",
    para: "185 are actively hiring",
    img1: "https://img.naukimg.com/logo_images/groups/v1/2519816.gif",
    img2: "https://img.naukimg.com/logo_images/groups/v1/3059420.gif",
    img3: "https://img.naukimg.com/logo_images/groups/v1/4599509.gif",
    img4: "https://img.naukimg.com/logo_images/groups/v1/1694498.gif",
  },
];

nagaraju1(exploreCompany);
function nagaraju1(data) {
  data.forEach(function (ele) {
    let dabba = document.createElement("div");

    let title = document.createElement("h3");
    title.innerText = ele.title;

    let para = document.createElement("p");
    para.innerText = ele.para;

    let img1 = document.createElement("img");
    img1.setAttribute("src", ele.img1);

    let img2 = document.createElement("img");
    img2.setAttribute("src", ele.img2);

    let img3 = document.createElement("img");
    img3.setAttribute("src", ele.img3);

    let img4 = document.createElement("img");
    img4.setAttribute("src", ele.img4);

    dabba.append(title, para, img1, img2, img3, img4);
    document.querySelector("#eight").append(dabba);
  });
}

//  featuredCompany

let featuredCompany = [
  {
    img1: "https://img.naukimg.com/logo_images/groups/v2/240936.gif",
    title: "JPMorgan Chase Bank",
    rating: "⭐4.2 (3.4K+ reviews)",
    para: "Leader in financial services.",
    btn: "View jobs",
  },
  {
    img1: "https://img.naukimg.com/logo_images/groups/v2/9558.gif",
    title: "Nagarro",
    rating: "⭐4.4 (2.2K+ reviews)",
    para: "Leader in digital product engineering.",
    btn: "View jobs",
  },
  {
    img1: "https://img.naukimg.com/logo_images/groups/v2/13832.gif",
    title: "Infosys",
    rating: "⭐4.0 (25.8K+ reviews)",
    para: "Global leader in next-gen digital services",
    btn: "View jobs",
  },
  {
    img1: "https://img.naukimg.com/logo_images/groups/v2/4156.gif",
    title: "Cognizant",
    rating: "⭐4.0 (26.8K+ reviews)",
    para: "Leading ITeS company with global presence.",
    btn: "View jobs",
  },
  {
    img1: "https://img.naukimg.com/logo_images/groups/v2/41608.gif",
    title: "Wipro",
    rating: "⭐3.9 (25.5K+ reviews)",
    para: "Leading technology services & consulting.",
    btn: "View jobs",
  },
];

nagaraju2(featuredCompany);

function nagaraju2(data) {
  data.forEach(function (ele) {
    let dabba = document.createElement("div");

    let one = document.createElement("img");
    one.setAttribute("src", ele.img1);

    let two = document.createElement("h2");
    two.innerText = ele.title;

    let three = document.createElement("p");
    three.innerText = ele.rating;

    let four = document.createElement("h5");
    four.innerText = ele.para;

    let five = document.createElement("h4");
    five.innerText = ele.btn;

    dabba.append(one, two, three, four, five);
    document.querySelector("#ten").append(dabba);
  });
}

// discoverCOmpany

let discoverCompany = [
  {
    title: "Full Stack Developer",
    para: "25.9K+ Jobs",
  },
  {
    title: "Mobile / App Developer",
    para: "1.9K+ Jobs",
  },
  {
    title: "Front End Developer",
    para: "2.5K+ Jobs",
  },
  {
    title: "DevOps Engineer",
    para: "1.6K+ Jobs",
  },
  {
    title: "Engneering Manager",
    para: "1.7K+ JObs",
  },
  {
    title: "Techinical Lead",
    para: "1.46K Jobs",
  },
];
nagaraju3(discoverCompany);
function nagaraju3(data) {
  data.forEach(function (ele) {
    let dabba = document.createElement("div");

    let title = document.createElement("h2");
    title.innerText = ele.title;

    let para = document.createElement("p");
    para.innerText = ele.para;

    dabba.append(title, para);
    document.querySelector("#discover2").append(dabba);
  });
}

// sponser

let sponserCompany = [
  {
    img: "https://img.naukimg.com/logo_images/groups/v1/4612691.gif",
    title: "MOURI Tech",
    rating: "⭐4.0(224 reviews)",
    p1: "software Product",
    p2: "Service",
  },
  {
    img: "https://img.naukimg.com/logo_images/groups/v1/4656921.gif",
    title: "NICE",
    rating: "⭐4.0(255 reviews)",
    p1: "software Product",
    p2: "Foreign MNC",
  },
  {
    img: "https://img.naukimg.com/logo_images/groups/v1/4586691.gif",
    title: "ICE Mortgage Tech",
    rating: "⭐4.4(43 reviews)",
    p1: "IT Services & Consulting",
    p2: "Software Product",
  },
  {
    img: "https://img.naukimg.com/logo_images/groups/v1/233334.gif",
    title: "Coforage",
    rating: "⭐3.8(808 reviews)",
    p1: "Public Service",
    p2: "Indian MNC",
  },
  {
    img: "https://img.naukimg.com/logo_images/groups/v1/373276.gif",
    title: "Intas",
    rating: "⭐4.3(47 reviews)",
    p1: "IT Services & Consulting",
    p2: "Foreign MNC",
  },
  {
    img: "https://img.naukimg.com/logo_images/groups/v1/4837621.gif",
    title: "QuantumID",
    rating: "⭐4.6(8 reviews)",
    p1: "IT Services & Consulting",
    p2: "Service",
  },
  {
    img: "https://img.naukimg.com/logo_images/groups/v1/86854.gif",
    title: "Sun Life",
    rating: "⭐4.4(373 reviews)",
    p1: "Financial Services",
    p2: "Insurance",
  },
  {
    img: "https://img.naukimg.com/logo_images/groups/v1/1413844.gif",
    title: "NIT",
    rating: "⭐3.8(26 reviews)",
    p1: "software Product",
    p2: "Foreign MNC",
  },
  {
    img: "https://img.naukimg.com/logo_images/groups/v1/191386.gif",
    title: "Infosys BPM",
    rating: "⭐4.0(5.5K reviews)",
    p1: "Analytics / KPO / Research",
    p2: "BPO/KPO",
  },
  {
    img: "https://img.naukimg.com/logo_images/groups/v1/3767692.gif",
    title: "Sykes",
    rating: "⭐3.5(529 reviews)",
    p1: "BPO / Call Centre",
    p2: "Recruitment ? Staffing",
  },
];

nagaraju4(sponserCompany);

function nagaraju4(data) {
  data.forEach(function (ele) {
    let dabba = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", ele.img);

    let okati = document.createElement("h3");
    okati.innerText = ele.title;

    let rendu = document.createElement("p");
    rendu.innerText = ele.rating;

    let moodu = document.createElement("h5");
    moodu.innerText = ele.p1;

    let nalugu = document.createElement("h5");
    nalugu.innerText = ele.p2;

    dabba.append(image, okati, rendu, moodu, nalugu);
    document.querySelector("#sponser2").append(dabba);
  });
}

let interviewQus = [
  {
    image: "https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus.png",
    title: "Byjus",
    list: "816 Interviews",
  },
  {
    image: "https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png",
    title: "Cognizant",
    list: "16K+ Interviews",
  },
  {
    image: "https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png",
    title: "Accenture",
    list: "2K+ Interviews",
  },
  {
    image: "https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon.png",
    title: "Amazon",
    list: "1.7K Interviews",
  },
  {
    image: "https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs.png",
    title: "TCS",
    list: "2.5K Interviews",
  },
  {
    image: "https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart.png",
    title: "Flipkart",
    list: "488 Interviews",
  },
];

nagaraju5(interviewQus);

function nagaraju5(data) {
  data.forEach(function (ele) {
    let dabba = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", ele.image);

    let title = document.createElement("h3");
    title.innerText = ele.title;

    let para = document.createElement("p");
    para.innerText = ele.list;

    // let dabba1 = document.createElement("div");

    // dabba1.append(title,para);
    dabba.append(image, title, para);
    document.querySelector("#interview3").append(dabba);
  });
}

// let employ = document.getElementById("select");
// employ.addEventListener("change", function () {
//   window.location.href = "../employers.html";
//   console.log("hello");
// });
