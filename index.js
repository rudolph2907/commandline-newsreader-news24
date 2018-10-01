const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.news24.com/')
    .then((response) => {
        if(response.status === 200) {			
			const html = response.data;
            const $ = cheerio.load(html); 			
            let headlineList = [];
            $('.news_item h4.bold').each(function(i, elem) {
                console.log($(this).parent().find('span.datestamp').text() + ' - ' + $(this).parent().find('#spanCategoryName').text() + ' - ' + $(this).find('a').text())
            });
			
		}
    });