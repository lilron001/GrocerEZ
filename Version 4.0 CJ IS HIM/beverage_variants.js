const beverageVariants = {
    pure: {
        title: "Pure Coconut Water",
        image: "Beverages_Images/pure_coconut.jpg",
        score: 88,
        scoreBase: "9.600",
        userBenchmark: {
            rating: "172%",
            rank: "(3<sup>rd</sup> of 74)",
            info: "Based on 98,300 user hydration and taste ratings. Product: Pure Coconut Water by TropicWell"
        },
        metrics: [
            { title: "Hydration Efficiency", change: "+40%", details: "Electrolytes +45%, Absorption +38%" },
            { title: "Taste Score", change: "+30%", details: "Freshness +35%, Smoothness +32%" },
            { title: "Nutritional Value", change: "+28%", details: "Potassium +60%, Magnesium +25%" },
            { title: "Value & Sentiment", change: "+34%", details: "User Rating +42%, Price +30%, Value +35%" },
            { title: "Environmental Impact", change: "-10%", details: "Sustainability +12%, Packaging -8%" },
        ]
    },
    withPulp: {
        title: "Coconut Water with Pulp",
        image: "Beverages_Images/coconut_pulp.jpg",
        score: 85,
        scoreBase: "9.300",
        userBenchmark: {
            rating: "165%",
            rank: "(5<sup>th</sup> of 74)",
            info: "Based on 85,000 user ratings. Product: Coconut Water with Pulp by TropicWell"
        },
        metrics: [
            { title: "Hydration Efficiency", change: "+38%", details: "Electrolytes +42%, Absorption +36%" },
            { title: "Taste Score", change: "+35%", details: "Freshness +38%, Texture +40%" },
            { title: "Nutritional Value", change: "+30%", details: "Potassium +58%, Fiber +28%" },
            { title: "Value & Sentiment", change: "+32%", details: "User Rating +39%, Price +28%, Value +30%" },
            { title: "Environmental Impact", change: "-8%", details: "Sustainability +10%, Packaging -6%" },
        ]
    },
    noSugar: {
        title: "No Sugar Added Coconut Water",
        image: "Beverages_Images/coconut_nosugar.jpg",
        score: 90,
        scoreBase: "9.800",
        userBenchmark: {
            rating: "180%",
            rank: "(2<sup>nd</sup> of 74)",
            info: "Based on 105,000 user ratings. Product: No Sugar Added Coconut Water by TropicWell"
        },
        metrics: [
            { title: "Hydration Efficiency", change: "+42%", details: "Electrolytes +47%, Absorption +40%" },
            { title: "Taste Score", change: "+28%", details: "Naturalness +35%, Smoothness +30%" },
            { title: "Nutritional Value", change: "+35%", details: "Potassium +62%, Sugar -100%" },
            { title: "Value & Sentiment", change: "+38%", details: "User Rating +44%, Value +37%" },
            { title: "Environmental Impact", change: "-12%", details: "Sustainability +14%, Packaging -10%" },
        ]
    },
    king: {
        title: "King Coconut Water",
        image: "Beverages_Images/king_coconut.jpg",
        score: 87,
        scoreBase: "9.500",
        userBenchmark: {
            rating: "170%",
            rank: "(4<sup>th</sup> of 74)",
            info: "Based on 92,700 user ratings. Product: King Coconut Water by IslandGold"
        },
        metrics: [
            { title: "Hydration Efficiency", change: "+43%", details: "Electrolytes +48%, Absorption +39%" },
            { title: "Taste Score", change: "+40%", details: "Sweetness +45%, Freshness +38%" },
            { title: "Nutritional Value", change: "+33%", details: "Potassium +59%, Magnesium +27%" },
            { title: "Value & Sentiment", change: "+36%", details: "User Rating +40%, Price +32%" },
            { title: "Environmental Impact", change: "-9%", details: "Sustainability +11%, Packaging -7%" },
        ]
    },
    organic: {
        title: "Organic Coconut Water",
        image: "Beverages_Images/organic_coconut.jpg",
        score: 92,
        scoreBase: "10.000",
        userBenchmark: {
            rating: "190%",
            rank: "(1<sup>st</sup> of 74)",
            info: "Based on 110,000 user ratings. Product: Organic Coconut Water by CocoPure"
        },
        metrics: [
            { title: "Hydration Efficiency", change: "+50%", details: "Electrolytes +55%, Absorption +50%" },
            { title: "Taste Score", change: "+45%", details: "Purity +50%, Freshness +40%" },
            { title: "Nutritional Value", change: "+40%", details: "Vitamins +45%, Potassium +65%" },
            { title: "Value & Sentiment", change: "+48%", details: "User Rating +53%, Value +45%" },
            { title: "Environmental Impact", change: "+5%", details: "Sustainability +20%, Carbon Footprint -10%" },
        ]
    },
    sparkling: {
        title: "Sparkling Coconut Water",
        image: "Beverages_Images/sparkling_coconut.jpg",
        score: 83,
        scoreBase: "9.100",
        userBenchmark: {
            rating: "160%",
            rank: "(6<sup>th</sup> of 74)",
            info: "Based on 78,000 user ratings. Product: Sparkling Coconut Water by BubblyTropics"
        },
        metrics: [
            { title: "Hydration Efficiency", change: "+30%", details: "Electrolytes +33%, Absorption +28%" },
            { title: "Taste Score", change: "+50%", details: "Fizz +60%, Freshness +40%" },
            { title: "Nutritional Value", change: "+20%", details: "Potassium +45%, Sugar +10%" },
            { title: "Value & Sentiment", change: "+34%", details: "User Rating +39%, Price +30%" },
            { title: "Environmental Impact", change: "-6%", details: "Sustainability +9%, Packaging -5%" },
        ]
    },
    hydration: {
        title: "Extra Hydration Coconut Water",
        image: "Beverages_Images/hydrate_coconut.jpg",
        score: 89,
        scoreBase: "9.700",
        userBenchmark: {
            rating: "175%",
            rank: "(3<sup>rd</sup> of 74)",
            info: "Based on 90,000 user ratings. Product: Extra Hydration Coconut Water by HydraCoco"
        },
        metrics: [
            { title: "Hydration Efficiency", change: "+60%", details: "Electrolytes +65%, Absorption +58%" },
            { title: "Taste Score", change: "+35%", details: "Smoothness +40%, Freshness +30%" },
            { title: "Nutritional Value", change: "+38%", details: "Potassium +67%, Magnesium +30%" },
            { title: "Value & Sentiment", change: "+42%", details: "User Rating +48%, Value +43%" },
            { title: "Environmental Impact", change: "-10%", details: "Sustainability +13%, Packaging -7%" },
        ]
    },
    pineapple: {
        title: "Coconut Pineapple Blend",
        image: "Beverages_Images/coconut_pineapple.jpg",
        score: 86,
        scoreBase: "9.400",
        userBenchmark: {
            rating: "168%",
            rank: "(5<sup>th</sup> of 74)",
            info: "Based on 88,000 user ratings. Product: Coconut Pineapple Blend by IslandSplash"
        },
        metrics: [
            { title: "Hydration Efficiency", change: "+36%", details: "Electrolytes +38%, Absorption +33%" },
            { title: "Taste Score", change: "+55%", details: "Sweetness +58%, Fruity Blend +52%" },
            { title: "Nutritional Value", change: "+25%", details: "Vitamin C +40%, Potassium +50%" },
            { title: "Value & Sentiment", change: "+38%", details: "User Rating +43%, Price +35%" },
            { title: "Environmental Impact", change: "-7%", details: "Sustainability +10%, Packaging -6%" },
        ]
    }
};

// Function to update coconut beverage information dynamically
function updateProductInfo(variant) {
    const product = beverageVariants[variant]; // Use beverageVariants instead of productData

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