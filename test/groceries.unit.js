if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("groceries.js", function () {

  describe("household_products()", function () {
      it("returns a random household_products", function () {
          sinon.stub(faker.groceries, 'household_products').returns('Freshners');
          var household_products = faker.groceries.household_products();

          assert.equal(household_products, 'Freshners');
          faker.groceries.household_products.restore();
      });
  });

  describe("personal_care_products()", function () {
      it("returns random personal_care_products", function () {
          sinon.stub(faker.groceries, 'personal_care_products').returns('Shampoo');
          var personal_care_products = faker.groceries.personal_care_products();

          assert.equal(personal_care_products, 'Shampoo');
          faker.groceries.personal_care_products.restore();
      });
  });

  describe("snacks_beverages()", function () {
    it("returns random groceries snacks_beverages", function () {
      sinon.stub(faker.groceries, 'snacks_beverages').returns('Butter');
          var snacks_beverages = faker.groceries.snacks_beverages();

          assert.equal(snacks_beverages, 'Butter');
          faker.groceries.snacks_beverages.restore();
      });
  });

  describe("staples()", function () {
      it("returns a staples type", function () {
          sinon.stub(faker.groceries, 'staples').returns('Nuts');
          var staples = faker.groceries.staples();

          assert.equal(staples, 'Nuts');
          faker.groceries.staples.restore();
      });
  });

});
