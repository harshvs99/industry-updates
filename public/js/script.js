// News API
// Replace with your NewsAPI key
const API_KEY = '7f134a5e9d8b4972b79736bc20bfc7a1';
const NEWS_QUERY_KEY = "Steel Trade"
const NEWS_KEYWORD = 'steel';
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=${NEWS_QUERY_KEY}&apiKey=${API_KEY}&sortBy=publishedAt&keyword=${NEWS_KEYWORD}&length=5`;

fetch(NEWS_API_URL)
.then(response => response.json())
.then(data => {
  const newsFeed = document.querySelector('.news-feed');
  data.articles.forEach(article => {
    const newsItem = document.createElement('div');
    newsItem.className = 'news-item';
    newsItem.innerHTML = `
      <a href="${article.url}" target="_blank">
        <h3>${article.title}</h3>
        <p>${article.description}</p>
      </a>
    `;
    newsFeed.appendChild(newsItem);
  });
})
.catch(error => console.error('Error fetching news:', error));

// fetch('/api/news')
// .then(response => response.json())
// .then(data => {
//     const newsFeed = document.querySelector('.news-feed'); // Select the news container
//     newsFeed.innerHTML = ''; // Clear any existing content

//     // Loop through the news articles and render them
//     data.articles.forEach(article => {
//       const newsItem = document.createElement('div');
//       newsItem.className = 'news-item';
//       newsItem.innerHTML = `
//         <a href="${article.url}" target="_blank">
//           <h3>${article.title}</h3>
//           <p>${article.description}</p>
//           <small>Source: ${article.source.name}</small>
//         </a>
//       `;
//       newsFeed.appendChild(newsItem); // Add the news item to the container
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching news:', error);
//     const newsFeed = document.querySelector('.news-feed');
//     newsFeed.innerHTML = '<p>Failed to load news. Please try again later.</p>';
//   });

// Steel Price Chart
const steelPriceChart = new Chart(document.getElementById('steelPriceChart'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Steel Price (USD/ton)',
        data: [800, 810, 820, 830, 840, 850],
        borderColor: '#3498db',
        fill: false,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    },
  });
  
  // Production Chart
  const productionChart = new Chart(document.getElementById('productionChart'), {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Steel Production (Million Tons)',
        data: [450, 470, 460, 480],
        backgroundColor: '#2ecc71',
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    },
  });

 // Replace with your Trading Economics API key
const KPI_API_KEY = 'YOUR_TRADING_ECONOMICS_KEY';
const KPI_API_URL = `https://api.tradingeconomics.com/markets/commodity/steel?apiKey=${KPI_API_KEY}`;

fetch(KPI_API_URL)
  .then(response => response.json())
  .then(data => {
    const labels = data.map(item => item.date);
    const prices = data.map(item => item.price);

    // Update the steel price chart
    const steelPriceChart = new Chart(document.getElementById('steelPriceChart'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Steel Price (USD/ton)',
          data: prices,
          borderColor: '#3498db',
          fill: false,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  })
  .catch(error => console.error('Error fetching KPI data:', error));