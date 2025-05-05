const meat_variants = {
    boneless: {
        title: "Boneless Skinless Chicken Breast",
        image: "Meats_Images/boneless_meat.jpg",
        score: 89,
        scoreBase: "9.100",
        userBenchmark: {
            rating: "185%",
            rank: "(2<sup>nd</sup> of 60)",
            info: "Based on 85,240 user nutritional ratings. Product: Boneless Skinless Chicken Breast"
        },
        metrics: [
            { title: "Protein Efficiency", change: "+60%", details: "Protein per calorie +60% vs meat category average" },
            { title: "Nutrition Score", change: "+72%", details: "Lean Protein +80%, Low Fat +75%, Vitamins +55%" },
            { title: "Taste Score", change: "+35%", details: "Tenderness +40%, Juiciness +30%, Flavor +35%" },
            { title: "Value & Sentiment", change: "+50%", details: "User Rating +58%, Price +45%, Convenience +47%" },
            { title: "Environmental Impact", change: "-10%", details: "Lower emissions and waste vs red meat average" },
        ]
    },
    bonein: {
        title: "Bone-in Chicken Thigh",
        image: "Meats_Images/bonein_meat.jpg",
        score: 84,
        scoreBase: "8.800",
        userBenchmark: {
            rating: "170%",
            rank: "(5<sup>th</sup> of 60)",
            info: "Based on 73,800 user nutritional ratings. Product: Bone-in Chicken Thigh"
        },
        metrics: [
            { title: "Protein Efficiency", change: "+45%", details: "Protein per calorie +45% vs average" },
            { title: "Nutrition Score", change: "+60%", details: "Iron +55%, Zinc +60%, B Vitamins +65%" },
            { title: "Taste Score", change: "+50%", details: "Flavor +55%, Moisture +45%, Texture +50%" },
            { title: "Value & Sentiment", change: "+40%", details: "User Rating +48%, Affordability +42%" },
            { title: "Environmental Impact", change: "-8%", details: "Sustainable compared to red meats" },
        ]
    },
    ground: {
        title: "Ground Chicken",
        image: "Meats_Images/ground_meat.jpg",
        score: 81,
        scoreBase: "8.500",
        userBenchmark: {
            rating: "160%",
            rank: "(8<sup>th</sup> of 60)",
            info: "Based on 68,950 user nutritional ratings. Product: Ground Chicken"
        },
        metrics: [
            { title: "Protein Efficiency", change: "+40%", details: "High protein for mixed dishes" },
            { title: "Nutrition Score", change: "+55%", details: "B Vitamins +58%, Fat Control +50%" },
            { title: "Taste Score", change: "+38%", details: "Flavor +40%, Versatility +35%" },
            { title: "Value & Sentiment", change: "+42%", details: "User Rating +50%, Availability +36%" },
            { title: "Environmental Impact", change: "-9%", details: "Lower carbon footprint vs beef" },
        ]
    },
    thinsliced: {
        title: "Thin-sliced Chicken Breast",
        image: "Meats_Images/thinsliced_meat.jpg",
        score: 86,
        scoreBase: "8.900",
        userBenchmark: {
            rating: "175%",
            rank: "(3<sup>rd</sup> of 60)",
            info: "Based on 74,320 user nutritional ratings. Product: Thin-sliced Chicken Breast"
        },
        metrics: [
            { title: "Protein Efficiency", change: "+55%", details: "Lean cut, easy to portion" },
            { title: "Nutrition Score", change: "+66%", details: "Low Fat +70%, Protein +60%" },
            { title: "Taste Score", change: "+40%", details: "Quick cook +38%, Freshness +42%" },
            { title: "Value & Sentiment", change: "+48%", details: "User Rating +53%, Price +43%" },
            { title: "Environmental Impact", change: "-7%", details: "Efficient packaging and sourcing" },
        ]
    },
    diced: {
        title: "Diced Chicken Breast",
        image: "Meats_Images/diced__meat.jpg",
        score: 83,
        scoreBase: "8.700",
        userBenchmark: {
            rating: "168%",
            rank: "(6<sup>th</sup> of 60)",
            info: "Based on 66,420 user nutritional ratings. Product: Diced Chicken Breast"
        },
        metrics: [
            { title: "Protein Efficiency", change: "+52%", details: "Easy to add in meals" },
            { title: "Nutrition Score", change: "+58%", details: "Lean +65%, Versatility +55%" },
            { title: "Taste Score", change: "+42%", details: "Uniform size +45%, Texture +38%" },
            { title: "Value & Sentiment", change: "+44%", details: "User Rating +50%, Usefulness +38%" },
            { title: "Environmental Impact", change: "-6%", details: "Less waste packaging" },
        ]
    },
    organic: {
        title: "Organic Chicken Breast",
        image: "Meats_Images/organic_meat.jpg",
        score: 92,
        scoreBase: "9.500",
        userBenchmark: {
            rating: "195%",
            rank: "(1<sup>st</sup> of 60)",
            info: "Based on 91,600 user nutritional ratings. Product: Organic Chicken Breast"
        },
        metrics: [
            { title: "Protein Efficiency", change: "+65%", details: "Organic lean protein" },
            { title: "Nutrition Score", change: "+75%", details: "No antibiotics, High nutrients" },
            { title: "Taste Score", change: "+55%", details: "Natural flavor +60%, Tenderness +50%" },
            { title: "Value & Sentiment", change: "+65%", details: "User Rating +70%, Brand Trust +60%" },
            { title: "Environmental Impact", change: "+12%", details: "Pasture-raised, ethical sourcing" },
        ]
    },
    familypack: {
        title: "Family Pack Chicken Thighs",
        image: "Meats_Images/family_meat.jpg",
        score: 79,
        scoreBase: "8.300",
        userBenchmark: {
            rating: "150%",
            rank: "(10<sup>th</sup> of 60)",
            info: "Based on 54,880 user nutritional ratings. Product: Family Pack Chicken Thighs"
        },
        metrics: [
            { title: "Protein Efficiency", change: "+35%", details: "Bulk value +30%" },
            { title: "Nutrition Score", change: "+48%", details: "Balanced nutrition, Affordable cut" },
            { title: "Taste Score", change: "+34%", details: "Flavor +38%, Texture +30%" },
            { title: "Value & Sentiment", change: "+60%", details: "User Rating +65%, Bulk Price +70%" },
            { title: "Environmental Impact", change: "-5%", details: "Less packaging per kg" },
        ]
    },
    marinated: {
        title: "Marinated Chicken Breast",
        image: "Meats_Images/marinated_meat.jpg",
        score: 87,
        scoreBase: "9.000",
        userBenchmark: {
            rating: "178%",
            rank: "(4<sup>th</sup> of 60)",
            info: "Based on 70,320 user nutritional ratings. Product: Marinated Chicken Breast"
        },
        metrics: [
            { title: "Protein Efficiency", change: "+58%", details: "Ready-to-cook protein source" },
            { title: "Nutrition Score", change: "+64%", details: "Balanced seasoning, No MSG" },
            { title: "Taste Score", change: "+65%", details: "Flavor +70%, Moisture +60%" },
            { title: "Value & Sentiment", change: "+55%", details: "User Rating +60%, Time-saving +50%" },
            { title: "Environmental Impact", change: "-6%", details: "Eco-packaging options" },
        ]
    }
};

// Function to update the product info when a variant is selected
function updateProductInfo(variant) {
    const variantData = meat_variants[variant]; // Fixed typo here

    // Update product title
    document.getElementById("productTitle").textContent = variantData.title;

    // Update product image
    document.getElementById("productImage").src = variantData.image;

    // Update score value and base
    document.getElementById("scoreValue").textContent = variantData.score;
    document.getElementById("scoreBase").textContent = variantData.scoreBase;

    // Update benchmark rating and rank
    document.getElementById("benchmarkRating").textContent = `Average RATING: ${variantData.userBenchmark.rating}`;
    document.getElementById("benchmarkRank").innerHTML = `(${variantData.userBenchmark.rank})`;

    // Update metrics
    const metricsSection = document.getElementById("metricsSection");
    metricsSection.innerHTML = "";  // Clear previous metrics

    variantData.metrics.forEach(metric => {
        const metricItem = document.createElement("div");
        metricItem.className = "metric-item";

        const metricTitle = document.createElement("div");
        metricTitle.className = "metric-title";

        const metricChange = document.createElement("span");
        metricChange.className = metric.change.startsWith('+') ? "metric-positive" : "metric-negative";
        metricChange.textContent = metric.change;

        const metricDetails = document.createElement("div");
        metricDetails.className = "metric-details";
        metricDetails.textContent = metric.details;

        metricTitle.textContent = metric.title;
        metricTitle.appendChild(metricChange);
        metricItem.appendChild(metricTitle);
        metricItem.appendChild(metricDetails);

        metricsSection.appendChild(metricItem);
    });
}