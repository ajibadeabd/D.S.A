
    // let s = 2;
    // s = 'ede';
    // console.log(s)
    // interface calcy {
    //   mul(n: number): any;
    // }
    // class displasy implements calcy {
    //   x = 0;
    //   mul(n: number): any {
    //     this.x = n * n;
    //   }
    //   mul(n: string): any {
    //   this.x = n + n;
    //   }
    // }
    // const arr = new displasy();
    // arr.x = 3;

    // let s = 2;
    // s = 'ede';
    // console.log(s)
    class tur<T> {
        private data = [];
        push = (item: T) => this.data.push(item);
        pop = (): T => this.data.shift();
      }
      // const turr = new tur<number>();
      // turr.push(0);
      // turr.push('1');
      // console.log(turr);
  
      // function test(turing: string): string {
      //   console.log('turing');
      //   // return '';
      // }
  
      // class Turing {
      //   x: number;
      //   y: number;
      // }
  
      // interface ppp extends Turing {
      //   z: number;
      // }
      // const s: ppp = {
      //   x: 3,
      //   y: 3,
      //   z: 3,
      // };
      // console.log(s);
  
      // class Turing {
      //   readonly myReadOnly = 1;
      //   turingMeth() {
      //     console.log(this.myReadOnly);
      //   }
      // }
      // new Turing().myReadOnly = 5;
  
      let a: any;
      const b = 0;
      function ss(x: any, name: any) {
        if (x == null) {
          console.log(name + '==null');
        }
        if (x === null) {
          console.log(name + '===null');
        }
        // console.log(typeof x === undefined);
        // console.log(typeof x === 'undefined');
        // console.log(typeof x == 'undefined');
        if (typeof x === 'undefined') {
          console.log(name + ' is undefined');
        }
      }
      ss(a, 'a');
      ss(b, 'b');
  
      const sss = new Promise((res, rej) => {
        rej(Error('test'));
      });
      sss.catch((eror) => console.log(eror.message));
      sss.catch((eror) => console.log(eror.message));
  
      enum wek {
        friday = 1,
        satur = getDate('TGIF'),
        sunday = satur * 40,
      }
      function getDate(date: string) {
        if (date === 'TGIF') {
          return 3;
        }
      }
      console.log(wek.satur);
      console.log(wek.sunday);
      const hel = function (name: string) {
        return { say: 'welcome' + name };
      };
      console.log(hel('turng'));
  