// Package data array
var data = [
    {
        name: 'live-server',
        description: 'Live server is a great snippet tool.',
        author: 'Ritwick Dey',
        url: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer',
        downloads: 1662209,
        price: 10.50,
        stars: 2543,
        selector: 'p1'
    },
    {
        name: 'python',
        description: 'Python includes this marvelous feature IntelliSense.',
        author: 'Microsoft',
        url: 'https://marketplace.visualstudio.com/items?itemName=ms-python.python',
        downloads: 4228040,
        stars: 4541,
        price: 6.75,
        selector: 'p2'
    },
    {
        name: 'gitLens',
        description: 'GitLens supercharges the Git capabilities built into Visual Studio Code.',
        author: 'Eric Amodio',
        url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
        downloads: 3984759,
        stars: 2847,
        price: 5.25,
        selector: 'p3'
    }
];

// Package constructor function
function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.price = data.price;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    };
}

// Returns today's date, formatted
var getTodaysDate = function () {
    var today = new Date();
    return today.toDateString();
};

// Write package info to page
function writePackageInfo(package) {
    // Get reference to DOM elements
    var selector = package.selector,
        nameEl = document.getElementById(selector + '-name'),
        descEl = document.getElementById(selector + '-description'),
        authEl = document.getElementById(selector + '-author'),
        urlEl = document.getElementById(selector + '-url'),
        downloadEl = document.getElementById(selector + '-downloads'),
        starsEl = document.getElementById(selector + '-stars'),
        priceEl = document.getElementById(selector + '-price');

    // Write package data to DOM element
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    urlEl.textContent = package.url;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
    priceEl.textContent = package.price;
}

// Initialize the script
function init() {
    // Loop through each data element,
    // construct a new Package object,
    // then write the package data to the page.
    for (var i = 0; i < data.length; i++) {
        var packageData = data[i];
        var package = new Package(packageData);

        writePackageInfo(package);
    }

    // If you can't get the for loop work, then you can write the packages one-by-one.
    // Here's an example (you just need to remove the /* */ comments)

    /*
    var emmet = new Package(data[0]);
    writePackageInfo(emmet);
    var beautify = new Package(data[1]);
    writePackageInfo(beautify);
  */

    // Write date
    //dateEl = getEl('date');
    //dateEl.textContent = getTodaysDate();
}

// Call the init function when the page loads the script
init();