function getMobileByManufacturer(manufacturer: string = 'Samsung', id?: number): string[] { let mobileList: string[];
    if (id) {
    if (id === 101) {
    mobileList = ['Moto G Play, 4th Gen', 'Moto Z Play with Style Mod']; return mobileList;
    }
    }
    if (manufacturer === 'Samsung') {
    mobileList = [' Samsung Galaxy S6 Edge', ' Samsung Galaxy Note 7', ' Samsung Galaxy J7 SM-J700F'];
    return mobileList;
    } else if (manufacturer === 'Apple') {
    mobileList = [' Apple iPhone 5s', ' Apple iPhone 6s', ' Apple iPhone 7']; return mobileList;
    } else {
    mobileList = [' Nokia 105', ' Nokia 230 Dual Sim']; return mobileList;
    }
    }
    console.log('The available mobile list : ' + getMobileByManufacturer('Apple')); console.log('The available mobile list : ' + getMobileByManufacturer(undefined, 101));
    console.log("\nDeveloped by :22MH1A0539");
    