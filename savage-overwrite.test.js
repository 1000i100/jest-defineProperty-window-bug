// correct behaviour in chrome and firefox, not tested anywere else exept with jest (and fail with jest)

function unOverwritableGlobalConst(name,value){
	Object.defineProperty(window, name, {'value':value});
}
test('unOverwritableGlobalConst', () => {
	unOverwritableGlobalConst('dummy',{'do':'me'});
	try {
		window.dummy = 'osef'; // should not overwrite window.dummy
	} catch(obj){}
	expect(dummy).toEqual({'do':'me'});
	dummy['do'] = 'you';
	expect(dummy).toEqual({'do':'you'});
});

test('unOverwritableGlobalConst in strict mode', () => {
	'use strict';
	unOverwritableGlobalConst('dummy',{'do':'me'});
	try {
		window.dummy = 'osef'; // should throw exception and not overwrite window.dummy
	} catch(obj){}
	expect(dummy).toEqual({'do':'me'});
	dummy['do'] = 'you';
	expect(dummy).toEqual({'do':'you'});
});
