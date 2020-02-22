module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        
        // PUBLIC PROPERTIES
        rollBotton:objects.Button;

        img1: string = '1';
        img2: string = '2';
        img3: string = '3';
        img4: string = '4';
        img5: string = '5';
        img6: string = '6';

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
                switch(roll[i]){
                    case 1:
                        this.result[i] = this.img1;
                        break;
                    case 2:
                        this.result[i] = this.img2;
                        break;
                    case 3:
                        this.result[i] = this.img3;
                        break;
                    case 4:
                        this.result[i] = this.img4;
                        break;
                    case 5:
                        this.result[i] = this.img5;
                        break;
                    default:
                        this.result[i] = this.img6;
                        break;
                }
            }
        }

        
        public DisplayResult():void{
            this.removeChild(this.dice1);
            this.removeChild(this.dice2);
            this.removeChild(this.diceResult1);
            this.removeChild(this.diceResult2);

            this.dice1 = new objects.Button(config.Game.ASSETS.getResult(this.result[0]),150, 200, true);
            this.dice2 = new objects.Button(config.Game.ASSETS.getResult(this.result[1]),150, 200, true);
            this.diceResult1 = new objects.Label(this.result[0],"12", "Consolas", "#000000", 200, 200, true);
            this.diceResult2 = new objects.Label(this.result[1],"12", "Consolas", "#000000", 201, 201, true);

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