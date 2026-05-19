// ========== FULL MENU: FOOD + DRINKS + BAR ==========
const sections = {
  food: {
    title: 'FOOD MENU',
    html: `
      <!-- STARTERS / SNACKS -->
      <div class="category"><div class="category-title">STARTERS / SNACKS</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Clear Vegetable Soup</div><div class="item-desc">Served with garlic bread or vegetable rice</div></div><div class="item-price">15K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Chicken Clear Soup</div><div class="item-desc">Served with garlic bread or vegetable rice</div></div><div class="item-price">18K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Snack Slate</div><div class="item-desc">Trio of spring rolls or beef samosa, coleslaw & sweet chili sauce</div></div><div class="item-price">10K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Chocolate Cake</div><div class="item-desc">Slice of chocolate cake with vanilla ice cream and syrup</div></div><div class="item-price">20K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Chicken Tenders</div><div class="item-desc">Buttermilk chicken tender, honey mustard dip & crispy fries</div></div><div class="item-price">25K</div></div>
      </div>
      <!-- MAIN COURSE -->
      <div class="category"><div class="category-title">MAIN COURSE</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">BBQ Chicken Wings</div><div class="item-desc">Crunchy wings sautéed in house BBQ sauce, coleslaw & chips</div></div><div class="item-price">30K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Roasted Chicken Thighs</div><div class="item-desc">Slow-roasted, creamed spinach & side of your choice</div></div><div class="item-price">35K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Half Roasted Chicken</div><div class="item-desc">Lemon & garlic marinade, side of your choice</div></div><div class="item-price">35K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Charcoal Roasted Skewers</div><div class="item-desc">Pork, goat, or chicken  coleslaw & chips</div></div><div class="item-price">35K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Boiled Chicken</div><div class="item-desc">Quarter chicken in local spices, side of your choice</div></div><div class="item-price">36K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Boiled Goat</div><div class="item-desc">Tender goat with rosemary, potato & carrots, side of your choice</div></div><div class="item-price">36K</div></div>
      </div>
      <!-- BUFFALOES SPECIALS -->
      <div class="category"><div class="category-title">BUFFALOES SPECIALS</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Buffaloes Whole Tilapia Fish</div><div class="item-desc">Deep-fried in lemon soy & cumin marinade, house salad & plantain</div></div><div class="item-price">45K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Buffaloes Spicy Pork Ribs</div><div class="item-desc">Roasted spare ribs, mild or spicy salt & pepper, coleslaw & wedges</div></div><div class="item-price">38K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Buffaloes BBQ Roasted Goat Ribs</div><div class="item-desc">Oven-roasted with rosemary & garlic herbs, BBQ sauce, side of your choice</div></div><div class="item-price">38K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Kikalayi</div><div class="item-desc">Pork, goat, or chicken sautéed with vegetables, potatoes & cabbage in gravy</div></div><div class="item-price">35K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">The Curries</div><div class="item-desc">Indian-spiced curry sauce with one side  chicken, beef, or vegetable</div></div><div class="item-price">35K</div></div>
      </div>
      <!-- BURGER / SLIDERS -->
      <div class="category"><div class="category-title">BURGER / SLIDERS</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Chicken Sliders</div><div class="item-desc">Grilled chicken fillet, baked slider rolls, lettuce, pickled onions, tomatoes  fries & coleslaw</div></div><div class="item-price">30K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Beef Sliders</div><div class="item-desc">Mini grilled beef patties, baked slider rolls, lettuce, pickled onions, tomatoes  fries & coleslaw</div></div><div class="item-price">30K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Beef Burger</div><div class="item-desc">Grilled beef patty, pickled onions, lettuce, Thousand Island  chips & coleslaw</div></div><div class="item-price">30K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Chicken Burger</div><div class="item-desc">Grilled chicken fillet, pickled onions, lettuce, Thousand Island  fries & coleslaw</div></div><div class="item-price">30K</div></div>
        <div class="menu-item"><div class="item-info"><div class="addon-badge">Add-Ons: Bacon 8K · Cheese 5K</div><div class="note">Sides: Plain or Vegetable rice, Fries, Potato Wedges, Boiled Potatoes, Mashed Potatoes, Salads, Plantain</div></div></div>
      </div>
      <!-- PIZZA -->
      <div class="category"><div class="category-title">PIZZA</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Beef Steak Pizza</div><div class="item-desc">Sauce, cheese, steak fillet & vegetables</div></div><div class="item-price">35K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Chicken Pizza</div><div class="item-desc">Sauce, cheese, chicken fillet & vegetables</div></div><div class="item-price">35K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Mexicana Pizza</div><div class="item-desc">Sauce, cheese, vegetables, onions & bell peppers</div></div><div class="item-price">30K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Hawaiian Pizza</div><div class="item-desc">Sauce, cheese, pineapple slices, beef & vegetables</div></div><div class="item-price">35K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Mixed Protein Pizza</div><div class="item-desc">Sauce, cheese, beef fillet, chicken fillet & vegetables</div></div><div class="item-price">38K</div></div>
        <div class="menu-item"><div class="item-info"><div class="note">Extras (5K): Mozzarella Cheese · Chicken · Beef · Veggies · Pineapple</div></div></div>
      </div>
    `
  },
  drinks: {
    title: 'DRINKS MENU',
    html: `
      <div class="category"><div class="category-title">COFFEES</div>
        ${[['Espresso','8K'],['Single Cappuccino','8K'],['Double Cappuccino','10K'],['Americano','8K'],['Mocha Latte','10K'],['African Coffee','10K'],['Black Coffee','8K'],['Hot Chocolate','10K']].map(([n,p])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="item-price">${p}</div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">TEAS</div>
        ${[['Black Tea','8K'],['African Tea','10K'],['Dawa Tea','12K'],['Herbal Tea','10K']].map(([n,p])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="item-price">${p}</div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">ICED BEVERAGES</div>
        ${[['Iced Coffee Black','8K'],['Iced Coffee White','10K'],['Iced Tea','8K'],['Milkshakes','18K'],['Smoothie','18K']].map(([n,p])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="item-price">${p}</div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">SOFT DRINKS</div>
        ${[['Sodas','3K'],['Water','3K'],['Red Bull','12K']].map(([n,p])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="item-price">${p}</div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">HEALTHY JUICE</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Weight Loss</div><div class="item-desc">Spinach, Carrots, Beetroot, Watermelon</div></div><div class="item-price">20K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Heart Beat</div><div class="item-desc">Watermelon, Cucumber, Mint, Lime Juice</div></div><div class="item-price">20K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Booster</div><div class="item-desc">Carrots, Orange, Cucumber, Mint</div></div><div class="item-price">20K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Gut Health</div><div class="item-desc">Cucumber, Pineapple, Spinach, Nuts</div></div><div class="item-price">20K</div></div>
      </div>
      <div class="category"><div class="category-title">FRESH JUICE</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Mango · Pineapple · Passion · Melon</div></div><div class="item-price">10K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Orange Juice</div></div><div class="item-price">12K</div></div>
      </div>
      <div class="category"><div class="category-title">MOCKTAILS</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Berry Bliss</div><div class="item-desc">Grapes, Strawberry, Blueberry, Cranberry</div></div><div class="item-price">20K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Virgin Mojito</div><div class="item-desc">Lime, Mint Leaves, Sour Mix, Club Soda</div></div><div class="item-price">20K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Gimlet</div><div class="item-desc">Pineapple, Fresh Mint, Mint Syrup</div></div><div class="item-price">20K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Buffaloes Punch</div><div class="item-desc">Strawberry, Mangoes, Pineapple, Melon, Peach Puree</div></div><div class="item-price">20K</div></div>
      </div>
    `
  },
  bar: {
    title: 'BAR MENU',
    html: `
      <div class="category"><div class="category-title">RUM <span style="font-size:14px; opacity:0.7;">Single · Bottle</span></div>
        ${[['Captain Morgan Spiced','7K','150K'],['Malibu','7K','150K'],['Bacardi','7K','160K'],['Havana White','6K','130K']].map(([n,s,b])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="price-double"><div class="price-row"><span>${s}</span><span>${b}</span></div></div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">VODKA <span style="font-size:14px; opacity:0.7;">Single · Bottle</span></div>
        ${[['Absolute Vodka','8K','190K'],['Circo Original','10K','400K'],['Circo Pineapple','','350K'],['Stolichnaya','10K','220K'],['Grey Goose','','350K'],['Smirnoff Vodka','5K','100K'],['Sky Infused Passion','5K','100K']].map(([n,s,b])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="price-double"><div class="price-row"><span>${s}</span><span>${b}</span></div></div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">GIN <span style="font-size:14px; opacity:0.7;">Single · Bottle</span></div>
        ${[['Beefeater Pink','7K','150K'],['Beefeater Original','7K','150K'],["Gordon's Pink",'7K','150K'],['Bombay Sapphire','10K','220K'],['Tanqueray Sevilla','9K','220K'],['Tanqueray Gin','9K','220K'],['Tanqueray Ten','','350K'],['Uganda Waragi','5K','90K'],['Gilbeys','5K','100K'],['Malfys Gin','9K','250K']].map(([n,s,b])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="price-double"><div class="price-row"><span>${s}</span><span>${b}</span></div></div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">TEQUILA <span style="font-size:14px; opacity:0.7;">Single · Bottle</span></div>
        ${[['Olmeca Silver','8K','250K'],['Olmeca Gold','8K','250K'],['Olmeca Chocolate','8K','220K'],['Jose Cuervo','8K','220K'],['Don Julio Anajo','','550K'],['Don Julio Blanco','','550K'],['Azul','','2,200K']].map(([n,s,b])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="price-double"><div class="price-row"><span>${s}</span><span>${b}</span></div></div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">COGNAC <span style="font-size:14px; opacity:0.7;">Single · Bottle</span></div>
        ${[['Courvoisier VS','12K','400K'],['Hennessy VS','15K','520K'],['Hennessy VSOP','','650K'],['Martell VSOP','15K','600K'],['Remy Martin VSOP','','600K']].map(([n,s,b])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="price-double"><div class="price-row"><span>${s}</span><span>${b}</span></div></div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">BLENDED WHISKEY <span style="font-size:14px; opacity:0.7;">Single · Bottle</span></div>
        ${[['Chivas 12yrs','10K','320K'],['Chivas 18yrs','','600K'],['Jameson Irish','8K','220K'],['Jameson Black Barrel','','300K'],['JW Red Label','8K','160K'],['JW Black Label','9K','280K'],['JW Double Black','11K','350K'],['JW Gold Reserve','20K','450K'],['JW 18yrs','','800K'],['JW Blue Label','','1,500K'],['Black & White','6K','120K'],['Jack Daniels No 7','9K','280K'],['Jack Daniels Fire','9K','280K'],['Jim Beam','8K','220K']].map(([n,s,b])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="price-double"><div class="price-row"><span>${s}</span><span>${b}</span></div></div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">SINGLE MALT WHISKY <span style="font-size:14px;">Bottle</span></div>
        ${[['Aberlour 12yrs','500K'],['Glenfiddich 12yrs','440K'],['Glenfiddich 15yrs','650K'],['Glenlivet Founders Reserve','460K'],['Glenlivet 12yrs','550K'],['Glenlivet 15yrs','700K'],['Glenmorangie Original','520K'],['Singleton 12yrs','320K'],['Singleton 15yrs','400K'],['Singleton 18yrs','700K'],['Macallan 12yrs','580K'],['Macallan 15yrs','900K']].map(([n,p])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="item-price">${p}</div></div>`).join('')}
        <div class="note">Bottle prices only</div>
      </div>
      <div class="category"><div class="category-title">LIQUEUR <span style="font-size:14px; opacity:0.7;">Single · Bottle</span></div>
        ${[['Amarula','8K','200K'],['Baileys','8K','220K'],['Cointreau','10K','300K'],['Disaronno Amaretto','10K','320K'],['Apple Sour','8K','180K'],['Jagermeister','10K','300K'],['Kahlua','8K','220K'],['Drambuie','10K','350K'],['Campari','8K','200K'],['Aperol','8K','180K'],['Martini Banco','8K','200K'],['Martini Rosso','8K','200K'],['Zappa','6K','140K']].map(([n,s,b])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="price-double"><div class="price-row"><span>${s}</span><span>${b}</span></div></div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">WINE LIST</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">House Wine Red / White (Glass)</div></div><div class="item-price">15K</div></div>
        <div class="subnote">▸ FRANCE</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">BnG Reserve Sav Blanc</div></div><div class="item-price">150K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Calvet Chardonnay</div></div><div class="item-price">100K</div></div>
        <div class="subnote">▸ ITALIAN</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Zonin Moscato</div></div><div class="item-price">140K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Zonin Pinot Grigio</div></div><div class="item-price">120K</div></div>
        <div class="subnote">▸ SOUTH AFRICA</div>
        ${[['Nederburg Chardonnay','100K'],['KWV Chardonnay','100K'],['Spire Signature Sav Blanc','100K'],['Four Cousins White 1.5L','150K']].map(([n,p])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="item-price">${p}</div></div>`).join('')}
        <div class="subnote">▸ RED WINE (SA)</div>
        ${[['Nederburg Cab Sau','100K'],['Nederburg Pinotage','100K'],['KWV Classic Shiraz','100K'],['Four Cousins Red 1.5L','150K'],['Four Cousins Red 750ML','90K'],['KWV Classic Rosé','100K'],['Nederburg Rosé','100K']].map(([n,p])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="item-price">${p}</div></div>`).join('')}
        <div class="subnote">▸ SPARKLING WINE</div>
        ${[['JP Chanet Rosé','120K'],['JP Chanet Blanc','120K'],['Baron Sparkling Brut','120K'],['Zonin Prosecco','200K'],['Fragolino Red, White & Rosé','120K']].map(([n,p])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="item-price">${p}</div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">CHAMPAGNE (Bottle)</div>
        ${[['Moet & Chandon Imperial Brut','550K'],['Moet & Chandon Imperial Nectar','600K'],['Veuve Cliquot Brut','640K'],['Veuve Cliquot Rich Brut','680K']].map(([n,p])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="item-price">${p}</div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">SHOOTERS</div>
        ${[['B52','10K'],['Jagerbomb','12K'],['Blow Job','10K']].map(([n,p])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="item-price">${p}</div></div>`).join('')}
      </div>
      <div class="category"><div class="category-title">CLASSIC COCKTAILS</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Classic Mojito</div><div class="item-desc">Rum, Lime, Mint, Soda</div></div><div class="item-price">20K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Long Island</div><div class="item-desc">Rum, Gin, Vodka, Tequila, Triple Sec, Lime, Coke</div></div><div class="item-price">30K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Cosmopolitan</div><div class="item-desc">Vodka, Orange Liqueur, Lime, Cranberry</div></div><div class="item-price">25K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Classic Martini</div><div class="item-desc">Gin, Martini Extra Dry, Olive</div></div><div class="item-price">25K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Mai Tai</div><div class="item-desc">Rum, Amaretto, Pineapple, Grenadine</div></div><div class="item-price">25K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Whiskey Sour</div><div class="item-desc">Jim Beam, Bitters, Sour Mix</div></div><div class="item-price">28K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Old Fashioned</div><div class="item-desc">Jim Beam, Bitters, Orange Zest</div></div><div class="item-price">30K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Daiquiri Frozen</div><div class="item-desc">Rum, Strawberry, Lime</div></div><div class="item-price">25K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Espresso Martini</div><div class="item-desc">Vodka, Espresso, Kahlua</div></div><div class="item-price">25K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Negroni</div><div class="item-desc">Gin, Campari, Sweet Vermouth</div></div><div class="item-price">25K</div></div>
      </div>
      <div class="category"><div class="category-title">SIGNATURE COCKTAILS</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Hot Summer</div><div class="item-desc">Captain Morgan, Passion Juice, Sour Mix</div></div><div class="item-price">28K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Safari Sunset</div><div class="item-desc">Absolute Vanilla, Passion Juice</div></div><div class="item-price">25K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Apricot Fix</div><div class="item-desc">Jim Beam, Apricot Jam, Orange Juice</div></div><div class="item-price">25K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Amazonian Dream</div><div class="item-desc">Beefeater Pink, Rosé Wine, Pineapple</div></div><div class="item-price">25K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Tanqueray Gin Punch</div><div class="item-desc">Sevilla, Amaretto, Strawberry Jam</div></div><div class="item-price">28K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Coconut Queen</div><div class="item-desc">Malibu, Drambuie, Guava Juice</div></div><div class="item-price">25K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Jungle Fever</div><div class="item-desc">5 Spirits, Blue Curacao, Red Bull</div></div><div class="item-price">35K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Raspberry Punch</div><div class="item-desc">Beefeater, Raspberry Purée, Tonic</div></div><div class="item-price">25K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Queen of Katwe</div><div class="item-desc">Smirnoff, Orange Liqueur, Basil</div></div><div class="item-price">25K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Buffalo's Mudslide</div><div class="item-desc">Amarula, Drambuie, Chocolate Cream</div></div><div class="item-price">25K</div></div>
      </div>
      <div class="category"><div class="category-title">SIGNATURE PITCHERS (Sharing)</div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Red & White Sangria</div><div class="item-desc">Red/White Wine, Brandy, Fruits</div></div><div class="item-price">100K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Big Batch Margarita</div><div class="item-desc">Tequila, Lime, Melon Juice</div></div><div class="item-price">100K</div></div>
        <div class="menu-item"><div class="item-info"><div class="item-name">Boss Lady</div><div class="item-desc">Brandy, Peach Liqueur, Rosé</div></div><div class="item-price">100K</div></div>
      </div>
      <div class="category"><div class="category-title">COLD BEVERAGES</div>
        ${[['Local Beers','6K'],['Apple Cider','8K'],['Guarana Can','12K'],['Imported Beers','12K']].map(([n,p])=>`<div class="menu-item"><div class="item-info"><div class="item-name">${n}</div></div><div class="item-price">${p}</div></div>`).join('')}
      </div>
    `
  }
};

function showSection(key) {
  const section = sections[key];
  if (!section) return;
  document.getElementById('landing').style.display = 'none';
  document.getElementById('section-view').style.display = 'block';
  document.getElementById('section-title-bar').innerText = section.title;
  document.getElementById('section-content').innerHTML = section.html;
  window.scrollTo(0, 0);
}

function goBack() {
  document.getElementById('section-view').style.display = 'none';
  document.getElementById('landing').style.display = 'flex';
  window.scrollTo(0, 0);
}