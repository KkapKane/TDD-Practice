const caesarCipher = require('./caesarCipher')

test('no uppercase', ()=>{
    expect(caesarCipher('efgfoe uif fbtu xbmm pg uif dbtumf')).toBe('defend the east wall of the castle');
});

test('with UpperCase', ()=>{
    expect(caesarCipher('Efgfoe Uif Fbtu Xbmm Pg Uif Dbtumf')).toBe('Defend The East Wall Of The Castle');
});