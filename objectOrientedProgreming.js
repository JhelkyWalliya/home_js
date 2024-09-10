class Student {
    constructor (name,subjects,lulus,score){
        this.name = name;
        this.subjects = subjects; 
        this.lulus = lulus;
        this.score = score;
    } 

    sebutkanNama(){
        console.log(this.name);
    }
    sebutkanSubjects(){
        console.log(this.subjects);
    }
    berhasillulus(){
        console.log(this.lulus);
    }
    sebutkanscore(){
        console.log(this.score);
    }
    
}

//Proses instantion
let andi = new Student("Andi",["Math","English", "lulus"], 90);

//consolog.log(andi);

andi.sebutkanNama();
andi.sebutkanSubjects();
andi.berhasillulus();
andi.sebutkanscore();
