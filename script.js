// this program has just one simple job to create a password for you for the desired length using numbers letters chars and symbols min length should always be multiple of 4



function generatePassword(){
    
    //console.log(password)
    const newPass = thisPassword()
    const details = generateOtherDetails()
    const newData = {
        "user_name": details[0],
        "password": newPass,
        "user_email": details[1]
    }

    console.log(newData)
    if (newPass && details){
    document.getElementById("result1").innerHTML = "username : " + details[0]
    document.getElementById("result2").innerHTML = "password : " + newPass
    document.getElementById("result3").innerHTML = "email : " + details[1]
    }
}


function thisPassword(){

    
    
    let small_chars = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
    let big_chars = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
    let numbers = ["1","2","3","4","5","6","7","8","9","0"]
    let symbols = ["!","@","#","$","%","^","&","*","-","_"]
    const passlen = document.getElementById("length").value
    if (passlen<5)
    {
        alert("The password length should be greater than or equal to 5")
    }
    else{
    let sample1 = _.sample(small_chars, passlen)
    let sample2 = _.sample(big_chars, passlen)
    let sample3 = _.sample(numbers, passlen)
    let sample4 = _.sample(symbols, passlen)
    let sample5 = sample1 + [","] + sample2 + [","] + sample3 + [","] + sample4
    //console.log(typeof(sample5))
    const password  = _.sample(sample5.split(","), passlen).join("")
    console.log(password)
    return password
}


}

function generateOtherDetails() {
    let fnames = ["Aman", "Archita", "Shubham", "Niharika", "Rachel", "Vineet", "Central", "Niladri", "Souryadeep"]
    let lnames = ["Dubey", "Sharma", "Singhania", "Singh", "Cee", "McAdams", "Papi"]
    let firstName = _.sample(fnames).toLowerCase()
    let lastName = _.sample(lnames).toLowerCase()
    let idnetifier = _.toArray(_.sample(["1","2","3","4","5","6","7","8","9","0"],3)).join("")
    console.log(idnetifier)
    const newName = firstName + lastName + idnetifier
    const newEmail = firstName + "_" + lastName + "@email.com"

    return [newName, newEmail]

 
}


function resetData() {
    document.getElementById("result1").innerHTML = ""
    document.getElementById("result2").innerHTML = ""
    document.getElementById("result3").innerHTML = ""
    document.getElementById("length").value = ""
}
    





