import { MongoClient } from 'mongodb';
const connectionUri = `mongodb+srv://EcoBeats:mongodb@ecobeatscluster.tpjzg.mongodb.net/test`;
const databaseName = 'PlayerInfoCollection';
const collection = 'EcoBeats';
async function testDb() {
    const client = await MongoClient.connect(connectionUri);
    const queryableCollection = client.db(databaseName).collection(collection);
    console.log(await queryableCollection.find().toArray())
}
testDb();