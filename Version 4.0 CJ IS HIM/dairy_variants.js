const dairyVariants = {
    plain: {
        name: "Plain Yogurt",
        image: "Dairy_Images/plain_dairy.jpg",
        score: 91,
        base: 9.870,
        benchmark: "142%",
        benchmarkRank: "12<sup>th</sup> of 120",
        userRatings: "67,310",
        stats: {
            taste: "+12%",
            texture: "+18%",
            satisfaction: "+20%",
            health: "+35%",
            value: "+14%"
        },
        metricDetails: {
            taste: "Neutral +10%, Tanginess +15%",
            texture: "Creaminess +20%, Smoothness +16%",
            satisfaction: "Satiety +18%, Portion +22%",
            health: "Probiotics +32%, Low Sugar +38%",
            value: "Price +12%, Ingredients +16%"
        }
    },
    lowfat: {
        name: "Low Fat Yogurt",
        image: "Dairy_Images/lowfat_dairy.jpg",
        score: 88,
        base: 9.120,
        benchmark: "134%",
        benchmarkRank: "23<sup>rd</sup> of 120",
        userRatings: "52,880",
        stats: {
            taste: "+9%",
            texture: "+14%",
            satisfaction: "+16%",
            health: "+40%",
            value: "+18%"
        },
        metricDetails: {
            taste: "Light Flavor +8%, Mildness +10%",
            texture: "Less Creamy -5%, Still Smooth +15%",
            satisfaction: "Light Yet Filling +14%",
            health: "Lower Fat +41%, Probiotics +38%",
            value: "Good for Dieters +19%"
        }
    },
    nonfat: {
        name: "Non-Fat Yogurt",
        image: "Dairy_Images/nonfat_dairy.jpg",
        score: 85,
        base: 8.870,
        benchmark: "128%",
        benchmarkRank: "31<sup>st</sup> of 120",
        userRatings: "49,210",
        stats: {
            taste: "-3%",
            texture: "-6%",
            satisfaction: "+11%",
            health: "+44%",
            value: "+20%"
        },
        metricDetails: {
            taste: "Thinner Flavor -4%",
            texture: "Watery -6%",
            satisfaction: "Still Satisfying +10%",
            health: "Zero Fat +45%, Probiotics +38%",
            value: "Diet Friendly +21%"
        }
    },
    honey: {
        name: "Honey Yogurt",
        image: "Dairy_Images/honey_dairy.jpg",
        score: 90,
        base: 9.510,
        benchmark: "147%",
        benchmarkRank: "8<sup>th</sup> of 120",
        userRatings: "61,345",
        stats: {
            taste: "+27%",
            texture: "+21%",
            satisfaction: "+29%",
            health: "+20%",
            value: "+17%"
        },
        metricDetails: {
            taste: "Sweetness +30%, Balance +24%",
            texture: "Silky +22%",
            satisfaction: "Craving Satiety +28%",
            health: "Natural Sweetener +19%",
            value: "High Enjoyment +17%"
        }
    },
    mango: {
        name: "Mango Yogurt",
        image: "Dairy_Images/mango_dairy.jpg",
        score: 87,
        base: 9.010,
        benchmark: "132%",
        benchmarkRank: "25<sup>th</sup> of 120",
        userRatings: "56,890",
        stats: {
            taste: "+25%",
            texture: "+19%",
            satisfaction: "+24%",
            health: "+18%",
            value: "+14%"
        },
        metricDetails: {
            taste: "Fruitiness +28%",
            texture: "Smooth +18%",
            satisfaction: "Tropical Appeal +24%",
            health: "Added Fruit Sugar -5%, Probiotics +23%",
            value: "Popular Flavor +15%"
        }
    },
    strawberry: {
        name: "Strawberry Yogurt",
        image: "Dairy_Images/strawberry_dairy.jpg",
        score: 89,
        base: 9.300,
        benchmark: "139%",
        benchmarkRank: "17<sup>th</sup> of 120",
        userRatings: "59,440",
        stats: {
            taste: "+26%",
            texture: "+20%",
            satisfaction: "+26%",
            health: "+21%",
            value: "+15%"
        },
        metricDetails: {
            taste: "Berry Flavor +27%",
            texture: "Creamy +20%",
            satisfaction: "Crowd Favorite +25%",
            health: "Fruity but Balanced +20%",
            value: "Affordable +16%"
        }
    },
    blueberry: {
        name: "Blueberry Yogurt",
        image: "Dairy_Images/blueberry_dairy.jpg",
        score: 88,
        base: 9.200,
        benchmark: "135%",
        benchmarkRank: "21<sup>st</sup> of 120",
        userRatings: "57,110",
        stats: {
            taste: "+24%",
            texture: "+18%",
            satisfaction: "+23%",
            health: "+19%",
            value: "+14%"
        },
        metricDetails: {
            taste: "Real Blueberry Taste +25%",
            texture: "Consistent +18%",
            satisfaction: "Refreshing +23%",
            health: "Antioxidants +18%",
            value: "Good Choice +14%"
        }
    },
    coconut: {
        name: "Coconut Yogurt",
        image: "Dairy_Images/coconut_dairy.jpg",
        score: 86,
        base: 8.980,
        benchmark: "130%",
        benchmarkRank: "28<sup>th</sup> of 120",
        userRatings: "48,300",
        stats: {
            taste: "+22%",
            texture: "+16%",
            satisfaction: "+20%",
            health: "+24%",
            value: "+13%"
        },
        metricDetails: {
            taste: "Coconut Flavor +22%",
            texture: "Smooth and Rich +16%",
            satisfaction: "Niche Appeal +19%",
            health: "Dairy-Free Option +24%",
            value: "Premium +13%"
        }
    }
};

function updateProductInfo(variant) {
    const product = dairyVariants[variant];

    document.getElementById('productTitle').innerText = product.name;
    document.getElementById('productImage').src = product.image;
    document.getElementById('scoreValue').innerText = product.score;
    document.getElementById('scoreBase').innerText = product.base;

    // Update benchmark info
    document.querySelector('.benchmark-section').innerHTML = `
        <span> Average RATING: ${product.benchmark}</span>
        <span class="benchmark-rank">(${product.benchmarkRank})</span>
        <span>ℹ️</span>
    `;

    document.querySelector('.user-benchmark-info').innerText =
        `Based on ${product.userRatings} user nutritional ratings. Product: ${product.name}`;

    const metricsSection = document.getElementById('metricsSection');
    metricsSection.innerHTML = '';

    // Reconstruct metric items
    const statMap = {
        "Taste Score": { change: product.stats.taste, details: product.metricDetails.taste },
        "Texture Score": { change: product.stats.texture, details: product.metricDetails.texture },
        "Satisfaction": { change: product.stats.satisfaction, details: product.metricDetails.satisfaction },
        "Health Score": { change: product.stats.health, details: product.metricDetails.health },
        "Value & Sentiment": { change: product.stats.value, details: product.metricDetails.value }
    };

    for (const [title, data] of Object.entries(statMap)) {
        const metricItem = document.createElement('div');
        metricItem.classList.add('metric-item');

        const metricTitle = document.createElement('div');
        metricTitle.classList.add('metric-title');
        metricTitle.innerHTML = `
            <span>${title}</span>
            <span class="${data.change.startsWith('+') ? 'metric-positive' : 'metric-negative'}">${data.change}</span>
        `;

        const metricDetails = document.createElement('div');
        metricDetails.classList.add('metric-details');
        metricDetails.innerText = data.details;

        metricItem.appendChild(metricTitle);
        metricItem.appendChild(metricDetails);
        metricsSection.appendChild(metricItem);
    }
}
