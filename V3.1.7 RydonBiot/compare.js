// Product comparison functionality
document.addEventListener('DOMContentLoaded', function () {
    initComparisonPage();
});

function initComparisonPage() {
    const product1Select = document.getElementById('product1');
    const product2Select = document.getElementById('product2');
    const compareButton = document.getElementById('compare-button');
    const comparisonResults = document.getElementById('comparison-results');
    const nutritionalComparison = document.getElementById('nutritional-comparison');
    const categoryTabs = document.querySelectorAll('.category-tab');

    // Skip if we're not on the comparison page
    if (!product1Select || !product2Select || !compareButton) return;
    
    // Event listeners
    compareButton.addEventListener('click', compareProducts);
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Filter products based on selected category
            const category = tab.id.replace('category-', '');
            filterProductsByCategory(category);
        });
    });
}

// Product data (simplified)
const productData = {
    // Fruits
    apple: {
        name: "Apple (Red Delicious)",
        category: "Fruits",
        score: 85,
        price: "₱25.00",
        release: "Year-round",
        image: "/api/placeholder/200/150",
        flavors: ["Sweet", "Crisp", "Natural"],
        ratings: 12456,
        benchmarks: {
            good: "210% (12g/25g) × 100g",
            poor: "50% (5g/100g)"
        },
        nutrition: {
            calories: 52,
            protein: 0.3,
            carbs: 14,
            fats: 0.2,
            vitamins: 8,
            overall: 76
        }
    },
    banana: {
        name: "Banana (Cavendish)",
        category: "Fruits",
        score: 88,
        price: "₱15.00",
        release: "Year-round",
        image: "/api/placeholder/200/150",
        flavors: ["Sweet", "Soft", "Natural"],
        ratings: 10234,
        benchmarks: {
            good: "180% (14g/30g) × 100g",
            poor: "45% (6g/120g)"
        },
        nutrition: {
            calories: 89,
            protein: 1.1,
            carbs: 23,
            fats: 0.3,
            vitamins: 9,
            overall: 82
        }
    },
    orange: {
        name: "Orange (Navel)",
        category: "Fruits",
        score: 90,
        price: "₱30.00",
        release: "Seasonal",
        image: "/api/placeholder/200/150",
        flavors: ["Sweet", "Tangy", "Juicy"],
        ratings: 9854,
        benchmarks: {
            good: "220% (15g/28g) × 100g",
            poor: "40% (4g/95g)"
        },
        nutrition: {
            calories: 43,
            protein: 0.9,
            carbs: 11,
            fats: 0.1,
            vitamins: 12,
            overall: 88
        }
    },
    
    // Chips
    lays: {
        name: "Lay's Classic Potato Chips",
        category: "Chips",
        score: 92,
        price: "₱109.50",
        release: "Q4 2022",
        image: "/api/placeholder/200/150",
        flavors: ["Classic", "Sour Cream", "Barbecue", "Salt & Vinegar", "Wavy"],
        ratings: 6836,
        benchmarks: {
            good: "402% (15g/40g) × 45g",
            poor: "305% (46g/210g) × 45g"
        },
        nutrition: {
            calories: 160,
            protein: 2,
            carbs: 15,
            fats: 10,
            vitamins: 1,
            overall: 30
        }
    },
    pringles: {
        name: "Pringles Original",
        category: "Chips",
        score: 104,
        price: "₱125.00",
        release: "Q2 2023",
        image: "/api/placeholder/200/150",
        flavors: ["Original", "Sour Cream", "BBQ", "Salt & Vinegar", "Pizza"],
        ratings: 9950,
        benchmarks: {
            good: "127% (145g/410g) × 100g",
            poor: "114% (145g/410g)"
        },
        nutrition: {
            calories: 150,
            protein: 1,
            carbs: 15,
            fats: 9,
            vitamins: 0,
            overall: 25
        }
    },
    doritos: {
        name: "Doritos Nacho Cheese",
        category: "Chips",
        score: 98, 
        price: "₱115.00",
        release: "Q1 2023",
        image: "/api/placeholder/200/150",
        flavors: ["Nacho Cheese", "Cool Ranch", "Spicy Sweet Chili", "Flamin' Hot"],
        ratings: 8540,
        benchmarks: {
            good: "315% (20g/45g) × 50g",
            poor: "210% (35g/180g) × 50g"
        },
        nutrition: {
            calories: 140,
            protein: 2,
            carbs: 18,
            fats: 7,
            vitamins: 1,
            overall: 32
        }
    },
    
    // Vegetables
    broccoli: {
        name: "Broccoli (Fresh)",
        category: "Vegetables",
        score: 95,
        price: "₱45.00",
        release: "Year-round",
        image: "/api/placeholder/200/150",
        flavors: ["Natural", "Earthy", "Fresh"],
        ratings: 7624,
        benchmarks: {
            good: "310% (25g/50g) × 100g",
            poor: "25% (3g/120g)"
        },
        nutrition: {
            calories: 34,
            protein: 2.8,
            carbs: 7,
            fats: 0.4,
            vitamins: 15,
            overall: 92
        }
    },
    carrot: {
        name: "Carrots (Organic)",
        category: "Vegetables",
        score: 92,
        price: "₱35.00",
        release: "Year-round",
        image: "/api/placeholder/200/150",
        flavors: ["Sweet", "Crunchy", "Fresh"],
        ratings: 8123,
        benchmarks: {
            good: "280% (20g/45g) × 100g",
            poor: "30% (4g/130g)"
        },
        nutrition: {
            calories: 41,
            protein: 0.9,
            carbs: 10,
            fats: 0.2,
            vitamins: 14,
            overall: 89
        }
    },
    spinach: {
        name: "Spinach (Baby)",
        category: "Vegetables",
        score: 94,
        price: "₱60.00",
        release: "Year-round",
        image: "/api/placeholder/200/150",
        flavors: ["Fresh", "Mild", "Earthy"],
        ratings: 6954,
        benchmarks: {
            good: "350% (30g/60g) × 100g",
            poor: "20% (2g/110g)"
        },
        nutrition: {
            calories: 23,
            protein: 2.9,
            carbs: 3.6,
            fats: 0.4,
            vitamins: 18,
            overall: 95
        }
    },
    // Meats
    chicken: {
        name: "Chicken Breast (Skinless)",
        category: "Meats",
        score: 92,
        price: "₱280.00/500g",
        release: "Year-round",
        image: "/api/placeholder/200/150",
        flavors: ["Natural", "Lean", "Tender"],
        ratings: 92456,
        benchmarks: {
            good: "182% (92g/100g) × 100g",
            poor: "102% (5g/110g)"
        },
        nutrition: {
            calories: 165,
            protein: 31,
            carbs: 0,
            fats: 3.6,
            vitamins: 10,
            overall: 88
        }
    },
    // Beverages
    coconutWater: {
        name: "Coconut Water",
        category: "Beverages",
        score: 89,
        price: "₱65.00/L",
        release: "Year-round",
        image: "/api/placeholder/200/150",
        flavors: ["Natural", "Sweet", "Refreshing"],
        ratings: 114883,
        benchmarks: {
            good: "183% (76g/100g) × 100g",
            poor: "42% (15g/120g)"
        },
        nutrition: {
            calories: 46,
            protein: 1.7,
            carbs: 9,
            fats: 0.5,
            vitamins: 12,
            overall: 78
        }
    },
    
 juice1: {
    name: "Orange Juice",
    category: "Beverages",
    score: 92,
    price: "₱50.00",
    release: "Year-round",
    image: "/api/placeholder/200/150",
    flavors: ["Citrusy", "Mild", "Earthy"],
    ratings: 6954,
    benchmarks: {
        good: "350% (30g/60g) × 100g",
        poor: "20% (2g/110g)"
    },
    nutrition: {
        calories: 23,
        protein: 2.9,
        carbs: 3.6,
        fats: 0.4,
        vitamins: 18,
        overall: 95
    }
},

 water1: {
    name: "Mineral Water",
    category: "Beverages",
    score: 98,
    price: "₱20.00",
    release: "Year-round",
    image: "/api/placeholder/200/150",
    flavors: ["Neutral", "Crisp", "Clean"],
    ratings: 8421,
    benchmarks: {
        good: "0g sugar / 0g fat",
        poor: "N/A"
    },
    nutrition: {
        calories: 0,
        protein: 0,
        carbs: 0,
        fats: 0,
        vitamins: 0,
        overall: 100
    }
},

// Dairy
 milk1: {
    name: "Milk",
    category: "Dairy",
    score: 89,
    price: "₱60.00",
    release: "Year-round",
    image: "/api/placeholder/200/150",
    flavors: ["Creamy", "Mild", "Sweet"],
    ratings: 6230,
    benchmarks: {
        good: "30% calcium per 100ml",
        poor: "5% saturated fat"
    },
    nutrition: {
        calories: 42,
        protein: 3.4,
        carbs: 5,
        fats: 1,
        vitamins: 10,
        overall: 88
    }
},

// Snacks
 cookie1 : {
    name: "Chocolate Chip Cookies",
    category: "Snacks",
    score: 81,
    price: "₱45.00",
    release: "Year-round",
    image: "/api/placeholder/200/150",
    flavors: ["Sweet", "Buttery", "Chocolatey"],
    ratings: 5321,
    benchmarks: {
        good: "5% fiber per 2 cookies",
        poor: "20g sugar"
    },
    nutrition: {
        calories: 160,
        protein: 2,
        carbs: 22,
        fats: 8,
        vitamins: 2,
        overall: 78
    }
},

 nuts1: {
    name: "Mixed Nuts (Unsalted)",
    category: "Snacks",
    score: 90,
    price: "₱95.00",
    release: "Year-round",
    image: "/api/placeholder/200/150",
    flavors: ["Nutty", "Earthy", "Toasty"],
    ratings: 4812,
    benchmarks: {
        good: "15g healthy fats, 6g protein per 28g",
        poor: "180 calories"
    },
    nutrition: {
        calories: 180,
        protein: 6,
        carbs: 6,
        fats: 15,
        vitamins: 5,
        overall: 88
    }
},

 granola1: {
    name: "Granola Bar (Honey)",
    category: "Snacks",
    score: 86,
    price: "₱38.00",
    release: "Year-round",
    image: "/api/placeholder/200/150",
    flavors: ["Sweet", "Crunchy", "Nutty"],
    ratings: 4503,
    benchmarks: {
        good: "3g fiber, 5g protein per bar",
        poor: "8g sugar"
    },
    nutrition: {
        calories: 140,
        protein: 5,
        carbs: 19,
        fats: 5,
        vitamins: 4,
        overall: 85
    }
},

 cheddar1: {
    name: "Cheddar",
    category: "Dairy",
    score: 85,
    price: "₱95.00",
    release: "Year-round",
    image: "/api/placeholder/200/150",
    flavors: ["Sharp", "Savory", "Tangy"],
    ratings: 4376,
    benchmarks: {
        good: "25% protein per 100g",
        poor: "33% saturated fat"
    },
    nutrition: {
        calories: 113,
        protein: 7,
        carbs: 0.4,
        fats: 9,
        vitamins: 6,
        overall: 83
    }
},

 yogurt1: {
    name: "Greek Yogurt",
    category: "Dairy",
    score: 91,
    price: "₱80.00",
    release: "Year-round",
    image: "/api/placeholder/200/150",
    flavors: ["Tart", "Creamy", "Rich"],
    ratings: 5182,
    benchmarks: {
        good: "10g protein per 100g",
        poor: "4g sugar"
    },
    nutrition: {
        calories: 59,
        protein: 10,
        carbs: 3.6,
        fats: 0.4,
        vitamins: 8,
        overall: 90
    }
},

// Meats
 beef1: {
    name: "Ground Beef",
    category: "Meats",
    score: 84,
    price: "₱150.00",
    release: "Year-round",
    image: "/api/placeholder/200/150",
    flavors: ["Savory", "Umami", "Juicy"],
    ratings: 3975,
    benchmarks: {
        good: "26g protein per 100g",
        poor: "20g fat"
    },
    nutrition: {
        calories: 250,
        protein: 26,
        carbs: 0,
        fats: 20,
        vitamins: 5,
        overall: 80
    }
},

 salmon1: {
    name: "Salmon Fillet",
    category: "Meats",
    score: 93,
    price: "₱220.00",
    release: "Year-round",
    image: "/api/placeholder/200/150",
    flavors: ["Buttery", "Savory", "Rich"],
    ratings: 4893,
    benchmarks: {
        good: "25g protein, 2g omega-3 per 100g",
        poor: "8g fat"
    },
    nutrition: {
        calories: 208,
        protein: 25,
        carbs: 0,
        fats: 13,
        vitamins: 9,
        overall: 92
    }
},
    
    
};

function filterProductsByCategory(category) {
    const options1 = document.querySelectorAll('#product1 optgroup option');
    const options2 = document.querySelectorAll('#product2 optgroup option');
    
    if (!options1.length || !options2.length) return;
    
    if (category === 'all') {
        // Show all options
        options1.forEach(option => option.style.display = '');
        options2.forEach(option => option.style.display = '');
        return;
    }
    
    // Filter options based on category
    options1.forEach(option => {
        const optgroup = option.parentNode;
        const optgroupLabel = optgroup.label.toLowerCase();
        
        if (category === optgroupLabel.toLowerCase()) {
            option.style.display = '';
        } else {
            option.style.display = 'none';
        }
    });
    
    options2.forEach(option => {
        const optgroup = option.parentNode;
        const optgroupLabel = optgroup.label.toLowerCase();
        
        if (category === optgroupLabel.toLowerCase()) {
            option.style.display = '';
        } else {
            option.style.display = 'none';
        }
    });
}

function compareProducts() {
    const product1Select = document.getElementById('product1');
    const product2Select = document.getElementById('product2');
    const comparisonResults = document.getElementById('comparison-results');
    const nutritionalComparison = document.getElementById('nutritional-comparison');
    
    if (!product1Select || !product2Select || !comparisonResults || !nutritionalComparison) return;
    
    const product1Id = product1Select.value;
    const product2Id = product2Select.value;
    
    if (!product1Id || !product2Id) {
        alert('Please select two products to compare');
        return;
    }
    
    const product1 = productData[product1Id];
    const product2 = productData[product2Id];
    
    // Update product 1 card
    updateProductCard('product1-card', product1);
    
    // Update product 2 card
    updateProductCard('product2-card', product2);
    
    // Update nutritional comparison
    updateNutritionalComparison(product1, product2);
    
    // Show comparison results
    comparisonResults.style.display = 'flex';
    nutritionalComparison.style.display = 'block';
    
    // Calculate and display differences
    calculateDifferences(product1, product2);
}

function updateProductCard(cardId, product) {
    const card = document.getElementById(cardId);
    if (!card) return;
    
    // Update score
    const scoreElement = card.querySelector('.product-score');
    if (scoreElement) scoreElement.textContent = product.score;
    
    // Update image
    const imageElement = card.querySelector('.product-image img');
    if (imageElement) {
        imageElement.src = product.image;
        imageElement.alt = product.name;
    }
    
    // Update price
    const priceElement = card.querySelector('.product-price');
    if (priceElement) priceElement.textContent = product.price;
    
    // Update release date
    const releaseElement = card.querySelector('.product-release');
    if (releaseElement) releaseElement.textContent = `Release date: ${product.release}`;
    
    // Update flavors
    const flavorsContainer = card.querySelector('.flavors');
    if (flavorsContainer) {
        flavorsContainer.innerHTML = '';
        
        product.flavors.forEach(flavor => {
            const flavorTag = document.createElement('div');
            flavorTag.className = 'flavor-tag';
            flavorTag.textContent = flavor;
            flavorsContainer.appendChild(flavorTag);
        });
    }
    
    // Update benchmarks
    const benchmarksContainer = card.querySelector('.benchmarks');
    if (benchmarksContainer) {
        benchmarksContainer.innerHTML = `
            <div>User Ratings: <strong>${product.ratings}</strong></div>
            <div class="good-bench">Great bench: ${product.benchmarks.good}</div>
            <div class="poor-bench">Poor bench: ${product.benchmarks.poor}</div>
        `;
    }
}

function updateNutritionalComparison(product1, product2) {
    const nutritionalComparisonDiv = document.getElementById('nutritional-comparison');
    if (!nutritionalComparisonDiv) return;
    
    const nutritionMetrics = [
        { name: 'Calories', prop: 'calories' },
        { name: 'Protein', prop: 'protein' },
        { name: 'Carbohydrates', prop: 'carbs' },
        { name: 'Fats', prop: 'fats' },
        { name: 'Vitamins', prop: 'vitamins' },
        { name: 'Overall Nutritional Value', prop: 'overall' }
    ];
    
    nutritionalComparisonDiv.innerHTML = '<h3>Nutritional Comparison</h3>';
    
    nutritionMetrics.forEach(metric => {
        const diff = calculatePercentDifference(product1.nutrition[metric.prop], product2.nutrition[metric.prop]);
        const width = calculateBarWidth(diff);
        
        const metricDiv = document.createElement('div');
        metricDiv.className = 'nutrition-metric';
        
        const headerDiv = document.createElement('div');
        headerDiv.className = 'nutrition-header';
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'metric-name';
        nameDiv.textContent = metric.name;
        
        const diffDiv = document.createElement('div');
        diffDiv.className = diff >= 0 ? 'difference' : 'difference negative';
        diffDiv.textContent = diff >= 0 ? `+${diff}%` : `${diff}%`;
        
        headerDiv.appendChild(nameDiv);
        headerDiv.appendChild(diffDiv);
        
        const barDiv = document.createElement('div');
        barDiv.className = 'nutrition-bar';
        barDiv.style.width = `${width}%`;
        
        metricDiv.appendChild(headerDiv);
        metricDiv.appendChild(barDiv);
        
        nutritionalComparisonDiv.appendChild(metricDiv);
    });
}

function calculatePercentDifference(val1, val2) {
    return Math.round(((val2 - val1) / val1) * 100);
}

function calculateBarWidth(diff) {
    // Normalize the difference to a percentage between 10 and 90
    let width = 50 + (diff / 10);
    
    if (width < 10) width = 10;
    if (width > 90) width = 90;
    
    return width;
}

function calculateDifferences(product1, product2) {
    const nutritionalComparisonDiv = document.getElementById('nutritional-comparison');
    if (!nutritionalComparisonDiv) return;
    
    // Calculate category-specific differences
    let categorySpecificComparison = '';
    
    if (product1.category !== product2.category) {
        categorySpecificComparison = `
            <div style="margin-top: 30px;">
                <h3>Cross-Category Comparison: ${product1.category} vs ${product2.category}</h3>
                <p>This comparison spans different food categories, which may have inherently different nutritional profiles.</p>
            </div>
        `;
        
        // Add the category-specific comparison to the nutritional comparison div
        nutritionalComparisonDiv.insertAdjacentHTML('beforeend', categorySpecificComparison);
    }
}