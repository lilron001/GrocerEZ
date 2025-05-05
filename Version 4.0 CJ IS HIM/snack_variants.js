const snack_variants = {
    classic: {
        title: "Superfood Trail Mix - Classic Blend",
        image: "Snack_Images/plain_snack.jpg", // replace with actual image path
        score: 87,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+79%",
                details: "Protein content +65%, Healthy fats +89%, Fiber +83%, Antioxidants +79%"
            },
            {
                title: "Energy Sustenance",
                change: "+71%",
                details: "Low glycemic index +85%, Energy curve +76%, Satiety +67%, Digestion -9%"
            },
            {
                title: "Taste & Texture",
                change: "+62%",
                details: "Flavor variety +73%, Crunch factor +58%, Natural sweetness +64%, Mouthfeel +53%"
            },
            {
                title: "Value & Availability",
                change: "-18%",
                details: "User Rating +65%, Market Share +28%, Price -47%, Distribution -24%"
            },
            {
                title: "Ingredient Quality",
                change: "+81%",
                details: "Organic ingredients +88%, No preservatives +95%, Non-GMO +90%, Locally sourced +52%"
            }
        ],
        userBenchmark: {
            info: "86,227 user taste and nutrition ratings"
        }
    },
    tropical: {
        title: "Superfood Trail Mix - Tropical Mix",
        image: "Snack_Images/tropical_snack.jpg", // replace with actual image path
        score: 92,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+83%",
                details: "Protein content +72%, Healthy fats +92%, Fiber +79%, Antioxidants +85%"
            },
            {
                title: "Energy Sustenance",
                change: "+77%",
                details: "Low glycemic index +88%, Energy curve +82%, Satiety +71%, Digestion -5%"
            },
            {
                title: "Taste & Texture",
                change: "+70%",
                details: "Flavor variety +80%, Crunch factor +65%, Natural sweetness +74%, Mouthfeel +67%"
            },
            {
                title: "Value & Availability",
                change: "-14%",
                details: "User Rating +70%, Market Share +30%, Price -38%, Distribution -15%"
            },
            {
                title: "Ingredient Quality",
                change: "+85%",
                details: "Organic ingredients +90%, No preservatives +98%, Non-GMO +94%, Locally sourced +60%"
            }
        ],
        userBenchmark: {
            info: "85,500 user taste and nutrition ratings"
        }
    },
    energy: {
        title: "Superfood Trail Mix - Energy Boost",
        image: "Snack_Images/energy_snack.jpg", // replace with actual image path
        score: 88,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+78%",
                details: "Protein content +68%, Healthy fats +85%, Fiber +80%, Antioxidants +75%"
            },
            {
                title: "Energy Sustenance",
                change: "+82%",
                details: "Low glycemic index +90%, Energy curve +85%, Satiety +80%, Digestion -7%"
            },
            {
                title: "Taste & Texture",
                change: "+65%",
                details: "Flavor variety +75%, Crunch factor +60%, Natural sweetness +70%, Mouthfeel +68%"
            },
            {
                title: "Value & Availability",
                change: "-12%",
                details: "User Rating +68%, Market Share +25%, Price -42%, Distribution -20%"
            },
            {
                title: "Ingredient Quality",
                change: "+80%",
                details: "Organic ingredients +87%, No preservatives +95%, Non-GMO +91%, Locally sourced +55%"
            }
        ],
        userBenchmark: {
            info: "80,000 user taste and nutrition ratings"
        }
    },
    protein: {
        title: "Superfood Trail Mix - Protein Plus",
        image: "Snack_Images/protein_snack.jpg", // replace with actual image path
        score: 90,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+85%",
                details: "Protein content +92%, Healthy fats +78%, Fiber +80%, Antioxidants +82%"
            },
            {
                title: "Energy Sustenance",
                change: "+79%",
                details: "Low glycemic index +85%, Energy curve +80%, Satiety +77%, Digestion -5%"
            },
            {
                title: "Taste & Texture",
                change: "+70%",
                details: "Flavor variety +78%, Crunch factor +72%, Natural sweetness +68%, Mouthfeel +69%"
            },
            {
                title: "Value & Availability",
                change: "-10%",
                details: "User Rating +80%, Market Share +35%, Price -35%, Distribution -18%"
            },
            {
                title: "Ingredient Quality",
                change: "+88%",
                details: "Organic ingredients +95%, No preservatives +99%, Non-GMO +97%, Locally sourced +65%"
            }
        ],
        userBenchmark: {
            info: "75,000 user taste and nutrition ratings"
        }
    },
    lowsugar: {
        title: "Superfood Trail Mix - Low Sugar",
        image: "Snack_Images/lowsugar_snack.jpg", // replace with actual image path
        score: 85,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+75%",
                details: "Protein content +62%, Healthy fats +80%, Fiber +85%, Antioxidants +70%"
            },
            {
                title: "Energy Sustenance",
                change: "+69%",
                details: "Low glycemic index +90%, Energy curve +75%, Satiety +70%, Digestion -6%"
            },
            {
                title: "Taste & Texture",
                change: "+64%",
                details: "Flavor variety +70%, Crunch factor +63%, Natural sweetness +60%, Mouthfeel +64%"
            },
            {
                title: "Value & Availability",
                change: "-16%",
                details: "User Rating +63%, Market Share +27%, Price -40%, Distribution -22%"
            },
            {
                title: "Ingredient Quality",
                change: "+79%",
                details: "Organic ingredients +84%, No preservatives +95%, Non-GMO +89%, Locally sourced +50%"
            }
        ],
        userBenchmark: {
            info: "82,000 user taste and nutrition ratings"
        }
    },
    omega: {
        title: "Superfood Trail Mix - Omega Rich",
        image: "Snack_Images/omega_snack.jpg", // replace with actual image path
        score: 91,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+81%",
                details: "Protein content +80%, Healthy fats +90%, Fiber +85%, Antioxidants +85%"
            },
            {
                title: "Energy Sustenance",
                change: "+84%",
                details: "Low glycemic index +92%, Energy curve +87%, Satiety +82%, Digestion -8%"
            },
            {
                title: "Taste & Texture",
                change: "+73%",
                details: "Flavor variety +80%, Crunch factor +74%, Natural sweetness +78%, Mouthfeel +70%"
            },
            {
                title: "Value & Availability",
                change: "-13%",
                details: "User Rating +85%, Market Share +32%, Price -30%, Distribution -20%"
            },
            {
                title: "Ingredient Quality",
                change: "+85%",
                details: "Organic ingredients +90%, No preservatives +96%, Non-GMO +94%, Locally sourced +60%"
            }
        ],
        userBenchmark: {
            info: "79,500 user taste and nutrition ratings"
        }
    },
    antioxidant: {
        title: "Superfood Trail Mix - Antioxidant Blend",
        image: "Snack_Images/anti_snack.jpg", // replace with actual image path
        score: 89,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+82%",
                details: "Protein content +77%, Healthy fats +83%, Fiber +88%, Antioxidants +92%"
            },
            {
                title: "Energy Sustenance",
                change: "+74%",
                details: "Low glycemic index +84%, Energy curve +79%, Satiety +72%, Digestion -3%"
            },
            {
                title: "Taste & Texture",
                change: "+67%",
                details: "Flavor variety +78%, Crunch factor +71%, Natural sweetness +75%, Mouthfeel +71%"
            },
            {
                title: "Value & Availability",
                change: "-10%",
                details: "User Rating +72%, Market Share +28%, Price -41%, Distribution -19%"
            },
            {
                title: "Ingredient Quality",
                change: "+88%",
                details: "Organic ingredients +91%, No preservatives +94%, Non-GMO +95%, Locally sourced +61%"
            }
        ],
        userBenchmark: {
            info: "78,000 user taste and nutrition ratings"
        }
    },
    keto: {
        title: "Superfood Trail Mix - Keto Mix",
        image: "Snack_Images/keto_snack.jpg", // replace with actual image path
        score: 94,
        scoreBase: 10.000,
        metrics: [
            {
                title: "Nutritional Balance",
                change: "+88%",
                details: "Protein content +93%, Healthy fats +91%, Fiber +87%, Antioxidants +80%"
            },
            {
                title: "Energy Sustenance",
                change: "+80%",
                details: "Low glycemic index +95%, Energy curve +89%, Satiety +85%, Digestion -4%"
            },
            {
                title: "Taste & Texture",
                change: "+75%",
                details: "Flavor variety +82%, Crunch factor +78%, Natural sweetness +85%, Mouthfeel +79%"
            },
            {
                title: "Value & Availability",
                change: "-12%",
                details: "User Rating +83%, Market Share +33%, Price -33%, Distribution -21%"
            },
            {
                title: "Ingredient Quality",
                change: "+90%",
                details: "Organic ingredients +95%, No preservatives +98%, Non-GMO +97%, Locally sourced +68%"
            }
        ],
        userBenchmark: {
            info: "82,500 user taste and nutrition ratings"
        }
    }
};

function updateProductInfo(variant) {
    const selectedVariant = snack_variants[variant];

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
