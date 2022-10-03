function greet(Nama){
    return 'Haloo!!' + ' ' + Nama;
}

function greet_name(greeting,message,Nama){
    console.log(`${greeting(Nama)} ${message}`);
}
 
greet_name(greet,'Selamat Datang','Irwan');