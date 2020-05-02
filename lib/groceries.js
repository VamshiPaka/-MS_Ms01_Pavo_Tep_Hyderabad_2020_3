/**
 *
 * @namespace faker.groceries
 */
var groceries = function (faker) {
  var self = this;
  var fake = faker.fake;


  /**
   * household_products
   *
   * @method faker.groceries.household_products
   */
  self.household_products = function () {
    return faker.random.arrayElement(faker.definitions.groceries.household_products);
  };

  self.household_products.schema = {
    "description": "Generates a household_products name.",
    "sampleResults": [
      "Detergents",
      "Utensils",
      "Floor Cleaners",
      "Freshners",
      "laundry",
      "Pooja Needs",
      "Basic Electricals"
    ]
  };


  /**
   * personal_care_products
   *
   * @method faker.groceries.personal_care_products
   */
  self.personal_care_products = function () {
    return faker.random.arrayElement(faker.definitions.groceries.personal_care_products);
  };

  self.personal_care_products.schema = {
    "description": "Generates a groceries personal_care_products name.",
    "sampleResults": [
      "Soap",
      "Bodywash",
      "Facewash",
      "Deo",
      "Talc",
      "Shampoo",
      "Conditioner",
      "Toothpaste",
      "Bodylotion"
    ]
  };

  /**
   * snacks_beverages
   *
   * @method faker.groceries.snacks_beverages
   */
  self.snacks_beverages = function () {
    return faker.random.arrayElement(faker.definitions.groceries.snacks_beverages);
  };

  self.snacks_beverages.schema = {
    "description": "Generates a groceries snacks_beverages name.",
    "sampleResults": [
      "Chips",
      "Biscuits",
      "Tea Powder",
      "Coffee Powder",
      "Bread",
      "Butter",
      "Choclates",
      "Health drinks",
      "Wafer",
      "candy",
    ]
  };

  /**
   * staples
   *
   * @method faker.groceries.staples
   */
  self.staples = function () {
    return faker.random.arrayElement(faker.definitions.groceries.staples);
  };

  self.staples.schema = {
    "description": "Generates a staples name.",
    "sampleResults": [
      "Pulses",
      "Ghee",
      "oil",
      "Flour",
      "Atta",
      "Spices",
      "Masala",
      "Rice",
      "Dal",
      "Dry Fruits",
      "Nuts",
      "Seeds",
      "Sugar",
      "Salt",
      "Jaggery",
      "Tamarind"
    ]
  };

};

module["exports"] = groceries;
