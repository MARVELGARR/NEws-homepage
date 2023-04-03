
const siteData ={
    title: "News",
    logo: "",
    navLinks:[
        {title: "Home", url:"/", id:1},
        {title: "New", url:"/", id:2},
        {title: "Popular", url:"/", id:3},
        {title: "Trending", url:"/", id:4},
        {title: "Categories", url:"/", id:5},
    ],
    screen:[
        {type: "web", url: "/images/image-web-3-desktop.jpg"},
        {type: "mobile", url: "/images/image-web-3-mobile.jpg"}
    ],
    newsdata: [
        {headings:"Hydrogen VS Electric Cars", intro:"Will hydrogen-fueled cars ever catch up to EVs?", id:"n1"},
        {headings:"The Downsides of AI Artistry", intro:"What are the possible adverse effects of on-demand AI image generation?", id:"n2"},
        {headings:"Is VC Funding Drying Up?", intro:"Private funding by VC firms is down 50% YOY. We take a look at what that means.", id:"n3"},
    ],
    featuresdata:[
        
        {img:"/images/image-retro-pcs.jpg", numbering:"01", headings:"Reviving Retro PCs", intro:"What happens when old PCs are given modern upgrades?", id:"f1"},
        {img:"/images/image-top-laptops.jpg", numbering:"02", headings:"Top 10 Laptops of 2022", intro:"Our best picks for various needs and budgets.", id:"f2"},
        {img:"/images/image-gaming-growth.jpg", numbering:"03", headings:"The Growth of Gaming", intro:"How the pandemic has sparked fresh opportunities.", id:"f3"},
    ]
};

export default siteData;