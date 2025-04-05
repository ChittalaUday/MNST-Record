function getMobileByVendor(manufacture:string):string[]{
    let mobileList:string[];
    if(manufacture==="Samsung"){
       mobileList=["Galaxy M11 - M51 (2020) ",

        "Galaxy M12 - M62 (2021) ",
        
         "Galaxy M13 - M73 (2022) ",
        
        "Galaxy M14 - M54 (2023) ",
        
        "Galaxy M15 - M55 (2024) "]
       return mobileList;

    }
    else if(manufacture==="iPhone"){
       mobileList=["iPhone SE (2016) - 1st Gen ",

        "iPhone SE (2020) - 2nd Gen ",
        
        "iPhone SE (2022) - 3rd Gen ",
        
        "iPhone SE 4 expected in 2025 "]
       return mobileList;
    }
    else{
       mobileList=["2021	Nokia C10, C20, G10, G20, X10, X20 ",
        "2022	Nokia C21, G21, X21 ",
         "2023	Nokia C32, G22, XR21 (Rugged 5G model) ",
        "2024	Nokia G42 5G, C22 (Latest budget Android)"]
       return mobileList;
    }

}
console.log("mobiles List:"+getMobileByVendor("iPhone"));
console.log("\nDeveloped by: 22MH1A0539");