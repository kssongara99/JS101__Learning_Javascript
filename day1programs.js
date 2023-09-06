js variable is const,var,let

variable name -> * letter,digit,underscres,$ sign allowed.
                 * must begin with  $,_ or a letter.
                 *js reverved word cannot be used as a variable naame.
                 *case sensitive.

var-> * var is globlem scoped while let & const are block scopred.
      * var can be updated & re-declared within is scope.
   
let-> * let can be updated but not re-declared.

const-> * const can neither be updated nor be re-declared. 

problem->

1.  let a = "masai school"
    console.log(a)
    let b = "A Transformation in Education"
    console.log(b)


2. let name = "Kuldeep Singh"
   console.log(name)
   let father = "Ram Singh"
   console.log(father)
   let mother = "Jay kunwar"
   console.log(mother)

3. let a = "Name - Kuldeep"
   let b =  "Age - 23"
   console.log(a)
   console.log(b)

4. let name ="     kuldeep"
   let school = "     GOVT HSS"
   let grade = "     A"
   let section ="     B"
   let rollno =  "     12345"

   console.log("||--------------||")
   console.log(name)
   console.log(school)
   console.log( grade )
   console.log(section)
   console.log(rollno)
   console.log("||--------------||")

  let a = "H   H EEEEE L     L      OOO       W   W  OOO  RRRR  L     DDDD  !!"
  let b = "H   H E     L     L     O   O      W W W O   O R   R L     D   D !!" 
  let c = "HHHHH EEEEE L     L     O   O      W W W O   O RRRR  L     D   D !!"
  let d = "H   H E     L     L     O   O  ,,   W W  O   O R   R L     D   D   "
  let e = "H   H EEEEE LLLLL LLLLL  OOO  ,,    W W   OOO  R   R LLLLL DDDD  !!"

  console.log("||***************************************************************||")
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
  console.log(e)
  console.log("||***************************************************************||")