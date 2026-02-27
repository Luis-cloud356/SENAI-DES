class Animal{
    int id=0;
    String nome='';
    String especie='';
    String raca='';
    double peso=0.0; //Double serve para colocar vírgula
    //Métodos
    Animal(this.id, this.nome, this.especie, this.raca, this.peso);
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){
    //Instância
    Animal boi = new Animal(1, "Bandido", "Bovino", "Nelori",499.9);
    Animal vaca = new Animal(2, "Mimosa", "Bovino", "Angus",499.9);
    Animal gato = new Animal(3, "Tico", "Felino", "Angora",1.9);
    Animal gata = new Animal(4, "Mimi", "Felino", "Vira  Latas",1.9);
    Animal cachorro = new Animal(5, "Toto", "Canino", "Caramelo",10.9);
    Animal cadela = new Animal(6, "Mel", "Canino", "Pitbull",10.9);
    Animal cavalo = new Animal(7, "Chocolate", "Equino", "Manga larga",50.9);
    Animal egua = new Animal(8, "Estrela", "Equino", "Manga larga",50.9);
    print(boi.tudoJunto());

}