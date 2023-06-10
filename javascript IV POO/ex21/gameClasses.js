class Character {
    constructor(name, helth, attack, defence) {
        this.name = name;
        this.helth = helth;
        this.attack = attack;
        this.defence = defence;
    }

    attackCharacter(character) {
        character.helth -= (this.attack - character.defence) < 0 ? 0 : (this.attack - character.defence);
    }
}

class Thief extends Character {
    attackCharacter(character) {
        character.helth -= character.helth -= (this.attack - character.defence)*2 < 0 ? 0 : (this.attack - character.defence)*2;;
    }
}

class Mage extends Character {
    constructor(name, helth, attack, defence, magic) {
        super(name, helth, attack, defence);
        this.magic = magic;
    }
    
    attackCharacter(character) {
        character.helth -= ((this.attack + this.magic) - character.defence) < 0 ? 0 : ((this.attack + this.magic) - character.defence);;
    }

    healCharacter(character) {
        character.health += this.magic * 2;
    }
}

class Warrior extends Character {
    constructor(name, helth, attack, defence, shield) {
        super(name, helth, attack, defence);
        this.shield = shield;
        this.position = "attack";
    }

    attackCharacter(character) {
        if (this.position === "attack") {
            super.attackCharacter(character);
        } else {
            console.log("You're not in attack position!");
        }
    }

    changePosition() {
        if (this.position === "attack") {
            this.position = "defence";
            this.defence += this.shield;
        } else {
            this.position = "attack";
            this.defence -= this.shield;
        }
        console.log("Postion: " + this.position);
    }
}


