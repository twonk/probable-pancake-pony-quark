// for navigator language
// var lang = window.navigator.language;
// you can change the language
var lang = 'en';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'q':'Northampton,UK',
    'units':'metric',
    'lang':lang,
    'APPID':'1be8ab4c9928a9bde9dc5132d1e23a9a'
};

var feed = 'http://feeds.bbci.co.uk/news/uk/rss.xml';

//var feed = 'http://feeds.nos.nl/nosjournaal?format=rss';
//var feed = 'http://www.nu.nl/feeds/rss/achterklap.rss';
//var feed = 'http://www.nu.nl/feeds/rss/opmerkelijk.rss';
//var feed = 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';

// compliments:
var morning = ['','.'
//            'Good morning, handsome!',
//            'Enjoy your day!',
//            'How was your sleep?'
        ];
        
var afternoon = ['','.'
//            'Hello, beauty!',
//            'You look sexy!',
//            'Looking good today!'
        ];
       
var evening = ['','.'
//            'Wow, you look hot!',
//            'You look nice!',
//            'Hi, sexy!'
        ];
