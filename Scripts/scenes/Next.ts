module scenes
{
    export class Next extends objects.Scene
    {
        // Public Properties
        rollButton:objects.Button;
        backButton:objects.Button;

        dice1: objects.Button;
        dice2: objects.Button;
        dice3: objects.Button;
        dice4: objects.Button;

        finalResult:objects.Label;

        result =["","","",""];
        roll = [1,1,1,1];

        //constructor
        constructor(){
            super();
            this.rollButton = new objects.Button();
            this.backButton = new objects.Button();
            this.finalResult = new objects.Label();
            this.dice1 = new objects.Button();
            this.dice2 = new objects.Button();
            this.dice3 = new objects.Button();
            this.dice4 = new objects.Button();

            this.Start();
        }

        // Public Methods

        public Roll():void {
            for (var i = 0; i < 4; i++){
                //Generate random number between 1-6
                this.roll[i] = util.Mathf.RandomRange(1,6);
                // console.log(roll[i]);
               this.result[i] = this.roll[i].toString();
            }
        }

        public AnalysResult():void {
           
        }

        public DisplayResult():void{
            this.removeChild(this.dice1);
            this.removeChild(this.dice2);
            this.removeChild(this.dice3);
            this.removeChild(this.dice4);

            this.dice1 = new objects.Button(config.Game.ASSETS.getResult(this.result[0]),170, 200, true);
            this.dice2 = new objects.Button(config.Game.ASSETS.getResult(this.result[1]),500, 200, true);
            this.dice3 = new objects.Button(config.Game.ASSETS.getResult(this.result[2]),170, 405, true);
            this.dice4 = new objects.Button(config.Game.ASSETS.getResult(this.result[3]),500, 405, true);

            this.addChild(this.dice1);
            this.addChild(this.dice2);
            this.addChild(this.dice3);
            this.addChild(this.dice4);
        }
        public Start():void{
            this.dice1 = new objects.Button(config.Game.ASSETS.getResult("blank"),170, 200, true);
            this.dice2 = new objects.Button(config.Game.ASSETS.getResult("blank"),500, 200, true);
            this.dice3 = new objects.Button(config.Game.ASSETS.getResult("blank"),170, 405, true);
            this.dice4 = new objects.Button(config.Game.ASSETS.getResult("blank"),500, 405, true);
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 430, 620, true);
            
            this.Main();
        }

        public Update():void{

        }

        public Main():void{
            this.addChild(this.dice1);
            this.addChild(this.dice2);
            this.addChild(this.dice3);
            this.addChild(this.dice4);
            this.rollButton.on("click", ()=>{this.Roll()});
        }
    }
}