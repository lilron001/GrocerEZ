const vegetable_variants = {
    organic: {
        title: "Organic Kale",
        image: "Vegetable_Images/organic_vege.jpg", // replace with actual image path
        score: 92,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+85%",
                details: "Vitamin C +90%, Calcium +88%, Fiber +85%, Antioxidants +83%"
            },
            {
                title: "Taste & Texture",
                change: "+77%",
                details: "Flavor depth +80%, Crunchiness +75%, Earthy taste +78%, Tenderness +80%"
            },
            {
                title: "Value & Availability",
                change: "+15%",
                details: "User Rating +82%, Market Share +5%, Price +10%, Distribution +20%"
            },
            {
                title: "Ingredient Quality",
                change: "+94%",
                details: "Non-GMO +100%, No pesticides +100%, Locally sourced +90%"
            }
        ],
        userBenchmark: {
            info: "55,000 user taste and nutrition ratings"
        }
    },
    conventional: {
        title: "Conventional Kale",
        image: "Vegetable_Images/conventional_vege.jpg", // replace with actual image path
        score: 85,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+80%",
                details: "Vitamin C +75%, Calcium +70%, Fiber +80%, Antioxidants +78%"
            },
            {
                title: "Taste & Texture",
                change: "+65%",
                details: "Flavor depth +60%, Crunchiness +70%, Earthy taste +65%, Tenderness +60%"
            },
            {
                title: "Value & Availability",
                change: "+20%",
                details: "User Rating +75%, Market Share +10%, Price +15%, Distribution +25%"
            },
            {
                title: "Ingredient Quality",
                change: "+80%",
                details: "Non-GMO +95%, No pesticides +85%, Locally sourced +70%"
            }
        ],
        userBenchmark: {
            info: "50,000 user taste and nutrition ratings"
        }
    },
    baby: {
        title: "Baby Kale",
        image: "Vegetable_Images/baby_vege.jpg", // replace with actual image path
        score: 88,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+84%",
                details: "Vitamin C +80%, Calcium +75%, Fiber +90%, Antioxidants +80%"
            },
            {
                title: "Taste & Texture",
                change: "+79%",
                details: "Flavor depth +85%, Crunchiness +70%, Earthy taste +65%, Tenderness +90%"
            },
            {
                title: "Value & Availability",
                change: "+12%",
                details: "User Rating +70%, Market Share +8%, Price +8%, Distribution +18%"
            },
            {
                title: "Ingredient Quality",
                change: "+92%",
                details: "Non-GMO +99%, No pesticides +95%, Locally sourced +85%"
            }
        ],
        userBenchmark: {
            info: "60,000 user taste and nutrition ratings"
        }
    },
    lacinato: {
        title: "Lacinato Kale",
        image: "Vegetable_Images/lacinato_vege.jpg", // replace with actual image path
        score: 90,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+86%",
                details: "Vitamin C +92%, Calcium +85%, Fiber +88%, Antioxidants +90%"
            },
            {
                title: "Taste & Texture",
                change: "+82%",
                details: "Flavor depth +85%, Crunchiness +78%, Earthy taste +80%, Tenderness +75%"
            },
            {
                title: "Value & Availability",
                change: "+18%",
                details: "User Rating +80%, Market Share +10%, Price +15%, Distribution +20%"
            },
            {
                title: "Ingredient Quality",
                change: "+95%",
                details: "Non-GMO +100%, No pesticides +100%, Locally sourced +90%"
            }
        ],
        userBenchmark: {
            info: "45,000 user taste and nutrition ratings"
        }
    },
    russian: {
        title: "Red Russian Kale",
        image: "Vegetable_Images/redrussian_vege.jpg", // replace with actual image path
        score: 87,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+79%",
                details: "Vitamin C +82%, Calcium +78%, Fiber +75%, Antioxidants +80%"
            },
            {
                title: "Taste & Texture",
                change: "+80%",
                details: "Flavor depth +85%, Crunchiness +78%, Earthy taste +70%, Tenderness +75%"
            },
            {
                title: "Value & Availability",
                change: "+10%",
                details: "User Rating +70%, Market Share +5%, Price +12%, Distribution +15%"
            },
            {
                title: "Ingredient Quality",
                change: "+89%",
                details: "Non-GMO +98%, No pesticides +90%, Locally sourced +80%"
            }
        ],
        userBenchmark: {
            info: "40,000 user taste and nutrition ratings"
        }
    },
    curly: {
        title: "Curly Kale",
        image: "Vegetable_Images/kurly_vege.jpg", // replace with actual image path
        score: 83,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+70%",
                details: "Vitamin C +70%, Calcium +68%, Fiber +75%, Antioxidants +72%"
            },
            {
                title: "Taste & Texture",
                change: "+65%",
                details: "Flavor depth +60%, Crunchiness +70%, Earthy taste +65%, Tenderness +50%"
            },
            {
                title: "Value & Availability",
                change: "+14%",
                details: "User Rating +65%, Market Share +12%, Price +20%, Distribution +18%"
            },
            {
                title: "Ingredient Quality",
                change: "+75%",
                details: "Non-GMO +90%, No pesticides +85%, Locally sourced +75%"
            }
        ],
        userBenchmark: {
            info: "35,000 user taste and nutrition ratings"
        }
    },
    prewashed: {
        title: "Pre-Washed Kale",
        image: "Vegetable_Images/prewashed_vege.jpg", // replace with actual image path
        score: 91,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+87%",
                details: "Vitamin C +92%, Calcium +85%, Fiber +90%, Antioxidants +85%"
            },
            {
                title: "Taste & Texture",
                change: "+78%",
                details: "Flavor depth +80%, Crunchiness +70%, Earthy taste +75%, Tenderness +85%"
            },
            {
                title: "Value & Availability",
                change: "+16%",
                details: "User Rating +80%, Market Share +8%, Price +10%, Distribution +12%"
            },
            {
                title: "Ingredient Quality",
                change: "+93%",
                details: "Non-GMO +100%, No pesticides +100%, Locally sourced +90%"
            }
        ],
        userBenchmark: {
            info: "55,000 user taste and nutrition ratings"
        }
    },
    hydroponic: {
        title: "Hydroponic Kale",
        image: "Vegetable_Images/hydrophonic_vege.jpg", // replace with actual image path
        score: 89,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+82%",
                details: "Vitamin C +85%, Calcium +90%, Fiber +80%, Antioxidants +80%"
            },
            {
                title: "Taste & Texture",
                change: "+80%",
                details: "Flavor depth +88%, Crunchiness +80%, Earthy taste +85%, Tenderness +80%"
            },
            {
                title: "Value & Availability",
                change: "+18%",
                details: "User Rating +85%, Market Share +12%, Price +5%, Distribution +25%"
            },
            {
                title: "Ingredient Quality",
                change: "+92%",
                details: "Non-GMO +100%, No pesticides +98%, Locally sourced +85%"
            }
        ],
        userBenchmark: {
            info: "60,000 user taste and nutrition ratings"
        }
    }
};

function updateProductInfo(variant) {
    const selectedVariant = vegetable_variants[variant];

    // Update title
    document.getElementById("productTitle").textContent = selectedVariant.title;

    // Update image
    document.getElementById("productImage").src = selectedVariant.image;
    document.getElementById("productImage").alt = selectedVariant.title;

    // Update score value
    document.getElementById("scoreValue").textContent = selectedVariant.score;

    // Update base score
    document.getElementById("scoreBase").textContent = selectedVariant.scoreBase;

    // Update metrics
    const metricsSection = document.getElementById("metricsSection");
    metricsSection.innerHTML = "";
    selectedVariant.metrics.forEach(metric => {
        const metricItem = document.createElement("div");
        metricItem.className = "metric-item";

        const metricTitle = document.createElement("div");
        metricTitle.className = "metric-title";
        const metricChange = document.createElement("span");
        metricChange.className = metric.change.includes("+") ? "metric-positive" : "metric-negative";
        metricChange.textContent = metric.change;
        metricTitle.appendChild(document.createTextNode(metric.title));
        metricTitle.appendChild(metricChange);
        metricItem.appendChild(metricTitle);

        const metricDetails = document.createElement("div");
        metricDetails.className = "metric-details";
        metricDetails.textContent = metric.details;
        metricItem.appendChild(metricDetails);

        metricsSection.appendChild(metricItem);
    });

    // Update user benchmark info
    document.querySelector(".user-benchmark-info").textContent = `Based on ${selectedVariant.userBenchmark.info}. Product: ${selectedVariant.title}`;
}
