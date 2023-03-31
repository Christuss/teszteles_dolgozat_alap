 QUnit.module('1. masodfoku egyenlet megoldas', function() {
    QUnit.test('masodfokuEgyenletMegoldasa(1, 4, 4)', function(assert) {
      assert.equal(masodfokuEgyenletMegoldasa(1, 4, 4), {
        X1: -2, 
        X2: -2
      });
    });
    QUnit.test('2. masodfokuEgyenletMegoldasa(0, 0, 0)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(0, 0, 0), {
          X1: NaN,
          X2: "nincs"
        });
      });
    QUnit.test('3. masodfokuEgyenletMegoldasa(1, 3, 6)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, 3, 6), {
          X1: "komplex",
          X2: "komplex"
        });
      });
      QUnit.test('4. masodfokuEgyenletMegoldasa(0, 10, 10)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(0, 10, 10), {
          X1: NaN,
          X2: -Infinity 
        });
      });
      QUnit.test('5. masodfokuEgyenletMegoldasa(11, 21, 0)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(11, 21, 0), {
          X1: 0,
          X2: -1.9090909090909092
        });
      });
      QUnit.test('6. masodfokuEgyenletMegoldasa(1.5, 7, 1)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1.5, 7, 1), {
          X1: -0.14921894064178787,
          X2: -3.350781059358212
        });
      });
      QUnit.test('7. masodfokuEgyenletMegoldasa(13, 1, a)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(11, 21, a), {
          X1: "komplex",
          X2: "komplex"
        });
      });
      QUnit.test('8. masodfokuEgyenletMegoldasa(-1, 2, 3)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(-1, 2, 3), {
          X1: -1,
          X2: 3
        });
      });   
      QUnit.test('9. masodfokuEgyenletMegoldasa(-2.5, 2, 3)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(-2.5, 2, 3), {
          X1: -0.8228756555322954,
          X2: 1.8228756555322954
        });
      });
      QUnit.test('10. masodfokuEgyenletMegoldasa()', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(), {
          X1: -0.8228756555322954,
          X2: 1.8228756555322954
        });
      });
      QUnit.test('11. masodfokuEgyenletMegoldasa(2, 1, 0)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(2, 1, 0), {
          X1: 0,
          X2: -0.5
        });
      });
      QUnit.test('12. masodfokuEgyenletMegoldasa(2, 1, 0)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(2, 1, 0), {
          X1: 0,
          X2: -0.5
        });
      });
      QUnit.test('13. masodfokuEgyenletMegoldasa(1, -2, 3)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, -2, 3), {
          X1: "komlex",
          X2: "komplex"
        });
      });
      QUnit.test('14. masodfokuEgyenletMegoldasa(1, -15, 1)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, -15, 1), {
          X1: 14.933034373659254,
          X2: 0.06696562634074699
        });
      });
      QUnit.test('15. masodfokuEgyenletMegoldasa(1.3, 1.4, 0.5)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1.3, 1.4, 0.5), {
          X1: 0,
          X2: -1
        });
      });
      QUnit.test('16. masodfokuEgyenletMegoldasa(1, 2, -3)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, 2, -3), {
          X1: 1,
          X2: -3
        });
      });
      QUnit.test('17. masodfokuEgyenletMegoldasa(1, 0, 0)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, 0, 0), {
          X1: 0,
          X2: "nincs"
        });
      });
      QUnit.test('18. masodfokuEgyenletMegoldasa(-1, 0, 0)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(-1, 0, 0), {
          X1: 0,
          X2: "nincs"
        });
      });
      QUnit.test('19. masodfokuEgyenletMegoldasa(1, 0, 1)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, 0, 0), {
            X1: "komlex",
            X2: "komplex"
        });
      });
      QUnit.test('20. masodfokuEgyenletMegoldasa(23, 43, m4)', function(assert) {
        assert.equal(masodfokuEgyenletMegoldasa(23, 43, m4), {
            X1: "komlex",
            X2: "komplex"
        });
      });
  });   