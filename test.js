QUnit.test("Here's a starting test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});
QUnit.test('Testing my get book type prices with inputs',function (assert) {
    assert.strictEqual(max(75), -Infinity, 'No parameters');
    assert.strictEqual(max(10,15, 20), 'All positive numbers');
   
});
QUnit.test('Testing my get filling price with inputs',function(assert){
    assert.ok(isOdd(15), '15 is odd');
    assert.ok(!isOdd(10), '10 is not odd');
    assert.ok(!isOdd(0), '0 is not odd');
});
