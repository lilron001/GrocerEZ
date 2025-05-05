// BANANAS!lol
const productData = {
    cavendish: {
        title: "Premium Cavendish Banana",
        image: "Fruits_Images/Dole.Cav.jpg",
        score: 92,
        scoreBase: "10.000",
        userBenchmark: {
            rating: "187%",
            rank: "(3<sup>rd</sup> of 98)",
            info: "Based on 143,256 user nutritional ratings. Product: Premium Cavendish Banana by Dole"
        },
        metrics: [
            { title: "Calorie Efficiency", change: "+45%", details: "Nutrients per calorie +45% vs category average" },
            { title: "Nutrition Score", change: "+68%", details: "Vitamins +72%, Minerals +65%, Potassium +89%, Fiber +46%" },
            { title: "Taste Score", change: "+38%", details: "Sweetness +45%, Texture +36%, Freshness +42%, Quality +29%" },
            { title: "Value & Sentiment", change: "+52%", details: "User Rating +63%, Market Share +41%, Price +39%, Value +65%" },
            { title: "Environmental Impact", change: "-12%", details: "Carbon Footprint -25%, Packaging -18%, Ethical Sourcing +6%, Sustainability +7%" },
        ]
    },
    lacatan: {
        title: "Premium Lacatan Banana",
        image: "Fruits_Images/Lacatan.jpg",
        score: 85,
        scoreBase: "9.500",
        userBenchmark: {
            rating: "175%",
            rank: "(5<sup>th</sup> of 98)",
            info: "Based on 120,300 user nutritional ratings. Product: Premium Lacatan Banana by Dole"
        },
        metrics: [
            { title: "Calorie Efficiency", change: "+35%", details: "Nutrients per calorie +35% vs category average" },
            { title: "Nutrition Score", change: "+60%", details: "Vitamins +65%, Minerals +60%, Potassium +85%, Fiber +40%" },
            { title: "Taste Score", change: "+30%", details: "Sweetness +40%, Texture +30%, Freshness +35%, Quality +28%" },
            { title: "Value & Sentiment", change: "+45%", details: "User Rating +55%, Market Share +38%, Price +30%, Value +60%" },
            { title: "Environmental Impact", change: "-10%", details: "Carbon Footprint -20%, Packaging -15%, Ethical Sourcing +8%, Sustainability +10%" },
        ]
    },
    saba: {
        title: "Premium Saba Banana",
        image: "Fruits_Images/Saba.jpg",
        score: 80,
        scoreBase: "9.000",
        userBenchmark: {
            rating: "160%",
            rank: "(7<sup>th</sup> of 98)",
            info: "Based on 100,500 user nutritional ratings. Product: Premium Saba Banana by Dole"
        },
        metrics: [
            { title: "Calorie Efficiency", change: "+25%", details: "Nutrients per calorie +25% vs category average" },
            { title: "Nutrition Score", change: "+50%", details: "Vitamins +60%, Minerals +55%, Potassium +75%, Fiber +30%" },
            { title: "Taste Score", change: "+20%", details: "Sweetness +35%, Texture +30%, Freshness +25%, Quality +40%" },
            { title: "Value & Sentiment", change: "+30%", details: "User Rating +45%, Market Share +33%, Price +35%, Value +50%" },
            { title: "Environmental Impact", change: "-5%", details: "Carbon Footprint -10%, Packaging -8%, Ethical Sourcing +4%, Sustainability +6%" },
        ]
    },
    latundan: {
        title: "Premium Latundan Banana",
        image: "Fruits_Images/Latundan.jpg",
        score: 88,
        scoreBase: "9.200",
        userBenchmark: {
            rating: "178%",
            rank: "(4<sup>th</sup> of 98)",
            info: "Based on 110,700 user nutritional ratings. Product: Premium Latundan Banana by Dole"
        },
        metrics: [
            { title: "Calorie Efficiency", change: "+40%", details: "Nutrients per calorie +40% vs category average" },
            { title: "Nutrition Score", change: "+65%", details: "Vitamins +70%, Minerals +65%, Potassium +85%, Fiber +40%" },
            { title: "Taste Score", change: "+50%", details: "Sweetness +60%, Texture +45%, Freshness +50%, Quality +35%" },
            { title: "Value & Sentiment", change: "+55%", details: "User Rating +58%, Market Share +45%, Price +40%, Value +60%" },
            { title: "Environmental Impact", change: "-8%", details: "Carbon Footprint -12%, Packaging -10%, Ethical Sourcing +5%, Sustainability +8%" },
        ]
    },
    red: {
        title: "Premium Red Banana",
        image: "Fruits_Images/Red.jpg",
        score: 83,
        scoreBase: "8.800",
        userBenchmark: {
            rating: "165%",
            rank: "(8<sup>th</sup> of 98)",
            info: "Based on 95,200 user nutritional ratings. Product: Premium Red Banana by Dole"
        },
        metrics: [
            { title: "Calorie Efficiency", change: "+30%", details: "Nutrients per calorie +30% vs category average" },
            { title: "Nutrition Score", change: "+55%", details: "Vitamins +60%, Minerals +50%, Potassium +80%, Fiber +35%" },
            { title: "Taste Score", change: "+45%", details: "Sweetness +50%, Texture +40%, Freshness +30%, Quality +32%" },
            { title: "Value & Sentiment", change: "+42%", details: "User Rating +48%, Market Share +38%, Price +36%, Value +50%" },
            { title: "Environmental Impact", change: "-7%", details: "Carbon Footprint -15%, Packaging -10%, Ethical Sourcing +7%, Sustainability +5%" },
        ]
    },
    organic: {
        title: "Premium Organic Banana",
        image: "Fruits_Images/Organic.jpg",
        score: 90,
        scoreBase: "9.700",
        userBenchmark: {
            rating: "190%",
            rank: "(2<sup>nd</sup> of 98)",
            info: "Based on 140,500 user nutritional ratings. Product: Premium Organic Banana by Dole"
        },
        metrics: [
            { title: "Calorie Efficiency", change: "+50%", details: "Nutrients per calorie +50% vs category average" },
            { title: "Nutrition Score", change: "+70%", details: "Vitamins +75%, Minerals +70%, Potassium +90%, Fiber +50%" },
            { title: "Taste Score", change: "+60%", details: "Sweetness +55%, Texture +50%, Freshness +60%, Quality +40%" },
            { title: "Value & Sentiment", change: "+60%", details: "User Rating +65%, Market Share +50%, Price +45%, Value +70%" },
            { title: "Environmental Impact", change: "+10%", details: "Carbon Footprint -10%, Packaging -5%, Ethical Sourcing +15%, Sustainability +20%" },
        ]
    },
    fairtrade: {
        title: "Premium Fair Trade Banana",
        image: "Fruits_Images/FairTrade.jpg",
        score: 85,
        scoreBase: "9.400",
        userBenchmark: {
            rating: "180%",
            rank: "(6<sup>th</sup> of 98)",
            info: "Based on 125,800 user nutritional ratings. Product: Premium Fair Trade Banana by Dole"
        },
        metrics: [
            { title: "Calorie Efficiency", change: "+38%", details: "Nutrients per calorie +38% vs category average" },
            { title: "Nutrition Score", change: "+62%", details: "Vitamins +67%, Minerals +62%, Potassium +83%, Fiber +41%" },
            { title: "Taste Score", change: "+42%", details: "Sweetness +48%, Texture +40%, Freshness +37%, Quality +34%" },
            { title: "Value & Sentiment", change: "+50%", details: "User Rating +60%, Market Share +42%, Price +40%, Value +55%" },
            { title: "Environmental Impact", change: "-6%", details: "Carbon Footprint -12%, Packaging -9%, Ethical Sourcing +10%, Sustainability +12%" },
        ]
    },
    babybanana: {
        title: "Premium Baby Banana",
        image: "Fruits_Images/Baby.jpg",
        score: 80,
        scoreBase: "8.700",
        userBenchmark: {
            rating: "160%",
            rank: "(9<sup>th</sup> of 98)",
            info: "Based on 98,500 user nutritional ratings. Product: Premium Baby Banana by Dole"
        },
        metrics: [
            { title: "Calorie Efficiency", change: "+22%", details: "Nutrients per calorie +22% vs category average" },
            { title: "Nutrition Score", change: "+50%", details: "Vitamins +60%, Minerals +50%, Potassium +70%, Fiber +30%" },
            { title: "Taste Score", change: "+28%", details: "Sweetness +35%, Texture +32%, Freshness +28%, Quality +40%" },
            { title: "Value & Sentiment", change: "+35%", details: "User Rating +42%, Market Share +33%, Price +38%, Value +45%" },
            { title: "Environmental Impact", change: "-4%", details: "Carbon Footprint -8%, Packaging -6%, Ethical Sourcing +4%, Sustainability +5%" },
        ]
    }
};

// Function to update product information dynamically based on variant selection
function updateProductInfo(variant) {
    const product = productData[variant]; // Get the product data for the selected variant

    // Update the product title
    document.getElementById('productTitle').innerText = product.title;

    // Update the product image
    document.getElementById('productImage').src = product.image;

    // Update the score value
    document.getElementById('scoreValue').innerText = product.score;

    // Update the score base
    document.getElementById('scoreBase').innerText = product.scoreBase;

    // Update the product benchmark info
    document.querySelector('.user-benchmark-info').innerHTML = product.userBenchmark.info;

    // Update the metrics section
    const metricsSection = document.getElementById('metricsSection');
    metricsSection.innerHTML = ''; // Clear existing metrics

    // Loop through the metrics of the selected variant and add them to the page
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

