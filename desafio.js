class Usuario {
    constructor (name, lastName, books, pets) {
        this.name = name
        this.lastName = lastName
        this.books = books
        this.pets = pets
    }

    getFullName(){
        return `${this.name} ${this.lastName}`
    }
    
    addMascota(mascota){
        this.pets = []
        this.pets.push(mascota)
        return this.pets
    }

    countMascotas(){

        for (let i = 0; i < this.pets.length; i++) {
            const element = this.pets[i];

        }

        return this.pets.length
        
    }

     addBooks(nombre, autor) {
        this.books = []
        this.books.push(nombre, autor)

        return this.books
        



    }

    getBookNames(){
        
        return this.books[1] 
    }

}

let usuario1 = new Usuario ('Remo','Asiano')
console.log(usuario1.getFullName())
console.log(usuario1.addMascota('simon'))
console.log(usuario1.countMascotas())
console.log(usuario1.addBooks('Suzanne Collins','Los Juegos del Hambre'))
// console.log(usuario1.addBooks('Salchicha','El Loco'))
console.log(usuario1.getBookNames())

// console.log(usuario1.countMascotas())