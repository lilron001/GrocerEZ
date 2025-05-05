const chipsVariants = {
    classic: {
        title: "Classic Potato Chips",
        image: "Chips_Images/classic_chip.jpg",
        score: 84,
        scoreBase: "9.200",
        userBenchmark: {
            rating: "155%",
            rank: "(6<sup>th</sup> of 68)",
            info: "Based on 90,500 user ratings. Product: Classic Potato Chips by Lay's"
        },
        metrics: [
            { title: "Taste", change: "+32%", details: "Saltiness +35%, Crunch +30%" },
            { title: "Texture", change: "+28%", details: "Crispiness +33%, Smoothness +22%" },
            { title: "Satisfaction", change: "+30%", details: "Snack Appeal +29%, Portion +31%" },
            { title: "Value & Sentiment", change: "+25%", details: "User Rating +32%, Price +20%" },
            { title: "Health Impact", change: "-12%", details: "Fat Content -8%, Additives -5%" },
        ]
    },
    sourcream: {
        title: "Sour Cream & Onion Chips",
        image: "Chips_Images/sourcream_chip.jpg",
        score: 87,
        scoreBase: "9.400",
        userBenchmark: {
            rating: "168%",
            rank: "(4<sup>th</sup> of 68)",
            info: "Based on 94,200 user ratings. Product: Sour Cream & Onion Chips by Lay's"
        },
        metrics: [
            { title: "Taste", change: "+40%", details: "Creaminess +45%, Onion +38%" },
            { title: "Texture", change: "+33%", details: "Smooth Crunch +36%, Coating +30%" },
            { title: "Satisfaction", change: "+34%", details: "Flavor Depth +35%, Filling +32%" },
            { title: "Value & Sentiment", change: "+28%", details: "User Rating +34%, Price +22%" },
            { title: "Health Impact", change: "-14%", details: "Sodium -10%, Preservatives -6%" },
        ]
    },
    barbecue: {
        title: "Barbecue Flavored Chips",
        image: "Chips_Images/barbecue_chip.jpg",
        score: 89,
        scoreBase: "9.600",
        userBenchmark: {
            rating: "172%",
            rank: "(3<sup>rd</sup> of 68)",
            info: "Based on 97,100 user ratings. Product: Barbecue Chips by Lay's"
        },
        metrics: [
            { title: "Taste", change: "+45%", details: "Smokiness +48%, Spice +42%" },
            { title: "Texture", change: "+30%", details: "Crunch +33%, Grip +28%" },
            { title: "Satisfaction", change: "+38%", details: "Hearty Flavor +40%, Portion +36%" },
            { title: "Value & Sentiment", change: "+35%", details: "User Rating +41%, Price +29%" },
            { title: "Health Impact", change: "-11%", details: "Oil Level -9%, Sugars -5%" },
        ]
    },
    saltvinegar: {
        title: "Salt & Vinegar Chips",
        image: "Chips_Images/saltvinegar_chip.jpg",
        score: 82,
        scoreBase: "9.000",
        userBenchmark: {
            rating: "150%",
            rank: "(7<sup>th</sup> of 68)",
            info: "Based on 87,000 user ratings. Product: Salt & Vinegar Chips by Lay's"
        },
        metrics: [
            { title: "Taste", change: "+38%", details: "Tanginess +42%, Salt Level +35%" },
            { title: "Texture", change: "+25%", details: "Crunch +28%, Bite +23%" },
            { title: "Satisfaction", change: "+29%", details: "Zing Factor +30%, Mouthfeel +28%" },
            { title: "Value & Sentiment", change: "+22%", details: "User Rating +26%, Price +19%" },
            { title: "Health Impact", change: "-13%", details: "Acidity -10%, Oil -5%" },
        ]
    },
    wavy: {
        title: "Wavy Potato Chips",
        image: "Chips_Images/wavy_chip.jpg",
        score: 86,
        scoreBase: "9.350",
        userBenchmark: {
            rating: "162%",
            rank: "(5<sup>th</sup> of 68)",
            info: "Based on 92,300 user ratings. Product: Wavy Chips by Lay's"
        },
        metrics: [
            { title: "Taste", change: "+34%", details: "Salt +36%, Subtle Flavor +30%" },
            { title: "Texture", change: "+40%", details: "Ridge Crunch +44%, Thickness +35%" },
            { title: "Satisfaction", change: "+33%", details: "Sturdiness +32%, Munch Factor +34%" },
            { title: "Value & Sentiment", change: "+30%", details: "User Rating +36%, Price +27%" },
            { title: "Health Impact", change: "-10%", details: "Oil -7%, Additives -4%" },
        ]
    },
    baked: {
        title: "Baked Potato Chips",
        image: "Chips_Images/baked_chip.jpg",
        score: 91,
        scoreBase: "9.800",
        userBenchmark: {
            rating: "180%",
            rank: "(1<sup>st</sup> of 68)",
            info: "Based on 102,000 user ratings. Product: Baked Chips by Lay's"
        },
        metrics: [
            { title: "Taste", change: "+28%", details: "Natural +30%, Light Salt +26%" },
            { title: "Texture", change: "+36%", details: "Airiness +38%, Crispness +34%" },
            { title: "Satisfaction", change: "+35%", details: "Healthy Feel +36%, Crunch +34%" },
            { title: "Value & Sentiment", change: "+40%", details: "User Rating +45%, Health Value +38%" },
            { title: "Health Impact", change: "+15%", details: "Less Fat +20%, Baked Method +18%" },
        ]
    },
    kettle: {
        title: "Kettle Cooked Chips",
        image: "Chips_Images/kettle_chip.jpg",
        score: 88,
        scoreBase: "9.700",
        userBenchmark: {
            rating: "174%",
            rank: "(2<sup>nd</sup> of 68)",
            info: "Based on 99,000 user ratings. Product: Kettle Cooked Chips by Lay's"
        },
        metrics: [
            { title: "Taste", change: "+42%", details: "Bold +45%, Artisan +40%" },
            { title: "Texture", change: "+44%", details: "Thick Crunch +47%, Density +41%" },
            { title: "Satisfaction", change: "+39%", details: "Hand-Cooked Feel +40%, Filling +38%" },
            { title: "Value & Sentiment", change: "+36%", details: "User Rating +42%, Quality +34%" },
            { title: "Health Impact", change: "-9%", details: "Oil Content -8%, Preservatives -4%" },
        ]
    },
    nosalt: {
        title: "No Salt Added Chips",
        image: "Chips_Images/nosalt_chip.jpg",
        score: 80,
        scoreBase: "8.800",
        userBenchmark: {
            rating: "142%",
            rank: "(8<sup>th</sup> of 68)",
            info: "Based on 83,500 user ratings. Product: No Salt Chips by Lay's"
        },
        metrics: [
            { title: "Taste", change: "+15%", details: "Natural Potato +20%, Mild Flavor +10%" },
            { title: "Texture", change: "+20%", details: "Light Crunch +23%, Smoothness +17%" },
            { title: "Satisfaction", change: "+22%", details: "Guilt-Free +25%, Simple Snack +20%" },
            { title: "Value & Sentiment", change: "+18%", details: "User Rating +22%, Price +15%" },
            { title: "Health Impact", change: "+25%", details: "No Sodium +30%, Less Processed +20%" },
        ]
    }
};

function updateProductInfo(variant) {
    const product = chipsVariants[variant];

    document.getElementById('productTitle').innerText = product.title;
    document.getElementById('productImage').src = product.image;
    document.getElementById('scoreValue').innerText = product.score;
    document.getElementById('scoreBase').innerText = product.scoreBase;
    document.querySelector('.user-benchmark-info').innerHTML = product.userBenchmark.info;

    const metricsSection = document.getElementById('metricsSection');
    metricsSection.innerHTML = '';

    product.metrics.forEach(metric => {
        const metricItem = document.createElement('div');
        metricItem.classList.add('metric-item');

        const metricTitle = document.createElement('div');
        metricTitle.classList.add('metric-title');
        metricTitle.innerHTML = `
            <span>${metric.title}</span>
            <span class="${metric.change.startsWith('+') ? 'metric-positive' : 'metric-negative'}">${metric.change}</span>
        `;

        const metricDetails = document.createElement('div');
        metricDetails.classList.add('metric-details');
        metricDetails.innerText = metric.details;

        metricItem.appendChild(metricTitle);
        metricItem.appendChild(metricDetails);
        metricsSection.appendChild(metricItem);
    });
}
