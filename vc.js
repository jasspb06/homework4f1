class Vector {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z=z;
    }
    plus(vector) {
      return new Vector(this.x + vector.x, this.y + vector.y, this.z+vector.z);
    }
    minus(vector) {
      return new Vector(this.x - vector.x, this.y - vector.y, this.z-vector.z);
    }
  }
  Object.defineProperty(Vector.prototype, 'length', {
    get: function () {
      return Math.sqrt(Math.pow(this.z, 2)+Math.pow(this.y, 2) + Math.pow(this.x, 2));
    }
  })
  let v1=new Vector(4,4,0);
  let v2= new Vector(1,2,2);
  console.log(v1.plus(v2));
  console.log(v2.plus(v1));
  console.log(v1.minus(v2));
  console.log(v2.minus(v1));
