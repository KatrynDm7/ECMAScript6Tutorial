import Superhero from './Superhero';

class IronMan extends Superhero {
   saveTheWorld() {
       super.saveTheWorld();
       console.log(`${this.name} saves the World too`);
   }

   fly() {
       console.log(`${this.name} can fly`);
   }
}

export default IronMan;
