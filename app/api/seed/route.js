import { NextResponse } from "next/server";
import { createProduct } from "../products/controller"


function generateRandomSKUID(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function generateRandomProductId(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function generateRandomSellingPrice(){
    return Math.floor(Math.random() * 100000);
}

function generateRandomCostPrice(){
    return Math.floor(Math.random() * 100000);
}



let seedData = [

    {

        "productImages": [
            "https://firebasestorage.googleapis.com/v0/b/veliciae-5fd0e.appspot.com/o/undefined%2FYour%20network%20is%20your%20net%20worth.png?alt=media&token=5a47657b-6d88-47bf-b1f0-c07e11f33695",
            "https://firebasestorage.googleapis.com/v0/b/veliciae-5fd0e.appspot.com/o/undefined%2F25%20Years%20Warranty.png?alt=media&token=8670a06a-d617-4299-83db-b92bfff83b19",
            "https://firebasestorage.googleapis.com/v0/b/veliciae-5fd0e.appspot.com/o/undefined%2Fongrid-roof-top.jpg?alt=media&token=c5aa813f-3d48-4f62-a76c-ea3282cd12f5"
        ],
        "productId": "e7d83669-d20a-4a58-b732-bac29607d103",
        "productName": "Network",
        "category": "Jewlary",
        "subCategory": "Ring",
        "sku": "NET_JEW_RIN",
        "description": "This is descritpion of product tand teljtle te ",
        "goldKarat": "22",
        "goldWeight": 0.2,
        "diamondCarat": 22,
        "diamondQuality": "4k",
        "numberOfDiamonds": 22,
        "metalType": "Platinum",
        "jhumkaHeight": 11,
        "jhumkaWidth": 11,
        "costPrice": 78552,
        "sellingPrice": 77856,
        "makingCharges": 0,
        "discount": 0,
        "quantityAvailable": 1,
        "taxDetails": "",
        "availabilityStatus": "In Stock",
        "certificationDetails": "Certification details",
        "warranty": "",
        "returnPolicy": "This is return policy of the product",
        "collection": "Wedding Rings",
        "gender": "Female"


    },
    {

        "productImages": [
            "https://firebasestorage.googleapis.com/v0/b/veliciae-5fd0e.appspot.com/o/undefined%2Fsolar-fencing.webp?alt=media&token=b09ab746-1620-4f34-a160-be9aa5cac102"
        ],
        "productId": "57a8e3d1-4b54-430b-9479-1599167f8643",
        "productName": "Fencing ",
        "category": "Solar",
        "subCategory": "Fencing",
        "sku": "SOLR_FNE",
        "description": "This is solar feinding ",
        "goldKarat": "",
        "goldWeight": null,
        "diamondCarat": null,
        "diamondQuality": "",
        "numberOfDiamonds": 0,
        "metalType": "",
        "jhumkaHeight": 0,
        "jhumkaWidth": 0,
        "costPrice": 7989,
        "sellingPrice": 899,
        "makingCharges": 0,
        "discount": 0,
        "quantityAvailable": 1,
        "taxDetails": "",
        "availabilityStatus": "In Stock",
        "certificationDetails": "Certification details",
        "warranty": "",
        "returnPolicy": "This is return policy of the product",
        "collection": "New Arrivals",
        "gender": "Male",


    },
    {

        "productImages": [
            "https://firebasestorage.googleapis.com/v0/b/veliciae-5fd0e.appspot.com/o/undefined%2FWhatsApp%20Image%202024-09-23%20at%2012.50.00.jpeg?alt=media&token=68685da1-006b-4637-9ec6-f8ebcc9f5749"
        ],
        "productId": "c3cc58e8-fedc-4e46-aa30-680e286f1117",
        "productName": "Sunglass",
        "category": "SunGlass",
        "subCategory": "Transaparent",
        "sku": "KSLJLJ",
        "description": "This is hljlj ;lt h safjk a;lskjw lksjf  thl j s ",
        "goldKarat": "",
        "goldWeight": null,
        "diamondCarat": null,
        "diamondQuality": "",
        "numberOfDiamonds": 0,
        "metalType": "",
        "jhumkaHeight": 0,
        "jhumkaWidth": 0,
        "costPrice": 7989,
        "sellingPrice": 8999,
        "makingCharges": 0,
        "discount": 0,
        "quantityAvailable": 100,
        "taxDetails": "",
        "availabilityStatus": "In Stock",
        "certificationDetails": "Certification details",
        "warranty": "",
        "returnPolicy": "This is return policy of the product",
        "collection": "Engagement",
        "gender": "Unisex",


    },
    {

        "productImages": [
            "https://firebasestorage.googleapis.com/v0/b/veliciae-5fd0e.appspot.com/o/undefined%2Fbanquet.jpeg?alt=media&token=b03a30db-5535-4b17-a285-154852a309ff"
        ],
        "productId": "e35c2745-1dd9-40a5-b95a-d726a03ea619",
        "productName": "Banqute",
        "category": "Hall",
        "subCategory": "Function",
        "sku": "KBL_LJLJ",
        "description": "This is test description of the product",
        "goldKarat": "",
        "goldWeight": null,
        "diamondCarat": null,
        "diamondQuality": "",
        "numberOfDiamonds": 0,
        "metalType": "",
        "jhumkaHeight": 0,
        "jhumkaWidth": 0,
        "costPrice": 45000,
        "sellingPrice": 40000,
        "makingCharges": 0,
        "discount": 0,
        "quantityAvailable": 1,
        "taxDetails": "",
        "availabilityStatus": "In Stock",
        "certificationDetails": "This is certificate details ",
        "warranty": "Warranty",
        "returnPolicy": "This is return policy of the code ",
        "collection": "Other",
        "gender": "Unisex",

    },
    {

        "productImages": [
            "https://firebasestorage.googleapis.com/v0/b/veliciae-5fd0e.appspot.com/o/undefined%2F%E0%A4%A8%E0%A4%AF%E0%A5%80%20%E0%A4%A6%E0%A4%BF%E0%A4%A8%20%E0%A4%95%E0%A5%80%20%E0%A4%A8%E0%A4%AF%E0%A5%80%20%E0%A4%B8%E0%A5%8B%E0%A4%9A%20!.png?alt=media&token=8880ce73-bc37-45f6-bfd8-0b8a631897bf"
        ],
        "productId": "c9b2be52-f1a6-4b85-97ed-4f505c67d701",
        "productName": "Frame",
        "category": "Frame",
        "subCategory": "Photo",
        "sku": "PHP_KL",
        "description": "This is frame of picture ",
        "goldKarat": "",
        "goldWeight": null,
        "diamondCarat": null,
        "diamondQuality": "",
        "numberOfDiamonds": 0,
        "metalType": "",
        "jhumkaHeight": 0,
        "jhumkaWidth": 0,
        "costPrice": 2000,
        "sellingPrice": 1900,
        "makingCharges": 0,
        "discount": 0,
        "quantityAvailable": 1000,
        "taxDetails": "",
        "availabilityStatus": "In Stock",
        "certificationDetails": "This is certificate details ",
        "warranty": "",
        "returnPolicy": "Return policy of the product",
        "collection": "New Arrivals",
        "gender": "Unisex",


    }
]

function getRandomProductFromSeedData() {
    const randomIndex = Math.floor(Math.random() * seedData.length);
    return seedData[randomIndex];
}

export async function GET(req){
    return Response.json({ message: "Seed API" });
}



export async function POST(req) {
    try {
        // for(const product of seedData){
        //     product.productId = generateRandomProductId()
        //     product.sellingPrice = generateRandomSellingPrice()
        //     product.costPrice = generateRandomCostPrice()
        //     product.sku = generateRandomSKUID()
        //     await createProduct(product)
        // }
        for(let i=0; i < 100; i++){
            const product = getRandomProductFromSeedData()
            product.productId = generateRandomProductId()
            product.sellingPrice = generateRandomSellingPrice()
            product.costPrice = generateRandomCostPrice()
            product.sku = generateRandomSKUID()
            await createProduct(product)
        }
        return NextResponse.json({ message: "Data seeded successfully" });
    } catch (e) {
        console.log(e);
    }
}