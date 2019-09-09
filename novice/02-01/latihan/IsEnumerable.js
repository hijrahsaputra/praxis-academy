/**
 * obj.propertyIsEnumerable(prop)
 */

var a = ['is enumerable'];

a.propertyIsEnumerable(0); // returns true
a.propertyIsEnumerable('length'); // returns false

Math.propertyIsEnumerable('random'); // returns false
this.propertyIsEnumerable('Math'); // returns false