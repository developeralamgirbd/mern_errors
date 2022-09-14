const MongoClient = require('mongodb').MongoClient;

const URL = "mongodb+srv://alamgir:atlas123@cluster0.pb7kuyb.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(URL, (error, myMongoClient)=>{
    if (error){
        console.log('Connection Fail')
    }else {
        console.log('Connection Success');
        InsertData(myMongoClient)
    }
});

/**
 * Insert Data in MongoDB
 */
function InsertData(myMongoClient){
    const schoolDB = myMongoClient.db('school');
	
	/**
     * error
     * school DB te students name collection create kora ace, students a collectione data insert hochche, but students er jaigai jodi bul nam dei tahole se name ekti notun collection create hocche abong tar bitorei data insert hochche, insertOne er error a error dekacche na
     */
	
    // Sothik collection name
    const studentsCollection = schoolDB.collection('students');
    // Bul collection name
    // const studentsCollection = schoolDB.collection('studentsnew');

    

    const studentData = {
        name: "Alamgir",
        role: "938824",
        class: "Ten",
        city: "Mymensingh"
    };

    studentsCollection.insertOne(studentData, (error)=>{
        if (error){
            console.log('Data insert fail')
        }else {
            console.log('Data insert success')
        }
    });
}