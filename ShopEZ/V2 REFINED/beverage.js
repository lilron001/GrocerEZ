/**
 * ShopEase Beverage Dashboard Component
 * This function creates a complete beverage comparison dashboard that can be
 * injected into any container element on your page.
 * 
 * @param {HTMLElement} container - The container element to inject the dashboard into
 * @param {Object} productData - Data for the main product being displayed
 * @param {Array} alternativesData - Data for alternative products to compare
 */
function createBeverageDashboard(container, productData, alternativesData) {
    // Create the CSS styles
    const styles = document.createElement('style');
    styles.textContent = `
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
      }
      .dashboard-container {
          background-color: #f5f5f5;
      }
      .dashboard-header {
          background-color: #fff;
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ddd;
      }
      .logo {
          font-size: 24px;
          font-weight: bold;
          color: #333;
      }
      .user-info {
          display: flex;
          align-items: center;
          gap: 10px;
      }
      .search-bar {
          padding: 5px 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
      }
      .dashboard-nav {
          background: linear-gradient(to bottom, #444, #333);
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
      }
      .nav-links {
          display: flex;
          gap: 20px;
      }
      .nav-links a {
          color: #ccc;
          text-decoration: none;
          font-weight: bold;
          padding: 5px 10px;
      }
      .nav-links a:hover, .nav-links a.active {
          color: #ff9933;
      }
      .nav-actions {
          display: flex;
          gap: 20px;
      }
      .nav-actions a {
          color: #ff9933;
          text-decoration: none;
          font-weight: bold;
      }
      .banner {
          background-color: #fff;
          margin: 20px;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
      }
      .banner-title {
          font-size: 24px;
          margin-bottom: 10px;
          color: #333;
      }
      .ratings-bar {
          background-color: #f0f0f0;
          padding: 8px 20px;
          border-radius: 5px;
          margin: 10px 0;
          width: 60%;
          text-align: center;
          color: #555;
      }
      .product-section {
          background-color: #fff;
          margin: 20px;
          padding: 20px;
          border-radius: 5px;
      }
      .product-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
      }
      .product-info {
          display: flex;
          gap: 15px;
          align-items: flex-start;
      }
      .product-name {
          color: #0066cc;
          margin-bottom: 5px;
      }
      .product-title {
          font-size: 28px;
          font-weight: bold;
          color: #333;
      }
      .product-actions {
          display: flex;
          gap: 10px;
      }
      .action-button {
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: #333;
      }
      .stats {
          display: flex;
          gap: 20px;
          color: #666;
          margin-bottom: 20px;
      }
      .score-section {
          display: flex;
          gap: 30px;
      }
      .score-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 70px;
      }
      .score-value {
          font-size: 36px;
          font-weight: bold;
          color: #333;
      }
      .score-base {
          color: #999;
          font-size: 14px;
      }
      .score-arrows {
          display: flex;
          flex-direction: column;
          color: #999;
          font-size: 20px;
      }
      .product-image {
          max-width: 250px;
          height: auto;
          margin: 0 20px;
      }
      .metrics {
          flex-grow: 1;
      }
      .metric-item {
          margin-bottom: 15px;
      }
      .metric-title {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          font-weight: bold;
      }
      .metric-negative {
          color: #cc0000;
      }
      .metric-positive {
          color: #00aa00;
      }
      .metric-details {
          color: #666;
          font-size: 14px;
      }
      .product-footer {
          margin-top: 20px;
          color: #666;
      }
      .variants {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 10px 0;
      }
      .variant-button {
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          border-radius: 3px;
          padding: 5px 10px;
          font-size: 14px;
          cursor: pointer;
      }
      .variant-button:hover {
          background-color: #e5e5e5;
      }
      .variant-button.active {
          background-color: #ddd;
      }
      .alternatives-section {
          margin-top: 20px;
      }
      .compare-dropdown {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-bottom: 10px;
          position: relative;
      }
      .compare-results {
          border: 1px solid #ddd;
          border-radius: 5px;
          max-height: 200px;
          overflow-y: auto;
      }
      .compare-item {
          padding: 10px;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
      }
      .compare-header {
          background-color: #0066cc;
          color: white;
          padding: 10px;
          text-align: center;
      }
      .benchmark-section {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
      }
      .benchmark-value {
          font-size: 24px;
          font-weight: bold;
      }
      .benchmark-rank {
          color: #0066cc;
      }
      .user-benchmark-info {
          color: #666;
          font-size: 14px;
          margin: 10px 0;
      }
      .product-description {
          margin-top: 20px;
          display: flex;
          gap: 20px;
      }
      .description-text {
          flex: 2;
          color: #555;
          line-height: 1.5;
      }
      .marketing-warning {
          flex: 1;
          padding: 15px;
          background-color: #f9f9f9;
          border-radius: 5px;
          color: #555;
          line-height: 1.5;
      }
      .warning-links {
          color: #0066cc;
          text-decoration: none;
      }
      .thumbnail-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin: 20px 0;
      }
      .thumbnail-item {
          text-align: center;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 5px;
          background-color: #fff;
      }
      .thumbnail-img {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          object-fit: cover;
      }
      .thumbnail-name {
          margin-top: 5px;
          font-size: 14px;
      }
    `;
    
    // Create dashboard container
    const dashboardContainer = document.createElement('div');
    dashboardContainer.className = 'dashboard-container';
    
    // Build HTML structure
    dashboardContainer.innerHTML = `
      <header class="dashboard-header">
          <div class="logo">ShopEZ 🍎</div>
          <div class="user-info">
              <span>🧑‍🍳 ${productData.user || 'PHL-User'} 🇵🇭</span>
              <select>
                  <option>PH</option>
              </select>
          </div>
          <input type="search" class="search-bar" placeholder="Search...">
      </header>
  
      <nav class="dashboard-nav">
          <div class="nav-links">
              <a href="fruits.html" class="btn">FRUITS</a>
              <a href="chips.html" class="btn">CHIPS</a>
              <a href="vegetables.html" class="btn">VEGETABLES</a>
              <a href="beverage.html" class="btn active">BEVERAGES</a>
              <a href="dairy.html" class="btn">DAIRY</a>
              <a href="snacks.html" class="btn">SNACKS</a>
              <a href="meats.html" class="btn">MEATS</a>
          </div>
          <div class="nav-actions">
              <a href="#">COMPARE</a>
              <a href="#">ABOUT</a>
              <a href="#">SIGN IN</a>
          </div>
      </nav>
      
      <div class="banner">
          <h2 class="banner-title">${productData.bannerTitle || 'The Best Beverages'}</h2>
          <div class="ratings-bar">${productData.ratingsBarText || 'USER RATINGS - HYDRATION & HEALTH'}</div>
      </div>
  
      <div class="product-section">
          <div class="product-header">
              <div class="product-info">
                  <div>
                      <div class="product-name">${productData.brand}</div>
                      <div class="product-title">${productData.name}</div>
                  </div>
              </div>
              <div class="product-actions">
                  <a href="#" class="action-button">
                      <span>🛒</span>
                      <span>ADD TO CART</span>
                  </a>
                  <a href="#" class="action-button">
                      <span>✓</span>
                      <span>COMPARE</span>
                  </a>
              </div>
          </div>
  
          <div class="stats">
              <div>NUTRITIONAL SCORE (${productData.reviewCount || '114,883'})</div>
              <div>MKT (${productData.marketShare || '4.1%'})</div>
              <div>REVIEWS</div>
              <div>${productData.price || '₱65.00/L'}</div>
          </div>
  
          <div class="score-section">
              <div class="score-display">
                  <div class="score-arrows">▲</div>
                  <div class="score-value">${productData.score || '89'}</div>
                  <div class="score-base">10.000</div>
                  <div class="score-arrows">▼</div>
              </div>
  
              <img src="${productData.imageUrl || '/api/placeholder/250/250'}" alt="${productData.name}" class="product-image">
  
              <div class="metrics">
                  ${generateMetrics(productData.metrics)}
              </div>
          </div>
  
          <div class="product-footer">
              <div>${productData.productionInfo || 'Production date: April 5, 2025. Source: Organic coconut farms in Davao.'}</div>
              
              <div class="variants">
                  ${generateVariantButtons(productData.variants)}
              </div>
              
              <div>▶ Why ${productData.brand} outperforms sports drinks</div>
          </div>
  
          <div class="benchmark-section">
              <span> Average RATING: ${productData.averageRating || '183%'}</span>
              <span class="benchmark-rank">(${productData.rank || '2'}<sup>${getSuffix(productData.rank || 2)}</sup> of ${productData.totalProducts || '215'})</span>
              <span>ℹ️</span>
          </div>
          
          <div class="user-benchmark-info">
              Based on ${productData.reviewCount || '114,883'} user hydration and nutritional ratings. Product: ${productData.name} by ${productData.brand}
          </div>
  
          <div class="thumbnail-grid">
              ${generateThumbnails(productData.variants)}
          </div>
  
          <div class="alternatives-section">
              <select class="compare-dropdown">
                  <option>Compare Alternatives</option>
              </select>
              <input type="search" class="compare-dropdown" placeholder="Search...">
              
              <div class="compare-results">
                  <div class="compare-header">** GROUP AVERAGE (${alternativesData.length} HIGHEST-VOTED) **</div>
                  ${generateAlternatives(alternativesData)}
              </div>
          </div>
  
          <div class="product-description">
              <div class="description-text">
                  <p>${productData.description || 'Product description not available.'}</p>
              </div>
              <div class="marketing-warning">
                  <p>${productData.marketingWarning || 'No additional product information available.'}</p>
              </div>
          </div>
      </div>
    `;
    
    // Add styles and dashboard to container
    container.appendChild(styles);
    container.appendChild(dashboardContainer);
    
    // Add event listeners for interactive elements
    addEventListeners(dashboardContainer, productData);
  }
  
  /**
   * Generate HTML for metrics based on provided data
   * @param {Array} metrics - Array of metric objects
   * @returns {string} HTML for metrics
   */
  function generateMetrics(metrics) {
    if (!metrics || !metrics.length) {
      // Default metrics if none provided
      return `
        <div class="metric-item">
            <div class="metric-title">
                <span>Hydration Index</span>
                <span class="metric-positive">+76%</span>
            </div>
            <div class="metric-details">Electrolyte balance +85%, Absorption rate +68%</div>
        </div>
        
        <div class="metric-item">
            <div class="metric-title">
                <span>Nutritional Profile</span>
                <span class="metric-positive">+51%</span>
            </div>
            <div class="metric-details">Potassium +124%, Magnesium +72%, Calcium +43%, Natural sugars -35%</div>
        </div>
        
        <div class="metric-item">
            <div class="metric-title">
                <span>Taste Experience</span>
                <span class="metric-positive">+34%</span>
            </div>
            <div class="metric-details">Natural flavor +47%, Sweetness +22%, Refreshment +43%, Aftertaste -10%</div>
        </div>
        
        <div class="metric-item">
            <div class="metric-title">
                <span>Value & Availability</span>
                <span class="metric-negative">-15%</span>
            </div>
            <div class="metric-details">User Rating +55%, Market Share +36%, Price -42%, Distribution -16%</div>
        </div>
        
        <div class="metric-item">
            <div class="metric-title">
                <span>Health Benefits</span>
                <span class="metric-positive">+63%</span>
            </div>
            <div class="metric-details">No Additives +95%, Low Calories +72%, Sports Recovery +78%, Antioxidants +41%</div>
        </div>
      `;
    }
  
    return metrics.map(metric => {
      const cssClass = parseFloat(metric.value) >= 0 ? 'metric-positive' : 'metric-negative';
      const valueWithSign = parseFloat(metric.value) >= 0 ? `+${metric.value}` : metric.value;
      
      return `
        <div class="metric-item">
            <div class="metric-title">
                <span>${metric.name}</span>
                <span class="${cssClass}">${valueWithSign}</span>
            </div>
            <div class="metric-details">${metric.details}</div>
        </div>
      `;
    }).join('');
  }
  
  /**
   * Generate HTML for variant buttons
   * @param {Array} variants - Array of variant names
   * @returns {string} HTML for variant buttons
   */
  function generateVariantButtons(variants) {
    if (!variants || !variants.length) {
      return `
        <button class="variant-button active">Pure Natural</button>
        <button class="variant-button">With Pulp</button>
        <button class="variant-button">No Sugar Added</button>
        <button class="variant-button">King Coconut</button>
        <button class="variant-button">Organic</button>
        <button class="variant-button">Sparkling</button>
        <button class="variant-button">Extra Hydration</button>
        <button class="variant-button">Pineapple Blend</button>
      `;
    }
  
    return variants.map((variant, index) => {
      const isActive = index === 0 ? 'active' : '';
      return `<button class="variant-button ${isActive}">${variant}</button>`;
    }).join('');
  }
  
  /**
   * Generate HTML for thumbnails
   * @param {Array} variants - Array of variant objects or names
   * @returns {string} HTML for thumbnails
   */
  function generateThumbnails(variants) {
    if (!variants || !variants.length) {
      // Default thumbnails
      const defaultVariants = [
        'Pure Natural', 'With Pulp', 'No Sugar Added', 'King Coconut',
        'Organic', 'Sparkling', 'Extra Hydration', 'Pineapple Blend', 'Sport Formula'
      ];
      
      return defaultVariants.map(name => `
        <div class="thumbnail-item">
          <img src="/api/placeholder/80/80" alt="${name}" class="thumbnail-img">
          <div class="thumbnail-name">${name}</div>
        </div>
      `).join('');
    }
  
    return variants.map(variant => {
      const name = typeof variant === 'string' ? variant : variant.name;
      const imageUrl = typeof variant === 'object' && variant.imageUrl ? variant.imageUrl : '/api/placeholder/80/80';
      
      return `
        <div class="thumbnail-item">
          <img src="${imageUrl}" alt="${name}" class="thumbnail-img">
          <div class="thumbnail-name">${name}</div>
        </div>
      `;
    }).join('');
  }
  
  /**
   * Generate HTML for alternative products
   * @param {Array} alternatives - Array of alternative product objects
   * @returns {string} HTML for alternatives
   */
  function generateAlternatives(alternatives) {
    if (!alternatives || !alternatives.length) {
      // Default alternatives
      return `
        <div class="compare-item">
            <span>1. Pure Mineral Spring Water • 195%</span>
            <span>₱32.00/L</span>
        </div>
        <div class="compare-item">
            <span>2. Coco Earth Coconut Water • 183%</span>
            <span>₱65.00/L</span>
        </div>
        <div class="compare-item">
            <span>3. Green Leaf Matcha Tea • 172%</span>
            <span>₱120.00/L</span>
        </div>
        <div class="compare-item">
            <span>4. Pure Antioxidant Kombucha • 167%</span>
            <span>₱180.00/L</span>
        </div>
        <div class="compare-item">
            <span>5. Vital Hydration Electrolyte Water • 159%</span>
            <span>₱75.00/L</span>
        </div>
        <div class="compare-item">
            <span>6. Freshly Squeezed Orange Juice • 151%</span>
            <span>₱110.00/L</span>
        </div>
        <div class="compare-item">
            <span>7. Tropical Fruit Smoothie • 144%</span>
            <span>₱135.00/L</span>
        </div>
      `;
    }
  
    return alternatives.map((alt, index) => {
      return `
        <div class="compare-item">
            <span>${index + 1}. ${alt.name} • ${alt.rating}</span>
            <span>${alt.price}</span>
        </div>
      `;
    }).join('');
  }
  
  /**
   * Get suffix for rank (1st, 2nd, 3rd, etc.)
   * @param {number} number - The rank number
   * @returns {string} The appropriate suffix
   */
  function getSuffix(number) {
    const num = parseInt(number);
    if (!num) return 'th';
    
    if (num % 100 >= 11 && num % 100 <= 13) {
      return 'th';
    }
    
    switch (num % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
  
  /**
   * Add event listeners to interactive elements
   * @param {HTMLElement} container - The dashboard container
   * @param {Object} productData - Product data
   */
  function addEventListeners(container, productData) {
    // Add click events to variant buttons
    const variantButtons = container.querySelectorAll('.variant-button');
    variantButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        variantButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // You could also update displayed info based on variant selected
        const variantName = this.textContent.trim();
        console.log(`Selected variant: ${variantName}`);
        
        // Update product details based on variant if needed
        // This would require variant-specific data from productData
      });
    });
    
    // Add click events to thumbnail items
    const thumbnailItems = container.querySelectorAll('.thumbnail-item');
    thumbnailItems.forEach((item, index) => {
      item.addEventListener('click', function() {
        const variantName = this.querySelector('.thumbnail-name').textContent;
        console.log(`Selected thumbnail: ${variantName}`);
        
        // Activate corresponding variant button
        if (variantButtons[index]) {
          variantButtons.forEach(btn => btn.classList.remove('active'));
          variantButtons[index].classList.add('active');
        }
      });
    });
    
    // Add event listeners for search and dropdowns
    const searchBars = container.querySelectorAll('.search-bar, .compare-dropdown');
    searchBars.forEach(searchBar => {
      searchBar.addEventListener('input', function() {
        console.log(`Search query: ${this.value}`);
        // Implement search functionality here
      });
    });
    
    // Add event listeners for action buttons
    const actionButtons = container.querySelectorAll('.action-button');
    actionButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const action = this.querySelector('span:last-child').textContent;
        console.log(`Action clicked: ${action}`);
        
        // Implement action functionality here
        // e.g., add to cart, add to compare list, etc.
      });
    });
  }
  
  // Example usage:
  // const container = document.getElementById('dashboard-container');
  // 
  // const productData = {
  //   brand: 'Coco Earth',
  //   name: 'Pure Coconut Water',
  //   score: '89',
  //   imageUrl: '/images/coconut-water.jpg',
  //   price: '₱65.00/L',
  //   marketShare: '4.1%',
  //   reviewCount: '114,883',
  //   rank: '2',
  //   totalProducts: '215',
  //   averageRating: '183%',
  //   productionInfo: 'Production date: April 5, 2025. Source: Organic coconut farms in Davao.',
  //   description: 'Coco Earth Pure Coconut Water is harvested from young green coconuts grown in the pristine farms of Davao...',
  //   marketingWarning: 'When evaluating beverages, be aware that many commercial drinks contain hidden sugars...',
  //   metrics: [
  //     { name: 'Hydration Index', value: '76%', details: 'Electrolyte balance +85%, Absorption rate +68%' },
  //     { name: 'Nutritional Profile', value: '51%', details: 'Potassium +124%, Magnesium +72%, Calcium +43%, Natural sugars -35%' },
  //     { name: 'Taste Experience', value: '34%', details: 'Natural flavor +47%, Sweetness +22%, Refreshment +43%, Aftertaste -10%' },
  //     { name: 'Value & Availability', value: '-15%', details: 'User Rating +55%, Market Share +36%, Price -42%, Distribution -16%' },
  //     { name: 'Health Benefits', value: '63%', details: 'No Additives +95%, Low Calories +72%, Sports Recovery +78%, Antioxidants +41%' }
  //   ],
  //   variants: [
  //     'Pure Natural', 'With Pulp', 'No Sugar Added', 'King Coconut',
  //     'Organic', 'Sparkling', 'Extra Hydration', 'Pineapple Blend'
  //   ]
  // };
  // 
  // const alternativesData = [
  //   { name: 'Pure Mineral Spring Water', rating: '195%', price: '₱32.00/L' },
  //   { name: 'Coco Earth Coconut Water', rating: '183%', price: '₱65.00/L' },
  //   { name: 'Green Leaf Matcha Tea', rating: '172%', price: '₱120.00/L' },
  //   { name: 'Pure Antioxidant Kombucha', rating: '167%', price: '₱180.00/L' },
  //   { name: 'Vital Hydration Electrolyte Water', rating: '159%', price: '₱75.00/L' },
  //   { name: 'Freshly Squeezed Orange Juice', rating: '151%', price: '₱110.00/L' },
  //   { name: 'Tropical Fruit Smoothie', rating: '144%', price: '₱135.00/L' }
  // ];
  // 
  // createBeverageDashboard(container, productData, alternativesData);