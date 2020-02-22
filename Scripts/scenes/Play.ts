module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        
        // PUBLIC PROPERTIES
        rollBotton:objects.Button;

        diceResult1: objects.Label;
        diceResult2: objects.Label;

        roll1: number;
        roll2: number;

        dice1: objects.Button;
        dice2: objects.Button;

        result = ["",""];
        // CONSTRUCTOR
        constructor()
        {
            super();
            this.rollBotton = new objects.Button();
            this.diceResult1 = new objects.Label();
            this.diceResult2 = new objects.Label();
            this.dice1 = new objects.Button();
            this.dice2 = new objects.Button();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        
        public Roll():void {
            var roll = [];
            for (var i = 0; i < 2; i++){
                //Generate random number between 1-6
                roll[i] = util.Mathf.RandomRange(1,6);
                console.log(roll[i]);
                this.result[i] = roll[i].toString();
            }
            this.DisplayResult();
        }

        
        public DisplayResult():void{
            this.removeChild(this.dice1);
            this.removeChild(this.dice2);
            this.removeChild(this.diceResult1);
            this.removeChild(this.diceResult2);

            this.dice1 = new objects.Button(config.Game.ASSETS.getResult(this.result[0]),170, 200, true);
            this.dice2 = new objects.Button(config.Game.ASSETS.getResult(this.result[1]),500, 200, true);
            this.diceResult1 = new objects.Label(this.result[0],"20px", "Consolas", "#FF0000", 170, 330, true);
            this.diceResult2 = new objects.Label(this.result[1],"20px", "Consolas", "#FF0000", 500, 330, true);

            this.addChild(this.dice1);
            this.addChild(this.dice2);
            this.addChild(this.diceResult1);
            this.addChild(this.diceResult2);
        }
        //initialize and instatiate
        public Start(): void 
        {
            this.rollBotton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);

            
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {
            this.addChild(this.rollBotton);
            this.rollBotton.on("click", ()=>{this.Roll()});

        }

        
    }
}